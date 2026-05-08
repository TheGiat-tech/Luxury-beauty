import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, BadgeCheck } from "lucide-react"

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Brands Directory | Glowvigo",
  description:
    "Explore the world's most clinically advanced luxury beauty brands, curated by the Glowvigo editorial team. From marine-based anti-aging pioneers to next-generation sun and glow specialists.",
  openGraph: {
    title: "Glowvigo Brands Directory — Clinical Luxury, Curated.",
    description:
      "The definitive directory of elite skincare and beauty brands, each independently reviewed and editorially vetted by Glowvigo specialists.",
    type: "website",
  },
}

// ─── Types ────────────────────────────────────────────────────────────────────

interface Brand {
  id: string
  name: string
  category: string
  shortDescription: string
  slug: string
  accolade: string
}

// ─── Brand Data ───────────────────────────────────────────────────────────────

const brands: Brand[] = [
  {
    id: "elemis",
    name: "ELEMIS",
    category: "Clinical Anti-Aging & Cellular Health",
    shortDescription:
      "The British B‑Corp pioneer of marine-based anti-aging. Built on 30+ years of research, the Pro-Collagen system remains the gold standard of clinical luxury skincare.",
    slug: "/best-elemis-skincare",
    accolade: "Editor's Choice",
  },
  {
    id: "lancome",
    name: "Lancôme",
    category: "Clinical Anti-Aging & Cellular Health",
    shortDescription:
      "French haute beauté fused with decades of cellular science. The Absolue collection delivers transformative luminosity through patented Grand Rose Extract technology.",
    slug: "#",
    accolade: "Best Overall Serum",
  },
  {
    id: "skinceuticals",
    name: "SkinCeuticals",
    category: "Clinical Anti-Aging & Cellular Health",
    shortDescription:
      "The dermatologist‑trusted authority in antioxidant science. Known for patented vitamin C formulations that set the clinical benchmark for preventive anti-aging.",
    slug: "#",
    accolade: "Dermatologist Approved",
  },
  {
    id: "b-tan",
    name: "B.TAN",
    category: "Sun, Glow & Body",
    shortDescription:
      "The cult self-tan brand redefining effortless, natural-looking glow. Fast-developing, streak-free formulas that deliver salon-grade results at home.",
    slug: "/summer-glow-report",
    accolade: "Best Self-Tan",
  },
  {
    id: "drops-of-nature",
    name: "Drops of Nature",
    category: "Wellness & Inside-Out Beauty",
    shortDescription:
      "Pioneering liquid supplements that target beauty at the cellular level. Clinically studied saffron and inositol extracts that combat stress-aging and support lasting luminosity from within.",
    slug: "/beauty-from-within",
    accolade: "Best Wellness Brand",
  },
  {
    id: "glowvigo",
    name: "Glowvigo",
    category: "Wellness & Inside-Out Beauty",
    shortDescription:
      "Our house brand of bio-hacking beauty formulas. Four clinically engineered editions — serum, night cream, liquid drops, and a starter set — built for measurable, inside-out results.",
    slug: "/glowvigo-brand-hub",
    accolade: "Editor's Pick",
  },
]

// ─── Derived Categories ───────────────────────────────────────────────────────

const categories = Array.from(new Set(brands.map((b) => b.category)))

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function BrandsDirectoryPage() {
  return (
    <div className="bg-[#FAF9F6] min-h-screen font-body">

      {/* ══════════════════════════════════════════════════════════════
          PAGE HEADER
      ══════════════════════════════════════════════════════════════ */}
      <section className="border-b border-[#D4AF37]/20">
        <div className="max-w-5xl mx-auto px-4 py-20 md:py-28">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-amber-500 mb-4">
            Glowvigo — Curated Brands
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-extrabold tracking-wide text-stone-900 leading-tight mb-6 max-w-2xl">
            The Brands Directory.
          </h1>
          <p className="text-stone-500 text-lg leading-relaxed max-w-xl">
            Every brand below has been independently evaluated by the Glowvigo
            editorial team. We investigate the science, the heritage, and the
            clinical evidence — then tell you exactly what&rsquo;s worth your
            investment.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          BRAND CATEGORIES
      ══════════════════════════════════════════════════════════════ */}
      <main className="max-w-5xl mx-auto px-4 py-24 space-y-28">
        {categories.map((category) => {
          const categoryBrands = brands.filter((b) => b.category === category)

          return (
            <section key={category} aria-labelledby={`cat-${category}`}>

              {/* Category Header */}
              <div className="mb-10 pb-5 border-b border-[#D4AF37]/20">
                <div className="flex items-center gap-3 mb-2">
                  <span className="block h-px w-8 bg-[#D4AF37]" aria-hidden="true" />
                  <p
                    id={`cat-${category}`}
                    className="tracking-widest text-sm font-semibold text-stone-800 uppercase"
                  >
                    {category}
                  </p>
                </div>
                <p className="text-xs text-stone-400 pl-11">
                  {categoryBrands.length}{" "}
                  {categoryBrands.length === 1 ? "brand" : "brands"} reviewed
                </p>
              </div>

              {/* Brand Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryBrands.map((brand) => {
                  const hasPage = brand.slug !== "#"

                  const cardContent = (
                    <>
                      {/* Accolade Badge */}
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7A5C00] bg-gradient-to-r from-[#F5E6A3] to-[#EDD97A] border border-[#D4AF37]/40 px-2.5 py-1 rounded-full shadow-sm">
                          <BadgeCheck className="w-3 h-3" />
                          {brand.accolade}
                        </span>
                        {!hasPage && (
                          <span className="text-[10px] font-bold tracking-widest uppercase text-stone-400">
                            Coming Soon
                          </span>
                        )}
                      </div>

                      {/* Brand Name */}
                      <div>
                        <h2 className="font-display text-2xl font-bold text-stone-900 leading-tight mb-3 group-hover:text-amber-700 transition-colors">
                          {brand.name}
                        </h2>
                        <p className="text-sm text-stone-500 leading-relaxed">
                          {brand.shortDescription}
                        </p>
                      </div>

                      {/* CTA */}
                      {hasPage ? (
                        <div className="mt-auto flex items-center gap-1.5 text-xs font-semibold text-stone-800 group-hover:text-amber-700 transition-colors">
                          <span className="relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-amber-600 group-hover:after:w-full after:transition-all after:duration-300">
                            Read the Brand Hub
                          </span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                        </div>
                      ) : (
                        <div className="mt-auto text-xs text-stone-400 font-medium">
                          Editorial review in progress
                        </div>
                      )}
                    </>
                  )

                  const sharedClassName = `group block bg-white border border-[#D4AF37]/20 shadow-xl rounded-3xl p-8 flex flex-col gap-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 ${
                    hasPage ? "cursor-pointer" : "cursor-default"
                  }`

                  return hasPage ? (
                    <Link
                      key={brand.id}
                      href={brand.slug}
                      className={sharedClassName}
                    >
                      {cardContent}
                    </Link>
                  ) : (
                    <div key={brand.id} className={sharedClassName}>
                      {cardContent}
                    </div>
                  )
                })}
              </div>
            </section>
          )
        })}
      </main>

      {/* ══════════════════════════════════════════════════════════════
          EDITORIAL NOTE
      ══════════════════════════════════════════════════════════════ */}
      <section className="border-t border-[#D4AF37]/20 bg-white/60">
        <div className="max-w-5xl mx-auto px-4 py-14 text-center">
          <p className="text-xs text-stone-400 leading-relaxed max-w-2xl mx-auto">
            <strong className="text-stone-600">Editorial Independence:</strong>{" "}
            All brand assessments are conducted independently by the Glowvigo
            team. Where affiliate relationships exist, they are clearly disclosed
            on the relevant brand hub page and do not influence our editorial
            verdicts.
          </p>
        </div>
      </section>
    </div>
  )
}
