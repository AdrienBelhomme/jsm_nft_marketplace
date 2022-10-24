import { ThemeProvider } from 'next-themes';
import Script from 'next/script';

import '../styles/globals.css';
import { Navbar, Footer } from '../components';

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider attribute="class">
    <div className="dark:bg-nft-dark bg-gray-100 min-h-screen">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
    <Script src="https://kit.fontawesome.com/c6e55f6362.js" crossOrigin="anonymous" />
  </ThemeProvider>
);
export default MyApp;
