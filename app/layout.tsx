import "./globals.css";
{/* use from "next/font/google" for downloaded fonts */}
import { Nunito, Orbitron, Montserrat_Alternates } from "next/font/google"
import brandImage from "@/public/adonis-space.png"
import Link from "next/link";

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap"
})

const orbitron = Orbitron({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-orbitron"
})

const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat-alternates"
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.className} ${montserratAlternates.variable} ${orbitron.variable} min-h-full flex flex-col`}>
      {/* className={`nunito.className`} for single font*/}
      <body>
        {/* Layout UI */}
        <nav className="flex gap-8 px-6 py-2 max-w-7xl justify-between">
          <Link  href="/" className="flex gap-2 items-center">
            <img
              className="donut-shockwave w-10 h-10"
              src={brandImage.src}
              alt="Adonis view earth from the space"
            />
            <h2>Adonis Imperial</h2>
          </Link>

          <div className="flex gap-8 items-center">
            <Link href="/posts">Posts</Link>
            <Link href="/about">About</Link>
          </div>
        </nav>

        {/* Place children where you want to render a page or nested layout */}
        <main>{children}</main>
      </body>
    </html>
  );
}

{/*
<RootLayout>
  <Page />
</RootLayout>
*/}