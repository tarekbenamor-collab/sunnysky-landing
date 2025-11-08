import React, { useMemo, useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { Calendar, Instagram, MapPin, Smartphone, Mail, Check, Star } from "lucide-react";

// ---- EDIT THESE FIRST ----
const PHONE_WHATSAPP = "+34600000000"; // your WhatsApp number
const EMAIL = "hello@sunnysky.house";  // your booking email
const IG_URL = "https://www.instagram.com/sunnyskyhouse?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";

const PROPERTIES = [
  {
    key: "muro",
    name: "Villa MURO",
    area: "Cala Saona, Formentera",
    bookingLink: "https://your-direct-booking-link.example/muro",
    mapsUrl: "https://goo.gl/maps/WZ6nb9NQFJf7zLP98",
    taxiRef: "2014",
    wifi: "Formentera",
    checkIn: "16:00",
    checkOut: "11:00",
    sleeps: 4,
    beds: "2 bedrooms",
    baths: 1,
    highlights: [
      "5 min to Cala Saona",
      "Terrace with sunset views",
      "Fully equipped kitchen",
      "Strong Wi‑Fi"
    ],
    gallery: [
      "/images/muro_1.jpg",
      "/images/muro_2.jpg",
      "/images/muro_3.jpg",
      "/images/muro_4.jpg",
      "/images/muro_5.jpg"
    ],
  },
  {
    key: "aguamarine",
    name: "Villa AGUAMARINE",
    area: "Cala Saona, Formentera",
    bookingLink: "https://your-direct-booking-link.example/aguamarine",
    mapsUrl: "https://bit.ly/3SkfC04",
    taxiRef: "6602",
    wifi: "Formentera",
    checkIn: "16:00",
    checkOut: "11:00",
    sleeps: 4,
    beds: "2 bedrooms",
    baths: 1,
    highlights: [
      "Short walk to beach",
      "Calm autumn colours",
      "Private patio & garden",
      "Air‑conditioning"
    ],
    gallery: [
      "/images/agua_1.jpg",
      "/images/agua_2.jpg",
      "/images/agua_3.jpg",
      "/images/agua_4.jpg",
      "/images/agua_5.jpg"
    ],
  },
  {
    key: "mattelito",
    name: "Villa MATTELITO",
    area: "Playa Migjorn, Formentera",
    bookingLink: "https://your-direct-booking-link.example/mattelito",
    mapsUrl: "https://goo.gl/maps/BqbGS4JEzjqoMrmz6",
    taxiRef: "6989",
    wifi: "formentera2022",
    checkIn: "16:00",
    checkOut: "11:00",
    sleeps: 4,
    beds: "2 bedrooms",
    baths: 1,
    highlights: [
      "Steps to Playa Migjorn",
      "Next to Vogamarí & Blue Bar",
      "Outdoor dining area",
      "Washer & dishwasher"
    ],
    gallery: [
      "/images/matt_1.jpg",
      "/images/matt_2.jpg",
      "/images/matt_3.jpg",
      "/images/matt_4.jpg",
      "/images/matt_5.jpg"
    ],
  },
];

const AIRBNB_LINKS = [
  { title: "Airbnb – Muro", url: "https://www.airbnb.com/l/HMxCtuGZ" },
  { title: "Airbnb – Aguamarine", url: "https://www.airbnb.com/l/MxOK9WK0" },
  { title: "Airbnb – Mattelito", url: "https://www.airbnb.com/l/483GPZZT" },
];

// ---- HELPERS ----
const waLink = (text: string) =>
  `https://wa.me/${PHONE_WHATSAPP.replace(/\D/g, "")}?text=${encodeURIComponent(text)}`;

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: "Sunny Sky Villas Formentera",
    url: "https://sunnysky.house/",
    logo: "https://sunnysky.house/logo.png",
    sameAs: [IG_URL],
    address: {
      "@type": "PostalAddress",
      addressCountry: "ES",
      addressRegion: "Illes Balears",
      addressLocality: "Formentera"
    }
  },
  ...PROPERTIES.map((p) => ({
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: p.name,
    address: {
      "@type": "PostalAddress",
      addressLocality: p.area,
      addressCountry: "ES",
    },
    telephone: PHONE_WHATSAPP,
    url: `https://sunnysky.house/#${p.key}`,
    amenityFeature: p.highlights.map((h) => ({ "@type": "LocationFeatureSpecification", name: h })),
    checkinTime: p.checkIn,
    checkoutTime: p.checkOut,
    maximumAttendeeCapacity: p.sleeps,
  })),
];

function Navbar() {
  return (
    <div className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#top" className="font-bold text-xl tracking-tight">Sunny Sky</a>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#villas" className="hover:opacity-70">Villas</a>
          <a href="#book" className="hover:opacity-70">Book</a>
          <a href={IG_URL} target="_blank" className="inline-flex items-center gap-2 hover:opacity-70"><Instagram size={16}/>Instagram</a>
          <a href="#contact" className="hover:opacity-70">Contact</a>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 pt-10 pb-14 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">Formentera, slow days. <br/>Book your villa direct.</h1>
          <p className="mt-4 text-lg">Three cosy homes near Cala Saona and Migjorn. No platform fees. Fast confirmations. Local support.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#book" className="px-5 py-3 rounded-2xl bg-black text-white inline-flex items-center gap-2"><Calendar size={18}/>Book now</a>
            <a href={IG_URL} target="_blank" className="px-5 py-3 rounded-2xl border inline-flex items-center gap-2"><Instagram size={18}/>See Instagram</a>
          </div>
          <div className="mt-6 flex items-center gap-2 text-sm opacity-80"><Star size={16}/> Guests love our autumn colours and quiet vibes.</div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="aspect-[4/3] rounded-2xl bg-gray-200"/>
          <div className="aspect-[4/3] rounded-2xl bg-gray-200"/>
          <div className="aspect-[4/3] rounded-2xl bg-gray-200"/>
          <div className="aspect-[4/3] rounded-2xl bg-gray-200"/>
        </div>
      </div>
    </section>
  );
}

function Gallery({ images }: { images: string[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
      {images.map((src, i) => (
        <motion.img
          key={i}
          src={src}
          alt="Villa photo"
          className="aspect-[4/3] object-cover rounded-xl border"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.03 }}
        />
      ))}
    </div>
  );
}

function PropertyCard({ p }: { p: (typeof PROPERTIES)[number] }) {
  return (
    <section id={p.key} className="rounded-3xl p-5 md:p-8 border bg-white shadow-sm">
      <div className="flex flex-col md:flex-row md:items-start gap-6">
        <div className="md:w-1/2">
          <Gallery images={p.gallery} />
        </div>
        <div className="md:w-1/2">
          <h3 className="text-2xl font-bold">{p.name}</h3>
          <div className="mt-1 flex items-center gap-2 text-sm opacity-70"><MapPin size={16}/>{p.area}</div>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            <li className="flex items-center gap-2"><Check size={16}/> Sleeps {p.sleeps}</li>
            <li className="flex items-center gap-2"><Check size={16}/> {p.beds}</li>
            <li className="flex items-center gap-2"><Check size={16}/> {p.baths} bath</li>
            <li className="flex items-center gap-2"><Check size={16}/> Taxi ref: {p.taxiRef}</li>
            <li className="flex items-center gap-2"><Check size={16}/> Wi‑Fi: {p.wifi}</li>
            <li className="flex items-center gap-2"><Check size={16}/> Check‑in {p.checkIn}</li>
            <li className="flex items-center gap-2"><Check size={16}/> Check‑out {p.checkOut}</li>
          </ul>
          <div className="mt-4 grid gap-2 text-sm">
            {p.highlights.map((h, i) => (
              <div key={i} className="flex items-center gap-2"><Check size={16}/>{h}</div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={p.bookingLink} target="_blank" className="px-5 py-3 rounded-2xl bg-black text-white inline-flex items-center gap-2"><Calendar size={18}/>Book {p.name}</a>
            <a href={p.mapsUrl} target="_blank" className="px-5 py-3 rounded-2xl border inline-flex items-center gap-2"><MapPin size={18}/>Open map</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Villas() {
  return (
    <section id="villas" className="bg-gray-50 py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4 space-y-8">
        <h2 className="text-3xl font-bold">The Villas</h2>
        {PROPERTIES.map((p) => (
          <PropertyCard key={p.key} p={p} />
        ))}
      </div>
    </section>
  );
}

function BookNow() {
  const [message, setMessage] = useState("Hello Sunny Sky! I’d like to book from [dates] for [guests].");
  const combinedText = useMemo(() => message, [message]);

  return (
    <section id="book" className="py-12">
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="text-3xl font-bold">Book direct</h2>
          <p className="mt-2 text-lg">Best rate and fastest confirmation. Pay securely. Speak to a real person in minutes.</p>
          <div className="mt-6 grid gap-3">
            <a
              href={waLink(combinedText)}
              target="_blank"
              className="px-5 py-3 rounded-2xl bg-black text-white inline-flex items-center gap-2 w-fit"
            >
              <Smartphone size={18}/> WhatsApp us now
            </a>
            <a href={`mailto:${EMAIL}?subject=Sunny%20Sky%20Booking&body=${encodeURIComponent(combinedText)}`} className="px-5 py-3 rounded-2xl border inline-flex items-center gap-2 w-fit">
              <Mail size={18}/> Email request
            </a>
          </div>
          <div className="mt-6 text-sm opacity-70">
            Prefer instant checkout? Use the Book buttons inside each villa to open our direct booking page.
          </div>
          <div className="mt-4 text-sm">
            Or browse our Airbnb listings for extra reviews:
            <ul className="list-disc ml-5 mt-2">
              {AIRBNB_LINKS.map((l) => (
                <li key={l.url}><a href={l.url} target="_blank" className="underline hover:opacity-70">{l.title}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="rounded-3xl border p-5 bg-white shadow-sm">
          <label className="block text-sm mb-2">Your message</label>
          <textarea
            className="w-full min-h-[160px] rounded-xl border p-3 focus:outline-none"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className="mt-3 text-xs opacity-70">Tip: include dates, villa name, number of guests, and any special requests.</div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="border-t py-10">
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-3 gap-8">
        <div>
          <div className="font-bold text-lg">Sunny Sky</div>
          <p className="mt-2 text-sm opacity-80">Formentera holiday homes. Direct bookings, best price.</p>
          <a href={IG_URL} target="_blank" className="mt-3 inline-flex items-center gap-2 underline"><Instagram size={16}/>Instagram</a>
        </div>
        <div>
          <div className="font-semibold">Contact</div>
          <div className="mt-2 text-sm">
            WhatsApp: <a className="underline" target="_blank" href={waLink("Hola Sunny Sky!")}>{PHONE_WHATSAPP}</a><br/>
            Email: <a className="underline" href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </div>
        </div>
        <div>
          <div className="font-semibold">Useful</div>
          <ul className="mt-2 text-sm space-y-1">
            <li><a href="#villas" className="underline">Villas</a></li>
            <li><a href="#book" className="underline">Book</a></li>
            <li><a href="#top" className="underline">Back to top</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-10 text-center text-xs opacity-60">© {new Date().getFullYear()} Sunny Sky. All rights reserved.</div>
    </footer>
  );
}

export default function HomePage() {
  return (
    <div id="top" className="min-h-screen bg-white text-gray-900">
      <Head>
        <title>Sunny Sky Villas Formentera — Book Direct</title>
        <meta name="description" content="Three villas in Formentera. Book direct for the best rate. Fast confirmations, secure payments, instant WhatsApp support." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Sunny Sky Villas Formentera — Book Direct" />
        <meta property="og:description" content="Muro, Aguamarine, Mattelito. Direct bookings, best price, fast support." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sunnysky.house/" />
        <meta property="og:image" content="https://sunnysky.house/og-cover.jpg" />
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <Navbar />
      <Hero />
      <Villas />
      <BookNow />
      <Footer />
      <style jsx global>{`
        html, body { margin: 0; padding: 0; font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, Noto Sans, Apple Color Emoji, Segoe UI Emoji; }
        .border { border: 1px solid #e5e7eb; }
        .bg-white { background: #fff; }
        .bg-gray-50 { background: #f9fafb; }
        .bg-gray-200 { background: #e5e7eb; }
        .text-gray-900 { color: #111827; }
        .rounded-2xl { border-radius: 1rem; }
        .rounded-3xl { border-radius: 1.5rem; }
        .shadow-sm { box-shadow: 0 1px 2px rgba(0,0,0,0.04); }
        .mx-auto { margin-left: auto; margin-right: auto; }
        .max-w-6xl { max-width: 72rem; }
        .px-4 { padding-left: 1rem; padding-right: 1rem; }
        .py-3 { padding-top: 0.75rem; padding-bottom: 0.75rem; }
        .pt-10 { padding-top: 2.5rem; }
        .pb-14 { padding-bottom: 3.5rem; }
        .py-12 { padding-top: 3rem; padding-bottom: 3rem; }
        .md\:py-16 { padding-top: 4rem; padding-bottom: 4rem; }
        .grid { display: grid; }
        .gap-8 { gap: 2rem; }
        .gap-6 { gap: 1.5rem; }
        .gap-3 { gap: 0.75rem; }
        .gap-2 { gap: 0.5rem; }
        .items-center { align-items: center; }
        .items-start { align-items: flex-start; }
        .justify-between { justify-content: space-between; }
        .flex { display: flex; }
        .flex-col { flex-direction: column; }
        .flex-wrap { flex-wrap: wrap; }
        .md\:flex-row { }
        .md\:items-start { }
        .hidden { display: none; }
        @media(min-width: 768px) { .md\:grid-cols-2{grid-template-columns: repeat(2,minmax(0,1fr))} .md\:flex{display:flex} .md\:w-1\/2{width:50%} .md\:items-start{align-items:flex-start} .md\:text-5xl{font-size:3rem; line-height:1.1} .md\:py-16{} .md\:grid-cols-4{grid-template-columns: repeat(4,minmax(0,1fr))} }
        .text-4xl{font-size:2.25rem; line-height:1.2}
        .text-3xl{font-size:1.875rem; line-height:1.2}
        .text-2xl{font-size:1.5rem; line-height:1.2}
        .text-lg{font-size:1.125rem; line-height:1.6}
        .font-bold{font-weight:700}
        .font-semibold{font-weight:600}
        .leading-tight{line-height:1.1}
        .mt-1{margin-top:0.25rem}
        .mt-2{margin-top:0.5rem}
        .mt-3{margin-top:0.75rem}
        .mt-4{margin-top:1rem}
        .mt-6{margin-top:1.5rem}
        .mt-10{margin-top:2.5rem}
        .space-y-8 > * + * { margin-top: 2rem; }
        .underline { text-decoration: underline; }
        .sticky { position: sticky; }
        .top-0 { top: 0; }
        .z-40 { z-index: 40; }
        .bg-white\/80 { background: rgba(255,255,255,0.8); }
        .backdrop-blur { backdrop-filter: blur(6px); }
        .aspect-\[4\/3\] { aspect-ratio: 4 / 3; }
        .object-cover { object-fit: cover; }
        .w-full { width: 100%; }
        .min-h-\[160px\] { min-height: 160px; }
        .rounded-xl { border-radius: 0.75rem; }
        .focus\:outline-none:focus { outline: none; }
        .opacity-60 { opacity: 0.6; }
        .opacity-70 { opacity: 0.7; }
        .hover\:opacity-70:hover { opacity: 0.7; }
        .inline-flex { display: inline-flex; align-items: center; }
        .w-fit { width: fit-content; }
        .p-5 { padding: 1.25rem; }
        .md\:p-8 { padding: 2rem; }
        .rounded-2xl { border-radius: 1rem; }
        .bg-black { background: #000; }
        .text-white { color: #fff; }
        .border-b { border-bottom: 1px solid #e5e7eb; }
        .list-disc { list-style: disc; }
        .ml-5 { margin-left: 1.25rem; }
        .text-sm { font-size: 0.875rem; line-height:1.4}
        .text-xs { font-size: 0.75rem; line-height:1.2}
      `}</style>
    </div>
  );
}
