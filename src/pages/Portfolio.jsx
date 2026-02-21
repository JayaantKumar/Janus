import PageWrapper from "../components/PageWrapper";

export default function Portfolio() {
  return (
    <PageWrapper>
      <div className="min-h-screen bg-black text-white px-6 md:px-16 pt-40 pb-24">
        <h1 className="text-6xl md:text-7xl font-bold mb-6">
          Portfolio
        </h1>

        <p className="text-lg text-neutral-400 max-w-2xl">
          Discover our finest packaging projects.
        </p>
      </div>
    </PageWrapper>
  );
}