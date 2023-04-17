import Image from "next/image";

export const MemberCard = ({ name, description, imageSrc }) => {
  return (
    <div className="flex w-full flex-row justify-center gap-6 rounded-lg bg-brand-secondary-07 p-4 transition delay-75 ease-in-out hover:border-brand-secondary-02 hover:drop-shadow-program">
      <Image
        src={imageSrc}
        alt="Nur Fajri Azhar"
        className="flex h-24 w-24 rounded-full object-cover"
      />
      <div className="flex w-52 flex-col justify-center gap-2">
        <h4 className="text-18-medium truncate">{name}</h4>
        <div className="flex flex-row items-center justify-between gap-4">
          <p className="text-18-regular truncate">{description}</p>
          <span>{">"}</span>
        </div>
      </div>
    </div>
  );
};
