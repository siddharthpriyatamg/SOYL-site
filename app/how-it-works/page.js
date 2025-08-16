
export const metadata = { title: 'How it works — SOYL' }
const Step = ({num, title, children}) => (
  <div className="card p-6"><div className="text-soyl-700 text-sm font-semibold">Step {num}</div><h3 className="h3 mt-1">{title}</h3><div className="prose prose-slate mt-3 max-w-none">{children}</div></div>
)
export default function How(){
  return (
    <section className="container py-16">
      <h1 className="h1">From voice + photos → a bilingual, human‑edited hardback</h1>
      <p className="lead mt-3">A judge‑friendly, end‑to‑end view of the SOYL prototype.</p>
      <div className="mt-10 grid md:grid-cols-2 gap-6">
        <Step num={1} title="Capture (2–10 minutes)"><ul><li>Mobile web app (no install).</li><li>Record a short voice note; upload 20–40 photos.</li><li>Kid Mode: verifiable consent, name/pronouns, language.</li><li>Pick tone/moral, festival wrapper, and bilingual pair.</li></ul></Step>
        <Step num={2} title="Understanding the memory (seconds)"><ul><li>Transcription + tagging of names/relations/places/dates.</li><li>Timeline builder clusters photos and picks key frames.</li></ul></Step>
        <Step num={3} title="Drafting the story (~30–60s)"><ul><li>3‑act children’s story with scene cards.</li><li>Bilingual text with culturally accurate phrasing.</li><li>Safety pass for brand/IP prompts and sensitive content.</li></ul></Step>
        <Step num={4} title="Auto‑layout to print spec (~10–20s)"><ul><li>Templates: full‑bleed, collage, text‑heavy.</li><li>Indian scripts line breaking; English + local balance.</li><li>Print‑ready preview (A5/A5+, 16/24/32 pages).</li></ul></Step>
        <Step num={5} title="Human‑in‑the‑loop polish (10–25 minutes)"><ul><li>Editor checklist for tone, names, translations, continuity.</li><li>“Story DNA” keeps future books consistent.</li><li>Private page‑by‑page preview for approval.</li></ul></Step>
        <Step num={6} title="Order & fulfilment (72h express or free economy)"><ul><li>Plans (₹399/₹599/₹899) + keepsakes/gift box.</li><li>UPI/cards; GST invoice with HSN mapping.</li><li>Domestic print; zone‑based shipping.</li></ul></Step>
        <Step num={7} title="Privacy, safety, and rights"><ul><li>Private by default; share via flipbook link.</li><li>Kid‑safe: consent, deletion, no ads/tracking on child profiles.</li><li>IP guardrails; human review before print.</li><li>Opt‑in anonymised model improvement only.</li></ul></Step>
        <Step num={8} title="Prototype status"><ul><li><b>Working:</b> capture, bilingual drafts, auto‑layout, editorial tools, private preview, ordering, one print partner.</li><li><b>In progress:</b> more languages, festival packs, address validation, PTA dashboard.</li><li><b>Manual bridges:</b> 10–25 min editor polish per book.</li></ul></Step>
      </div>
      <div className="mt-10 card p-6"><h3 className="h3">Demo path (2 minutes)</h3><ol className="list-decimal pl-6 mt-2"><li>Choose “Birthday at Nana’s”, record 30s, upload 12 photos.</li><li>Pick English + Telugu, select “Brave & Kind”.</li><li>Preview 16‑page softcover.</li><li>Approve → Classic ₹599 → address → pay (sandbox).</li><li>Receive private flipbook link + SLA badge.</li></ol></div>
    </section>
  )
}
