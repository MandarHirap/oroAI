import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-[#D4AF37]" />
          <span className="text-xl font-bold">
            OroAI
          </span>
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8 text-gray-600 font-medium">

          <Link
            href="/#features"
            className="hover:text-[#D4AF37] transition"
          >
            Features
          </Link>

          <Link
            href="/dashboard"
            className="hover:text-[#D4AF37] transition"
          >
            Dashboard
          </Link>

          <Link
            href="/ai-cfo"
            className="hover:text-[#D4AF37] transition"
          >
            AI CFO
          </Link>

          <Link
            href="/#pricing"
            className="hover:text-[#D4AF37] transition"
          >
            Pricing
          </Link>

        </div>

        {/* Buttons */}
        <div className="flex gap-3">

          <button className="px-5 py-2 rounded-xl border border-gray-300 hover:bg-gray-100 transition">
            Login
          </button>

          <Link href="/dashboard">
            <button className="px-5 py-2 rounded-xl bg-[#D4AF37] font-semibold hover:opacity-90 transition">
              Start Free
            </button>
          </Link>

        </div>

      </div>
    </nav>
  );
}