import Head from "next/head";

import { UnderConstruction } from "@/components";

import { getRootLayout } from "@/layouts";

const About = () => (
  <>
    <Head>
      <title>About | Ouroboros Technologies</title>
    </Head>
    <UnderConstruction />
  </>
);

About.getLayout = getRootLayout;

export default About;
