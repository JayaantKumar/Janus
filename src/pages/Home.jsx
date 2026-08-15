import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import About from "../components/About";
import Services from "../components/Services";
import Showcase from "../components/Showcase";
import HorizontalText from "../components/HorizontalText";
import ScrollSphere from "../components/ScrollSphere";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="relative bg-black">
        {/* Layer 1 */}
        <section className="h-screen sticky top-0 bg-black z-10">
          <Hero />
        </section>

        {/* Layer 2: The New Framer Component */}
        <section className="h-screen sticky top-0 bg-black z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.8)]">
          <Stats />
        </section>

        {/* Layer 2 */}
        <section className="h-screen sticky top-0 bg-black z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.8)]">
          <About />
        </section>

        

        {/* Layer 4 */}
        <section className="h-screen sticky top-0 bg-black z-40 shadow-[0_-20px_50px_rgba(0,0,0,0.8)]">
          <Showcase />
        </section>

        {/* Layer 5 */}
        <section className="h-screen sticky top-0 bg-black z-50 shadow-[0_-20px_50px_rgba(0,0,0,0.8)]">
          <HorizontalText />
        </section>

        {/* Layer 6: Your awesome ScrollSphere! */}
        <section className="h-screen sticky top-0 bg-black z-[60] shadow-[0_-20px_50px_rgba(0,0,0,0.8)]">
          <ScrollSphere />
        </section>

        {/* Layer 7: Footer */}
        <section className="h-screen sticky top-0 bg-black z-[70] shadow-[0_-20px_50px_rgba(0,0,0,0.8)]">
          <Footer />
        </section>
      </main>
    </>
  );
}