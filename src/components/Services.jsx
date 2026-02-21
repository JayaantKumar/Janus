import useReveal from "../hooks/useReveal";

export default function Services() {
  const sectionRef = useReveal();

  const services = [
    { title: "Custom Packaging", image: "/images/sample.jpg" },
    { title: "Industrial Boxes", image: "/images/sample.jpg" },
    { title: "Eco Solutions", image: "/images/sample.jpg" },
  ];

  return (
    <div className="h-full bg-black flex items-center">
      <div
        ref={sectionRef}
        className="max-w-7xl mx-auto text-center w-full px-6"
      >
        <h2 className="text-white text-5xl font-bold mb-16">
          40+ Years of Excellence
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {services.map((service, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-64 h-64 rounded-full overflow-hidden mb-6 border border-white/10">
                <img
                  src={service.image}
                  alt=""
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>

              <h3 className="text-white text-xl font-semibold">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}