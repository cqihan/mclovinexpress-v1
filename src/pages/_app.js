import '@/styles/globals.css';
import "@fontsource/libre-bodoni";
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

import '@/styles/navbar.scss';
import '@/styles/footer.scss';
import '@/styles/main.scss';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />

      <Component {...pageProps} />

      <Footer />
    </>
  )
}
