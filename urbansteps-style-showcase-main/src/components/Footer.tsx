import { Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="footer" className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">UrbanSteps</h3>
            <p className="text-primary-foreground/80">
              Premium everyday sneakers designed for comfort and style. Step into
              the future of footwear.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => scrollToSection("collections")}
                className="text-primary-foreground/80 hover:text-accent transition-colors text-left"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection("footer")}
                className="text-primary-foreground/80 hover:text-accent transition-colors text-left"
              >
                Contact
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="text-primary-foreground/80 hover:text-accent transition-colors text-left"
              >
                Shop
              </button>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/80">
            &copy; 2025 UrbanSteps. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
