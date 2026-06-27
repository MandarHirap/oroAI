export default function TrustedBy() {
  const companies = [
    "STARTUPS",
    "AGENCIES",
    "CONSULTANTS",
    "ECOMMERCE",
    "SAAS",
    "FREELANCERS",
  ];

  return (
    <section className="py-16 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm uppercase tracking-widest text-gray-500 mb-10">
          Trusted by modern businesses
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {companies.map((company) => (
            <div
              key={company}
              className="text-center font-semibold text-gray-400"
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}