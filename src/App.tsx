
import { BackgroundParticles } from "./components/BackgroundParticles";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { TimelineSection } from "./components/TimelineSection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { RulesSection } from "./components/RulesSection";
import { FAQSection } from "./components/FAQSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="relative min-h-screen bg-brand-dark text-gray-100 overflow-x-hidden font-sans selection:bg-brand-purple/35 selection:text-white">
      {/* Background Layer */}
      <BackgroundParticles />

      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Header Section */}
      <HeroSection />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* About Section */}
        <AboutSection />

        {/* Timeline Section */}
        <TimelineSection />

        {/* How It Works Section */}
        <HowItWorksSection />

        {/* Rules Section */}
        <RulesSection />

        {/* FAQ Section */}
        <FAQSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
