"use client"

import { useEffect, useRef, useState } from "react"
import Script from "next/script"
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
} from "lucide-react"

// ─── Types ────────────────────────────────────────────────────────────────────

interface Product {
  id: string
  name: string
  award: string
  awardBg: string
  awardText: string
  price: string
  image: string
  pros: string[]
  bottomLine: string
  affiliateLink: string
}

// ─── Product Data ─────────────────────────────────────────────────────────────

const products: Product[] = [
  {
    id: "elemis-pro-collagen-marine-cream",
    name: "ELEMIS Pro-Collagen Marine Cream",
    award: "The Ultimate Luxury",
    awardBg: "bg-amber-500",
    awardText: "text-white",
    price: "$254.20",
    image: "https://m.media-amazon.com/images/I/71M6SjD8FGL._SL1500_.jpg",
    pros: [
      "Clinically proven to reduce wrinkles in 14 days",
      "Ultimate hydration",
      "Iconic gel-cream texture",
    ],
    bottomLine:
      "The Bottom Line: If you want the absolute best-selling luxury moisturizer on the market that actually delivers on its anti-aging promises, this is your gold standard.",
    affiliateLink:
      "https://www.amazon.com/dp/B001G7ONAO?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.5MMA1ASZBI1N&linkCode=tr1&tag=123401acf-20&linkId=amzn1.campaign.5MMA1ASZBI1N_1776970485925",
  },
  {
    id: "elemis-pro-collagen-marine-cream-spf30",
    name: "ELEMIS Pro-Collagen Marine Cream SPF 30",
    award: "The Daily Essential",
    awardBg: "bg-purple-600",
    awardText: "text-white",
    price: "$119.00",
    image: "https://m.media-amazon.com/images/I/71X8k8X-5TL._SL1500_.jpg",
    pros: [
      "Superior sun protection without the \u2018white cast\u2019",
      "Firms and hydrates",
      "Perfect under makeup",
    ],
    bottomLine:
      "The Bottom Line: The perfect 2-in-1 solution for those who demand high-end anti-aging benefits and serious sun protection in one step.",
    affiliateLink:
      "https://www.amazon.com/dp/B07BMBQG73?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.5MMA1ASZBI1N&linkCode=tr1&tag=123401acf-20&linkId=amzn1.campaign.5MMA1ASZBI1N_1776970470130",
  },
  {
    id: "elemis-pro-collagen-future-restore-serum",
    name: "ELEMIS Pro-Collagen Future Restore Serum",
    award: "The Innovation",
    awardBg: "bg-sky-600",
    awardText: "text-white",
    price: "$99.00",
    image: "https://m.media-amazon.com/images/I/61K-K1V9AFL._SL1500_.jpg",
    pros: [
      "Advanced firming technology",
      "Restores skin resilience",
      "Lightweight and fast-absorbing",
    ],
    bottomLine:
      "The Bottom Line: A must-have for anyone looking to future-proof their skin against sagging and loss of elasticity.",
    affiliateLink:
      "https://www.amazon.com/dp/B0DYK9VSFZ?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.5MMA1ASZBI1N&linkCode=tr1&tag=123401acf-20&linkId=amzn1.campaign.5MMA1ASZBI1N_1776970470128",
  },
  {
    id: "elemis-pro-collagen-night-cream",
    name: "ELEMIS Pro-Collagen Night Cream",
    award: "The Night Power",
    awardBg: "bg-slate-700",
    awardText: "text-white",
    price: "$148.75",
    image: "https://m.media-amazon.com/images/I/71S8wUo4dML._SL1500_.jpg",
    pros: [
      "Deeply nourishing for overnight repair",
      "Rich but breathable",
      "Wakes up skin with a glow",
    ],
    bottomLine:
      "The Bottom Line: While you sleep, this cream does the heavy lifting, ensuring you wake up with plumper, more youthful-looking skin.",
    affiliateLink:
      "https://www.amazon.com/dp/B00175YVOS?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.5MMA1ASZBI1N&linkCode=tr1&tag=123401acf-20&linkId=amzn1.campaign.5MMA1ASZBI1N_1776970317195",
  },
  {
    id: "elemis-dynamic-resurfacing-facial-pads",
    name: "ELEMIS Dynamic Resurfacing Facial Pads",
    award: "The Glow Secret",
    awardBg: "bg-rose-500",
    awardText: "text-white",
    price: "$25.00",
    image: "https://m.media-amazon.com/images/I/71uVv8Q2oHL._SL1500_.jpg",
    pros: [
      "Gentle physical and chemical exfoliation",
      "Smooths skin texture instantly",
      "Great entry-point price",
    ],
    bottomLine:
      "The Bottom Line: The quickest way to get a glowing, smooth complexion at home without the harshness of traditional scrubs.",
    affiliateLink:
      "https://www.amazon.com/dp/B0F9JKJ614?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.5MMA1ASZBI1N&linkCode=tr1&tag=123401acf-20&linkId=amzn1.campaign.5MMA1ASZBI1N_1776970434892",
  },
]

// ─── JSON-LD Product Schema ───────────────────────────────────────────────────

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "The 5 Best ELEMIS Skincare Products of 2026",
  description:
    "Expert review of the top ELEMIS skincare products, from the iconic Pro-Collagen Marine Cream to the viral Dynamic Resurfacing Pads.",
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
          <Star
            key={star}
            className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
          />
        ))}
      </div>
      <span className="text-sm font-semibold text-slate-700">5.0</span>
      <span className="text-sm text-slate-400">on Amazon</span>
    </div>
  )
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function BestElemsSkincorePage() {
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
        id="elemis-product-schema"
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
              <strong>AD:</strong> This article features products from a paid partnership with ELEMIS via Amazon Creator Connections.
            </p>
          </div>

          {/* H1 Title */}
          <Breadcrumb />
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-5">
            The 5 Best ELEMIS Skincare Products of 2026: An Expert Review
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mb-6">
            From the iconic Marine Cream to the viral Resurfacing Pads, we evaluate the high-performance British skincare brand featured in Vogue and Allure.
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

        {/* ── At A Glance ─────────────────────────────────────────── */}
        <section id="top-picks" className="mb-20 scroll-mt-20">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            At A Glance: Our Top ELEMIS Picks
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
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
                <p className="text-sm font-semibold text-slate-800 leading-snug mb-1 flex-1">
                  {product.name}
                </p>
                <span className="block text-sm font-bold text-slate-900 mb-3">
                  {product.price}
                </span>

                {/* CTA */}
                <a
                  href={product.affiliateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-slate-900 text-white text-xs font-semibold px-3 py-2 rounded-lg flex items-center justify-center gap-1.5 hover:-translate-y-0.5 hover:bg-slate-800 transition-all duration-200"
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
            In-Depth ELEMIS Reviews
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
                        <StarRating />
                      </div>

                      <div className="mt-4 flex items-center gap-3">
                        <span className="text-2xl font-bold text-slate-900">
                          {product.price}
                        </span>
                      </div>

                      <div className="mt-3">
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
                        #{index + 1} ELEMIS Pick
                      </p>
                      <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900 leading-tight mb-4">
                        {product.name}
                      </h2>

                      <p className="font-semibold text-slate-900 mb-6">
                        {product.bottomLine}
                      </p>

                      {/* Pros Block — pure white */}
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

        {/* ── About Our Testing Process & Experts ─────────────────── */}
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
                  Luxury Skincare Specialists
                </p>
                <p className="text-slate-600 leading-relaxed text-sm">
                  With over 10 years of hands-on skincare testing, our team of luxury beauty specialists and licensed estheticians has evaluated hundreds of prestige formulas. We work closely with board-certified dermatologists to assess clinical efficacy, texture, and real-world results — so every recommendation you read is grounded in rigorous, expert-led analysis.
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
              Shop ELEMIS on Amazon
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
