
export const metadata={title:"Pricing — SOYL"};
export default function P(){
  return (
    <section className="container py-16">
      <h1 className="h1">Simple pricing</h1>
      <p className="lead mt-2">UPI, cards, or net‑banking. GST invoice provided.</p>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        <div className="card p-6"><h3 className="h3">Lite</h3><div className="mt-2 text-3xl font-semibold">₹399</div><ul className="mt-4 space-y-2 text-sm"><li>• 16 pages</li><li>• Softcover</li><li>• Bilingual captions</li><li>• Economy shipping</li></ul><button className="btn btn-primary mt-6 w-full">Choose</button></div>
        <div className="card p-6"><h3 className="h3">Classic</h3><div className="mt-2 text-3xl font-semibold">₹599</div><ul className="mt-4 space-y-2 text-sm"><li>• 24 pages</li><li>• Softcover/Paperback</li><li>• Bilingual story text</li><li>• Sticker mini‑pack</li></ul><button className="btn btn-primary mt-6 w-full">Choose</button></div>
        <div className="card p-6"><h3 className="h3">Premium</h3><div className="mt-2 text-3xl font-semibold">₹899</div><ul className="mt-4 space-y-2 text-sm"><li>• 32 pages</li><li>• Hardback</li><li>• Editor polish included</li><li>• Gift box add‑on</li></ul><button className="btn btn-primary mt-6 w-full">Choose</button></div>
      </div>
      <p className="text-xs text-slate-500 mt-4">Prices include taxes where applicable; shipping options shown at checkout.</p>
    </section>
  )
}
