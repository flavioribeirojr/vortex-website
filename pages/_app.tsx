import type { AppContext, AppProps } from 'next/app';
import { ThemeProvider, ThemeState } from './context/theme.context';
import Cookies from 'cookies';
import '../styles/globals.css';

function MyApp({ Component, pageProps, initialTheme }: MyAppProps) {
  return (
    <ThemeProvider initialTheme={initialTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

type MyAppProps = AppProps & {
  initialTheme: ThemeState['theme'];
}

MyApp.getInitialProps = (appContext: AppContext) => {
  if (!appContext.ctx.req || !appContext.ctx.res) {
    return {};
  }

  const cookies = new Cookies(appContext.ctx.req, appContext.ctx.res);
  const appProps = {
    initialTheme: cookies.get('theme')
  };

  return { ...appProps };
}

export default MyApp;
