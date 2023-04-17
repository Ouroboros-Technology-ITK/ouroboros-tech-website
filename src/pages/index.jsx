import Image from "next/image";
import Link from "next/link";
import { MdArrowForward } from "react-icons/md";

import { Button, MemberCard } from "@/components";

import { getRootLayout } from "@/layouts";

import ahmadRusdi from "../../public/images/ahmad-rusdianto.webp";
import angelinaCathe from "../../public/images/angela-catherina.webp";
import ansarFadil from "../../public/images/ansar-fadillah.webp";
import carmelitaAngel from "../../public/images/carmelita-angeline-tanujaya.jpeg";
import carolineAdi from "../../public/images/caroline-adi-cahya.webp";
import logoOuroborosToscaText from "../../public/images/logo-ouroboros-tosca-text.png";
import muhammadNasai from "../../public/images/muhammad-nasai-kairupan.webp";
import nurFajriAzhar from "../../public/images/nur-fajri-azhar.webp";
import ouroborosTeam from "../../public/images/ouroboros-team.jpg";

const Home = ({ memberData }) => (
  <>
    <section className="m-auto mt-12 grid grid-rows-[max-content_max-content] items-center gap-12 px-4 sm:container md:items-center lg:grid-cols-[1.5fr_1fr] lg:grid-rows-none lg:px-12 2xl:grid-cols-[1fr_1fr]">
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
      <div className="absolute right-0 -z-10 h-[450px] w-[450px] rounded-full bg-brand-secondary-06 blur-[650px]" />
    </section>

    <section className="mt-20 flex flex-col gap-8 bg-brand-secondary-07 py-12 px-4">
      <div className="flex flex-col gap-3 py-6 text-center">
        <h2 className="text-12-bold md:heading-h6-bold text-brand-trinity-04">
          About Us
        </h2>
        <h1 className="heading-h6-bold md:heading-h3-bold text-brand-primary-00">
          Tentang Kami
        </h1>
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

    <section className="mt-6 flex flex-col gap-8 py-6 px-4">
      <div className="flex flex-col gap-3 py-6 text-center">
        <h2 className="text-12-bold md:heading-h6-bold text-brand-trinity-04">
          Our Program
        </h2>
        <h1 className="md:heading-h3-bold heading-h6-bold text-brand-primary-00">
          Program Kami
        </h1>
      </div>
      <div className="m-auto grid grid-cols-1 gap-10 px-20 xl:grid-cols-3">
        <div className="flex flex-col rounded-lg border border-brand-secondary-02 bg-brand-primary-08 px-12 py-8 transition delay-75 ease-in-out hover:drop-shadow-program">
          <h3 className="heading-h6-bold md:heading-h5-bold pb-9 text-center">
            Internal Masterclass
          </h3>
          <p className="text-12-regular md:text-18-regular h-full pb-8 text-center">
            We are committed to be ready for work industry, the refore we
            provide an intensive training program to develop our member skills
            andompetencies.
          </p>
          <Button variant="primary">See Our Activity</Button>
        </div>
        <div className="flex flex-col rounded-lg border border-brand-secondary-02 bg-brand-primary-08 px-12 py-8 transition delay-75 ease-in-out hover:drop-shadow-program">
          <h3 className="heading-h6-bold md:heading-h5-bold pb-9 text-center">
            The Boring Workshop
          </h3>
          <p className="text-12-regular md:text-18-regular h-full pb-8 text-center">
            We want to share our knowledge that can help people to upgrade their
            skills in information and communication technology by providing
            certified workshops.
          </p>
          <Button variant="primary">See Our Activity</Button>
        </div>
        <div className="flex flex-col rounded-lg border border-brand-secondary-02 bg-brand-primary-08 px-12 py-8 transition delay-75 ease-in-out hover:drop-shadow-program">
          <h3 className="heading-h6-bold md:heading-h5-bold pb-9 text-center">
            Tech Research & Develop
          </h3>
          <p className="text-12-regular md:text-18-regular h-full pb-8 text-center">
            We are committed to participate in the development of information
            and communication technology in Indonesia, especially in Balikpapan
            by releasing conducting related research and releasing related
            journals.
          </p>
          <Button variant="primary">See Our Activity</Button>
        </div>
      </div>
      <div className="absolute right-0 -z-10 h-[450px] w-[450px] rounded-full bg-brand-secondary-06 blur-[650px]" />
    </section>

    <section className="mt-20 flex flex-col gap-8 bg-brand-secondary-07 py-12 px-4">
      <div className="flex flex-col gap-3 py-6 text-center">
        <h2 className="text-12-bold md:heading-h6-bold text-brand-trinity-04">
          Our Member
        </h2>
        <h1 className="heading-h6-bold md:heading-h3-bold text-brand-primary-00">
          Anggota Kami
        </h1>
      </div>
      <div className="m-auto grid grid-cols-1 justify-items-center gap-7 bg-brand-secondary-07 md:grid-cols-2 xl:grid-cols-3 xl:gap-14">
        {memberData.map((member) => (
          <MemberCard key={member.name} {...member} />
        ))}
      </div>
      <div className="flex w-full justify-center">
        <Button variant="primary">
          See More
          <MdArrowForward />
        </Button>
      </div>
    </section>
  </>
);

export const getStaticProps = () => {
  return {
    props: {
      memberData: [
        {
          name: "Nur Fajri Azhar",
          description: "Supervisor",
          imageSrc: nurFajriAzhar,
        },
        {
          name: "Muhammad Nasa'i Kairupan",
          description: "Chief Executive",
          imageSrc: muhammadNasai,
        },
        {
          name: "Ansar Fadillah",
          description: "Head of Human Resources Department",
          imageSrc: ansarFadil,
        },
        {
          name: "Ahmad Rusdianto Andarina Syakbani",
          description: "Head of Technology and Research Department",
          imageSrc: ahmadRusdi,
        },
        {
          name: "Angela Catherina",
          description: "Executive Secretary",
          imageSrc: angelinaCathe,
        },
        {
          name: "Carmelita Angeline Tanujaya",
          description: "Executive Treasurer",
          imageSrc: carmelitaAngel,
        },
        {
          name: "Caroline Adi Cahya",
          description:
            "Head of Public Relation and Information Media Department",
          imageSrc: carolineAdi,
        },
      ],
    },
  };
};

Home.getLayout = getRootLayout;

export default Home;
