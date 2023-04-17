import Image from "next/image";
import Link from "next/link";

import underConstructionIllustration from "../../public/images/under-construction.png";
import { Button } from "./button";

export const UnderConstruction = () => {
  return (
    <section className="container m-auto grid max-w-7xl grid-rows-[max-content_1fr] content-center items-center justify-items-center gap-12 py-12 px-4 text-center lg:grid-cols-2 lg:grid-rows-none">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h2 className="text-3xl font-semibold lg:text-4xl">Ooops!</h2>
          <h1 className="text-4xl font-bold lg:text-5xl">Under Construction</h1>
        </div>
        <div className="flex flex-col items-center gap-6">
          <p className="w-3/5 lg:w-3/4 xl:text-lg">
            Sorry about that! Please visit our homepage to get where you need to
            go.
          </p>
          <Link href="/">
            <Button tabIndex={-1}>Back to Homepage</Button>
          </Link>
        </div>
      </div>

      <picture className="h-96 max-h-96">
        <Image
          src={underConstructionIllustration}
          alt="Under Construction Illustration"
          className="h-full w-full object-contain"
        />
      </picture>
    </section>
  );
};
