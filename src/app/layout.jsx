import Footer from "./footer";
import Header from "./header";

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>
      <body>
        <Header />
        <main className="z-10 flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
