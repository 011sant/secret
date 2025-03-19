import Image from 'next/image';
import Link from 'next/link';
import { ProductCard } from '@/components/ProductCard';
import { FeatureCard } from '@/components/FeatureCard';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="header">
        <div className="container">
          <nav className="navbar">
            <a href="#" className="logo">
              <span className="logo-icon">S</span>
              SPECTER
            </a>
            <div className="nav-links">
              <Link href="#produtos">Produtos</Link>
              <Link href="#recursos">Recursos</Link>
              <Link href="#empresa">Empresa</Link>
              <Link href="#contato">Contato</Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Tecnologia que transforma, integra e evolui seu negócio.</h1>
          <p>Todas as suas ferramentas em um hub central: chatbots inteligentes, analytics robustos e gestão financeira simplificada.</p>
          <div className="hero-buttons">
            <Link href="#solucoes" className="btn">Descubra Nossas Soluções</Link>
            <Link href="#demo" className="btn btn-outline">Solicitar Demo</Link>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="features" id="produtos">
        <div className="container">
          <div className="section-title">
            <h2>Nossos Produtos</h2>
          </div>
          <div className="features-grid">
            <ProductCard 
              title="Analytics" 
              description="Dados transformados em insights estratégicos para impulsionar suas decisões de negócio com precisão." 
              icon={<span className="text-white text-2xl">📊</span>} 
              link="#analytics" 
            />
            <ProductCard 
              title="ChatBots" 
              description="Assistentes virtuais inteligentes que otimizam seu atendimento e convertem visitantes em clientes." 
              icon={<span className="text-white text-2xl">💬</span>} 
              link="#chatbots" 
            />
            <ProductCard 
              title="Gestão Financeira" 
              description="Simplifique sua gestão financeira com ferramentas intuitivas para controle de receitas e despesas." 
              icon={<span className="text-white text-2xl">💰</span>} 
              link="#financeiro" 
            />
            <ProductCard 
              title="Automação" 
              description="Automatize processos repetitivos e libere sua equipe para focar no que realmente importa." 
              icon={<span className="text-white text-2xl">🔄</span>} 
              link="#automacao" 
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-us" id="recursos">
        <div className="container">
          <div className="section-title">
            <h2>Por Que Escolher Specter</h2>
          </div>
          <div className="features-grid">
            <FeatureCard 
              title="Alta Performance" 
              description="Nossa plataforma oferece velocidade e confiabilidade, garantindo que suas operações funcionem sem interrupções." 
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>} 
            />
            <FeatureCard 
              title="Segurança Avançada" 
              description="Proteção de dados de nível empresarial para garantir que suas informações estejam sempre seguras." 
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>} 
            />
            <FeatureCard 
              title="Fácil Integração" 
              description="Conecte-se facilmente com as ferramentas que você já usa, permitindo um fluxo de trabalho contínuo." 
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>} 
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-column">
              <h3>Produtos</h3>
              <ul className="footer-links">
                <li><Link href="#">Analytics</Link></li>
                <li><Link href="#">ChatBots</Link></li>
                <li><Link href="#">Gestão Financeira</Link></li>
                <li><Link href="#">Automação</Link></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Recursos</h3>
              <ul className="footer-links">
                <li><Link href="#">Blog</Link></li>
                <li><Link href="#">Documentação</Link></li>
                <li><Link href="#">Comunidade</Link></li>
                <li><Link href="#">Suporte</Link></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Empresa</h3>
              <ul className="footer-links">
                <li><Link href="#">Sobre nós</Link></li>
                <li><Link href="#">Carreiras</Link></li>
                <li><Link href="#">Parceiros</Link></li>
                <li><Link href="#">Contato</Link></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Contato</h3>
              <ul className="footer-links">
                <li>contato@spectersoftware.com</li>
                <li>+55 (11) 1234-5678</li>
                <li>São Paulo, Brasil</li>
              </ul>
            </div>
          </div>
          <div className="copyright">
            © 2025 Specter Software. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
