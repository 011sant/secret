# Specter Software

Um site moderno para uma plataforma de software que oferece chatbots inteligentes, analytics robustos e gestão financeira simplificada.

## 🚀 Tecnologias

Este projeto foi construído com as seguintes tecnologias:

- **Next.js 14** - Framework React para renderização do lado do servidor
- **TypeScript** - Tipagem estática para JavaScript
- **TailwindCSS** - Framework CSS utilitário
- **Framer Motion** - Biblioteca para animações fluidas
- **Redux Toolkit/Zustand** - Gerenciamento de estado
- **Recharts** - Biblioteca para visualização de dados

## 🌟 Características

- Design moderno com tema roxo/lilás
- Animações fluidas e microinterações
- Layout responsivo para todos os dispositivos
- Modo claro/escuro automático
- Componentes reutilizáveis
- Experiência de usuário otimizada

## 📋 Páginas

- **Home**: Página principal com hero section, cards de recursos e motivos para escolher a plataforma
- **Marketplace**: Exibição de apps disponíveis com filtros interativos e recomendações personalizadas
- **Assinaturas**: Planos disponíveis com comparativo visual de recursos
- **Dashboard**: Interface para gerenciar apps, visualizar estatísticas e configurar metas
- **Produtos**: Página detalhada de produto específico com casos de uso, FAQ e demonstração

## 🚀 Como executar

```bash
# Clone este repositório
git clone https://github.com/seu-usuario/specterfinal.git

# Acesse a pasta do projeto
cd specterfinal

# Instale as dependências
npm install
# ou
yarn install

# Execute o servidor de desenvolvimento
npm run dev
# ou
yarn dev
```

Acesse [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## 🎨 Paleta de Cores

- **Roxo Escuro** (#2D1576) - Base para headers e áreas de destaque
- **Roxo Médio** (#6A3DE8) - Elementos primários e interativos
- **Lilás Claro** (#A78BFA) - Acentos e elementos secundários
- **Cores Funcionais**:
  - Sucesso: Verde-roxo (#53C2B3)
  - Erro/Alerta: Rosa-roxo (#E93CAC)
  - Neutro: Cinza-roxo (#9992A9)

## 📝 Estrutura do Projeto

```
src/
├── app/                    # Pasta principal das páginas
│   ├── (pages)/            # Páginas adicionais
│   │   ├── assinaturas/    # Página de assinaturas
│   │   ├── dashboard/      # Página de dashboard
│   │   ├── marketplace/    # Página de marketplace
│   │   └── produtos/       # Página de produtos
│   ├── layout.tsx          # Layout principal (inclui Navbar e Footer)
│   ├── loading.tsx         # Componente de carregamento
│   ├── not-found.tsx       # Página 404
│   ├── page.tsx            # Página inicial
│   └── globals.css         # Estilos globais
├── components/             # Componentes React
│   ├── home/               # Componentes da página inicial
│   ├── layouts/            # Componentes de layout (Navbar, Footer)
│   ├── marketplace/        # Componentes da página de marketplace
│   ├── dashboard/          # Componentes da página de dashboard
│   ├── assinaturas/        # Componentes da página de assinaturas
│   ├── produtos/           # Componentes da página de produtos
│   └── ui/                 # Componentes de UI reutilizáveis
└── lib/                    # Utilitários e helpers
    └── utils/              # Funções utilitárias
```

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

## 📄 Licença

Este projeto está sob a licença MIT.
