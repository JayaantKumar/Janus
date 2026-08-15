import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
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

      <div className="relative">

        <section className="h-screen sticky top-0 bg-black">
          <Hero />
        </section>

        <section className="h-screen sticky top-0 bg-black">
          <About />
        </section>

        <section className="h-screen sticky top-0 bg-black">
          <Services />
        </section>

        <section className="h-screen sticky top-0 bg-black">
          <Showcase />
        </section>

        <section className="h-screen sticky top-0 bg-black">
          <HorizontalText />
        </section>

        <section className="h-screen sticky top-0 bg-black">
          <ScrollSphere />
        </section>

        <section className="h-screen sticky top-0 bg-black">
          <Footer />
        </section>

      </div>
    </>
  );
}