import * as NavigationMenuRadix from "@radix-ui/react-navigation-menu";
import cn from "classnames";
import { forwardRef } from "react";

import { Separator } from "./separator";

export const NavigationMenu = NavigationMenuRadix.Root;
export const NavigationMenuSub = NavigationMenuRadix.Sub;
export const NavigationMenuList = NavigationMenuRadix.List;
export const NavigationMenuItem = NavigationMenuRadix.Item;
export const NavigationMenuTrigger = NavigationMenuRadix.Trigger;
export const NavigationMenuContent = NavigationMenuRadix.Content;
export const NavigationMenuIndicator = NavigationMenuRadix.Indicator;
export const NavigationMenuViewport = NavigationMenuRadix.Viewport;

export const NavigationMenuLink = forwardRef(
  ({ children, isActive, ...props }, forwardedRef) => (
    <NavigationMenuRadix.Link
      {...props}
      ref={forwardedRef}
      className={cn("flex flex-col text-2xl text-brand-secondary-00", {
        "font-bold text-brand-trinity-04": isActive,
      })}
    >
      {children}

      {isActive && (
        <Separator className="h-0.5 w-full rounded-md bg-brand-trinity-06" />
      )}
    </NavigationMenuRadix.Link>
  ),
);

NavigationMenuLink.displayName = "NavigationMenuLink";
