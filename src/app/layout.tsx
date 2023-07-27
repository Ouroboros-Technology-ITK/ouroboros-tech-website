import "@/styles/globals.css"

import { Metadata } from "next"
import { Poppins } from "next/font/google"

import { Header } from "@/components"

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Ouroboros Technologies",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poppins.className}>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
