import Image from "next/image";
import Link from "next/link";
import { MdArrowForward } from "react-icons/md";

import { getRootLayout } from "@/layouts";

import logoOuroborosToscaText from "../../public/images/logo-ouroboros-tosca-text.png";

const Home = () => (
  <>
    <section className="m-auto grid grid-rows-2 gap-5 px-2 sm:container md:items-center lg:grid-cols-[1.5fr_1fr] lg:px-12">
      <div className="flex flex-col gap-8">
        <h3 className="text-base font-medium text-brand-trinity-01/80">
          Unit Kegiatan Mahasiswa
        </h3>
        <div className="flex flex-col gap-1">
          <h1 className="heading-h1-bold text-brand-trinity-03 lg:text-6xl">
            Ouroboros Technologies
          </h1>
          <h2 className="heading-h4-medium">Institut Teknologi Kalimantan</h2>
        </div>
        <p className="text-16-regular lg:text-18-regular md:w-4/6 lg:w-5/6 2xl:w-[70%]">
          Our vision is to make Institut Teknologi Kalimantan become the center
          for learning and development of information and communication
          technology in Balikpapan.
        </p>

        <Link
          href="/about"
          className="label-16-medium lg:label-18-medium group flex w-max items-center gap-2 rounded-lg bg-brand-secondary-05 px-6 py-3 text-brand-secondary-00/90 outline-none duration-200 hover:text-brand-secondary-00/100 focus:text-brand-secondary-00/100 focus:ring-2 focus:ring-brand-secondary-03"
        >
          Explore more
          <MdArrowForward className="text-current duration-200 group-hover:translate-x-1 group-focus:translate-x-1" />
        </Link>
      </div>

      <div className="relative">
        <picture className="relative flex h-96">
          <Image
            src={logoOuroborosToscaText}
            className="h-full w-full object-contain"
            alt="Logo Ouroboros Tosca with Text"
            priority
          />
        </picture>
      </div>
    </section>
    <section />
  </>
);

Home.getLayout = getRootLayout;

export default Home;
