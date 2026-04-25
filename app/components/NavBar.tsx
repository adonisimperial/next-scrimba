"use client"

import brandImage from "@/public/adonis-space.png"
import Link from "next/link"
import { usePathname } from "next/navigation"

{/* use default for components that is require/include once while the export function without default are for elements that can be used multiple times in a page */}
export default function NavBar () {
  const pathname = usePathname()
  console.log(pathname)

  return (
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
  )
}