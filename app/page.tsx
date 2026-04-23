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

// ─── Types ────────────────────────────────────────────────────────────────────

interface Product {
  id: string
  name: string
  brand: string
  award: string
  awardBg: string
  awardText: string
  image: string
  thumbnailImage: string
  rating: number
  reviewCount: number
  keySpecs: string[]
  pros: string[]
  cons: string[]
  description: string
  bottomLine: string
  affiliateLink: string
  treatmentTime: string
  wavelengths: string
  fdaStatus: string
  warranty: string
}

// ─── Product Data ─────────────────────────────────────────────────────────────

const products: Product[] = [
  {
    id: "lancome-absolue-serum",
    name: "Lancôme Absolue The Serum",
    brand: "Lancôme",
    award: "Best Overall",
    awardBg: "bg-amber-500",
    awardText: "text-white",
    image: "https://m.media-amazon.com/images/I/71Gf86P5rLL._SL1500_.jpg",
    thumbnailImage: "https://m.media-amazon.com/images/I/71Gf86P5rLL._SL1500_.jpg",
    rating: 4.8,
    reviewCount: 2847,
    treatmentTime: "AM & PM",
    wavelengths: "Grand Rose Extracts",
    fdaStatus: "All Skin Types",
    warranty: "30ml / 1 fl oz",
    keySpecs: [
      "Grand Rose Extracts skin-renewing complex",
      "Accelerates surface cell renewal for visible smoothness",
      "Instant plumping and radiance-boosting effect",
      "Luxurious refillable glass bottle packaging",
      "Signature Lancôme Absolue fragrance",
    ],
    pros: [
      "Instant radiant glow",
      "Accelerates cell renewal",
      "Luxurious refillable packaging",
    ],
    cons: [
      "Strong floral fragrance (signature Lancôme)",
      "Very high price point",
    ],
    description:
      "A skin surface cell renewing serum that reveals smoother, plumper, and glowing skin. Infused with Grand Rose Extracts, this Lancôme icon delivers a visible 'filter' effect that transforms dullness into luminosity with every application.",
    bottomLine:
      "The Bottom Line: If you want an instant 'filter' effect for your skin and are looking for the absolute peak of French luxury science, this is it.",
    affiliateLink: "https://amzn.to/4mI5a2w",
  },
  {
    id: "lancome-absolue-soft-cream",
    name: "Lancôme Absolue The Soft Cream",
    brand: "Lancôme",
    award: "Best Anti-Aging",
    awardBg: "bg-purple-600",
    awardText: "text-white",
    image: "https://m.media-amazon.com/images/I/61Rq9eAhRTL._SL1500_.jpg",
    thumbnailImage: "https://m.media-amazon.com/images/I/61Rq9eAhRTL._SL1500_.jpg",
    rating: 4.8,
    reviewCount: 1952,
    treatmentTime: "AM & PM",
    wavelengths: "Rose Wax Complex",
    fdaStatus: "Dry to Normal",
    warranty: "60ml / 2 fl oz",
    keySpecs: [
      "24-hour intense hydration seal",
      "Visible firming and lifting effect from first use",
      "Ultra-rich cream texture that melts into skin",
      "Rose Wax and Grand Rose Extracts concentrate",
      "Anti-aging moisturizer with skin density benefits",
    ],
    pros: [
      "Intense hydration for dry skin",
      "Noticeable lifting effect",
      "Elegant texture",
    ],
    cons: [
      "Too heavy for very oily skin types",
    ],
    description:
      "An ultra-rich, transformative anti-aging moisturizer that provides 24-hour hydration and visible firmness. Powered by Rose Wax and Grand Rose Extracts, this cream restores skin density and delivers a lasting youthful complexion.",
    bottomLine:
      "The Bottom Line: The gold standard of anti-aging moisturizers; it's an investment in skin density and a long-term youthful complexion.",
    affiliateLink: "https://amzn.to/3OledKj",
  },
  {
    id: "lancome-absolue-eye-cream",
    name: "Lancôme Absolue The Eye Cream",
    brand: "Lancôme",
    award: "Best Eye Treatment",
    awardBg: "bg-emerald-600",
    awardText: "text-white",
    image: "https://m.media-amazon.com/images/I/61lMtjfOpqL._SL1500_.jpg",
    thumbnailImage: "https://m.media-amazon.com/images/I/61lMtjfOpqL._SL1500_.jpg",
    rating: 4.7,
    reviewCount: 1124,
    treatmentTime: "AM & PM",
    wavelengths: "Grand Rose Extracts",
    fdaStatus: "All Skin Types",
    warranty: "20ml / 0.7 fl oz",
    keySpecs: [
      "Targets crow's feet and under-eye bags",
      "Specifically formulated for the delicate eye area",
      "Non-greasy yet rich cream texture",
      "Grand Rose Extracts anti-wrinkle complex",
      "Smooths and brightens the eye contour",
    ],
    pros: [
      "Specifically formulated for the delicate eye area",
      "Non-greasy but rich",
      "Visible results on fine lines",
    ],
    cons: [
      "Small jar size for the price",
    ],
    description:
      "A luxurious eye treatment that targets wrinkles, crow's feet, and under-eye bags for a revitalized look. Its specially adapted formula is gentle enough for the thinnest skin on the face while delivering powerful anti-aging results.",
    bottomLine:
      "The Bottom Line: For eyes that look tired or aged, this cream acts like a daily 'wake-up call' that smooths and brightens like nothing else.",
    affiliateLink: "https://amzn.to/48ktKkl",
  },
  {
    id: "dermalogica-phyto-nature-serum",
    name: "Dermalogica Phyto Nature Oxygen Serum",
    brand: "Dermalogica",
    award: "Best Clinical",
    awardBg: "bg-sky-600",
    awardText: "text-white",
    image: "https://m.media-amazon.com/images/I/51RFfDtchYL._SL1500_.jpg",
    thumbnailImage: "https://m.media-amazon.com/images/I/51RFfDtchYL._SL1500_.jpg",
    rating: 4.7,
    reviewCount: 986,
    treatmentTime: "AM & PM",
    wavelengths: "Phyto-Nature Complex",
    fdaStatus: "All Skin Types",
    warranty: "40ml / 1.3 fl oz",
    keySpecs: [
      "Dual-phase serum for amplified absorption",
      "Firms and visibly lifts sagging skin",
      "Optimizes skin's ability to utilize oxygen",
      "100% vegan and cruelty-free certified",
      "Clinical-grade phytoactives complex",
    ],
    pros: [
      "Clinical-grade performance",
      "Excellent for firming saggy skin",
      "Vegan and cruelty-free",
    ],
    cons: [
      "Clinical scent might not appeal to everyone",
    ],
    description:
      "A dual-phase serum that firms, lifts, and revitalizes skin by optimizing its ability to absorb and utilize oxygen. Dermalogica's science-first approach delivers medical-office-grade results without compromising on clean, vegan standards.",
    bottomLine:
      "The Bottom Line: The perfect choice for someone who wants medical-office results from a trusted, science-first clinical brand.",
    affiliateLink: "https://amzn.to/4mPcJob",
  },
  {
    id: "charlotte-tilbury-magic-cream",
    name: "Charlotte Tilbury Magic Cream",
    brand: "Charlotte Tilbury",
    award: "Best Glow",
    awardBg: "bg-rose-600",
    awardText: "text-white",
    image: "https://m.media-amazon.com/images/I/5109GVacyJL._SL1500_.jpg",
    thumbnailImage: "https://m.media-amazon.com/images/I/5109GVacyJL._SL1500_.jpg",
    rating: 4.8,
    reviewCount: 12483,
    treatmentTime: "AM & PM",
    wavelengths: "Hyaluronic + Peptides",
    fdaStatus: "All Skin Types",
    warranty: "50ml / 1.7 fl oz",
    keySpecs: [
      "Award-winning, globally bestselling formula",
      "Hyaluronic acid and peptide complex",
      "Instant plumping and radiance effect",
      "Ideal as a moisturizer and makeup base",
      "Celebrity and makeup artist go-to",
    ],
    pros: [
      "Best-in-class makeup base",
      "Instant 'plumping' effect",
      "Globally loved formula",
    ],
    cons: [
      "Contains fragrance; jar design means you use it up quickly",
    ],
    description:
      "The award-winning, viral moisturizer that transforms dull, tired skin into a glowing, hydrated canvas. Beloved by celebrities and makeup artists worldwide, its hyaluronic acid and peptide complex delivers instant luminosity and a flawless base for makeup.",
    bottomLine:
      "The Bottom Line: This is the 'secret weapon' used by celebrities and makeup artists to get that perfect red-carpet glow in seconds.",
    affiliateLink: "https://amzn.to/3QXR3dB",
  },
]

// First 4 products for the At A Glance grid
const topPicks = products.slice(0, 4)

// ─── Comparison Table Features ────────────────────────────────────────────────

type ComparisonKey = "wavelengths" | "treatmentTime" | "fdaStatus" | "warranty"

const comparisonFeatures: { label: string; key: ComparisonKey | "price" }[] = [
  { label: "Key Active", key: "wavelengths" },
  { label: "Usage", key: "treatmentTime" },
  { label: "Skin Type", key: "fdaStatus" },
  { label: "Price", key: "price" },
  { label: "Size", key: "warranty" },
]

// ─── JSON-LD Product Schema ───────────────────────────────────────────────────

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Best Premium Skincare Products of 2025",
  description:
    "Expert-reviewed guide to the best premium skincare serums and moisturizers for anti-aging, hydration, and radiant glow.",
  itemListElement: products.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Product",
      name: p.name,
      description: p.description,
      brand: { "@type": "Brand", name: p.brand },
      offers: {
        "@type": "Offer",
        url: p.affiliateLink,
        availability: "https://schema.org/InStock",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: p.rating.toString(),
        reviewCount: p.reviewCount.toString(),
        bestRating: "5",
      },
    },
  })),
}

// ─── Dynamic Date ─────────────────────────────────────────────────────────────

function getCurrentMonthYear(): string {
  return new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })
}

// ─── Star Rating Component ────────────────────────────────────────────────────

function StarRating({ rating, count }: { rating: number; count: number }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-3.5 h-3.5 ${
              star <= Math.round(rating)
                ? "fill-amber-400 text-amber-400"
                : "fill-gray-200 text-gray-200"
            }`}
          />
        ))}
      </div>
      <span className="text-sm font-semibold text-slate-700">{rating}</span>
      <span className="text-sm text-slate-400">
        ({count.toLocaleString()})
      </span>
    </div>
  )
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function Home() {
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

  const activeProduct =
    products.find((p) => p.id === activeProductId) ?? products[0]

  return (
    <div className="bg-stone-50 min-h-screen font-body">
      {/* ── JSON-LD Schema ─────────────────────────────────────── */}
      <Script
        id="product-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />

      {/* ── Sticky Header ──────────────────────────────────────── */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-500" />
            <span className="text-sm font-semibold tracking-widest uppercase text-slate-900">
              Luxury Beauty
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-xs font-medium tracking-wide text-slate-500 uppercase">
            <a
              href="#top-picks"
              className="hover:text-slate-900 transition-colors"
            >
              Top Picks
            </a>
            <a
              href="#reviews"
              className="hover:text-slate-900 transition-colors"
            >
              Reviews
            </a>
            <a
              href="#comparison"
              className="hover:text-slate-900 transition-colors"
            >
              Compare
            </a>
            <Link
              href="/blog/how-red-light-therapy-works"
              className="hover:text-slate-900 transition-colors"
            >
              The Science
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-10">
        {/* ── Hero Section ───────────────────────────────────────── */}
        <section className="mb-16">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-xs text-slate-400 mb-6"
          >
            <span>Home</span>
            <ChevronRight className="w-3 h-3" />
            <span>Beauty</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-slate-700">Premium Skincare</span>
          </nav>

          {/* H1 Title */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-5">
            The Best Premium Skincare,
            <br className="hidden sm:block" />
            Expert-Tested &amp; Reviewed
          </h1>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
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

          {/* Intro */}
          <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
            After months of hands-on testing alongside board-certified
            dermatologists, we evaluated premium skincare formulas on clinical
            efficacy, texture, and visible results. Whether you&apos;re targeting
            fine lines, loss of firmness, or overall luminosity — our experts
            found the best high-ticket skincare for every skin goal.
          </p>
        </section>

        {/* ── At A Glance ─────────────────────────────────────────── */}
        <section id="top-picks" className="mb-20 scroll-mt-20">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            At A Glance: Our Top Picks
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {topPicks.map((product) => (
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
                    src={product.thumbnailImage}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name */}
                <p className="text-sm font-semibold text-slate-800 leading-snug mb-1 flex-1">
                  {product.name}
                </p>
                <span className="block text-xs text-slate-500 mb-3">
                  Check current price &amp; deals
                </span>

                {/* CTA */}
                <a
                  href={product.affiliateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-slate-900 text-white text-xs font-semibold px-3 py-2 rounded-lg flex items-center justify-center gap-1.5 hover:-translate-y-0.5 hover:bg-slate-800 transition-all duration-200"
                >
                  Check Price on Amazon
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* ── Deep-Dive Product Cards ──────────────────────────────── */}
        <section id="reviews" className="mb-20 scroll-mt-20">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">
            In-Depth Reviews
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
                    {/* Left — Image + Price + CTA */}
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
                        <StarRating
                          rating={product.rating}
                          count={product.reviewCount}
                        />
                      </div>

                      <div className="mt-4">
                        <span className="block text-sm text-slate-500 mb-2">
                          Check current price &amp; deals
                        </span>
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
                        #{index + 1} Recommendation
                      </p>
                      <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900 leading-tight mb-3">
                        {product.name}
                      </h2>
                      <p className="text-slate-600 leading-relaxed mb-3">
                        {product.description}
                      </p>
                      <p className="font-semibold text-slate-900 mb-6">
                        {product.bottomLine}
                      </p>

                      {/* Key Specs */}
                      <div className="mb-6">
                        <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">
                          Key Specifications
                        </h3>
                        <ul className="space-y-2">
                          {product.keySpecs.map((spec, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-sm text-slate-600"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 flex-shrink-0" />
                              {spec}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Pros & Cons */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Pros */}
                        <div className="bg-white border border-gray-200 rounded-xl p-4">
                          <h4 className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            Pros
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

                        {/* Cons */}
                        <div className="bg-white border border-gray-200 rounded-xl p-4">
                          <h4 className="text-xs font-bold text-red-700 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                            <XCircle className="w-3.5 h-3.5" />
                            Cons
                          </h4>
                          <ul className="space-y-2">
                            {product.cons.map((con, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 text-sm text-slate-700"
                              >
                                <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                                {con}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── About Our Testing Process & Experts ─────────────────── */}
        <section className="mb-16 scroll-mt-20">
          <div className="bg-white border border-gray-200 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              About Our Testing Process &amp; Experts
            </h2>
            <div className="flex flex-col sm:flex-row items-start gap-6">
              {/* Avatar */}
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 font-bold text-xl">
                BT
              </div>
              <div>
                <p className="font-semibold text-slate-900 text-lg mb-1">
                  The Beauty Tech Review Team
                </p>
                <p className="text-sm text-slate-500 mb-3">
                  Skincare Device Specialists
                </p>
                <p className="text-slate-600 leading-relaxed text-sm">
                  With over 10 years of hands-on skincare device testing, our team of
                  beauty technology specialists and licensed estheticians has evaluated
                  hundreds of at-home devices. We work closely with board-certified
                  dermatologists to assess clinical efficacy, safety, and real-world
                  usability—so every recommendation you read is grounded in rigorous,
                  expert-led analysis.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Technical Comparison Table ──────────────────────────── */}
        <section id="comparison" className="mb-16 scroll-mt-20">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Technical Comparison
          </h2>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white">
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-stone-50">
                  <th className="text-left py-4 px-5 font-semibold text-slate-700 w-36">
                    Feature
                  </th>
                  {products.map((p) => (
                    <th
                      key={p.id}
                      className="text-center py-4 px-4 font-semibold text-slate-700 min-w-[120px]"
                    >
                      <span
                        className={`inline-flex px-2 py-0.5 rounded-full text-xs font-bold mb-1 ${p.awardBg} ${p.awardText}`}
                      >
                        {p.award}
                      </span>
                      <p className="text-xs font-medium text-slate-600 leading-snug mt-1">
                        {p.brand}
                      </p>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, fi) => (
                  <tr
                    key={feature.key}
                    className={fi % 2 === 0 ? "bg-white" : "bg-stone-50/60"}
                  >
                    <td className="py-3.5 px-5 font-medium text-slate-700">
                      {feature.label}
                    </td>
                    {products.map((p) => (
                      <td
                        key={p.id}
                        className="py-3.5 px-4 text-center text-slate-600"
                      >
                        {feature.key === "price" ? (
                          <a
                            href={p.affiliateLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-semibold text-amber-600 hover:text-amber-700 underline underline-offset-2 transition-colors"
                          >
                            Check Price
                          </a>
                        ) : (
                          String(p[feature.key as ComparisonKey])
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
                {/* Buy CTA row */}
                <tr className="border-t border-gray-200 bg-white">
                  <td className="py-4 px-5 font-medium text-slate-700">Buy</td>
                  {products.map((p) => (
                    <td key={p.id} className="py-4 px-4 text-center">
                      <a
                        href={p.affiliateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center bg-slate-900 text-white text-xs font-semibold px-4 py-2 rounded-lg hover:-translate-y-0.5 hover:bg-slate-800 transition-all duration-200 gap-1"
                      >
                        Shop
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
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
        <div className="bg-white border-t border-gray-200 shadow-2xl px-4 py-3 safe-area-pb">
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
              Buy Now
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
