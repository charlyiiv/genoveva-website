export default function Home() {
  const gallery = [
    "/genoveva-1.jpg",
    "/genoveva-2.jpg",
    "/genoveva-3.jpg",
    "/genoveva-4.jpg",
    "/genoveva-5.jpg",
    "/genoveva-6.jpg",
    "/genoveva-tender.jpg",
  ];

  return (
    <main className="bg-slate-950 text-white">

      {/* HERO */}
      <section
        className="relative min-h-screen bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: "url('/genoveva-1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-5xl px-6">
          <div className="inline-block rounded-full bg-amber-500 px-6 py-2 text-black font-bold mb-8">
            REDUCED TO £51,500
          </div>

          <h1 className="text-5xl md:text-8xl font-bold mb-6">
            GENOVEVA
          </h1>

          <p className="text-xl md:text-3xl text-slate-200 mb-6">
            2005 Fairline Squadron 58 • 1/8 Ownership Share
          </p>

          <p className="max-w-3xl mx-auto text-lg text-slate-300 mb-10">
            Live the millionaire yacht lifestyle without the millionaire outlay.
            Enjoy six weeks per year aboard one of the best managed yacht
            syndicates in Majorca.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+447799733587"
              className="rounded-full bg-amber-500 px-8 py-4 font-bold text-black"
            >
              Call Darrell
            </a>

            <a
              href="https://wa.me/447799733587"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-green-600 px-8 py-4 font-bold"
            >
              WhatsApp
            </a>

            <a
              href="mailto:charlyiiv@hotmail.com"
              className="rounded-full border border-white px-8 py-4 font-bold"
            >
              Email Enquiry
            </a>
          </div>
        </div>
      </section>

      {/* OWNERSHIP */}
      <section className="py-16 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">
          <div className="bg-slate-800 p-6 rounded-xl text-center">
            <h3 className="text-3xl font-bold">1/8</h3>
            <p>Ownership Share</p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl text-center">
            <h3 className="text-3xl font-bold">6</h3>
            <p>Weeks Per Year</p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl text-center">
            <h3 className="text-3xl font-bold">£480</h3>
            <p>Monthly Running Cost</p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl text-center">
            <h3 className="text-3xl font-bold">Majorca</h3>
            <p>Port d'Alcúdia</p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">
          Life Aboard GENOVEVA
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {gallery.map((img) => (
            <img
              key={img}
              src={img}
              alt="Genoveva"
              className="rounded-2xl h-80 w-full object-cover shadow-xl"
            />
          ))}
        </div>
      </section>

      {/* UPGRADES */}
      <section className="bg-amber-500 text-black py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold mb-8">
            Major 2026 Investment
          </h2>

          <p className="text-2xl font-semibold mb-8">
            Over £30,000 invested before the 2026 season.
          </p>

          <div className="grid md:grid-cols-2 gap-6 text-lg">
            <ul className="space-y-3">
              <li>✓ New flybridge teak decking</li>
              <li>✓ Engines removed and overhauled</li>
              <li>✓ New engine wiring harnesses</li>
            </ul>

            <ul className="space-y-3">
              <li>✓ New sump gaskets</li>
              <li>✓ New master cabin linings</li>
              <li>✓ Williams tender overhaul</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SPECIFICATION */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-10">
            Yacht Specification
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <ul className="space-y-3">
              <li>Twin Volvo Penta 715hp engines</li>
              <li>Radar & chart plotter</li>
              <li>Generator</li>
              <li>Full air conditioning</li>
              <li>Reversing camera</li>
            </ul>

            <ul className="space-y-3">
              <li>Williams 325 Tender</li>
              <li>Remote controlled passerelle</li>
              <li>Bose entertainment system</li>
              <li>Dishwasher & washing machine</li>
              <li>Luxury saloon & flybridge</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-slate-900 py-20 px-6 text-center">
        <h2 className="text-5xl font-bold mb-6">
          Contact Darrell
        </h2>

        <p className="text-2xl mb-2">07799 733587</p>
        <p className="text-xl mb-10">charlyiiv@hotmail.com</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+447799733587"
            className="rounded-full bg-amber-500 px-8 py-4 font-bold text-black"
          >
            Call
          </a>

          <a
            href="https://wa.me/447799733587"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-green-600 px-8 py-4 font-bold"
          >
            WhatsApp
          </a>

          <a
            href="mailto:charlyiiv@hotmail.com"
            className="rounded-full border border-white px-8 py-4 font-bold"
          >
            Email
          </a>
        </div>
      </section>

      {/* FLOATING WHATSAPP */}
      <a
        href="https://wa.me/447799733587"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-600 px-6 py-4 rounded-full font-bold shadow-2xl"
      >
        WhatsApp
      </a>

    </main>
  );
}