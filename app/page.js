
import Link from 'next/link'
export default function Page(){
  return (
    <section className="container py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="h1">Story Of Your Life — built for India</h1>
          <p className="lead mt-4">From <strong>10 minutes of voice + photos</strong> → a <strong>bilingual, human‑edited hardback</strong>. Fast, private, and kid‑safe.</p>
          <div className="mt-6 flex gap-3"><Link href="/demo" className="btn btn-primary">Try the 2‑minute Demo</Link><Link href="/how-it-works" className="btn">How it works</Link></div>
          <ul className="mt-8 grid sm:grid-cols-2 gap-4 text-sm">
            <li className="card p-4">🇮🇳 Bilingual (English + your family language)</li>
            <li className="card p-4">🔒 Private by default (no social feed)</li>
            <li className="card p-4">👪 Kid‑safe: parental controls & consent</li>
            <li className="card p-4">🚚 72‑hour express or free economy shipping</li>
          </ul>
        </div>
        <div className="card p-4"><div className="aspect-[3/2] rounded-xl bg-gradient-to-br from-soyl-100 to-soyl-300 grid place-items-center text-center p-6"><div><div className="text-6xl">📖</div><div className="mt-3 font-semibold">“Birthday at Nana’s” — 16‑page softcover</div><p className="text-slate-600">Preview shows bilingual captions and one full‑bleed hero page.</p></div></div></div>
      </div>
      <section className="mt-20">
        <h2 className="h2 mb-6">Why SOYL</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card p-6"><h3 className="h3 mb-2">Your memories, untrapped</h3><p>SOYL turns scattered photos and a short voice note into a keepsake book your family can hold.</p></div>
          <div className="card p-6"><h3 className="h3 mb-2">Culturally fluent</h3><p>English + your family language with kinship terms and festival context.</p></div>
          <div className="card p-6"><h3 className="h3 mb-2">Human edited</h3><p>Editors polish translations, check names, and keep continuity.</p></div>
        </div>
        <div className="mt-10"><Link href="/pricing" className="btn btn-primary">See Pricing</Link></div>
      </section>
    </section>
  )
}
