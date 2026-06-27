export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-[#D4AF37]" />
          <span className="text-xl font-bold">
            OroAI
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-gray-600">
          <a href="#">Features</a>
          <a href="#">Dashboard</a>
          <a href="#">AI CFO</a>
          <a href="#">Pricing</a>
        </div>

        <div className="flex gap-3">
          <button className="px-5 py-2 rounded-xl border border-gray-300">
            Login
          </button>

          <button className="px-5 py-2 rounded-xl bg-[#D4AF37] font-semibold">
            Start Free
          </button>
        </div>
      </div>
    </nav>
  );
}