import '@styles/tailwind.css';
import MainLayout from '@layout/MainLayout';

import { ProviderAuth } from '@hooks/useAuth';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}

export default MyApp;
