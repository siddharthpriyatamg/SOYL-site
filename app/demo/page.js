'use client'
import { useState } from 'react'

export default function Demo(){
  const [step,setStep]=useState(1);
  const [lang,setLang]=useState('English + Telugu');
  const [tone,setTone]=useState('Brave & Kind');
  const [photos,setPhotos]=useState(12);

  return (
    <section className="container py-16">
      <h1 className="h1">2-minute Demo</h1>
      <p className="lead mt-2">Simulate the flow judges will see.</p>

      {step===1 && (
        <div className="card p-6 mt-6">
          <h3 className="h3">1) Capture</h3>
          <div className="mt-3 grid sm:grid-cols-3 gap-4">
            <div className="card p-4">
              <label className="text-sm font-medium">Bilingual pair</label>
              <select className="mt-1 w-full border rounded-lg p-2" value={lang} onChange={e=>setLang(e.target.value)}>
                <option>English + Telugu</option>
                <option>English + Hindi</option>
                <option>English + Tamil</option>
              </select>
            </div>
            <div className="card p-4">
              <label className="text-sm font-medium">Tone</label>
              <select className="mt-1 w-full border rounded-lg p-2" value={tone} onChange={e=>setTone(e.target.value)}>
                <option>Brave & Kind</option>
                <option>Grateful</option>
                <option>Curious</option>
              </select>
            </div>
            <div className="card p-4">
              <label className="text-sm font-medium">Photos</label>
              <input type="range" min="6" max="40" value={photos} onChange={e=>setPhotos(parseInt(e.target.value))} className="w-full" />
              <div className="text-sm mt-1">{photos} photos</div>
            </div>
          </div>
          <button className="btn btn-primary mt-4" onClick={()=>setStep(2)}>Generate preview</button>
        </div>
      )}

      {step===2 && (
        <div className="card p-6 mt-6">
          <h3 className="h3">2) Preview</h3>
          <div className="mt-4 grid md:grid-cols-2 gap-6">
            <div className="rounded-xl bg-gradient-to-br from-soyl-100 to-soyl-300 aspect-[3/2] grid place-items-center">📖</div>
            <div>
              <ul className="space-y-2 text-sm">
                <li>Language: <strong>{lang}</strong></li>
                <li>Tone: <strong>{tone}</strong></li>
                <li>Photo count: <strong>{photos}</strong></li>
              </ul>
              <button className="btn btn-primary mt-4" onClick={()=>setStep(3)}>Approve & continue</button>
            </div>
          </div>
        </div>
      )}

      {step===3 && (
        <div className="card p-6 mt-6">
          <h3 className="h3">3) Checkout (sandbox)</h3>
          <div className="mt-4 grid sm:grid-cols-3 gap-4">
            {['Lite ₹399','Classic ₹599','Premium ₹899'].map((label) => (
              <button key={label} className="btn" onClick={()=>setStep(4)}>{label}</button>
            ))}
          </div>
        </div>
      )}

      {step===4 && (
        <div className="card p-6 mt-6">
          <h3 className="h3">🎉 All set</h3>
          <p className="mt-2">You’d now receive a private flipbook link and shipping SLA (sandbox).</p>
        </div>
      )}
    </section>
  );
}
