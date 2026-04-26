{/* use this to use the Next.js Image component */}
{/* import Image from "next/image" */}
import heroImage from "@/public/adonis-space.png"
import Link from "next/link"

export default function Home() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 px-6 py-12 mx-auto max-w-7xl overflow-hidden">
      <div className="flex-1 space-y-6 text-center md:text-left">
        <h1>Discover what's possible with <span className="three">3d</span> printing</h1>

        <p>Join our community of creators and explore a vast library of user-submitted models.</p>
        
        <div className="flex gap-2">
          {/*
          <a href="/posts">Posts</a>
          <a href="/about">About</a>
          */}
          <Link className="btn" href="/posts">Posts</Link>
          <Link className="btn" href="/about">About</Link>
          <Link href="/3d-models">
            <button className="rotate-trigger">
              <span className="button-text">Hover Here</span>
            </button>
          </Link>
        </div>
      </div>
      
      {/*alternative donut shape className="w-64 h-64 rounded-full object-cover mask-radial-from-transparent mask-radial-from-10% mask-radial-to-black mask-radial-to-31%"*/}
      {/*
      <img
        className="donut-shockwave"
        src="/adonis-space.png"
        alt="Adonis view earth from the space"
      />
      */}

      {/* Using the Image component*/}
      {/*
      <Image
        className="donut-shockwave"
        src="/adonis-space.png"
        alt="Adonis view earth from the space"
        width={100}
        height={100}
      />
      */}

      {/* Using the import heroImage*/}
      <img
        className="donut-shockwave w-64 h-64"
        src={heroImage.src}
        alt="Adonis view earth from the space"
      />
    </section>
  )
}
