import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-8">
      <div className="max-w-5xl mx-auto px-4 text-center space-y-4">
        <p className="text-xs text-slate-400 leading-relaxed max-w-2xl mx-auto">
          <strong className="text-slate-600">Affiliate Disclosure:</strong>{" "}
          This article contains affiliate links. If you purchase through these
          links, Luxury Beauty may earn a commission at no additional cost to
          you. Our reviews are independently researched and reflect genuine
          expert opinions.{" "}
          <strong className="text-slate-600">
            As an Amazon Associate, we earn from qualifying purchases.
          </strong>{" "}
          Prices and availability are subject to change.
        </p>

        <p className="text-xs text-slate-400">
          © 2026 Luxury Beauty. All rights reserved.
        </p>

        <nav className="flex justify-center gap-4 text-xs text-slate-400" aria-label="Legal">
          <Link href="/blog/how-red-light-therapy-works" className="hover:text-slate-600 underline underline-offset-2 transition-colors">
            How Red Light Therapy Works
          </Link>
          <Link href="/privacy-policy" className="hover:text-slate-600 underline underline-offset-2 transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="hover:text-slate-600 underline underline-offset-2 transition-colors">
            Terms of Service
          </Link>
          <Link href="/affiliate-disclosure" className="hover:text-slate-600 underline underline-offset-2 transition-colors">
            Affiliate Disclosure
          </Link>
        </nav>
      </div>
    </footer>
  )
}
