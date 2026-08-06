import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { FeatureHighlights } from "./components/FeatureHighlights";
import { ProductShowcase } from "./components/ProductShowcase";
import { HowItWorks } from "./components/HowItWorks";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0B1120] bg-noise">
      <Navbar />
      <main>
        <Hero />
        <FeatureHighlights />
        <ProductShowcase />
        <HowItWorks />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
