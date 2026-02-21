export default function Portfolio() {
  const projects = [
    { title: "Luxury Cosmetic Packaging", category: "Cosmetics" },
    { title: "Premium FMCG Boxes", category: "FMCG" },
    { title: "Sustainable Retail Packaging", category: "Retail" },
    { title: "Pharmaceutical Cartons", category: "Healthcare" },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-16 pt-40 pb-24">

      {/* Heading */}
      <div className="max-w-7xl mx-auto mb-20">
        <h1 className="text-6xl md:text-7xl font-bold mb-6">
          Portfolio
        </h1>
        <p className="text-lg text-neutral-400 max-w-2xl">
          Discover our finest packaging projects crafted with precision,
          sustainability, and innovation.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl border border-white/10"
          >
            <div className="h-96 bg-neutral-900 flex items-center justify-center text-neutral-600">
              Image Placeholder
            </div>

            <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-md p-6">
              <h3 className="text-2xl font-semibold">
                {project.title}
              </h3>
              <p className="text-sm text-neutral-400 mt-1">
                {project.category}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}