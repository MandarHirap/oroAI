"use client";

export default function PromptBox() {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm">

      <h2 className="text-2xl font-bold">
        Ask Your AI CFO
      </h2>

      <div className="mt-6">

        <textarea
          className="w-full h-36 rounded-2xl border border-gray-300 p-5 outline-none resize-none"
          placeholder="Example: Can I hire another employee next quarter?"
        />

        <button className="mt-6 bg-[#D4AF37] text-black font-semibold px-8 py-3 rounded-xl hover:opacity-90 transition">
          Analyze Business
        </button>

      </div>

    </div>
  );
}