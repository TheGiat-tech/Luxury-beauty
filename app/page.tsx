"use client"

import { useEffect, useRef, useState } from "react"
import Script from "next/script"
import Link from "next/link"
import {
  CheckCircle2,
  XCircle,
  Star,
  Shield,
  Clock,
  ChevronRight,
  ShoppingBag,
  Award,
  ArrowRight,
  Sparkles,
  ExternalLink,
  BadgeCheck,
} from "lucide-react"

// ... (שאר ה-Types וה-Data נשארים אותו דבר)

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function Home() {
  const [activeProductId, setActiveProductId] = useState<string>(products[0].id)
  const [showStickyBar, setShowStickyBar] = useState(false)
  const productRefs = useRef<Map<string, Element>>(new Map())

  useEffect(() => {
    // ... (קוד ה-useEffect נשאר אותו דבר)
  }, [])

  const activeProduct = products.find((p) => p.id === activeProductId) ?? products[0]

  return (
    <div className="bg-stone-50 min-h-screen font-body">
      {/* ── Google Ads Tag ─────────────────────────────────────── */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-18146954009"
        strategy="afterInteractive"
      />
      <Script id="google-ads-home" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-18146954009');
        `}
      </Script>

      {/* ── JSON-LD Schema ─────────────────────────────────────── */}
      <Script
        id="product-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />

      {/* שאר ה-HTML של הדף ממשיך מכאן... */}
      <main className="max-w-5xl mx-auto px-4 py-10">
        {/* ... */}
      </main>
    </div>
  )
}
