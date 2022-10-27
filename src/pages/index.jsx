import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ouroboros Tech | Home</title>
      </Head>
      <section className="flex h-screen w-full flex-row items-center justify-center text-white">
        <div className="w-2/3 md:w-1/2">
          <h1 className="my-4 text-heading-s md:text-heading-m lg:text-heading-l">
            Selamat Datang di UKM Blockchain Institut Teknologi Kalimantan
          </h1>
          <p className="my-4 text-m-medium">
            Unit Kegiatan Mahasiswa Institut Teknologi Kalimantan yang bergerak
            dibidang IT dan berfokus pada teknologi Blockchain
          </p>
          <div className="flex flex-col gap-4 md:flex-row">
            <button
              type="button"
              className="rounded-full border-2 border-primary-active px-4 py-3 transition-all ease-in hover:bg-primary-active"
            >
              Tentang Kami
            </button>
            <button
              type="button"
              className="rounded-full border-2 border-primary-active bg-primary-active px-4 py-3"
            >
              Project Kami
            </button>
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
