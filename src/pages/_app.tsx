import { Footer, Header } from 'components';
import { AppProvider } from 'hooks';
import type { AppProps } from 'next/app';
import GlobalStyles from 'styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
      <GlobalStyles />
    </AppProvider>
  );
}

export default MyApp;
