import Head from "next/head";

import { UnderConstruction } from "@/components";

import { getRootLayout } from "@/layouts";

const Documentation = () => (
  <>
    <Head>
      <title>Documentation | Ouroboros Technologies</title>
    </Head>
    <UnderConstruction />
  </>
);

Documentation.getLayout = getRootLayout;

export default Documentation;
