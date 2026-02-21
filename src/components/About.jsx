import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true });

  const stats = [
    { value: 40, label: "Years Experience" },
    { value: 300, suffix: "M+", label: "Products Delivered" },
    { value: 32, label: "Countries Served" },
    { value: 200, label: "Team Members" },
  ];

  return (
    <div className="h-full bg-black flex items-center">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-4 gap-6 px-6" ref={ref}>
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-secondary border border-white/10 rounded-2xl p-8 text-center"
          >
            <h2 className="text-4xl text-white font-bold">
              {inView && (
                <CountUp end={stat.value} duration={2} suffix={stat.suffix} />
              )}
            </h2>
            <p className="text-textSecondary mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}