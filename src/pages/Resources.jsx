export default function Resources() {
  const resources = [
    {
      title: "Packaging Design Guide",
      description: "Learn how premium packaging influences brand perception."
    },
    {
      title: "Sustainability Report 2025",
      description: "Our commitment to eco-conscious manufacturing."
    },
    {
      title: "Material Selection Handbook",
      description: "Choosing the right materials for durability and impact."
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-16 pt-40 pb-24">

      {/* Heading */}
      <div className="max-w-7xl mx-auto mb-20">
        <h1 className="text-6xl md:text-7xl font-bold mb-6">
          Resources
        </h1>
        <p className="text-lg text-neutral-400 max-w-2xl">
          Explore insights, documentation, and research related to premium packaging solutions.
        </p>
      </div>

      {/* Resource Cards */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {resources.map((item, index) => (
          <div
            key={index}
            className="p-8 rounded-2xl border border-white/10 bg-neutral-900 hover:bg-neutral-800 transition"
          >
            <h3 className="text-xl font-semibold mb-4">
              {item.title}
            </h3>
            <p className="text-neutral-400 text-sm">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}