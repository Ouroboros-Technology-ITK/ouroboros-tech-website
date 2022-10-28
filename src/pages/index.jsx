import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ouroboros Tech | Home</title>
      </Head>
      <section
        id="hero"
        className="relative top-0 bottom-0  mt-12 flex h-[120vh] w-full flex-row items-center justify-center px-10 text-white xs:mt-4 xs:h-screen md:mt-0 md:px-20 xl:px-[120px] "
      >
        <div className="flex w-full flex-col items-center justify-center gap-4 text-center lg:items-start lg:text-left ">
          <div className="mt-12 flex flex-col gap-2  lg:w-3/5 xl:w-3/5 2xl:w-[45%]">
            <h1 className="text-3xl font-bold  tracking-normal md:text-4xl xl:text-5xl">
              Ouroboros Technologies
            </h1>
            <h1 className=" text-xl font-semibold tracking-normal text-white/90 md:text-2xl lg:text-3xl xl:text-4xl">
              Institut Teknologi Kalimantan
            </h1>
            <p className="mt-4 text-base font-medium leading-6 text-white/[85%] md:text-lg lg:text-xl">
              Our vision is to make Institut Teknologi Kalimantan become the
              center for learning and development of information and
              communication technology in Balikpapan.
            </p>
          </div>
          <div className="mt-8 flex w-full flex-col items-center justify-center gap-4 md:flex-row lg:w-1/2 xl:w-2/6 ">
            <motion.button
              whileTap={{
                scale: 0.9,
              }}
              type="button"
              className="my-2 w-10/12 rounded-2xl border-2 border-primary-active bg-white/10 px-4 py-3 font-semibold text-primary-active  hover:brightness-90"
            >
              About us
            </motion.button>

            <motion.button
              whileTap={{
                scale: 0.9,
              }}
              type="button"
              className="my-2 w-10/12 rounded-2xl border-2 border-primary-active bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-primary-hover to-primary-active px-4 py-3 font-semibold hover:brightness-95"
            >
              Our Program
            </motion.button>
          </div>
        </div>
        <div className="absolute top-0 left-0 -z-10 h-full w-full bg-green-600 opacity-30">
          <Image
            width={0}
            height={0}
            sizes="100%"
            className="h-full w-screen overflow-x-hidden object-cover"
            alt="Foto Bersama Ourobors Technologies"
            quality={100}
            src="/images/background-1.jpg"
            priority
          />
        </div>
      </section>

      <section className="flex flex-col items-center justify-center gap-6 bg-gradient-to-tl from-primary-second via-primary-second to-primary-second/90 py-24 px-10 text-white md:px-20 xl:px-[120px]">
        <h1 className=" text-3xl font-bold tracking-normal text-primary-active md:text-4xl xl:text-5xl">
          Our Goal
        </h1>
        <p className="w-full text-center text-base lg:w-3/4 lg:text-lg xl:w-3/5">
          Our vision is to make Institut Teknologi Kalimantan become the center
          for learning and development of information and communication
          technology in Balikpapan.
        </p>
      </section>

      <section className="flex flex-col items-center justify-center gap-4 bg-gradient-to-tr from-primary-main via-primary-main to-primary-hover/40  py-24 px-10 text-white md:px-20 lg:px-[120px] xl:px-[120px]">
        <h1 className=" text-3xl font-bold tracking-normal text-primary-active md:text-4xl xl:text-5xl">
          Our Program
        </h1>
        <p className="w-full text-center text-base lg:w-3/4 lg:text-lg xl:w-3/5">
          Activities to be carried out on the Blockchain UKM
        </p>

        <div className="mt-12 grid grid-cols-1 grid-rows-1 gap-12 xl:grid-cols-3">
          <div className="flex flex-col items-center justify-start gap-4 rounded-lg bg-primary-second p-8 text-center duration-300 ease-in hover:shadow-glow-card-1 md:p-12">
            <h2 className="text-l-bold text-primary-active/[200%] brightness-200">
              Internal Masterclass
            </h2>
            <p className="text-m-medium text-white/80">
              We are committed to be ready for work industry, therefore we
              provide an intensive training program to develop our member skills
              and competencies.
            </p>
          </div>
          <div className="flex flex-col items-center justify-start gap-4 rounded-lg bg-primary-second p-8 text-center duration-300 ease-in hover:shadow-glow-card-1 md:p-12">
            <h2 className="text-l-bold text-primary-active/[200%] brightness-200">
              The Boring Workshop
            </h2>
            <p className="text-m-medium text-white/80">
              We want to share our knowledge that can help people to upgrade
              their skills in information and communication technology by
              providing certified workshops.
            </p>
          </div>
          <div className="flex flex-col items-center justify-start gap-4 rounded-lg bg-primary-second p-8 text-center duration-300 ease-in hover:shadow-glow-card-1 md:p-12">
            <h2 className="text-l-bold text-primary-active/[200%] brightness-200">
              Technology Research and Development
            </h2>
            <p className="text-m-medium text-white/80 lg:w-10/12">
              We are committed to participate in the development of information
              and communication technology in Indonesia, especially in
              Balikpapan by releasing conducting related research and releasing
              related journals.
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center gap-6 bg-gradient-to-tl from-primary-second via-primary-second to-primary-second/90 py-24 px-10 text-white md:px-20 xl:px-[120px]">
        <h1 className="text-3xl font-bold tracking-normal text-primary-active md:text-4xl xl:text-5xl">
          Our Member
        </h1>
        <p className="w-full text-center text-base lg:w-3/4 lg:text-lg xl:w-3/5">
          Let&apos;s take a look at the great people who are in the UKM
          Blockchain
        </p>

        <div className="grid grid-cols-1 gap-6 p-2 px-16 md:grid-cols-3 lg:px-0 xl:grid-cols-6">
          <div className="flex flex-col rounded-lg bg-primary-hover">
            <div className="h-5/6">
              <Image
                width="0"
                height="0"
                sizes="100%"
                className="h-full w-full rounded-lg object-cover object-top"
                alt="Foto Anggota"
                quality={100}
                src="/images/nur-fajri-azhar.jpg"
              />
            </div>
            <div className="">
              <h2 className="px-3 pt-4 text-m-semibold">Nur Fajri Azhar</h2>
              <p className="px-3 pb-4 text-s-medium">Founder</p>
            </div>
          </div>
          <div className="flex flex-col rounded-lg bg-primary-hover">
            <div className="h-5/6">
              <Image
                width="0"
                height="0"
                sizes="100%"
                className="h-full w-full rounded-lg object-cover"
                alt="Foto Anggota"
                quality={100}
                src="/images/nur-fajri-azhar.jpg"
              />
            </div>
            <div className="">
              <h2 className="px-3 pt-4 text-m-semibold">Nur Fajri Azhar</h2>
              <p className="px-3 pb-4 text-s-medium">Founder</p>
            </div>
          </div>
          <div className="flex flex-col rounded-lg bg-primary-hover">
            <div className="h-5/6">
              <Image
                width="0"
                height="0"
                sizes="100%"
                className="h-full w-full rounded-lg object-cover"
                alt="Foto Anggota"
                quality={100}
                src="/images/nur-fajri-azhar.jpg"
              />
            </div>
            <div className="">
              <h2 className="px-3 pt-4 text-m-semibold">Nur Fajri Azhar</h2>
              <p className="px-3 pb-4 text-s-medium">Founder</p>
            </div>
          </div>
          <div className="flex flex-col rounded-lg bg-primary-hover">
            <div className="h-5/6">
              <Image
                width="0"
                height="0"
                sizes="100%"
                className="h-full w-full rounded-lg object-cover"
                alt="Foto Anggota"
                quality={100}
                src="/images/nur-fajri-azhar.jpg"
              />
            </div>
            <div className="">
              <h2 className="px-3 pt-4 text-m-semibold">Nur Fajri Azhar</h2>
              <p className="px-3 pb-4 text-s-medium">Founder</p>
            </div>
          </div>
          <div className="flex flex-col rounded-lg bg-primary-hover">
            <div className="h-5/6">
              <Image
                width="0"
                height="0"
                sizes="100%"
                className="h-full w-full rounded-lg object-cover"
                alt="Foto Anggota"
                quality={100}
                src="/images/ersan-karimi.jpg"
              />
            </div>
            <div className="">
              <h2 className="px-3 pt-4 text-m-semibold">Ersan Karimi</h2>
              <p className="px-3 pb-4 text-s-medium">Front-End Dev</p>
            </div>
          </div>
          <div className="flex flex-col rounded-lg bg-primary-hover">
            <div className="h-5/6">
              <Image
                width="0"
                height="0"
                sizes="100%"
                className="h-full w-full rounded-lg object-cover"
                alt="Foto Anggota"
                quality={100}
                src="/images/nur-fajri-azhar.jpg"
              />
            </div>
            <div className="">
              <h2 className="px-3 pt-4 text-m-semibold">Nur Fajri Azhar</h2>
              <p className="px-3 pb-4 text-s-medium">Founder</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button
            type="button"
            className="my-8 rounded-full border-2 border-primary-active p-4"
          >
            Lihat Selengkapnya
          </button>
        </div>
      </section>
    </>
  );
}
