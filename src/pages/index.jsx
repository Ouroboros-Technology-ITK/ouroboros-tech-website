import Image from "next/image";
import Link from "next/link";
import { MdArrowForward } from "react-icons/md";

import { Button } from "@/components";

import { getRootLayout } from "@/layouts";

import logoOuroborosToscaText from "../../public/images/logo-ouroboros-tosca-text.png";
import ouroborosTeam from "../../public/images/ouroboros-team.jpg";

const Home = () => (
  <>
    <section className="m-auto grid grid-rows-[max-content_max-content] items-center gap-12 px-4 sm:container md:items-center lg:grid-cols-[1.5fr_1fr] lg:grid-rows-none lg:px-12 2xl:grid-cols-[1fr_1fr]">
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

    <section className="mt-20 flex flex-col gap-8 bg-brand-secondary-07 py-12 px-4">
      <div className="flex flex-col gap-3 py-6 text-center">
        <h2 className="heading-h6-bold text-brand-trinity-04">About Us</h2>
        <h1 className="heading-h3-bold text-brand-primary-00">Tentang Kami</h1>
      </div>
      <div className="m-auto grid grid-rows-[max-content_1fr] justify-items-center gap-12 bg-brand-secondary-07 sm:container lg:grid-cols-2 lg:grid-rows-none lg:items-center">
        <div className="flex w-10/12 flex-col gap-4 lg:w-full 2xl:w-10/12">
          <p className="text-16-regular lg:text-18-regular">
            Ouroboros was founded in 2022, built by Founder{" "}
            <Link
              className="font-semibold text-brand-trinity-04 underline"
              href="/member/detail/fajri-nur-azhari"
            >
              Nur Fajri Azhar
            </Link>{" "}
            & Chief Executive{" "}
            <Link
              className="font-semibold text-brand-trinity-04 underline"
              href="/member/detail/muhammad-nasai-kairupan"
            >
              Muhammad Nasa&apos;i Kairupan
            </Link>
            .
          </p>
          <p className="text-16-regular lg:text-18-regular">
            The purpose of establishing Ouroboros is because especially those
            who are involved in the IT world such as Programming, UI/UX Design,
            Game Dev and so on. We welcome anyone who wants to join our
            community openly without any IT background.
          </p>
          <p className="text-16-regular lg:text-18-regular">
            Our vision is to make Institut Teknologi Kalimantan become the
            center for learning and development of information and communication
            technology in Balikpapan
          </p>
        </div>

        <picture className="relative flex h-80 max-h-80 overflow-clip rounded-md lg:h-96 lg:max-h-96">
          <Image
            src={ouroborosTeam}
            alt="Ouroboros Team Picture"
            className="h-full w-full scale-125 object-contain lg:scale-110"
          />
        </picture>
      </div>
    </section>
  </>
);

Home.getLayout = getRootLayout;

export default Home;
