import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import WhyChooseUs from "@/components/WhyChooseUs";
import Collections from "@/components/Collections";
import Testimonials from "@/components/Testimonials";
import DiscountBanner from "@/components/DiscountBanner";
import FAQ from "@/components/FAQ";
import TrustBadges from "@/components/TrustBadges";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <WhyChooseUs />
      <Collections />
      <Testimonials />
      <DiscountBanner />
      <FAQ />
      <TrustBadges />
      <Footer />
    </div>
  );
};

export default Index;
