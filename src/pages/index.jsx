import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ouroboros Tech | Home</title>
      </Head>
      <section className="flex h-screen w-full flex-row items-center justify-center px-10 text-white md:px-20  xl:px-[120px]">
        <div className="flex w-full flex-col items-center justify-center gap-4 text-center lg:items-start lg:text-left ">
          <div className="mt-12 flex flex-col gap-2 lg:w-3/5 xl:w-1/2 2xl:w-[45%]">
            <h1 className="text-3xl font-bold tracking-normal md:text-4xl xl:text-5xl">
              UKM Blockchain
            </h1>
            <h1 className=" text-xl font-bold tracking-normal md:text-2xl lg:text-3xl xl:text-4xl">
              Institut Teknologi Kalimantan
            </h1>
            <p className="mt-4 text-base leading-6 md:text-lg lg:text-xl">
              Unit Kegiatan Mahasiswa Institut Teknologi Kalimantan yang
              bergerak dibidang IT dan berfokus pada teknologi Blockchain
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
              Tentang Kami
            </motion.button>

            <motion.button
              whileTap={{
                scale: 0.9,
              }}
              type="button"
              className="my-2 w-10/12 rounded-2xl border-2 border-primary-active bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-primary-hover to-primary-active px-4  py-3 font-semibold hover:brightness-95"
            >
              Proyek Kami
            </motion.button>
          </div>
        </div>
        <div className="absolute top-0 left-0 -z-10 h-screen w-full opacity-30">
          <Image
            width="0"
            height="0"
            sizes="100%"
            className="h-full w-screen overflow-x-hidden object-cover"
            alt="Foto Bersama Ourobors Technologies"
            quality={100}
            src="/images/background-1.jpg"
          />
        </div>
      </section>
      <section className="flex flex-col items-center justify-center bg-primary-second py-12 text-white">
        <h1 className="pb-4 text-heading-l text-primary-active">
          Deskripsi UKM
        </h1>
        <p className="w-2/3 text-center text-l-medium md:w-1/2 xl:w-1/3">
          Unit Kegiatan Mahasiswa Institut Teknologi Kalimantan yang bergerak di
          bidang IT dan berfokus pada teknologi Blockchain.
        </p>
      </section>
      <section className="flex flex-col px-8 py-12 text-white lg:px-[120px]">
        <h1 className="pb-4 text-center text-heading-l text-primary-active lg:text-left">
          Kegiatan UKM
        </h1>
        <p className="pb-6 text-center text-l-medium lg:text-left">
          Kegiatan yang akan dilakukan pada UKM Blockchain
        </p>
        <div className="flex flex-col gap-6 lg:flex-row">
          <div className="flex flex-col rounded-lg bg-primary-second p-6 text-center">
            <h2 className="pb-2 text-l-bold">Kegiatan</h2>
            <p className="text-m-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmpod tempor incididung ut labore et dolore manga aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
          <div className="flex flex-col rounded-lg bg-primary-second p-6 text-center">
            <h2 className="pb-2 text-l-bold">Kegiatan</h2>
            <p className="text-m-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmpod tempor incididung ut labore et dolore manga aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
          <div className="flex flex-col rounded-lg bg-primary-second p-6 text-center">
            <h2 className="pb-2 text-l-bold">Kegiatan</h2>
            <p className="text-m-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmpod tempor incididung ut labore et dolore manga aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col bg-primary-second px-8 py-12 text-white lg:px-[120px]">
        <h1 className="pb-4 text-center text-heading-l text-primary-active lg:text-left">
          Tim UKM
        </h1>
        <p className="pb-4 text-center text-l-medium lg:text-left">
          Mari lihat orang-orang hebat yang berada di UKM Blockchain
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
