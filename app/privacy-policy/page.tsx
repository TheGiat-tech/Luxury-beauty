import type { Metadata } from "next"
import Breadcrumb from "../components/Breadcrumb"

export const metadata: Metadata = {
  title: "Privacy Policy | Luxury Beauty",
  description: "Privacy Policy for Luxury Beauty – how we collect, use, and protect your information.",
}

export default function PrivacyPolicy() {
  return (
    <main className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Breadcrumb />
        <h1
          className="font-display text-4xl font-bold text-slate-900 mb-4"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Privacy Policy
        </h1>
        <p className="text-sm text-slate-400 mb-10">Last updated: April 23, 2026</p>

        <div className="space-y-8 font-body text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-slate-800 mb-3">1. Introduction</h2>
            <p>
              Welcome to Luxury Beauty (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). We are committed to
              protecting your personal information and your right to privacy. This Privacy Policy explains
              how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mb-3">2. Information We Collect</h2>
            <p>
              We may collect information about you in a variety of ways, including:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>
                <strong>Log Data:</strong> When you visit our site, our servers automatically record
                information including your IP address, browser type, referring/exit pages, and the dates
                and times of your visits.
              </li>
              <li>
                <strong>Cookies and Tracking Technologies:</strong> We use cookies, web beacons, and
                similar tracking technologies to track activity on our site and improve your experience.
                You can instruct your browser to refuse all cookies or to indicate when a cookie is
                being sent.
              </li>
              <li>
                <strong>Third-Party Analytics:</strong> We may use third-party service providers such as
                Google Analytics to monitor and analyse the use of our website. These third parties have
                their own privacy policies addressing how they use such information.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mb-3">3. How We Use Your Information</h2>
            <p>
              We use the information we collect in the following ways:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>To operate and maintain our website.</li>
              <li>To analyse usage patterns and improve our content and user experience.</li>
              <li>To comply with legal obligations.</li>
              <li>To detect and prevent fraudulent or abusive activity.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mb-3">4. Cookies</h2>
            <p>
              Cookies are small data files placed on your device. We use session cookies (which expire
              when you close your browser) and persistent cookies (which remain on your device until
              deleted). Third-party advertisers and affiliate networks, including Amazon, may also set
              their own cookies when you follow links from our site to their platforms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mb-3">5. Third-Party Links &amp; Affiliate Programs</h2>
            <p>
              Our website contains links to third-party websites, including Amazon.com. We participate
              in the Amazon Services LLC Associates Program. When you click an affiliate link and make a
              purchase, Amazon may collect data about you in accordance with their own Privacy Policy. We
              encourage you to review the privacy policies of any third-party sites you visit.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mb-3">6. Data Retention</h2>
            <p>
              We retain collected information for as long as necessary to fulfil the purposes outlined in
              this Privacy Policy, unless a longer retention period is required by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mb-3">7. Children&apos;s Privacy</h2>
            <p>
              Our website is not directed to children under the age of 13. We do not knowingly collect
              personally identifiable information from children under 13. If you believe we have
              inadvertently collected such information, please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mb-3">8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by
              posting the new policy on this page with an updated effective date. Your continued use of
              the site after any modifications constitutes your acknowledgment of the changes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mb-3">9. Contact Us</h2>
            <p>
              If you have questions or concerns about this Privacy Policy, please contact us through the
              contact information provided on our website.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
