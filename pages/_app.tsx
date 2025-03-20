import { ThemeProvider } from 'styled-components';
import { IntlProvider } from 'react-intl';
import { DefaultSeo } from 'next-seo';
import Layout from '../components/Layout';
import messages from '../locales';

function MyApp({ Component, pageProps, router }) {
  const locale = router.locale || 'pt-BR';

  return (
    <IntlProvider messages={messages[locale]} locale={locale}>
      <ThemeProvider theme={theme}>
        <DefaultSeo
          title="Seu App"
          description="Descrição do seu app"
          openGraph={{
            type: 'website',
            locale: locale,
            url: process.env.NEXT_PUBLIC_URL,
          }}
        />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </IntlProvider>
  );
}

export default MyApp;
