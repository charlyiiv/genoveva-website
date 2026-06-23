export default function Home() {
const gallery = [
"/genoveva-1.jpg",
"/genoveva-2.jpg",
"/genoveva-3.jpg",
"/genoveva-4.jpg",
"/genoveva-5.jpg",
"/genoveva-6.jpg",
"/genoveva-7.jpg",
"/genoveva-8.jpg",
"/genoveva-9.jpg",
"/genoveva-10.jpg",
"/genoveva-11.jpg",
"/genoveva-tender.jpg",
];

const weeks = [
"W/C 2nd March",
"W/C 23rd March",
"W/C 1st June",
"W/C 8th June",
"W/C 27th July",
"W/C 7th September",
];

return ( <main className="bg-[#06111f] text-white">
<section
className="relative min-h-screen bg-cover bg-center flex items-center justify-center text-center"
style={{ backgroundImage: "url('/genoveva-1.jpg')" }}
> <div className="absolute inset-0 bg-black/65"></div>

```
    <div className="relative z-10 max-w-6xl px-6">
      <p className="uppercase tracking-[0.35em] text-sm text-amber-300 mb-6">
        Fairline Squadron 58 • Majorca Yacht Share
      </p>

      <div className="inline-block rounded-full bg-amber-500 px-6 py-2 text-black font-bold mb-8">
        SHARE COST ONLY £51,500
      </div>

      <h1 className="text-6xl md:text-9xl font-bold tracking-wide mb-8">
        GENOVEVA
      </h1>

      <p className="text-2xl md:text-4xl text-slate-100 mb-8">
        Own the Majorca Yacht Lifestyle
      </p>

      <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-300 mb-10">
        A rare 1/8 ownership share in a beautifully maintained 2005 Fairline
        Squadron 58 based in Port d&apos;Alcúdia, Majorca — offering six
        weeks annual use without the full cost of sole ownership.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
  href="/details"
  className="rounded-full border border-white px-6 py-3"
>
  Full Details
</a>
        <a href="tel:+447799733587" className="rounded-full bg-amber-500 px-8 py-4 font-bold text-black">
          Call Us
        </a>
        <a href="https://wa.me/447799733587" target="_blank" rel="noopener noreferrer" className="rounded-full bg-green-600 px-8 py-4 font-bold">
          WhatsApp Us
        </a>
        <a href="mailto:charlyiiv@hotmail.com" className="rounded-full border border-white px-8 py-4 font-bold">
          Email Enquiry
        </a>
      </div>
    </div>
  </section>

  <section className="py-20 px-6 bg-[#081826]">
    <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">
      {[
        ["1/8", "Ownership Share"],
        ["6", "Weeks Per Year"],
        ["£480", "Monthly Running Costs"],
        ["£30k+", "2026 Investment"],
      ].map(([title, text]) => (
        <div key={title} className="rounded-2xl bg-white/10 p-8 text-center border border-white/10">
          <h3 className="text-4xl font-bold text-amber-300">{title}</h3>
          <p className="mt-3 text-slate-300">{text}</p>
        </div>
      ))}
    </div>
  </section>

  <section className="py-24 px-6 bg-slate-950">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-5xl font-bold text-center mb-10">Watch GENOVEVA</h2>
      <video controls className="w-full rounded-3xl shadow-2xl" poster="/genoveva-1.jpg">
        <source src="/genoveva-video.mp4" type="video/mp4" />
        Your browser does not support video playback.
      </video>
    </div>
  </section>

  <section className="py-24 px-6">
    <div className="max-w-5xl mx-auto text-center">
      <p className="uppercase tracking-[0.3em] text-amber-300 text-sm mb-6">
        Owner&apos;s Perspective
      </p>
      <h2 className="text-4xl md:text-6xl font-bold mb-8">
        Not just a boat — one of the best organised syndicates in Majorca.
      </h2>
      <p className="text-xl text-slate-300 leading-relaxed">
        I have personally owned a share for five fantastic years and it has
        been an incredible experience. When comparing boat shares, the most
        important factor is not only the yacht itself — it is the day-to-day
        care, maintenance and management. This syndicate truly excels.
      </p>
    </div>
  </section>

  <section className="max-w-7xl mx-auto px-6 py-24">
    <h2 className="text-5xl font-bold text-center mb-14">
      Life Aboard GENOVEVA
    </h2>

    <div className="grid md:grid-cols-3 gap-6">
      {gallery.map((img) => (
        <img
          key={img}
          src={img}
          alt="GENOVEVA yacht"
          className="rounded-3xl h-80 w-full object-cover shadow-2xl hover:scale-[1.02] transition"
        />
      ))}
    </div>
  </section>

  <section className="bg-amber-500 text-black py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <p className="uppercase tracking-[0.3em] text-sm mb-4">
        New for 2026
      </p>
      <h2 className="text-5xl md:text-6xl font-bold mb-8">
        Major upgrades already completed
      </h2>
      <p className="text-2xl font-semibold mb-12">
        Over £30,000 invested, significantly enhancing reliability, safety
        and long-term value.
      </p>

      <div className="grid md:grid-cols-2 gap-6 text-lg font-medium">
        <ul className="space-y-4">
          <li>✓ Engines lifted and fully overhauled</li>
          <li>✓ New engine wiring harnesses installed</li>
          <li>✓ New sump gaskets fitted</li>
          <li>✓ New teak decking installed on flybridge</li>
        </ul>
        <ul className="space-y-4">
          <li>✓ New head and wall linings to master cabin</li>
          <li>✓ Williams tender full service and overhaul</li>
          <li>✓ Improved reliability for incoming owner</li>
          <li>✓ No disruption or upfront capital expenditure required</li>
        </ul>
      </div>
    </div>
  </section>

  <section className="py-24 px-6 bg-[#081826]">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-5xl font-bold mb-12">Yacht Specification</h2>

      <div className="grid md:grid-cols-4 gap-6">
        {[
          {
            title: "Performance",
            items: ["Twin Volvo Penta 715hp engines", "Generator", "Full air conditioning", "Reversing camera"],
          },
          {
            title: "Navigation",
            items: ["Radar", "Chart plotter", "Full navigation suite", "Upper and lower helm stations"],
          },
          {
            title: "Interior",
            items: ["Leather saloon seating", "Pop-up TV", "Bose DVD & radio", "Fully equipped galley"],
          },
          {
            title: "Exterior",
            items: ["Flybridge seating", "Electric BBQ & fridge", "Remote passerelle", "Williams 325 tender"],
          },
        ].map((section) => (
          <div key={section.title} className="rounded-2xl bg-white/10 p-7 border border-white/10">
            <h3 className="text-2xl font-bold text-amber-300 mb-5">
              {section.title}
            </h3>
            <ul className="space-y-3 text-slate-300">
              {section.items.map((item) => (
                <li key={item}>✓ {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>

  <section className="py-24 px-6">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
      <div>
        <p className="uppercase tracking-[0.3em] text-amber-300 text-sm mb-5">
          Accommodation
        </p>
        <h2 className="text-5xl font-bold mb-8">
          Space for family, friends and extended cruising.
        </h2>
        <ul className="space-y-4 text-lg text-slate-300">
          <li>✓ Master cabin with double bed and en-suite</li>
          <li>✓ Port double cabin with en-suite</li>
          <li>✓ Starboard twin cabin</li>
          <li>✓ Crew cabin with two single beds</li>
          <li>✓ Two heads creating en-suite facilities</li>
          <li>✓ Utility room with additional fridge and washing machine</li>
        </ul>
      </div>

      <img
        src="/genoveva-4.jpg"
        alt="GENOVEVA accommodation"
        className="rounded-3xl shadow-2xl w-full h-[520px] object-cover"
      />
    </div>
  </section>

  <section className="py-24 px-6 bg-slate-900">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
      <img
        src="/genoveva-2.jpg"
        alt="Majorca yacht lifestyle"
        className="rounded-3xl shadow-2xl w-full h-[520px] object-cover"
      />

      <div>
        <p className="uppercase tracking-[0.3em] text-amber-300 text-sm mb-5">
          Cruising the Balearics
        </p>
        <h2 className="text-5xl font-bold mb-8">
          Crystal-clear calas, marinas and unforgettable days at sea.
        </h2>
        <p className="text-lg text-slate-300 leading-relaxed mb-6">
          From Port d&apos;Alcúdia you have immediate access to beautiful
          anchorages, excellent restaurants, world-class marinas and
          unforgettable Balearic cruising. Menorca is an easy hop away and
          Alcúdia Old Town is only a 15-minute walk from the marina.
        </p>
        <p className="text-lg text-slate-300 leading-relaxed">
          Boating in the Balearics is simply unforgettable — from
          crystal-clear cala anchorages to waterfront dining just metres
          from the pontoon.
        </p>
      </div>
    </div>
  </section>

  <section className="py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-5xl font-bold text-center mb-12">
        Allocated 2026 Weeks
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {weeks.map((week) => (
          <div key={week} className="rounded-2xl bg-white/10 border border-white/10 p-8 text-center text-xl font-bold">
            {week}
          </div>
        ))}
      </div>

      <p className="mt-10 text-center text-slate-300 text-lg">
        2027 weeks are yet to be chosen — buy now to secure your preferred
        dates. Additional weeks and swaps are sometimes available by private
        agreement between owners.
      </p>
    </div>
  </section>

  <section className="py-24 px-6 bg-[#081826]">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
      <div className="rounded-3xl bg-white/10 p-10 border border-white/10">
        <h2 className="text-4xl font-bold mb-6">Syndicate Information</h2>
        <ul className="space-y-4 text-slate-300 text-lg">
          <li>✓ Well-established, friendly group of owners</li>
          <li>✓ Nominated boat manager and assistant manager</li>
          <li>✓ Mixed age group allowing fair week selection</li>
          <li>✓ Private owners&apos; Facebook group with manuals and videos</li>
          <li>✓ Professionally cleaned every Monday with fresh bedding and towels</li>
        </ul>
      </div>

      <div className="rounded-3xl bg-white/10 p-10 border border-white/10">
        <h2 className="text-4xl font-bold mb-6">Ownership & Costs</h2>
        <ul className="space-y-4 text-slate-300 text-lg">
          <li>✓ £480 per month running costs</li>
          <li>✓ Approx £2,000 annual winter cash call</li>
          <li>✓ Share registered with the Maritime & Coastguard Agency</li>
          <li>✓ Bill of Sale and Declaration of Eligibility completed</li>
          <li>✓ Funds handled via the syndicate nominated bank account</li>
        </ul>
      </div>
    </div>
  </section>

  <section className="py-28 px-6 text-center bg-black">
    <p className="uppercase tracking-[0.3em] text-amber-300 text-sm mb-6">
      Enquiries
    </p>

    <h2 className="text-5xl md:text-7xl font-bold mb-8">
      Contact Us
    </h2>

    <p className="max-w-3xl mx-auto text-xl text-slate-300 mb-10">
      Full syndicate information, ownership documents, operating costs and
      viewing arrangements are available on request.
    </p>

    <p className="text-2xl mb-2">07799 733587</p>
    <p className="text-xl mb-10">charlyiiv@hotmail.com</p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a href="tel:+447799733587" className="rounded-full bg-amber-500 px-8 py-4 font-bold text-black">
        Call Us
      </a>
      <a href="https://wa.me/447799733587" target="_blank" rel="noopener noreferrer" className="rounded-full bg-green-600 px-8 py-4 font-bold">
        WhatsApp Us
      </a>
      <a href="mailto:charlyiiv@hotmail.com" className="rounded-full border border-white px-8 py-4 font-bold">
        Email Enquiry
      </a>
    </div>
  </section>

  <a
    href="https://wa.me/447799733587"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 rounded-full bg-green-600 px-6 py-4 font-bold shadow-2xl"
  >
    WhatsApp
  </a>
</main>

);
}