
import './globals.css'
import { Inter, Noto_Serif_Telugu } from 'next/font/google'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })
const telugu = Noto_Serif_Telugu({ weight: ['400','700'], subsets: ['telugu'] })
export const metadata = { title:'SOYL — Story Of Your Life', description:'From 10 minutes of voice + photos → a bilingual, human-edited hardback.' }
export default function RootLayout({ children }){
  return (
    <html lang="en" className={`${inter.className} ${telugu.className}`}>
      <body>
        <header className="border-b border-slate-200">
          <nav className="container flex items-center justify-between py-4">
            <Link href="/" className="flex items-center gap-2"><div className="h-9 w-9 rounded-xl bg-soyl-700 text-white grid place-items-center font-bold">S</div><span className="font-semibold">SOYL</span></Link>
            <div className="hidden md:flex items-center gap-6 text-sm">
              <Link href="/how-it-works">How it works</Link><Link href="/demo">Demo</Link><Link href="/pricing">Pricing</Link><Link href="/safety">Safety</Link><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/contact">Contact</Link>
            </div>
            <div className="flex items-center gap-2"><Link href="/demo" className="btn btn-primary">Try the Demo</Link></div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="mt-20 border-t border-slate-200">
          <div className="container py-10 grid md:grid-cols-4 gap-8 text-sm">
            <div><div className="flex items-center gap-2 mb-2"><div className="h-8 w-8 rounded-xl bg-soyl-700 text-white grid place-items-center font-bold">S</div><span className="font-semibold">SOYL</span></div><p className="text-slate-600">From 10 minutes of voice + photos → a bilingual, human‑edited hardback.</p></div>
            <div><h4 className="font-semibold mb-2">Product</h4><ul className="space-y-1"><li><Link href="/how-it-works">How it works</Link></li><li><Link href="/demo">Demo</Link></li><li><Link href="/pricing">Pricing</Link></li></ul></div>
            <div><h4 className="font-semibold mb-2">Company</h4><ul className="space-y-1"><li><Link href="/contact">Contact</Link></li></ul></div>
            <div><h4 className="font-semibold mb-2">Legal</h4><ul className="space-y-1"><li><Link href="/privacy">Privacy</Link></li><li><Link href="/safety">Safety</Link></li><li><Link href="/terms">Terms</Link></li></ul></div>
          </div>
          <div className="border-t border-slate-200"><div className="container py-6 text-xs text-slate-500">© {new Date().getFullYear()} SOYL. All rights reserved.</div></div>
        </footer>
      </body>
    </html>
  )
}
