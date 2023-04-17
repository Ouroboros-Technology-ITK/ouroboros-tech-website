import Head from "next/head";

import { UnderConstruction } from "@/components";

import { getRootLayout } from "@/layouts";

const OurPrograms = () => (
  <>
    <Head>
      <title>Our Programs | Ouroboros Technologies</title>
    </Head>
    <UnderConstruction />
  </>
);

OurPrograms.getLayout = getRootLayout;

export default OurPrograms;
