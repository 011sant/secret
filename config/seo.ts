export const defaultSEO = {
  titleTemplate: '%s | Seu App',
  defaultTitle: 'Seu App',
  description: 'Descrição completa do seu app',
  canonical: process.env.NEXT_PUBLIC_URL,
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: process.env.NEXT_PUBLIC_URL,
    siteName: 'Seu App',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Seu App'
      }
    ]
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
};
