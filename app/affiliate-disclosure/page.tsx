import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Affiliate Disclosure | Luxury Beauty",
  description: "Affiliate Disclosure for Luxury Beauty – how we earn commissions through affiliate partnerships.",
}

export default function AffiliateDisclosure() {
  return (
    <main className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1
          className="font-display text-4xl font-bold text-slate-900 mb-4"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Affiliate Disclosure
        </h1>
        <p className="text-sm text-slate-400 mb-10">Last updated: April 23, 2026</p>

        <div className="space-y-8 font-body text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-slate-800 mb-3">Amazon Associates Program</h2>
            <p>
              We are a participant in the Amazon Services LLC Associates Program, an affiliate advertising
              program designed to provide a means for us to earn fees by linking to Amazon.com and
              affiliated sites.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mb-3">What This Means for You</h2>
            <p>
              Some of the links on this website are &quot;affiliate links.&quot; This means that if you click on
              the link and purchase an item, Luxury Beauty may receive an affiliate commission at no
              additional cost to you. The price you pay remains the same whether or not you use our
              affiliate link.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mb-3">Our Editorial Integrity</h2>
            <p>
              Affiliate commissions help support the operation of this website and allow us to continue
              creating free, in-depth content for our readers. Our editorial opinions, reviews, and
              recommendations are entirely our own and are not influenced by affiliate partnerships. We
              only recommend products we genuinely believe provide value to our audience.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mb-3">FTC Compliance</h2>
            <p>
              In accordance with the Federal Trade Commission (FTC) guidelines, we disclose that this
              website contains affiliate links and that we may be compensated for purchases made through
              those links. This disclosure is made in compliance with 16 CFR Part 255: &quot;Guides
              Concerning the Use of Endorsements and Testimonials in Advertising.&quot;
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mb-3">Other Affiliate Programs</h2>
            <p>
              From time to time, we may also participate in other affiliate programs or receive
              compensation from companies whose products or services we review. Any such relationships
              will be disclosed clearly in the relevant content.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mb-3">Questions?</h2>
            <p>
              If you have any questions about our affiliate relationships or this disclosure, please
              contact us through the contact information provided on our website.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
