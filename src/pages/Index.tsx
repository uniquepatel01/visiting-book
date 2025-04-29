
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureSection from "@/components/FeatureSection";
import VideoSection from "@/components/VideoSection";
import ChooseUs from "@/components/ChooseUs";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <FeatureSection />
        <VideoSection />
        <ChooseUs />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
