import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { auth } from './config/firebase';
import { verify } from 'jsonwebtoken';
import { rateLimit } from './lib/security';

// Rate limiting com Map
const REQUESTS_PER_MINUTE = 10;

// Adicionar verificação de ambiente
const isProduction = process.env.NODE_ENV === 'production';

export async function middleware(request: NextRequest) {
  // Headers de segurança
  const headers = new Headers(request.headers);
  headers.set('X-XSS-Protection', '1; mode=block');
  headers.set('X-Frame-Options', 'DENY');
  headers.set('X-Content-Type-Options', 'nosniff');
  headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  headers.set('Content-Security-Policy', 
    "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline';");

  // Headers específicos para produção
  if (isProduction) {
    headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
    headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
    headers.set('X-DNS-Prefetch-Control', 'on');
  }

  // Adicionar CSRF token para rotas POST
  if (request.method === 'POST') {
    const csrfToken = request.cookies.get('csrf-token');
    if (!csrfToken?.value || csrfToken.value !== request.headers.get('x-csrf-token')) {
      return new NextResponse('Invalid CSRF token', { status: 403 });
    }
  }

  // Verificar origem em produção
  if (isProduction && request.method === 'POST') {
    const origin = request.headers.get('origin');
    if (!origin || origin !== process.env.NEXT_PUBLIC_URL) {
      return new NextResponse('Invalid origin', { status: 403 });
    }
  }

  // Cache control para assets estáticos
  if (request.nextUrl.pathname.match(/\.(js|css|png|jpg|gif|ico)$/)) {
    headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  }

  // Implementar rate limiting mais robusto
  const forwarded = request.headers.get('x-forwarded-for');
  const clientIp = forwarded ? forwarded.split(',')[0] : 'unknown';
  const now = Date.now();
  const windowStart = now - (60 * 60 * 1000); // 1 hora
  
  const requestHistory = rateLimit.firewall.get(clientIp) || [];
interface TimeStamp {
    time: number;
}

const requestsInWindow: number[] = requestHistory.filter((time: number): boolean => time > windowStart);
  
  if (requestsInWindow.length >= rateLimit.tokensPerInterval) {
    return new NextResponse('Too Many Requests', { status: 429 });
  }
  
  requestHistory.push(now);
  rateLimit.firewall.set(clientIp, requestHistory);

  // Verificação de autenticação para rotas protegidas
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    const token = request.cookies.get('auth-token');
    if (!token?.value) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  // Verificação JWT para rotas protegidas
  if (request.nextUrl.pathname.startsWith('/api/protected')) {
    const token = request.headers.get('authorization')?.split(' ')[1];
    if (!token) {
      return new NextResponse('Unauthorized', { status: 401 });
    }
    try {
      verify(token, process.env.JWT_SECRET!);
    } catch {
      return new NextResponse('Invalid token', { status: 403 });
    }
  }

  // Rate limit por rota específica
  if (request.nextUrl.pathname.startsWith('/api/')) {
    const routeLimit = 30; // limite menor para APIs
    if (requestsInWindow.length > routeLimit) {
      return new NextResponse('Too Many Requests', { status: 429 });
    }
  }

  return NextResponse.next({
    request: {
      headers: headers,
    },
  });
}

export const config = {
  matcher: '/:path*',
};

/*
CONFIGURAÇÃO DE SEGURANÇA ADICIONAL NECESSÁRIA:

1. Configurar SSL/TLS:
   - Obter certificado SSL
   - Configurar HTTPS no servidor
   - Forçar redirecionamento HTTPS

2. Configurar Headers de Segurança no servidor:
   - NGINX exemplo:
   ```nginx
   add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
   add_header X-Frame-Options "DENY" always;
   add_header X-Content-Type-Options "nosniff" always;
   ```

3. Configurar WAF (Web Application Firewall):
   - Cloudflare
   - AWS WAF
   - Azure Front Door
*/
