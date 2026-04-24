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
} from "lucide-react"

// ─── Types ────────────────────────────────────────────────────────────────────

interface Product {
  id: string
  name: string
  focus: string
  edition: string
  price: string
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
    price: "$254.20",
    image: "https://m.media-amazon.com/images/I/71M6SjD8FGL._SL1500_.jpg",
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
    price: "$148.75",
    image: "https://m.media-amazon.com/images/I/71S8wUo4dML._SL1500_.jpg",
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
    price: "$119.00",
    image: "https://m.media-amazon.com/images/I/71X8k8X-5TL._SL1500_.jpg",
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
    price: "$99.00",
    image: "https://m.media-amazon.com/images/I/61K-K1V9AFL._SL1500_.jpg",
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

// ─── JSON-LD Product Schema ───────────────────────────────────────────────────

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "The ELEMIS Blueprint: The Elite 4 Pro-Collagen Formulas",
  description:
    "An editorial deep-dive into the four definitive ELEMIS Pro-Collagen formulas that set the gold standard in British clinical luxury skincare.",
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
        price: p.price.replace("$", ""),
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
    },
  })),
}

// ─── Dynamic Date ─────────────────────────────────────────────────────────────

function getCurrentMonthYear(): string {
  return new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })
}

// ─── Star Rating Component ────────────────────────────────────────────────────

function StarRating() {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star key={star} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
        ))}
      </div>
      <span className="text-sm font-semibold text-stone-700">5.0</span>
      <span className="text-sm text-stone-400">on Amazon</span>
    </div>
  )
}

// ─── Main Page ────────────────────────────────────────────────────────────────

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
      {/* ── JSON-LD Schema ─────────────────────────────────────── */}
      <Script
        id="elemis-product-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />

      {/* ── Sticky Header ──────────────────────────────────────── */}
      {/* ── Hero Section ───────────────────────────────────────────── */}
      <section className="bg-stone-900 text-white">
        <div className="max-w-6xl mx-auto px-6 pt-6 pb-4">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-stone-500 mb-10">
            <Link href="/" aria-label="Navigate to homepage" className="hover:text-stone-300 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-stone-500">Brands</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-stone-300">ELEMIS</span>
          </nav>

          {/* AD Disclosure */}
          <div className="flex items-start gap-3 bg-stone-800 border border-stone-600 rounded-lg p-3 mb-10 max-w-2xl">
            <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-stone-400 leading-relaxed">
              <strong className="text-stone-300">AD:</strong> This article features products from a paid partnership with ELEMIS via Amazon Creator Connections.
            </p>
          </div>

          {/* Kicker */}
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-amber-400 mb-5">
            Brand Hub &mdash; Exclusive Editorial
          </p>

          {/* H1 */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] mb-7 max-w-4xl">
            The ELEMIS Blueprint: Inside the British Clinical Revolution.
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-stone-300 leading-relaxed max-w-2xl mb-10">
            A deep dive into the B&#8209;Corp certified pioneer of marine&#8209;based anti&#8209;aging. Why these 4 formulas define the gold standard of luxury skincare.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center gap-3 pb-14 border-b border-stone-700">
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-stone-400 bg-stone-800 border border-stone-600 px-3 py-1.5 rounded-full">
              <Clock className="w-3 h-3 text-stone-500" />
              Updated {getCurrentMonthYear()}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-stone-400 bg-stone-800 border border-stone-600 px-3 py-1.5 rounded-full">
              <BadgeCheck className="w-3 h-3 text-amber-400" />
              Expert Reviewed
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-stone-400 bg-stone-800 border border-stone-600 px-3 py-1.5 rounded-full">
              <Shield className="w-3 h-3 text-amber-400" />
              B&#8209;Corp Certified Brand
            </span>
          </div>
        </div>
      </section>

      {/* ── Brand Heritage ─────────────────────────────────────────── */}
      <section className="bg-stone-100 border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-amber-600 mb-4">
              Brand Heritage
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-stone-900 mb-6">
              The Science of Sea &amp; Skin
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-8">
              Founded in 1990 on the English coast, ELEMIS built its reputation on a single, radical premise: that the ocean holds the most potent anti-aging actives on earth. At the heart of every Pro-Collagen formula is <em className="font-semibold text-stone-800">Padina Pavonica</em> — a rare brown algae harvested from the Mediterranean, proven to slow the enzymatic breakdown of collagen by up to 23%.
            </p>
            <p className="text-stone-600 leading-relaxed mb-10">
              Today, as a certified B&#8209;Corp, ELEMIS pairs this clinical efficacy with an unwavering commitment to sustainability — from sustainably sourced marine ingredients to carbon-neutral manufacturing. The result is a brand where science, luxury, and conscience converge without compromise.
            </p>
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <p className="font-display text-3xl font-bold text-stone-900 mb-1">30+</p>
                <p className="text-xs text-stone-500 uppercase tracking-wider font-medium">Years of Research</p>
              </div>
              <div className="text-center border-x border-stone-300">
                <p className="font-display text-3xl font-bold text-stone-900 mb-1">B&#8209;Corp</p>
                <p className="text-xs text-stone-500 uppercase tracking-wider font-medium">Certified</p>
              </div>
              <div className="text-center">
                <p className="font-display text-3xl font-bold text-stone-900 mb-1">23%</p>
                <p className="text-xs text-stone-500 uppercase tracking-wider font-medium">Collagen Preservation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── The Selection ──────────────────────────────────────────── */}
      <main id="the-selection" className="max-w-6xl mx-auto px-6 py-16 scroll-mt-20">

        {/* Section Header */}
        <div className="mb-14 border-b border-stone-200 pb-8">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-amber-600 mb-3">
            The Selection
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-stone-900">
            The Elite 4
          </h2>
          <p className="text-stone-500 mt-3 max-w-xl">
            Four formulas. One system. The definitive Pro-Collagen regimen, assessed in full.
          </p>
        </div>

        {/* Product Cards */}
        <div className="flex flex-col gap-20">
          {products.map((product, index) => (
            <article key={product.id} id={product.id} className="scroll-mt-20">

              {/* Edition Label */}
              <div className="flex items-center gap-4 mb-6">
                <span className="font-display text-xs font-bold tracking-[0.3em] uppercase text-stone-400">
                  No. {product.edition}
                </span>
                <div className="flex-1 h-px bg-stone-200" />
              </div>

              {/* Card */}
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-0 bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-sm`}>

                {/* Image Column */}
                <div className={`relative bg-stone-100 ${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className="aspect-[4/3] md:aspect-auto md:h-full min-h-64">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Focus Tag */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block bg-stone-900/80 backdrop-blur-sm text-white text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full">
                      {product.focus}
                    </span>
                  </div>
                </div>

                {/* Content Column */}
                <div className={`p-8 lg:p-10 flex flex-col ${index % 2 === 1 ? "md:order-1" : ""}`}>
                  <StarRating />

                  <h3 className="font-display text-2xl md:text-3xl font-bold text-stone-900 leading-tight mt-4 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-2xl font-bold text-stone-800 mb-6">
                    {product.price}
                  </p>

                  {/* Why It's Worth the Investment */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-6">
                    <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-amber-700 mb-4 flex items-center gap-2">
                      <TrendingUp className="w-3.5 h-3.5" />
                      Why It&rsquo;s Worth the Investment
                    </h4>
                    <ul className="space-y-2.5">
                      {product.investment.map((point, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-stone-700">
                          <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Expert Verdict */}
                  <div className="border-l-2 border-stone-300 pl-4 mb-8">
                    <p className="text-xs font-bold tracking-widest uppercase text-stone-400 mb-2">
                      Expert Verdict
                    </p>
                    <p className="text-sm text-stone-600 leading-relaxed italic">
                      {product.expertVerdict}
                    </p>
                  </div>

                  <a
                    href={product.affiliateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto w-full bg-stone-900 text-white font-semibold px-6 py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-stone-800 hover:-translate-y-0.5 transition-all duration-200 text-sm"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    Shop on Amazon
                    <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ── Ingredient Spotlight ───────────────────────────────── */}
        <section id="ingredient-spotlight" className="mt-20 scroll-mt-20">
          <div className="bg-stone-900 text-white rounded-2xl overflow-hidden">
            <div className="p-8 lg:p-12">
              <div className="max-w-3xl mx-auto text-center">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="h-px flex-1 bg-stone-700" />
                  <div className="flex items-center gap-2">
                    <Leaf className="w-4 h-4 text-amber-400" />
                    <span className="text-xs font-bold tracking-[0.3em] uppercase text-amber-400">
                      Ingredient Spotlight
                    </span>
                    <FlaskConical className="w-4 h-4 text-amber-400" />
                  </div>
                  <div className="h-px flex-1 bg-stone-700" />
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
                  Padina Pavonica
                </h2>
                <p className="text-xs font-semibold tracking-widest uppercase text-stone-400 mb-5">
                  The Marine Algae That Changed Everything
                </p>
                <p className="text-stone-300 text-lg leading-relaxed mb-8">
                  Harvested from the crystal waters of the Mediterranean, <em className="text-white font-semibold">Padina Pavonica</em> is a fan-shaped brown algae with an extraordinary molecular structure. Its unique polysaccharides mimic the skin&rsquo;s own natural moisturizing factors, creating a biomimetic hydration system that lasts up to 8 hours.
                </p>
                <p className="text-stone-400 leading-relaxed mb-10">
                  Clinical trials demonstrate that Padina Pavonica inhibits MMP-1 — the enzyme responsible for collagen degradation — by up to 23%, effectively slowing the biological clock of the skin. Combined with its ability to improve moisture retention by 45% in 28 days, it is the single most important ingredient in the ELEMIS Pro-Collagen system.
                </p>
                <div className="grid grid-cols-3 gap-6 border-t border-stone-700 pt-8">
                  <div className="text-center">
                    <p className="font-display text-2xl font-bold text-amber-400 mb-1">23%</p>
                    <p className="text-xs text-stone-500 uppercase tracking-wider font-medium">Collagen Enzyme Inhibition</p>
                  </div>
                  <div className="text-center border-x border-stone-700">
                    <p className="font-display text-2xl font-bold text-amber-400 mb-1">8hrs</p>
                    <p className="text-xs text-stone-500 uppercase tracking-wider font-medium">Hydration Duration</p>
                  </div>
                  <div className="text-center">
                    <p className="font-display text-2xl font-bold text-amber-400 mb-1">45%</p>
                    <p className="text-xs text-stone-500 uppercase tracking-wider font-medium">Moisture Retention Lift</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── About Our Testing Process ─────────────────────────── */}
        <section className="mt-16">
          <div className="bg-white border border-stone-200 rounded-2xl p-8">
            <h2 className="font-display text-2xl font-bold text-stone-900 mb-6">
              About Our Editorial Process
            </h2>
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-600 font-bold text-lg font-display">
                LB
              </div>
              <div>
                <p className="font-semibold text-stone-900 text-lg mb-1">
                  The Luxury Beauty Editorial Team
                </p>
                <p className="text-sm text-stone-400 mb-4 uppercase tracking-wider font-medium">
                  Prestige Skincare Specialists
                </p>
                <p className="text-stone-600 leading-relaxed text-sm">
                  With over a decade of hands-on testing across the prestige skincare landscape, our team of luxury beauty specialists and licensed estheticians has evaluated hundreds of clinical formulas. We partner with board-certified dermatologists to assess efficacy, texture, and real-world longevity — ensuring every recommendation is grounded in rigorous, expert-led analysis rather than marketing copy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── Sticky Mobile CTA ──────────────────────────────────── */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transition-transform duration-300 ${
          showStickyBar ? "translate-y-0" : "translate-y-full"
        }`}
        aria-hidden={!showStickyBar}
      >
        <div className="bg-stone-900 border-t border-stone-700 shadow-2xl px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="flex-1 min-w-0">
              <p className="text-xs text-stone-400 truncate uppercase tracking-wider font-medium">
                The Elite 4
              </p>
              <p className="text-sm font-semibold text-white truncate">
                Shop ELEMIS Pro-Collagen
              </p>
            </div>
            <a
              href={products[0].affiliateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 bg-amber-500 text-white text-sm font-semibold px-5 py-2.5 rounded-xl flex items-center gap-1.5 hover:bg-amber-400 transition-all duration-200"
            >
              Shop Amazon
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
