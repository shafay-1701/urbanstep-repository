import { Button } from "@/components/ui/button";
import { Tag } from "lucide-react";

const DiscountBanner = () => {
  const scrollToProducts = () => {
    const element = document.getElementById("products");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-12 bg-gradient-to-r from-accent to-[hsl(15,100%,45%)]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-accent-foreground/20">
              <Tag className="w-8 h-8 text-accent-foreground" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-accent-foreground mb-2">
                Get 10% OFF on First Order
              </h3>
              <p className="text-accent-foreground/90 text-lg">
                Use Code: <span className="font-bold">URBAN10</span>
              </p>
            </div>
          </div>
          <Button
            variant="outline"
            size="lg"
            onClick={scrollToProducts}
            className="border-2 border-accent-foreground bg-transparent text-accent-foreground hover:bg-accent-foreground hover:text-accent"
          >
            Shop Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DiscountBanner;
