import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import { Navbar, Footer } from '../components/index';

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider attribute="class">
    <div className="dark:bg-nft-dark bg-gray-100 min-h-screen">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  </ThemeProvider>
);
export default MyApp;
