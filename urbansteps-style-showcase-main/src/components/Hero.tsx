import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-sneaker.jpg";

const Hero = () => {
  const scrollToProducts = () => {
    const element = document.getElementById("products");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background to-muted"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Urban sneaker lifestyle"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            Step Into <span className="text-accent">Style</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
            Premium everyday sneakers designed for comfort.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" onClick={scrollToProducts}>
              Shop Now
            </Button>
            <Button variant="outline" size="lg" onClick={scrollToProducts}>
              Explore Collection
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
