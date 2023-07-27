"use client"

import Image from "next/image"
import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex w-full flex-row justify-center bg-brand-secondary-07/90 p-4 backdrop-blur-md">
      <div className="flex w-full items-center justify-between sm:container">
        <Link
          href="/"
          className="flex flex-row items-center gap-3 lg:gap-4 2xl:gap-5"
        >
          <Image
            src="/images/logo-itk.png"
            alt="ITK Logo"
            width={100}
            height={100}
            className="h-8 w-full md:h-12"
            priority
          />
          <Image
            src="/images/logo-km.png"
            alt="KM Logo"
            width={70}
            height={100}
            className="h-8 w-full md:h-12"
            priority
          />
          <Image
            src="/images/logo-ouroboros-tosca.png"
            alt="Logo Ouroboros Tosca"
            width={160}
            height={100}
            className="h-8 w-full md:h-12"
            priority
          />
        </Link>
        <nav>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink href="/">Home</NavigationMenuLink>
                <NavigationMenuLink href="/about">About</NavigationMenuLink>
                <NavigationMenuLink href="/members">Members</NavigationMenuLink>
                <NavigationMenuLink href="/programs">
                  Programs
                </NavigationMenuLink>
                <NavigationMenuLink href="/documentation">
                  Documentation
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
            <NavigationMenuViewport />
          </NavigationMenu>
        </nav>
      </div>
    </header>
  )
}
