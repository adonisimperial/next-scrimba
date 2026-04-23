import "./globals.css";
{/* use from "next/font/google" for downloaded fonts */}
import { Nunito, Orbitron, Montserrat_Alternates } from "next/font/google"

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
        {children}
        </body>
    </html>
  );
}

{/*
<RootLayout>
  <Page />
</RootLayout>
*/}