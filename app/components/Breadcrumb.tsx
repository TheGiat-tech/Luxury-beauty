import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function Breadcrumb() {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2 text-stone-400 hover:text-stone-600 transition-colors mb-6"
      style={{ fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase" }}
    >
      <ArrowLeft className="w-3 h-3" />
      Back to Premium Beauty
    </Link>
  )
}
