"use client"

import { useEffect, useState } from "react"
import Script from "next/script"
import Link from "next/link"
import {
  CheckCircle2,
  Star,
  Shield,
  Clock,
  ChevronRight,
  ShoppingBag,
  ExternalLink,
  BadgeCheck,
  AlertCircle,
  Leaf,
  FlaskConical,
  TrendingUp,
  ArrowRight,
} from "lucide-react"

// ... (שאר ה-Types וה-Data נשארים אותו דבר)

export default function BestElemsSkincorePage() {
  const [showStickyBar, setShowStickyBar] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyBar(window.scrollY > 600)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="bg-stone-50 min-h-screen font-body">
      {/* ── Google Ads Tag ─────────────────────────────────────── */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-18146954009"
        strategy="afterInteractive"
      />
      <Script id="google-ads-elemis" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-18146954009');
        `}
      </Script>

      {/* ── JSON-LD Schema ─────────────────────────────────────── */}
      <Script
        id="elemis-product-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />

      {/* שאר ה-HTML של הדף ממשיך מכאן... */}
      <section className="bg-stone-900 text-white">
        {/* ... */}
      </section>
    </div>
  )
}
