import About from "./components/home/About";
import Features from "./components/home/Features";
import Footer from "./components/home/Footer";
import HeroSection from "./components/home/Herosection";
import Services from "./components/home/Services";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Services />
      <About />
      <Features />
      <Footer />
    </div>
  );
}
