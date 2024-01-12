import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/icon.png" />
        <title>joeribrinks.nl</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
