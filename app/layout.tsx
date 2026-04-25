import type { Metadata } from "next"
import "./globals.css"
import Header from "./components/Header"
import Footer from "./components/Footer"

export const metadata: Metadata = {
  title: "Best LED Face Masks of 2025 | Expert-Tested Reviews | Luxury Beauty",
  description:
    "Our dermatologist-reviewed guide to the best LED face masks for anti-aging, acne treatment, and skin rejuvenation. Find the perfect device for your skin goals.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: { url: "/icon.png", type: "image/png" },
  },
  openGraph: {
    title: "Best LED Face Masks of 2025 | Expert-Tested Reviews",
    description:
      "Expert-reviewed guide to the best LED face masks for anti-aging and skin rejuvenation.",
    type: "article",
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
      </body>
    </html>
  )
}
