import '../styles/globals.css';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div></div>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
