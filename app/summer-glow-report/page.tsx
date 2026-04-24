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
  Sparkles,
  ExternalLink,
  BadgeCheck,
  AlertCircle,
  Leaf,
} from "lucide-react"

// ─── Types ────────────────────────────────────────────────────────────────────

interface Product {
  id: string
  name: string
  tagline: string
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
    id: "btan-ultra-dark-mousse",
    name: "b.tan Ultra Dark Self Tanner Mousse",
    tagline: "I Want The Darkest Tan Possible",
    award: "Best Overall",
    awardBg: "bg-amber-500",
    awardText: "text-white",
    image: "https://m.media-amazon.com/images/I/61Nl-X7L1VL._SL1500_.jpg",
    description:
      "A 1-hour express tanning foam that delivers a deep, golden bronze without the typical DHA scent.",
    pros: [
      "Fastest results — deep bronze in 1 hour",
      "Natural olive undertones (no orange)",
      "Very affordable compared to salon alternatives",
    ],
    bottomLine:
      "The Bottom Line: If you need a deep, 'just back from St. Tropez' tan in under an hour, this is the industry disruptor.",
    affiliateLink:
      "https://www.amazon.com/dp/B09B4F55NY?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.31099GK9H64TI&linkCode=tr1&tag=123401acf-20&linkId=amzn1.campaign.31099GK9H64TI_1776971593211",
  },
  {
    id: "btan-insanely-dark-clear-gel",
    name: "b.tan Insanely Dark Clear Self Tan Gel",
    tagline: "Glow Your Own Way Next Level",
    award: "Best No-Mess",
    awardBg: "bg-sky-600",
    awardText: "text-white",
    image: "https://m.media-amazon.com/images/I/61z-oK7qB7L._SL1500_.jpg",
    description:
      "A transfer-resistant clear gel that lets you tan without staining your white clothes or bed sheets.",
    pros: [
      "Completely clear formula — zero transfer",
      "No mess, no stained sheets",
      "Hydrating vitamin C and vitamin-rich complex",
    ],
    bottomLine:
      "The Bottom Line: The Holy Grail for luxury lovers with white silk sheets. A professional tan with zero cleanup.",
    affiliateLink:
      "https://www.amazon.com/dp/B0CK8DXW3M?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.31099GK9H64TI&linkCode=tr1&tag=123401acf-20&linkId=amzn1.campaign.31099GK9H64TI_1776971593212",
  },
  {
    id: "btan-dark-self-tanner-lotion",
    name: "b.tan Dark Self Tanner Lotion",
    tagline: "Glow Your Own Way",
    award: "Best for Beginners",
    awardBg: "bg-rose-500",
    awardText: "text-white",
    image: "https://m.media-amazon.com/images/I/61D0W3fH6IL._SL1500_.jpg",
    description:
      "A daily hydrating lotion that builds a natural, gradual bronze while keeping skin supple.",
    pros: [
      "Buildable colour — control your glow level",
      "Intense skin hydration",
      "Beginner-friendly, forgiving formula",
    ],
    bottomLine:
      "The Bottom Line: Perfect for those who want to control their glow level day by day while maintaining high-end skin hydration.",
    affiliateLink:
      "https://www.amazon.com/dp/B0F8L9SCXQ?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.31099GK9H64TI&linkCode=tr1&tag=123401acf-20&linkId=amzn1.campaign.31099GK9H64TI_1776971613070",
  },
  {
    id: "btan-tanned-af-intensifier-spray",
    name: "b.tan Tanned AF Intensifier Deep Dry Spray",
    tagline: "Maximum Sun Acceleration",
    award: "Best Outdoor Oil",
    awardBg: "bg-orange-600",
    awardText: "text-white",
    image: "https://m.media-amazon.com/images/I/61j39066+IL._SL1500_.jpg",
    description:
      "A tanning oil designed for outdoor use that accelerates the natural tanning process for a deep, dark glow.",
    pros: [
      "Non-greasy dry-oil finish",
      "Accelerates natural sun results dramatically",
      "Beach-bag essential — lightweight and portable",
    ],
    bottomLine:
      "The Bottom Line: For the true sun-seeker, this oil maximizes every minute of UV exposure while protecting skin texture.",
    affiliateLink:
      "https://www.amazon.com/dp/B091BCL3RJ?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.31099GK9H64TI&linkCode=tr1&tag=123401acf-20&linkId=amzn1.campaign.31099GK9H64TI_1776971622681",
  },
]

// ─── JSON-LD Product Schema ───────────────────────────────────────────────────

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "The 2026 Summer Glow Report: b.tan Collection",
  description:
    "Expert review of the viral b.tan self-tanning collection, featuring the best affordable tanning formulas for a red-carpet bronze.",
  itemListElement: products.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Product",
      name: p.name,
      brand: { "@type": "Brand", name: "b.tan" },
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

// ─── Gold Gradient CTA Button ─────────────────────────────────────────────────

function GoldCTA({ href, full = false }: { href: string; full?: boolean }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${full ? "w-full" : ""} inline-flex items-center justify-center gap-2 text-sm font-semibold px-6 py-3 rounded-xl text-white shadow-md hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200`}
      style={{
        background: "linear-gradient(135deg, #d4a435 0%, #f0c040 40%, #c8870a 100%)",
      }}
    >
      <ShoppingBag className="w-4 h-4" />
      Shop Now on Amazon
      <ExternalLink className="w-3.5 h-3.5 opacity-80" />
    </a>
  )
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function SummerGlowReportPage() {
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
        id="btan-product-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />

      {/* ── Sticky Header ──────────────────────────────────────── */}
      <main className="max-w-5xl mx-auto px-4 py-10">
        {/* ── Hero Section ───────────────────────────────────────── */}
        <section className="mb-16">
          {/* Mandatory AD Disclosure */}
          <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8">
            <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-amber-800 leading-relaxed">
              <strong>AD:</strong> This article features products from a paid partnership with b.tan
              via Amazon Creator Connections.
            </p>
          </div>

          {/* H1 Title */}
          <Breadcrumb />
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-5">
            The 2026 Summer Glow Report: Why b.tan is the Secret to a Red-Carpet Tan
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mb-6">
            Forget the orange tint and the &lsquo;fake tan smell.&rsquo; We review the affordable,
            viral tanning formulas that luxury editors are obsessed with this season.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 bg-white border border-gray-200 px-3 py-1.5 rounded-full shadow-sm">
              <Clock className="w-3 h-3 text-slate-400" />
              Updated {getCurrentMonthYear()}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 bg-white border border-gray-200 px-3 py-1.5 rounded-full shadow-sm">
              <BadgeCheck className="w-3 h-3 text-emerald-500" />
              Editor Reviewed
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 bg-white border border-gray-200 px-3 py-1.5 rounded-full shadow-sm">
              <Shield className="w-3 h-3 text-sky-500" />
              Independently Tested
            </span>
          </div>
        </section>

        {/* ── Pre-Tan Ritual Box (Cross-Sell) ─────────────────────── */}
        <section className="mb-14">
          <div className="bg-white border-2 border-amber-200 rounded-2xl p-6 flex flex-col sm:flex-row items-start gap-5">
            <div
              className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #d4a435 0%, #f0c040 100%)",
              }}
            >
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-amber-600 mb-1">
                Pre-Tan Ritual
              </p>
              <p className="text-slate-800 leading-relaxed text-sm">
                <strong>Editor&apos;s Secret:</strong> For a streak-free tan, always exfoliate 24
                hours prior. We recommend the{" "}
                <Link
                  href="/best-elemis-skincare"
                  className="font-semibold text-amber-700 underline underline-offset-2 hover:text-amber-900 transition-colors"
                >
                  ELEMIS Dynamic Resurfacing Pads
                </Link>{" "}
                for the smoothest canvas.
              </p>
            </div>
          </div>
        </section>

        {/* ── At A Glance ─────────────────────────────────────────── */}
        <section id="top-picks" className="mb-20 scroll-mt-20">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            At A Glance: The Viral Tanning Squad
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-gray-200 rounded-2xl p-4 flex flex-col hover:shadow-md transition-shadow duration-200"
              >
                {/* Award Badge */}
                <span
                  className={`self-start text-xs font-bold px-2.5 py-1 rounded-full mb-3 ${product.awardBg} ${product.awardText}`}
                >
                  {product.award}
                </span>

                {/* Thumbnail */}
                <div className="w-full aspect-square rounded-xl overflow-hidden mb-3 bg-stone-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name */}
                <p className="text-sm font-semibold text-slate-800 leading-snug mb-3 flex-1">
                  {product.name}
                </p>

                {/* CTA */}
                <a
                  href={product.affiliateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-white text-xs font-semibold px-3 py-2 rounded-lg flex items-center justify-center gap-1.5 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
                  style={{
                    background:
                      "linear-gradient(135deg, #d4a435 0%, #f0c040 40%, #c8870a 100%)",
                  }}
                >
                  Shop Now
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* ── Deep-Dive Product Cards ──────────────────────────────── */}
        <section id="reviews" className="mb-20 scroll-mt-20">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">
            In-Depth b.tan Reviews
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
                  <span className="text-sm font-bold tracking-wide">{product.award}</span>
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
                        <GoldCTA href={product.affiliateLink} full />
                      </div>
                    </div>

                    {/* Right — Details */}
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold tracking-widest uppercase text-slate-400 mb-1">
                        #{index + 1} b.tan Pick
                      </p>
                      <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900 leading-tight mb-1">
                        {product.name}
                      </h2>
                      <p className="text-base italic text-amber-700 mb-4">
                        &ldquo;{product.tagline}&rdquo;
                      </p>

                      <p className="text-slate-600 leading-relaxed mb-4">
                        {product.description}
                      </p>

                      <p className="font-semibold text-slate-900 mb-6">
                        {product.bottomLine}
                      </p>

                      {/* Pros Block */}
                      <div className="bg-white border border-gray-200 rounded-xl p-4">
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
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 font-bold text-xl">
                BT
              </div>
              <div>
                <p className="font-semibold text-slate-900 text-lg mb-1">
                  The Beauty Tech Review Team
                </p>
                <p className="text-sm text-slate-500 mb-3">
                  Luxury Tanning &amp; Skincare Specialists
                </p>
                <p className="text-slate-600 leading-relaxed text-sm">
                  With over 10 years of hands-on beauty product testing, our team of luxury
                  editors and licensed estheticians evaluates every self-tanning formula for
                  colour payoff, scent, skin compatibility, and staying power — so every
                  recommendation you read is grounded in rigorous, expert-led analysis.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Beauty From Within Footer CTA ──────────────────────── */}
        <section className="mb-16">
          <div
            className="rounded-2xl p-8 text-center text-white"
            style={{
              background: "linear-gradient(135deg, #7c4f2a 0%, #c8870a 50%, #d4a435 100%)",
            }}
          >
            <Sparkles className="w-8 h-8 mx-auto mb-3 opacity-90" />
            <h3 className="font-display text-2xl font-bold mb-2">
              Support Your Glow From the Inside Out
            </h3>
            <p className="text-sm opacity-90 max-w-lg mx-auto mb-6">
              A beautiful tan starts beneath the skin. Discover how antioxidant supplements can
              protect and enhance your summer glow.
            </p>
            <Link
              href="/beauty-from-within"
              className="inline-flex items-center gap-2 bg-white text-amber-800 font-semibold px-6 py-3 rounded-xl hover:bg-amber-50 transition-colors duration-200 text-sm shadow-md"
            >
              <Leaf className="w-4 h-4" />
              Support your glow with antioxidant supplements
              <ChevronRight className="w-4 h-4" />
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
              <p className="text-xs text-slate-500 truncate">{activeProduct.award}</p>
              <p className="text-sm font-semibold text-slate-900 truncate">
                {activeProduct.name}
              </p>
            </div>
            <a
              href={activeProduct.affiliateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 text-white text-sm font-semibold px-4 py-2.5 rounded-xl flex items-center gap-1.5 hover:shadow-md transition-all duration-200"
              style={{
                background:
                  "linear-gradient(135deg, #d4a435 0%, #f0c040 40%, #c8870a 100%)",
              }}
            >
              <ShoppingBag className="w-4 h-4" />
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
