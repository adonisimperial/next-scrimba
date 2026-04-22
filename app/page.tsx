export default function Home() {
  return (
    <main>
      <section className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 px-6 py-12 mx-auto max-w-7xl overflow-hidden">
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h1>Discover what's possible with 3d printing</h1>
          <p>Join our community of creators and explore a vast library of user-submitted models.</p>
          
          <button className="rotate-trigger">
            <span className="button-text">Hover Here</span>
          </button>
        </div>
        
        {/*alternative donut shape className="w-64 h-64 rounded-full object-cover mask-radial-from-transparent mask-radial-from-10% mask-radial-to-black mask-radial-to-31%"*/}
        <img
          className="donut-shockwave"
          src="/adonis-space.png"
          alt="Adonis view earth from the space"
        />
      </section>
    </main>
  )
}
