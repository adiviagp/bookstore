import '../styles/globals.css';
import type { AppContext, AppInitialProps, AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

function MyApp({ Component, pageProps }: AppContext & AppInitialProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
