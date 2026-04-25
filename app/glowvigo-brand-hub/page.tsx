"use client"

import { useEffect, useState } from "react"
import Script from "next/script"
import Link from "next/link"
import {
  ChevronRight,
  ShoppingBag,
  ExternalLink,
  BadgeCheck,
  AlertCircle,
  FlaskConical,
  Lightbulb,
  Atom,
  CheckCircle2,
  Star,
  ArrowRight,
  Clock,
  Shield,
} from "lucide-react"

// ─── Types ────────────────────────────────────────────────────────────────────

interface Product {
  id: string
  edition: string
  name: string
  focus: string
  keyIngredient: string
  image: string
  highlights: string[]
  verdict: string
  affiliateLink: string
}

// ─── Product Data (The Core 4) ────────────────────────────────────────────────

const products: Product[] = [
  {
    id: "glowvigo-modern-chic-serum",
    edition: "I",
    name: 'Glowvigo "The Modern Chic" Serum',
    focus: "Cellular Energy Activation",
    keyIngredient: "Saffron Extract Complex",
    image:
      "https://m.media-amazon.com/images/I/51IYfURQ8pL._AC_UF350,350_QL80_.jpg",
    highlights: [
      "Patented cellular energy activation technology",
      "Clinically studied saffron extract targets oxidative stress",
      "Supports emotional balance to reduce stress-aging",
      "Fast-absorbing, non-comedogenic formula",
    ],
    verdict:
      "A clinical intervention in a bottle. This serum is the non-negotiable foundation for those serious about measurable, long-term luminosity.",
    affiliateLink:
      "https://www.amazon.com/dp/B0CY5L4F81?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.2PZST243S5CW6&linkCode=tr1&tag=123401acf-20&linkId=amzn1.campaign.2PZST243S5CW6_1776971520196",
  },
  {
    id: "glowvigo-editorial-cream",
    edition: "II",
    name: 'Glowvigo "The Editorial" Cream',
    focus: "Structural Contour & Density Restorer",
    keyIngredient: "Bio-Peptide Matrix",
    image:
      "https://m.media-amazon.com/images/I/51zN7KthgFL._AC_UF350,350_QL80_.jpg",
    highlights: [
      "Engineered for peak skin regeneration during sleep",
      "Floods cells with patented anti-aging actives overnight",
      "Visibly plumper, denser complexion within 28 days",
      "Rich texture with no pore-congesting residue",
    ],
    verdict:
      "The definitive night cream. Engineered to flood cells with patented anti-aging actives during the biological peak of skin regeneration.",
    affiliateLink:
      "https://www.amazon.com/dp/B0DJ4D9T4V?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.AR0193AV44ZA&linkCode=tr1&tag=123401acf-20&linkId=amzn1.campaign.AR0193AV44ZA_1776971550283",
  },
  {
    id: "glowvigo-bio-hacking-drops",
    edition: "III",
    name: 'Glowvigo "The Bio-Hacking" Drops',
    focus: "Metabolic Support & Eye Health",
    keyIngredient: "Inositol & Choline Complex",
    image:
      "https://m.media-amazon.com/images/I/51IYfURQ8pL._AC_UF350,350_QL80_.jpg",
    highlights: [
      "Dual-purpose liquid supplement for eye health and cellular resilience",
      "Inositol & choline target metabolic function at the cellular level",
      "Enhanced bioavailability via fast-absorbing liquid format",
      "Vegan, non-GMO, zero fillers",
    ],
    verdict:
      "The internal multiplier. A dual-purpose liquid supplement that targets eye health and overall cellular resilience from the inside-out.",
    affiliateLink:
      "https://www.amazon.com/dp/B0DJ4D9T4V?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.AR0193AV44ZA&linkCode=tr1&tag=123401acf-20&linkId=amzn1.campaign.AR0193AV44ZA_1776971550283",
  },
  {
    id: "glowvigo-performance-collection",
    edition: "IV",
    name: 'Glowvigo "Performance Collection" Starter Set',
    focus: "Entry Point to Clinical Efficacy",
    keyIngredient: "Full Spectrum Actives",
    image:
      "https://m.media-amazon.com/images/I/51IYfURQ8pL._AC_UF350,350_QL80_.jpg",
    highlights: [
      "Synergistic system combining the core Glowvigo formulas",
      "Curated for maximum inside-out luminosity results",
      "Ideal introduction to the full Glowvigo regimen",
      "Exceptional value vs. purchasing individually",
    ],
    verdict:
      "The essential kit. Perfect for those looking to experience the synergistic benefits of the core Glowvigo system.",
    affiliateLink:
      "https://www.amazon.com/dp/B0CY5L4F81?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.2PZST243S5CW6&linkCode=tr1&tag=123401acf-20&linkId=amzn1.campaign.2PZST243S5CW6_1776971520196",
  },
]

// ─── JSON-LD Schema ───────────────────────────────────────────────────────────

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Glowvigo: The Core 4 — Cellular Intelligence & Clinical Results",
  description:
    "A definitive editorial investigation into the four Glowvigo formulas that pioneer inside-out beauty through bio-hacking and patented cellular technology.",
  itemListElement: products.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Product",
      name: p.name,
      brand: { "@type": "Brand", name: "Glowvigo" },
      offers: {
        "@type": "Offer",
        url: p.affiliateLink,
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
    },
  })),
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
      <span className="text-sm font-semibold text-stone-700">4.9</span>
      <span className="text-sm text-stone-400">on Amazon</span>
    </div>
  )
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function GlowvigoBrandHubPage() {
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
        id="glowvigo-product-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />

      {/* ══════════════════════════════════════════════════════════════
          STICKY PAGE HEADER
      ══════════════════════════════════════════════════════════════ */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
          {/* Glowvigo Wordmark */}
          <span
            className="text-sm font-light text-[#333333]"
            style={{ letterSpacing: "0.3em", textTransform: "uppercase" }}
          >
            Glowvigo
          </span>

          {/* Breadcrumbs */}
          <nav
            aria-label="Breadcrumb"
            className="hidden sm:flex items-center gap-1.5 text-xs text-stone-400"
          >
            <Link href="/" className="hover:text-stone-600 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/" className="hover:text-stone-600 transition-colors">
              Brands
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-stone-700 font-medium">Glowvigo</span>
          </nav>

          {/* CTA */}
          <a
            href={products[0].affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 text-xs font-semibold bg-stone-900 text-white px-4 py-2 rounded-full hover:bg-stone-700 transition-colors"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Shop Glowvigo
          </a>
        </div>
      </header>

      {/* ══════════════════════════════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════════════════════════════ */}
      <section className="bg-stone-900 text-white">
        <div className="max-w-6xl mx-auto px-6 pt-10 pb-4">
          {/* Breadcrumb (mobile) */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-xs text-stone-500 mb-5"
          >
            <Link
              href="/"
              className="hover:text-stone-300 transition-colors"
            >
              Home
            </Link>
            <ChevronRight className="w-3 h-3" />
            <Link
              href="/"
              className="hover:text-stone-300 transition-colors"
            >
              Brands
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-stone-300">Glowvigo</span>
          </nav>

          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-stone-400 hover:text-amber-400 hover:bg-stone-800 border border-transparent hover:border-stone-600 px-3 py-1.5 rounded-full transition-all duration-200 mb-8"
          >
            <ChevronRight className="w-3 h-3 rotate-180" />
            Back to Premium Guide
          </Link>

          {/* AD Disclosure */}
          <div className="flex items-start gap-3 bg-stone-800 border border-stone-600 rounded-lg p-3 mb-10 max-w-2xl">
            <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-stone-400 leading-relaxed">
              <strong className="text-stone-300">AD:</strong> This article
              features products from an exclusive partnership with Glowvigo via
              Amazon Creator Connections.
            </p>
          </div>

          {/* Kicker */}
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-amber-400 mb-5">
            Brand Hub &mdash; Exclusive Editorial
          </p>

          {/* H1 */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] mb-7 max-w-4xl">
            Glowvigo: The Intersection of Cellular Intelligence and Clinical
            Results.
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-stone-300 leading-relaxed max-w-2xl mb-10">
            A definitive investigation into the pioneer of &lsquo;Inside-Out&rsquo; beauty.
            We evaluate the core formulas that leverage bio-hacking principles
            for visible luminosity.
          </p>

          {/* Stats Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 bg-stone-800/60 border border-stone-700 rounded-2xl overflow-hidden mb-10">
            <div className="flex items-center gap-4 px-6 py-5 border-b sm:border-b-0 sm:border-r border-stone-700">
              <div className="w-9 h-9 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                <FlaskConical className="w-[18px] h-[18px] text-amber-400" />
              </div>
              <div>
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-stone-300">
                  10+ Years of Clinical Research
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 px-6 py-5 border-b sm:border-b-0 sm:border-r border-stone-700">
              <div className="w-9 h-9 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                <Atom className="w-[18px] h-[18px] text-amber-400" />
              </div>
              <div>
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-stone-300">
                  Patented Cellular Technology
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 px-6 py-5">
              <div className="w-9 h-9 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                <Lightbulb className="w-[18px] h-[18px] text-amber-400" />
              </div>
              <div>
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-stone-300">
                  93% Reported Visible Luminosity
                </p>
              </div>
            </div>
          </div>

          {/* Meta / Date */}
          <div className="flex flex-wrap items-center gap-3 pb-14 border-b border-stone-700">
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-stone-400 bg-stone-800 border border-stone-600 px-3 py-1.5 rounded-full">
              <Clock className="w-3 h-3 text-stone-500" />
              April 2026
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-stone-400 bg-stone-800 border border-stone-600 px-3 py-1.5 rounded-full">
              <BadgeCheck className="w-3 h-3 text-amber-400" />
              Expert Reviewed
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-stone-400 bg-stone-800 border border-stone-600 px-3 py-1.5 rounded-full">
              <Shield className="w-3 h-3 text-amber-400" />
              Clinically Validated
            </span>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          BRAND HERITAGE
      ══════════════════════════════════════════════════════════════ */}
      <section className="bg-stone-100 border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-amber-600 mb-4">
              Brand Heritage
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-stone-900 mb-6">
              Decoding the Glow.
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-8">
              Founded on the principle that true luminosity is a function of
              cellular health, Glowvigo has spent a decade bridging the gap
              between bio-hacking and prestige skincare. Our mission is to
              optimize your skin&rsquo;s natural intelligence, targeting
              stress-aging and structural degradation at its source, rather than
              just masking symptoms.
            </p>
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <p className="font-display text-3xl font-bold text-stone-900 mb-1">
                  10+
                </p>
                <p className="text-xs text-stone-500 uppercase tracking-wider font-medium">
                  Years of Research
                </p>
              </div>
              <div className="text-center border-x border-stone-300">
                <p className="font-display text-3xl font-bold text-stone-900 mb-1">
                  93%
                </p>
                <p className="text-xs text-stone-500 uppercase tracking-wider font-medium">
                  Visible Luminosity
                </p>
              </div>
              <div className="text-center">
                <p className="font-display text-3xl font-bold text-stone-900 mb-1">
                  Patent
                </p>
                <p className="text-xs text-stone-500 uppercase tracking-wider font-medium">
                  Cellular Technology
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          THE SELECTION — THE CORE 4
      ══════════════════════════════════════════════════════════════ */}
      <main id="the-selection" className="max-w-6xl mx-auto px-6 py-16 scroll-mt-20">

        {/* Section Header */}
        <div className="mb-14 border-b border-stone-200 pb-8">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-amber-600 mb-3">
            The Selection
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-stone-900">
            The Core 4
          </h2>
          <p className="text-stone-500 mt-3 max-w-xl">
            Four formulas. One intelligent system. The definitive Glowvigo
            regimen, assessed in full.
          </p>
        </div>

        {/* Product Cards */}
        <div className="flex flex-col gap-20">
          {products.map((product, index) => (
            <article
              key={product.id}
              id={product.id}
              className="scroll-mt-20"
            >
              {/* Edition Label */}
              <div className="flex items-center gap-4 mb-6">
                <span className="font-display text-xs font-bold tracking-[0.3em] uppercase text-stone-400">
                  No. {product.edition}
                </span>
                <div className="flex-1 h-px bg-stone-200" />
              </div>

              {/* Card */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0 bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-sm">

                {/* Image Column */}
                <div
                  className={`relative bg-stone-100 ${index % 2 === 1 ? "md:order-2" : ""}`}
                >
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
                <div
                  className={`p-8 lg:p-10 flex flex-col ${index % 2 === 1 ? "md:order-1" : ""}`}
                >
                  <StarRating />

                  <h3 className="font-display text-2xl md:text-3xl font-bold text-stone-900 leading-tight mt-4 mb-6">
                    {product.name}
                  </h3>

                  {/* Clinical Highlights */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-6">
                    <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-amber-700 mb-4 flex items-center gap-2">
                      <FlaskConical className="w-3.5 h-3.5" />
                      Clinical Highlights
                    </h4>
                    <ul className="space-y-2.5">
                      {product.highlights.map((point, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-sm text-stone-700"
                        >
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
                    <p className="font-display text-sm text-stone-600 leading-relaxed italic">
                      {product.verdict}
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

        {/* ══════════════════════════════════════════════════════════════
            TECHNICAL COMPARISON TABLE (hidden on mobile)
        ══════════════════════════════════════════════════════════════ */}
        <section className="mt-20">
          <div className="hidden md:block">
            <div className="mb-8">
              <p className="text-xs font-bold tracking-[0.25em] uppercase text-amber-600 mb-3">
                Technical Overview
              </p>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-stone-900">
                The Core 4 at a Glance
              </h2>
            </div>
            <div className="overflow-x-auto rounded-xl border border-stone-200">
              <table className="w-full text-sm text-left">
                <thead>
                  <tr className="bg-stone-900 text-white">
                    <th className="px-5 py-3.5 font-semibold tracking-wide text-xs uppercase">
                      Product
                    </th>
                    <th className="px-5 py-3.5 font-semibold tracking-wide text-xs uppercase">
                      Focus
                    </th>
                    <th className="px-5 py-3.5 font-semibold tracking-wide text-xs uppercase">
                      Key Ingredient
                    </th>
                    <th className="px-5 py-3.5 font-semibold tracking-wide text-xs uppercase">
                      Verdict
                    </th>
                    <th className="px-5 py-3.5 font-semibold tracking-wide text-xs uppercase">
                      Buy
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, i) => (
                    <tr
                      key={product.id}
                      className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}
                    >
                      <td className="px-5 py-4 font-medium text-stone-900 max-w-[200px]">
                        <a
                          href={`#${product.id}`}
                          className="hover:text-amber-600 transition-colors"
                        >
                          No.&nbsp;{product.edition} — {product.name.match(/"([^"]+)"/)?.[1] ?? product.name}
                        </a>
                      </td>
                      <td className="px-5 py-4 text-stone-600">
                        {product.focus}
                      </td>
                      <td className="px-5 py-4 text-stone-600">
                        {product.keyIngredient}
                      </td>
                      <td className="px-5 py-4 text-stone-600 max-w-[240px] text-xs leading-relaxed">
                        {product.verdict}
                      </td>
                      <td className="px-5 py-4">
                        <a
                          href={product.affiliateLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-700 px-3 py-2 rounded-lg transition-colors"
                        >
                          <ShoppingBag className="w-3 h-3" />
                          Amazon
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            EDITORIAL & DISCLOSURE
        ══════════════════════════════════════════════════════════════ */}
        <section className="mt-16">
          <div className="bg-white border border-stone-200 rounded-2xl p-8">
            <h2 className="font-display text-2xl font-bold text-stone-900 mb-6">
              About Our Editorial Process
            </h2>
            <div className="flex flex-col sm:flex-row items-start gap-6 mb-8">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-600 font-bold text-lg font-display">
                LB
              </div>
              <div>
                <p className="font-semibold text-stone-900 text-lg mb-1">
                  The Glowvigo Editorial Team
                </p>
                <p className="text-sm text-stone-400 mb-4 uppercase tracking-wider font-medium">
                  Prestige Skincare Specialists
                </p>
                <p className="text-stone-600 leading-relaxed text-sm">
                  With over a decade of hands-on testing across the prestige
                  skincare and wellness landscape, our team of Glowvigo
                  specialists and licensed estheticians has evaluated hundreds
                  of clinical formulas. We partner with board-certified
                  dermatologists to assess efficacy, bioavailability, and
                  real-world results — ensuring every recommendation is grounded
                  in rigorous, expert-led analysis rather than marketing copy.
                </p>
              </div>
            </div>

            {/* Affiliate Disclosure */}
            <div className="border-t border-stone-100 pt-6">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-stone-400 mb-3">
                Affiliate Disclosure
              </p>
              <p className="text-xs text-stone-500 leading-relaxed mb-4">
                Glowvigo participates in the Amazon Associates Program and
                other affiliate advertising programs. When you purchase through
                links on this page, we may earn a commission at no additional
                cost to you. Our editorial recommendations are based on
                independent research, expert testing, and genuine belief in
                product efficacy. Affiliate relationships do not influence our
                editorial judgments. All partnerships are disclosed in
                accordance with FTC guidelines.
              </p>
              <p className="text-xs text-stone-500 leading-relaxed">
                This page features products from an exclusive partnership with
                Glowvigo via Amazon Creator Connections. All opinions expressed
                are those of the Glowvigo editorial team.
              </p>
            </div>

            {/* Footer Link */}
            <div className="border-t border-stone-100 pt-6 mt-6">
              <Link
                href="/blog/luxury-ingredients-science"
                className="inline-flex items-center gap-2 text-sm font-medium text-amber-600 hover:text-amber-700 transition-colors"
              >
                The Science of High-Ticket Skincare Ingredients
                <ArrowRight className="w-4 h-4" />
              </Link>
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
        <a
          href={products[0].affiliateLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-white border-t border-stone-200 shadow-lg px-4 py-3 text-sm font-semibold text-stone-900 hover:bg-stone-50 transition-colors"
        >
          Shop Glowvigo on Amazon
          <ArrowRight className="w-4 h-4 text-amber-500" />
        </a>
      </div>
    </div>
  )
}
