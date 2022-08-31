import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/icon.png" />
      </Head>
      <div className={"visible xs:invisible h-60 bg-color-background w-screen h-screen fixed top-0 left-0 grid place-items-center z-50"}>
        <p className={"font-medium font-bold text-color-text"}>screen is too small</p>
      </div>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
