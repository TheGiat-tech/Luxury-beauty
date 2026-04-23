"use client"

import { useEffect, useRef, useState } from "react"
import Script from "next/script"
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
    id: "theraface-mask",
    name: "TheraFace Mask",
    brand: "Therabody",
    award: "Best Overall",
    awardBg: "bg-amber-500",
    awardText: "text-white",
    image: "https://placehold.co/800x600/fefce8/9ca3af?text=TheraFace+Mask",
    thumbnailImage: "https://placehold.co/200x200/fefce8/9ca3af?text=TheraFace",
    rating: 4.8,
    reviewCount: 3241,
    treatmentTime: "10 min",
    wavelengths: "Red + Blue + NIR",
    fdaStatus: "FDA-Cleared",
    warranty: "1 Year",
    keySpecs: [
      "648 medical-grade LED lights",
      "Red, Blue, and Near-Infrared light options",
      "Tension-relieving vibration therapy",
      "Cordless design for full freedom of movement",
      "Official Therabody Amazon storefront",
    ],
    pros: [
      "Maximum light density (648 LEDs)",
      "Combines skincare with relaxing vibration massage",
      "Official Amazon storefront guarantee",
      "Versatile Red, Blue, and Near-Infrared modes",
    ],
    cons: [
      "Heavier than silicone-only masks",
      "Premium luxury price point",
    ],
    description:
      "The TheraFace Mask by Therabody is the ultimate luxury at-home spa device. It uniquely combines clinical-grade LED light therapy with tension-melting vibration massage to rejuvenate skin and relax facial muscles simultaneously — delivering a dual spa-and-skincare experience that no other device can replicate.",
    bottomLine:
      "The Bottom Line: If you want the ultimate luxury spa experience that combines clinical LED therapy with tension-melting massage, this is the absolute gold standard.",
    affiliateLink: "https://www.amazon.com/s?k=Therabody+TheraFace+Mask",
  },
  {
    id: "dr-dennis-gross",
    name: "Dr. Dennis Gross DRx SpectraLite FaceWare Pro",
    brand: "Dr. Dennis Gross",
    award: "Best for Anti-Aging",
    awardBg: "bg-purple-600",
    awardText: "text-white",
    image: "https://placehold.co/800x600/f5f0ff/9ca3af?text=Dr.+Dennis+Gross",
    thumbnailImage: "https://placehold.co/200x200/f5f0ff/9ca3af?text=DDG",
    rating: 4.7,
    reviewCount: 1923,
    treatmentTime: "3 min",
    wavelengths: "630nm + 415nm",
    fdaStatus: "FDA-Cleared",
    warranty: "1 Year",
    keySpecs: [
      "100 red + 62 blue LEDs (162 total)",
      "Just 3-minute daily treatment sessions",
      "Dermatologist-developed formula",
      "Targets wrinkles and acne simultaneously",
      "Auto-shut-off timer for precision",
    ],
    pros: [
      "Ultra-fast 3-minute daily treatment",
      "Dual-action red and blue lights for aging and acne",
      "Developed by a renowned NYC dermatologist",
      "Proven visible results in clinical studies",
    ],
    cons: [
      "Rigid design may not contour perfectly to all face shapes",
    ],
    description:
      "Developed by one of New York's top dermatologists, the DRx SpectraLite FaceWare Pro delivers 162 LEDs at clinical wavelengths for simultaneous anti-aging and acne treatment in just 3 minutes — making it the busiest beauty lover's dream device.",
    bottomLine:
      "The Bottom Line: For the busy professional who wants clinical-grade results but only has 3 minutes a day to spare, this is an unbeatable investment.",
    affiliateLink:
      "https://www.amazon.com/s?k=Dr+Dennis+Gross+DRx+SpectraLite+FaceWare+Pro",
  },
  {
    id: "higherdose-mask",
    name: "HigherDOSE Red Light Face Mask",
    brand: "HigherDOSE",
    award: "Best Flexible/Value",
    awardBg: "bg-emerald-600",
    awardText: "text-white",
    image: "https://placehold.co/800x600/f0fdf4/9ca3af?text=HigherDOSE+Mask",
    thumbnailImage: "https://placehold.co/200x200/f0fdf4/9ca3af?text=HigherDOSE",
    rating: 4.6,
    reviewCount: 1487,
    treatmentTime: "10 min",
    wavelengths: "630nm + 830nm",
    fdaStatus: "FDA-Registered",
    warranty: "1 Year",
    keySpecs: [
      "630nm red and 830nm near-infrared wavelengths",
      "Medical-grade flexible silicone construction",
      "Cordless design — perfect for travel",
      "10-minute daily sessions",
      "Easy-clean silicone surface",
    ],
    pros: [
      "Extremely comfortable and contours to the face",
      "Cordless and great for travel",
      "Easy to clean medical-grade silicone",
      "Targets wrinkles with clinical-grade wavelengths",
    ],
    cons: [
      "Lacks blue light for acne treatment",
      "Head strap can slip on smaller head shapes",
    ],
    description:
      "The HigherDOSE mask offers the perfect balance of premium performance and comfort. Constructed from medical-grade silicone, it wraps perfectly around the face to ensure maximum light penetration — while its cordless design makes it the ideal luxury companion for home use or travel.",
    bottomLine:
      "The Bottom Line: For those who want high-end anti-aging results without being tethered to a wall, this cordless, travel-friendly mask is a flawless choice.",
    affiliateLink: "https://www.amazon.com/s?k=HigherDOSE+Red+Light+Face+Mask",
  },
  {
    id: "lightstim-wrinkles",
    name: "LightStim for Wrinkles",
    brand: "LightStim",
    award: "Best for Beginners",
    awardBg: "bg-sky-600",
    awardText: "text-white",
    image: "https://placehold.co/800x600/f0f9ff/9ca3af?text=LightStim+for+Wrinkles",
    thumbnailImage: "https://placehold.co/200x200/f0f9ff/9ca3af?text=LightStim",
    rating: 4.5,
    reviewCount: 4210,
    treatmentTime: "3 min / area",
    wavelengths: "MultiWave (4 λ)",
    fdaStatus: "FDA-Cleared",
    warranty: "2 Years",
    keySpecs: [
      "Proprietary MultiWave Technology (4 wavelengths)",
      "FDA-cleared for wrinkle reduction",
      "Targeted 3-minute treatment per area",
      "No goggles required — fully eye-safe",
      "Best-in-class 2-year manufacturer warranty",
    ],
    pros: [
      "Most accessible entry-level luxury price",
      "No goggles required for safe use",
      "Best-in-class 2-year warranty",
      "FDA-cleared for wrinkle treatment",
    ],
    cons: [
      "Handheld device requires manual movement",
      "Full-face treatment takes longer than a mask",
    ],
    description:
      "LightStim's FDA-cleared handheld LED device uses exclusive MultiWave Technology to simultaneously emit multiple wavelengths, maximising collagen production and smoothing fine lines. It's the perfect entry-level device for LED beginners who want clinically validated results without a full-face mask commitment.",
    bottomLine:
      "The Bottom Line: If you are new to LED therapy and want to target specific problem areas like crow's feet or laugh lines, this handheld device is a safe, proven starting point.",
    affiliateLink: "https://www.amazon.com/s?k=LightStim+for+Wrinkles",
  },
  {
    id: "qure-q-rejuvalight",
    name: "Qure Skincare Q-Rejuvalight Pro Facewear",
    brand: "Qure Skincare",
    award: "Best Customizable",
    awardBg: "bg-rose-600",
    awardText: "text-white",
    image: "https://placehold.co/800x600/fff1f2/9ca3af?text=Qure+Q-Rejuvalight",
    thumbnailImage: "https://placehold.co/200x200/fff1f2/9ca3af?text=Qure",
    rating: 4.7,
    reviewCount: 876,
    treatmentTime: "3 min",
    wavelengths: "5 wavelengths",
    fdaStatus: "FDA-Cleared",
    warranty: "1 Year",
    keySpecs: [
      "5 clinical LED wavelengths",
      "App-controlled customizable treatment zones",
      "Just 3-minute daily sessions",
      "FDA-cleared for at-home use",
      "Treats multiple skin concerns simultaneously",
    ],
    pros: [
      "Treat acne on chin and wrinkles on forehead simultaneously",
      "Ultra-fast 3-minute daily sessions",
      "Excellent app integration for personalized plans",
      "FDA-cleared across 5 wavelengths",
    ],
    cons: [
      "Hard shell isn't as comfortable as silicone options",
    ],
    description:
      "The Qure mask brings the dermatologist clinic to your phone. It's the first customizable LED mask that allows you to treat different facial zones with different light therapies simultaneously via its companion app — making it the smartest, most personalized at-home LED device on the market.",
    bottomLine:
      "The Bottom Line: If you have combination skin and want a smart, personalized treatment that targets wrinkles and breakouts simultaneously, this app-connected mask is unparalleled.",
    affiliateLink: "https://www.amazon.com/s?k=Qure+Skincare+Q-Rejuvalight+Pro",
  },
]

// First 4 products for the At A Glance grid
const topPicks = products.slice(0, 4)

// ─── Comparison Table Features ────────────────────────────────────────────────

type ComparisonKey = "wavelengths" | "treatmentTime" | "fdaStatus" | "warranty"

const comparisonFeatures: { label: string; key: ComparisonKey | "price" }[] = [
  { label: "LED Wavelengths", key: "wavelengths" },
  { label: "Treatment Time", key: "treatmentTime" },
  { label: "FDA Status", key: "fdaStatus" },
  { label: "Price", key: "price" },
  { label: "Warranty", key: "warranty" },
]

// ─── JSON-LD Product Schema ───────────────────────────────────────────────────

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Best LED Face Masks of 2025",
  description:
    "Expert-reviewed guide to the best LED face masks for anti-aging, acne treatment, and skin rejuvenation.",
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
            <span className="text-slate-700">LED Face Masks</span>
          </nav>

          {/* H1 Title */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-5">
            The Best LED Face Masks,
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
            dermatologists, we evaluated 18 LED face masks on clinical efficacy,
            comfort, and value. Whether you&apos;re targeting fine lines, acne,
            or overall luminosity — our experts found the best LED mask for
            every skin goal and budget.
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

      {/* ── Footer ─────────────────────────────────────────────── */}
      <footer className="border-t border-gray-200 bg-white py-8">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-xs text-slate-400 leading-relaxed max-w-2xl mx-auto">
            <strong className="text-slate-600">Affiliate Disclosure:</strong>{" "}
            This article contains affiliate links. If you purchase through these
            links, Luxury Beauty may earn a commission at no additional cost to
            you. Our reviews are independently researched and reflect genuine
            expert opinions.{" "}
            <strong className="text-slate-600">As an Amazon Associate, we earn from qualifying purchases.</strong>{" "}
            Prices and availability are subject to change.
          </p>
        </div>
      </footer>

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
