import Link from "next/link";

import { Button } from "./button";

export const ProgramCard = ({ title, description, href }) => {
  return (
    <div className="flex flex-col rounded-lg border border-brand-secondary-02 bg-brand-primary-08 px-12 py-8 transition delay-75 ease-in-out hover:drop-shadow-program">
      <h3 className="heading-h6-bold md:heading-h5-bold pb-9 text-center">
        {title}
      </h3>
      <p className="text-12-regular md:text-18-regular h-full pb-8 text-center">
        {description}
      </p>
      <Link
        href={href}
        className="flex items-center justify-center"
        tabIndex={-1}
      >
        <Button variant="primary">See Our Activity</Button>
      </Link>
    </div>
  );
};
