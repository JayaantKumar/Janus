export default function Sustainability() {
  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-16 pt-40 pb-24">

      {/* Heading */}
      <div className="max-w-7xl mx-auto mb-20">
        <h1 className="text-6xl md:text-7xl font-bold mb-6">
          Sustainable Packaging
        </h1>
        <p className="text-lg text-neutral-400 max-w-3xl">
          At Janus, sustainability is at the core of our innovation.
          We use recyclable materials, reduce carbon footprint,
          and implement energy-efficient production processes.
        </p>
      </div>

      {/* Sections */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">

        <div>
          <h2 className="text-3xl font-semibold mb-6">
            Eco-Friendly Materials
          </h2>
          <p className="text-neutral-400">
            We prioritize biodegradable, recyclable, and responsibly sourced
            materials to minimize environmental impact.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-semibold mb-6">
            Responsible Manufacturing
          </h2>
          <p className="text-neutral-400">
            Our facilities follow strict sustainability protocols
            ensuring reduced emissions and optimized energy usage.
          </p>
        </div>

      </div>
    </div>
  );
}