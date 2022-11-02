import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/");
    }, 1500);
    return () => {
      clearTimeout(timer);
    };
  }, [router]);

  return (
    <>
      <Head>
        <title>Ouroboros Tech | 404</title>
      </Head>
      <div className="flex h-screen w-full flex-row items-center justify-center gap-12">
        <Image
          width="0"
          height="0"
          sizes="100%"
          src="/images/ilustrasi-1.png"
          className="h-auto w-3/4 lg:w-1/3"
          alt="website-in-dev"
        />
        <div className="flex flex-col items-center justify-center gap-2">
          <h1 className="text-center text-heading-s text-primary-active md:text-heading-m lg:text-heading-l">
            404 | Page Not Found
          </h1>
          <h1 className="text-center text-l-medium  text-primary-active ">
            Redirecting to home...
          </h1>
        </div>
      </div>
    </>
  );
}
