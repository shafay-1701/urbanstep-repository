import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="text-2xl font-bold text-foreground">
            UrbanSteps
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              Shop
            </button>
            <button
              onClick={() => scrollToSection("collections")}
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("footer")}
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              Contact
            </button>
            <Button variant="accent" size="default">
              Shop Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 bg-background border-t border-border">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-foreground hover:text-accent transition-colors font-medium text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="text-foreground hover:text-accent transition-colors font-medium text-left"
              >
                Shop
              </button>
              <button
                onClick={() => scrollToSection("collections")}
                className="text-foreground hover:text-accent transition-colors font-medium text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("footer")}
                className="text-foreground hover:text-accent transition-colors font-medium text-left"
              >
                Contact
              </button>
              <Button variant="accent" size="default" className="w-full">
                Shop Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
