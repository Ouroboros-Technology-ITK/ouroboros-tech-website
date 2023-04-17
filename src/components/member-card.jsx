import Image from "next/image";

export const MemberCard = ({ name, description, imageSrc }) => {
  return (
    <div className="flex w-full cursor-default grid-cols-1 justify-center gap-6 rounded-lg border-[1px] border-brand-secondary-06 bg-brand-secondary-07 p-4 transition delay-75 ease-in-out hover:border-brand-secondary-02 hover:drop-shadow-program">
      <Image
        src={imageSrc}
        alt="Nur Fajri Azhar"
        className="flex h-24 w-24 rounded-full object-cover"
      />
      <div className="flex w-52 flex-col justify-center gap-2">
        <h4 className="text-lg font-bold">{name}</h4>
        <p className="text-sm font-extralight">{description}</p>
      </div>
    </div>
  );
};
