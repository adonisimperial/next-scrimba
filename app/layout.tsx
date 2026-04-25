{/*
  putting "use client" on your Root Layout is generally considered bad practice in Next.js for a few reasons: SEO & Metadata and Perfromance
  // for this reason, we'll be separating it and putting to the components folder

  "use client"  // this is needed for usePathName
  import { usePathname } from "next/navigation"
*/}

import "./globals.css";
{/* use from "next/font/google" for downloaded fonts */}
import { Nunito, Orbitron, Montserrat_Alternates } from "next/font/google"
import NavBar from "@/app/components/NavBar"

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap"
})

const orbitron = Orbitron({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-orbitron"
})

{/*weight: ["100", "200", "400", "500", "600", "700", "800", "900"],*/}
const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"], // Only load Regular and Bold; preloading all weights as the commented code above will give a warning in the console
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
        <NavBar />

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