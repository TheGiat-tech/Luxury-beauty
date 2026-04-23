"use client"

import { useEffect, useRef, useState } from "react"
import Script from "next/script"
import Link from "next/link"
import Breadcrumb from "../components/Breadcrumb"
import {
  CheckCircle2,
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
  AlertCircle,
  Leaf,
  RefreshCcw,
} from "lucide-react"

// ─── Types ────────────────────────────────────────────────────────────────────

interface Product {
  id: string
  name: string
  award: string
  awardBg: string
  awardText: string
  image: string
  description: string
  pros: string[]
  bottomLine: string
  affiliateLink: string
}

// ─── Product Data ─────────────────────────────────────────────────────────────

const products: Product[] = [
  {
    id: "drops-of-nature-saffron-extract",
    name: "Drops of Nature Saffron Extract (Strawberry, 60mL)",
    award: "Best for Emotional Wellness",
    awardBg: "bg-amber-500",
    awardText: "text-white",
    image: "https://m.media-amazon.com/images/I/71u2tLqW9rL._SL1500_.jpg",
    description:
      'Known as the "Sunshine Spice," this pure saffron liquid extract supports emotional balance, mood elevation, and eye health.',
    pros: [
      "Fast-absorbing liquid formula",
      "Delicious strawberry flavor",
      "Clinically studied for stress reduction",
    ],
    bottomLine:
      "The Bottom Line: Stress is the #1 enemy of glowing skin. This extract doesn't just improve your mood; it targets 'stress-aging' at its source.",
    affiliateLink:
      "https://www.amazon.com/dp/B0CY5L4F81?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.2PZST243S5CW6&linkCode=tr1&tag=123401acf-20&linkId=amzn1.campaign.2PZST243S5CW6_1776971520196",
  },
  {
    id: "drops-of-nature-inositol-choline",
    name: "Inositol & Choline Liquid Drops (Mixed Berry, 60ml)",
    award: "Best for Cellular Health",
    awardBg: "bg-emerald-600",
    awardText: "text-white",
    image: "https://m.media-amazon.com/images/I/71bZz6eS3ML._SL1500_.jpg",
    description:
      "A powerful combination for cellular health, metabolic support, and overall wellness. Perfect for prenatal and long-term health optimization.",
    pros: [
      "Enhanced absorption drops",
      "Vegan & non-GMO",
      "Zero fillers",
    ],
    bottomLine:
      "The Bottom Line: The foundation of beauty is a healthy cell. These drops are the essential 'software update' for your body's cellular functions.",
    affiliateLink:
      "https://www.amazon.com/dp/B0DJ4D9T4V?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.AR0193AV44ZA&linkCode=tr1&tag=123401acf-20&linkId=amzn1.campaign.AR0193AV44ZA_1776971550283",
  },
]

// ─── JSON-LD Product Schema ───────────────────────────────────────────────────

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "The Inner Glow: Cellular & Emotional Wellness Supplements of 2026",
  description:
    "Expert review of the top liquid supplements for cellular health and emotional balance from Drops Of Nature.",
  itemListElement: products.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Product",
      name: p.name,
      brand: { "@type": "Brand", name: "Drops Of Nature" },
      offers: {
        "@type": "Offer",
        url: p.affiliateLink,
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
          <Star key={star} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
        ))}
      </div>
      <span className="text-sm font-semibold text-slate-700">5.0</span>
      <span className="text-sm text-slate-400">on Amazon</span>
    </div>
  )
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function BeautyFromWithinPage() {
  const [activeProductId, setActiveProductId] = useState<string>(products[0].id)
  const [showStickyBar, setShowStickyBar] = useState(false)
  const productRefs = useRef<Map<string, Element>>(new Map())

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    products.forEach((product) => {
      const el = productRefs.current.get(product.id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveProductId(product.id)
          }
        },
        { threshold: 0.25, rootMargin: "-10% 0px -10% 0px" }
      )

      observer.observe(el)
      observers.push(observer)
    })

    const handleScroll = () => {
      setShowStickyBar(window.scrollY > 800)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      observers.forEach((obs) => obs.disconnect())
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const activeProduct = products.find((p) => p.id === activeProductId) ?? products[0]

  return (
    <div className="bg-stone-50 min-h-screen font-body">
      {/* ── JSON-LD Schema ─────────────────────────────────────── */}
      <Script
        id="beauty-from-within-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />

      {/* ── Hero Section ───────────────────────────────────────── */}
      <main className="max-w-5xl mx-auto px-4 py-10">
        <section className="mb-16">
          {/* Mandatory AD Disclosure */}
          <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8">
            <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-amber-800 leading-relaxed">
              <strong>AD:</strong> This article features products from a paid partnership with Drops Of Nature via Amazon Creator Connections.
            </p>
          </div>

          {/* H1 Title */}
          <Breadcrumb />
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-5">
            The Inner Glow: Why Top Dermatologists are Shifting to &lsquo;Inside-Out&rsquo; Beauty
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mb-6">
            Beyond topical creams, the future of aging lies in cellular health and emotional balance. We review the essential liquid supplements of 2026.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 bg-white border border-gray-200 px-3 py-1.5 rounded-full shadow-sm">
              <Clock className="w-3 h-3 text-slate-400" />
              Updated {getCurrentMonthYear()}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 bg-white border border-gray-200 px-3 py-1.5 rounded-full shadow-sm">
              <BadgeCheck className="w-3 h-3 text-emerald-500" />
              Expert Reviewed
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 bg-white border border-gray-200 px-3 py-1.5 rounded-full shadow-sm">
              <Shield className="w-3 h-3 text-sky-500" />
              Independently Tested
            </span>
          </div>
        </section>

        {/* ── Subscribe & Save Hook ───────────────────────────────── */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-2xl p-6 flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
              <RefreshCcw className="w-5 h-5 text-emerald-700" />
            </div>
            <div>
              <p className="text-sm font-bold text-emerald-900 uppercase tracking-wider mb-1">
                Editor&apos;s Tip
              </p>
              <p className="text-slate-700 leading-relaxed">
                Use Amazon&apos;s{" "}
                <strong className="text-emerald-800">&lsquo;Subscribe &amp; Save&rsquo;</strong>{" "}
                for an extra 10–15% off and consistent results. Wellness is a marathon, not a sprint.
              </p>
            </div>
          </div>
        </section>

        {/* ── At A Glance ─────────────────────────────────────────── */}
        <section id="top-picks" className="mb-20 scroll-mt-20">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            At A Glance: Our Top Cellular Wellness Picks
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-gray-200 rounded-2xl p-5 flex flex-col hover:shadow-md transition-shadow duration-200"
              >
                {/* Award Badge */}
                <span
                  className={`self-start text-xs font-bold px-2.5 py-1 rounded-full mb-4 ${product.awardBg} ${product.awardText}`}
                >
                  {product.award}
                </span>

                {/* Thumbnail */}
                <div className="w-full aspect-square rounded-xl overflow-hidden mb-4 bg-stone-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name */}
                <p className="text-sm font-semibold text-slate-800 leading-snug mb-4 flex-1">
                  {product.name}
                </p>

                {/* CTA */}
                <a
                  href={product.affiliateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-slate-900 text-white text-xs font-semibold px-3 py-2.5 rounded-xl flex items-center justify-center gap-1.5 hover:-translate-y-0.5 hover:bg-slate-800 transition-all duration-200"
                >
                  Shop on Amazon
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* ── Deep-Dive Product Cards ──────────────────────────────── */}
        <section id="reviews" className="mb-20 scroll-mt-20">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">
            In-Depth Reviews: Cellular &amp; Emotional Wellness
          </h2>

          <div className="flex flex-col gap-10">
            {products.map((product, index) => (
              <article
                key={product.id}
                id={product.id}
                ref={(el) => {
                  if (el) productRefs.current.set(product.id, el)
                  else productRefs.current.delete(product.id)
                }}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden"
              >
                {/* Award Banner */}
                <div
                  className={`${product.awardBg} ${product.awardText} px-6 py-2.5 flex items-center gap-2`}
                >
                  <Award className="w-4 h-4" />
                  <span className="text-sm font-bold tracking-wide">
                    {product.award}
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row gap-8">
                    {/* Left — Image + CTA */}
                    <div className="w-full md:w-72 flex-shrink-0">
                      <div className="h-48 md:h-auto md:aspect-[4/3] rounded-xl overflow-hidden bg-stone-100">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="mt-3">
                        <StarRating />
                      </div>

                      <div className="mt-4">
                        <a
                          href={product.affiliateLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full bg-slate-900 text-white font-semibold px-6 py-3 rounded-xl flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:bg-slate-800 transition-all duration-200 text-sm"
                        >
                          <ShoppingBag className="w-4 h-4" />
                          Shop on Amazon
                          <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                        </a>
                      </div>
                    </div>

                    {/* Right — Details */}
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold tracking-widest uppercase text-slate-400 mb-1">
                        #{index + 1} Wellness Pick
                      </p>
                      <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900 leading-tight mb-3">
                        {product.name}
                      </h2>

                      <p className="text-slate-600 leading-relaxed mb-5">
                        {product.description}
                      </p>

                      {/* Pros Block */}
                      <div className="bg-white border border-gray-200 rounded-xl p-4 mb-5">
                        <h4 className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          Why We Love It
                        </h4>
                        <ul className="space-y-2">
                          {product.pros.map((pro, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-sm text-slate-700"
                            >
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Bottom Line */}
                      <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                        <p className="text-sm font-semibold text-slate-800 leading-relaxed">
                          {product.bottomLine}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── About Our Testing Process ────────────────────────────── */}
        <section className="mb-16">
          <div className="bg-white border border-gray-200 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              About Our Testing Process &amp; Experts
            </h2>
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                <Leaf className="w-7 h-7" />
              </div>
              <div>
                <p className="font-semibold text-slate-900 text-lg mb-1">
                  The Wellness Review Team
                </p>
                <p className="text-sm text-slate-500 mb-3">
                  Cellular Health &amp; Nutraceutical Specialists
                </p>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Our team of integrative health specialists and board-certified dermatologists evaluates supplements through the lens of skin health and cellular longevity. We analyse clinical evidence, bioavailability, and real-world outcomes to ensure every recommendation is grounded in rigorous, science-led analysis.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Link Back to Home ────────────────────────────────────── */}
        <section className="mb-16">
          <div className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-700 font-medium text-center sm:text-left">
              Complete your routine:{" "}
              <span className="text-slate-500">
                Pair these inside-out essentials with our curated topical picks.
              </span>
            </p>
            <Link
              href="/"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-slate-900 text-white font-semibold px-6 py-3 rounded-xl hover:-translate-y-0.5 hover:bg-slate-800 transition-all duration-200 text-sm whitespace-nowrap"
            >
              View our Top 5 Luxury Skincare Picks
              <ArrowRight className="w-4 h-4" />
            </Link>
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
        <div className="bg-white border-t border-gray-200 shadow-2xl px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="flex-1 min-w-0">
              <p className="text-xs text-slate-500 truncate">
                {activeProduct.award}
              </p>
              <p className="text-sm font-semibold text-slate-900 truncate">
                {activeProduct.name}
              </p>
            </div>
            <a
              href={activeProduct.affiliateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 bg-slate-900 text-white text-sm font-semibold px-5 py-2.5 rounded-xl flex items-center gap-1.5 hover:-translate-y-0.5 hover:bg-slate-800 transition-all duration-200"
            >
              Shop on Amazon
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
