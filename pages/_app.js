import '../styles/globals.css'
// import '../styles/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/profile.css'
import Head from 'next/head'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {

  <Head >
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css" integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc" crossorigin="anonymous"></link>
  </Head>
  return <Component {...pageProps} />
}

export default MyApp
