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

// ─── Types ────────────────────────────────────────────────────────────────────

interface Product {
  id: string
  name: string
  focus: string
  edition: string
  image: string
  investment: string[]
  expertVerdict: string
  affiliateLink: string
}

// ─── Product Data (The Elite 4) ───────────────────────────────────────────────

const products: Product[] = [
  {
    id: "elemis-pro-collagen-marine-cream",
    name: "ELEMIS Pro-Collagen Marine Cream",
    focus: "The 14-Day Wrinkle Reducer",
    edition: "I",
    image: "https://m.media-amazon.com/images/I/61EqS5g3CeL._AC_UF350,350_QL80_.jpg",
    investment: [
      "Clinically proven to reduce wrinkles visible in as little as 14 days",
      "Padina Pavonica marine algae delivers deep cellular hydration",
      "Iconic gel-cream texture absorbs instantly without residue",
      "The world's best-selling luxury anti-aging moisturizer",
    ],
    expertVerdict:
      "This is not merely a moisturizer — it is a clinical intervention in a jar. The Pro-Collagen Marine Cream remains the gold standard of British luxury skincare, delivering measurable wrinkle reduction that no competitor at this tier has matched. For those serious about anti-aging, this is the non-negotiable foundation of any prestige routine.",
    affiliateLink:
      "https://www.amazon.com/dp/B001G7ONAO?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.5MMA1ASZBI1N&linkCode=tr1&tag=123401acf-20&linkId=amzn1.campaign.5MMA1ASZBI1N_1776970485925",
  },
  {
    id: "elemis-pro-collagen-night-cream",
    name: "ELEMIS Pro-Collagen Night Cream",
    focus: "Cellular Regeneration Overnight",
    edition: "II",
    image: "https://m.media-amazon.com/images/I/61-Xb8rUbbL._AC_UF1000,1000_QL80_.jpg",
    investment: [
      "Formulated for peak skin regeneration during sleep cycles",
      "Rich but breathable — won't clog pores or feel heavy",
      "Wakes skin with a visibly plumper, more luminous complexion",
      "The ideal nocturnal partner to the daytime Marine Cream",
    ],
    expertVerdict:
      "Skin regenerates up to three times faster overnight. The Pro-Collagen Night Cream is engineered to capitalize on this biological window, flooding cells with marine-derived actives during the hours they're most receptive. The result is a morning complexion that visibly resets — firmer, smoother, and radiant with restored moisture.",
    affiliateLink:
      "https://www.amazon.com/dp/B00175YVOS?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.5MMA1ASZBI1N&linkCode=tr1&tag=123401acf-20&linkId=amzn1.campaign.5MMA1ASZBI1N_1776970317195",
  },
  {
    id: "elemis-pro-collagen-marine-cream-spf30",
    name: "ELEMIS Pro-Collagen Marine Cream SPF 30",
    focus: "Superior Daily Shield",
    edition: "III",
    image: "https://m.media-amazon.com/images/I/61EU70GZWTL._AC_UF350,350_QL80_.jpg",
    investment: [
      "Broad-spectrum SPF 30 with zero white cast — invisible on all skin tones",
      "Full Pro-Collagen anti-aging actives in every application",
      "Featherlight texture sits perfectly under makeup",
      "Combines two essential steps into one luxurious formula",
    ],
    expertVerdict:
      "UV damage accounts for up to 90% of visible aging. The Marine Cream SPF 30 closes the loop — delivering the same legendary Pro-Collagen complex alongside serious daily sun defense. It is the most intelligent single-step investment in the line, and its seamless finish makes compliance effortless.",
    affiliateLink:
      "https://www.amazon.com/dp/B07BMBQG73?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.5MMA1ASZBI1N&linkCode=tr1&tag=123401acf-20&linkId=amzn1.campaign.5MMA1ASZBI1N_1776970470130",
  },
  {
    id: "elemis-pro-collagen-future-restore-serum",
    name: "ELEMIS Pro-Collagen Future Restore Serum",
    focus: "Elasticity & Firmness Innovation",
    edition: "IV",
    image: "https://m.media-amazon.com/images/I/51q7Yw1cOCL._AC_UF894,1000_QL80_.jpg",
    investment: [
      "Next-generation firming serum targeting structural elasticity",
      "Lightweight, fast-absorbing — ideal as a first-layer treatment",
      "Restores skin resilience and visibly lifts facial contours",
      "The entry point into the Pro-Collagen system at an accessible price",
    ],
    expertVerdict:
      "The Future Restore Serum represents ELEMIS's answer to the increasingly sophisticated skincare consumer. Formulated to address the structural proteins that keep skin taut and bouncy, this serum amplifies the entire Pro-Collagen regimen. Applied beneath any moisturizer, it delivers elasticity and firmness improvements that accumulate meaningfully over time.",
    affiliateLink:
      "https://www.amazon.com/dp/B0DYK9VSFZ?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.5MMA1ASZBI1N&linkCode=tr1&tag=123401acf-20&linkId=amzn1.campaign.5MMA1ASZBI1N_1776970470128",
  },
]

const quickSelection = [
  { name: "Pro-Collagen Marine Cream", bestFor: "Anti-aging, dry skin", keyBenefit: "14-day wrinkle reduction", href: "#elemis-pro-collagen-marine-cream" },
  { name: "Pro-Collagen Night Cream", bestFor: "Overnight renewal", keyBenefit: "Cellular regeneration during sleep", href: "#elemis-pro-collagen-night-cream" },
  { name: "Pro-Collagen Marine Cream SPF 30", bestFor: "Daily UV protection", keyBenefit: "Anti-aging + broad-spectrum defense", href: "#elemis-pro-collagen-marine-cream-spf30" },
  { name: "Pro-Collagen Future Restore Serum", bestFor: "Elasticity & firmness", keyBenefit: "Structural collagen restoration", href: "#elemis-pro-collagen-future-restore-serum" },
]

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "The ELEMIS Blueprint: The Elite 4 Pro-Collagen Formulas",
  description: "An editorial deep-dive into the four definitive ELEMIS Pro-Collagen formulas.",
  itemListElement: products.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Product",
      name: p.name,
      brand: { "@type": "Brand", name: "ELEMIS" },
      offers: {
        "@type": "Offer",
        url: p.affiliateLink,
        availability: "https://schema.org/InStock",
      },
    },
  })),
}

function getCurrentMonthYear(): string {
  return new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })
}

function StarRating() {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star key={star} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
        ))}
      </div>
      <span className="text-sm font-semibold text-stone-700">4.7</span>
      <span className="text-sm text-stone-400">on Amazon</span>
    </div>
  )
}

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

      <section className="bg-stone-900 text-white">
        <div className="max-w-6xl mx-auto px-6 pt-6 pb-4">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-stone-500 mb-6">
            <Link href="/" className="hover:text-stone-300 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-stone-300">ELEMIS</span>
          </nav>
          
          <div className="flex items-start gap-3 bg-stone-800 border border-stone-600 rounded-lg p-3 mb-10 max-w-2xl">
            <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-stone-400 leading-relaxed">
              <strong className="text-stone-300">AD:</strong> This article features products from a paid partnership with ELEMIS via Amazon Creator Connections.
            </p>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] mb-7 max-w-4xl">
            The ELEMIS Blueprint: Inside the British Clinical Revolution.
          </h1>
          <p className="text-lg md:text-xl text-stone-300 leading-relaxed max-w-2xl mb-10">
            A deep dive into the B-Corp certified pioneer of marine-based anti-aging.
          </p>

          <div className="flex flex-wrap items-center gap-3 pb-14 border-b border-stone-700">
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-stone-400 bg-stone-800 border border-stone-600 px-3 py-1.5 rounded-full">
              <Clock className="w-3 h-3 text-stone-500" /> Updated {getCurrentMonthYear()}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-stone-400 bg-stone-800 border border-stone-600 px-3 py-1.5 rounded-full">
              <BadgeCheck className="w-3 h-3 text-amber-400" /> Expert Reviewed
            </span>
          </div>
        </div>
      </section>

      <section className="bg-stone-100 border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-stone-900 mb-6">The Science of Sea & Skin</h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-8">
              Founded in 1990, ELEMIS built its reputation on the premise that the ocean holds the most potent anti-aging actives.
            </p>
          </div>
        </div>
      </section>

      <main id="the-selection" className="max-w-6xl mx-auto px-6 py-16 scroll-mt-20">
        <div className="flex flex-col gap-20">
          {products.map((product, index) => (
            <article key={product.id} id={product.id} className="scroll-mt-20">
              <div className="flex items-center gap-4 mb-6">
                <span className="font-display text-xs font-bold tracking-[0.3em] uppercase text-stone-400">No. {product.edition}</span>
                <div className="flex-1 h-px bg-stone-200" />
              </div>
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-0 bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-sm`}>
                <div className={`relative bg-white ${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className="flex flex-col items-center justify-center h-64 md:h-full min-h-[320px] py-10 px-8">
                    <img src={product.image} alt={product.name} className="mx-auto max-w-[200px] w-full h-full object-contain" />
                  </div>
                </div>
                <div className={`p-8 lg:p-10 flex flex-col ${index % 2 === 1 ? "md:order-1" : ""}`}>
                  <StarRating />
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-stone-900 leading-tight mt-4 mb-2">{product.name}</h3>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-6">
                    <ul className="space-y-2.5">
                      {product.investment.map((point, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-stone-700">
                          <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" /> {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="font-display text-sm text-stone-600 leading-relaxed italic border-l-2 border-stone-300 pl-4 mb-8">
                    {product.expertVerdict}
                  </p>
                  <a href={product.affiliateLink} target="_blank" rel="noopener noreferrer" className="mt-auto w-full bg-stone-900 text-white font-semibold px-6 py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-stone-800 transition-all duration-200 text-sm">
                    <ShoppingBag className="w-4 h-4" /> Check Price on Amazon <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <section id="ingredient-spotlight" className="mt-20 scroll-mt-20">
          <div className="bg-stone-900 text-white rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Padina Pavonica</h2>
            <p className="text-stone-300 text-lg leading-relaxed max-w-3xl mx-auto">
              The brown algae proven to slow the enzymatic breakdown of collagen.
            </p>
          </div>
        </section>
      </main>

      <div className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transition-transform duration-300 ${showStickyBar ? "translate-y-0" : "translate-y-full"}`}>
        <a href={products[0].affiliateLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-white border-t border-stone-200 shadow-lg px-4 py-3 text-sm font-semibold text-stone-900">
          Shop ELEMIS Official on Amazon <ArrowRight className="w-4 h-4 text-amber-500" />
        </a>
      </div>
    </div>
  )
}
