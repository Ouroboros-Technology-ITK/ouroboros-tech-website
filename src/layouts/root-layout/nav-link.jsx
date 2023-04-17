import cn from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { forwardRef } from "react";

import { Separator } from "@/components";

export const NavLink = forwardRef(
  ({ children, href, ...props }, forwardedRef) => {
    const router = useRouter();
    const isActive = router.asPath === href;

    return (
      <Link
        {...props}
        ref={forwardedRef}
        href={href}
        className={cn(
          "flex flex-col text-2xl text-brand-secondary-00 lg:text-base",
          {
            "font-bold text-brand-trinity-04": isActive,
          },
        )}
      >
        {children}

        {isActive && (
          <Separator className="h-0.5 w-full rounded-md bg-brand-trinity-06" />
        )}
      </Link>
    );
  },
);

NavLink.displayName = "NavLink";
