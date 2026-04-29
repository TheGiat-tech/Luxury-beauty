import type { Metadata } from "next"
import Script from "next/script"
import "./globals.css"
import Header from "./components/Header"
import Footer from "./components/Footer"

export const metadata: Metadata = {
  title: {
    template: "%s | Glowvigo",
    default:
      "Glowvigo | The Intersection of Cellular Intelligence & Clinical Beauty",
  },
  description:
    "Expert-led investigations into luxury skincare, bio-hacking, and clinical results. We decode the science of longevity and luminosity for the modern aesthetic.",
  keywords: [
    "Luxury Skincare",
    "Clinical Beauty",
    "Bio-hacking",
    "Cellular Health",
    "Anti-aging Science",
    "Glowvigo",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: { url: "/icon.png", type: "image/png" },
  },
  openGraph: {
    title: "Glowvigo: Beyond Skin. The Future of Beauty.",
    description:
      "Clinical-grade insights into the world's most exclusive wellness formulas.",
    images: [{ url: "/og-image.png" }],
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    other: {
      "p:domain_verify": ["778b859a2f62f74ad3724396f8fbd5e8"],
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
        <Script
          id="pinterest-tag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(e){if(!window.pintrk){window.pintrk=function(){window.pintrk.queue.push(Array.prototype.slice.call(arguments))};var n=window.pintrk;n.queue=[],n.version="3.0";var t=document.createElement("script");t.async=!0,t.src=e;var r=document.getElementsByTagName("script")[0];r.parentNode.insertBefore(t,r)}}("https://s.pinimg.com/ct/core.js");
              pintrk('load', '2612802316930');
              pintrk('page');
            `,
          }}
        />
      </body>
    </html>
  )
}
