# Specter Software

Plataforma moderna de gestão empresarial desenvolvida com Next.js 14 e TypeScript, focada em oferecer uma experiência fluida e responsiva para automação de atendimento e análise de dados.

## 💻 Tecnologias Implementadas

- **Framework Base**: Next.js 14 com App Router e TypeScript
- **Estilização**: TailwindCSS para estilos utilitários
- **Animações**: Framer Motion para microinterações e transições
- **Visualização**: Recharts para gráficos e dashboards
- **Build**: Webpack com otimizações habilitadas
- **Ambiente**: Node.js com suporte a módulos ES

## 🎨 Design System

### Cores
| Variável | Valor | Uso |
|----------|-------|-----|
| roxo-escuro | #2D1576 | Backgrounds, headers |
| roxo-medio | #6A3DE8 | CTAs, botões, links |
| lilas-claro | #A78BFA | Acentos, decorações |

### Componentes Core
- **Buttons**: Primário (roxo-medio), Secundário (outline), Ghost
- **Cards**: Com animações de hover e sombras customizadas
- **Inputs**: Estilizados com estados de focus e error
- **Containers**: Layouts responsivos com grid/flex

## 📱 Páginas Implementadas

### Home (/)
- Hero section com animações de entrada
- Seção "Por que escolher" com cards animados
- Features grid com ícones e descrições
- Seção de preços com 3 planos
- CTA final com gradiente customizado

### Produtos (/produtos)
- Showcase de soluções principais
- Casos de uso com métricas
- Grid de features com ícones
- FAQ accordion interativo
- Seção de depoimentos

### Assinaturas (/assinaturas)
- Planos detalhados com:
  - Plano Comunidade (Grátis)
  - Plano Profissional (R$ 29/mês)
  - Comparativo de features
  - CTAs por plano

## 🔧 Componentes Principais

### Layout
- Navbar responsiva 
- Menu mobile com animações
- Footer multicoluna
- Container max-width configurável

### UI Reutilizável
- Loading states animados
- Error boundaries customizadas
- 404 page interativa
- Notificações toast

### Animações
- Fade in/out nas transições
- Scale e slide em cards
- Microinterações nos botões
- Parallax em imagens

## 🛠️ Estrutura do Projeto

```
src/
├── app/                    
│   ├── (pages)/          
│   │   ├── assinaturas/  # Planos e preços
│   │   ├── produtos/     # Catálogo de soluções
│   ├── layout.tsx        # Layout principal
│   ├── loading.tsx       # Loading global
│   ├── not-found.tsx    # 404 customizada
│   ├── error.tsx        # Error boundary
│   └── page.tsx         # Homepage
├── components/
│   ├── home/           # Componentes da landing
│   ├── sections/       # Seções reutilizáveis
│   └── ui/            # Componentes base
└── lib/               # Utilitários
```

## ⚙️ Configuração do Ambiente

### Requisitos
- Node.js 18+
- NPM ou Yarn
- Git

### Variáveis de Ambiente
```env
NEXT_PUBLIC_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=/api
NODE_ENV=development
```

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seuprojeto/specterfinal.git

# Instale dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

## 🔒 Segurança

- Headers de segurança configurados
- Proteção contra XSS via Content Security Policy
- Sanitização de inputs
- Rate limiting nas APIs

## 📦 Integrations

- Firebase (autenticação e database)
- Stripe (pagamentos)
- Upstash Redis (cache)
- Sentry (monitoramento)

## 📄 Licença

Este projeto está sob a licença MIT.
