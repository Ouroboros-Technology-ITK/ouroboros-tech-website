import Image from "next/image";
import { MdArrowForward } from "react-icons/md";

import { Button } from "@/components";

import { getRootLayout } from "@/layouts";

import logoOuroborosToscaText from "../../public/images/logo-ouroboros-tosca-text.png";

const Home = () => (
  <>
    <section className="m-auto grid grid-rows-[max-content_max-content] items-center gap-12 sm:container md:items-center lg:grid-cols-[1.5fr_1fr] lg:grid-rows-none lg:px-12 2xl:grid-cols-[1fr_1fr]">
      <div className="flex flex-col items-center gap-6 text-center text-brand-primary-00 lg:items-start lg:text-left">
        <div className="flex flex-col gap-4">
          <h3 className="text-14-regular lg:text-16-regular text-brand-trinity-01/80">
            Unit Kegiatan Mahasiswa
          </h3>
          <div className="flex flex-col gap-1">
            <h1 className="heading-h5-bold xs:heading-h4-bold sm:heading-h3-bold lg:heading-h1-bold text-brand-trinity-03">
              Ouroboros Technologies
            </h1>
            <h2 className="heading-h6-regular opacity-80">
              Institut Teknologi Kalimantan
            </h2>
          </div>
        </div>
        <p className="text-14-regular md:text-16-regular lg:text-18-regular xs:w-10/12 sm:w-4/6 md:w-4/6 lg:w-5/6 2xl:w-10/12">
          Our vision is to make Institut Teknologi Kalimantan become the center
          for learning and development of information and communication
          technology in Balikpapan.
        </p>

        <Button variant="primary">
          Explore More
          <MdArrowForward />
        </Button>
      </div>

      <div className="relative">
        <picture className="relative flex h-52 max-h-52 lg:h-96 lg:max-h-96">
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
