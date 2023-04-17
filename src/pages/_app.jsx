import Head from "next/head";

import "../styles/globals.css";

const App = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <>
      <Head>
        <title>Ouroboros Techonologies</title>image.png
      </Head>
      <Component {...pageProps} />
    </>,
  );
};

export default App;
