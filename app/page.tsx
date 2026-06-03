export default function Home() {
const gallery = [
"/genoveva-1.jpg",
"/genoveva-2.jpg",
"/genoveva-3.jpg",
"/genoveva-4.jpg",
"/genoveva-5.jpg",
"/genoveva-tender.jpg",
];

return ( <main className="min-h-screen bg-slate-950 text-white"> <section className="relative px-6 py-24 text-center"> <h1 className="text-6xl md:text-8xl font-bold tracking-wider">
GENOVEVA </h1>

```
    <p className="mt-6 text-2xl text-slate-300">
      Fairline Squadron 58 • Port d'Alcúdia • Majorca
    </p>

    <p className="mt-8 max-w-3xl mx-auto text-xl text-slate-400">
      Own a 1/8 share in one of the best managed yacht syndicates in
      Majorca and enjoy six weeks per year aboard a stunning Fairline
      Squadron 58.
    </p>

    <div className="mt-10 inline-block rounded-xl bg-amber-500 px-8 py-4 text-black font-bold text-2xl">
      Reduced to £51,500
    </div>
  </section>

  <section className="max-w-7xl mx-auto px-6 pb-20">
    <div className="grid md:grid-cols-3 gap-6">
      {gallery.map((img) => (
        <img
          key={img}
          src={img}
          alt="Genoveva"
          className="rounded-2xl shadow-2xl w-full h-80 object-cover"
        />
      ))}
    </div>
  </section>

  <section className="bg-slate-900 py-20 px-6">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold mb-8">
        Why This Share Is Different
      </h2>

      <div className="grid md:grid-cols-2 gap-8 text-lg">
        <div>
          <ul className="space-y-3">
            <li>✓ 1/8 ownership share</li>
            <li>✓ Six allocated weeks per year</li>
            <li>✓ £480 monthly running costs</li>
            <li>✓ Approx £2,000 annual winter cash call</li>
            <li>✓ Professionally managed syndicate</li>
          </ul>
        </div>

        <div>
          <ul className="space-y-3">
            <li>✓ Twin Volvo Penta 715hp engines</li>
            <li>✓ Williams 325 Tender</li>
            <li>✓ Full air conditioning</li>
            <li>✓ Generator</li>
            <li>✓ Radar & chart plotter</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

<section className="py-20 px-6 text-center">
  <h2 className="text-4xl font-bold mb-8">
    Contact Darrell
  </h2>

  <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
    <a
      href="tel:+447799733587"
      className="rounded-full bg-amber-500 px-8 py-4 font-bold text-black hover:bg-amber-400"
    >
      Call Darrell
    </a>

    <a
      href="https://wa.me/447799733587"
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-full bg-green-600 px-8 py-4 font-bold text-white hover:bg-green-500"
    >
      WhatsApp Darrell
    </a>

    <a
      href="mailto:charlyiiv@hotmail.com"
      className="rounded-full border border-white px-8 py-4 font-bold text-white hover:bg-white hover:text-black"
    >
      Email Enquiry
    </a>
  </div>

  <p className="mt-8 text-2xl">
    07799 733587
  </p>

  <p className="mt-4 text-slate-400">
    Viewings, ownership details and syndicate information available on request.
  </p>
</section>
    <p className="mt-4 text-slate-400">
      Viewings, ownership details and syndicate information available on request.
    </p>
  </section>
</main>

);
}

