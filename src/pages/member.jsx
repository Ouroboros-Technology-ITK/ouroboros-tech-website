import Head from "next/head";

import { UnderConstruction } from "@/components";

import { getRootLayout } from "@/layouts";

const Member = () => (
  <>
    <Head>
      <title>Member | Ouroboros Technologies</title>
    </Head>
    <UnderConstruction />
  </>
);

Member.getLayout = getRootLayout;

export default Member;
