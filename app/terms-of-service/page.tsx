import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | Luxury Beauty",
  description: "Terms of Service for Luxury Beauty – your rights and responsibilities when using our site.",
}

export default function TermsOfService() {
  return (
    <main className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1
          className="font-display text-4xl font-bold text-slate-900 mb-4"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Terms of Service
        </h1>
        <p className="text-sm text-slate-400 mb-10">Last updated: April 23, 2026</p>

        <div className="space-y-8 font-body text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-slate-800 mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the Luxury Beauty website (&quot;Site&quot;), you agree to be bound by
              these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, please do not
              use the Site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mb-3">2. Informational Purposes Only</h2>
            <p>
              The content published on this Site is provided for informational and entertainment purposes
              only. Product reviews, comparisons, and recommendations are based on our independent
              research and editorial opinion. Nothing on this Site constitutes professional medical,
              dermatological, or health advice. Always consult a qualified professional before making
              decisions about skincare or health products.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mb-3">3. Intellectual Property</h2>
            <p>
              All content on this Site, including text, graphics, logos, and images, is the property of
              Luxury Beauty or its content suppliers and is protected by applicable intellectual property
              laws. You may not reproduce, distribute, or create derivative works without our express
              written permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mb-3">4. User Conduct</h2>
            <p>
              When using this Site, you agree not to:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Violate any applicable local, national, or international law or regulation.</li>
              <li>Transmit any unsolicited or unauthorised advertising or promotional material.</li>
              <li>
                Attempt to gain unauthorised access to any part of the Site or its related systems or
                networks.
              </li>
              <li>
                Engage in any conduct that restricts or inhibits anyone&apos;s use or enjoyment of the
                Site, or which we determine may harm Luxury Beauty or users of the Site.
              </li>
              <li>Use any automated data collection methods, robots, or spiders to scrape the Site.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mb-3">5. Affiliate Links &amp; Third-Party Sites</h2>
            <p>
              This Site contains affiliate links to third-party websites, including Amazon.com. We are
              not responsible for the content, privacy policies, or practices of any third-party sites.
              Clicking affiliate links and making purchases is done at your own risk and is subject to the
              terms and policies of the respective third-party site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mb-3">6. Disclaimer of Warranties</h2>
            <p>
              This Site and its content are provided &quot;as is&quot; and &quot;as available&quot; without any
              warranties of any kind, either express or implied, including but not limited to warranties
              of merchantability, fitness for a particular purpose, or non-infringement. We do not
              warrant that the Site will be uninterrupted, error-free, or free of viruses or other
              harmful components.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mb-3">7. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by applicable law, Luxury Beauty and its owners, employees,
              and affiliates shall not be liable for any indirect, incidental, special, consequential, or
              punitive damages, including without limitation loss of profits, data, or goodwill, arising
              out of or in connection with your use of (or inability to use) the Site or its content,
              even if we have been advised of the possibility of such damages.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mb-3">8. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Changes will be effective
              immediately upon posting to the Site. Your continued use of the Site after any changes
              constitutes your acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mb-3">9. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with applicable law, without
              regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mb-3">10. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us through the contact
              information provided on our website.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
