import Image from "next/image";

export default function InDevelopment() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-12">
      <Image
        width="0"
        height="0"
        sizes="100%"
        src="/images/ilustrasi-1.png"
        className="h-auto w-3/4 lg:w-1/3"
        alt="website-in-dev"
      />
      <h1 className="p-2 text-center text-heading-s text-primary-active md:p-12 md:text-heading-m lg:text-heading-l">
        Website ini masih dalam tahap pengembangan
      </h1>
    </div>
  );
}
