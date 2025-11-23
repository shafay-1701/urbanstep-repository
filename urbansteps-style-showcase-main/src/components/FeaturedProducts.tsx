import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ProductQuickView from "@/components/ProductQuickView";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

const products = [
  {
    id: 1,
    name: "Urban Classic White",
    price: "$89.99",
    image: product1,
    description:
      "A timeless classic combining premium white leather with vibrant orange accents. Perfect for both casual and semi-formal occasions.",
    features: [
      "Premium white leather upper",
      "Orange accent detailing",
      "Padded collar for ankle support",
      "Memory foam insole",
    ],
  },
  {
    id: 2,
    name: "Premium Black High-Top",
    price: "$109.99",
    image: product2,
    description:
      "Elevate your style with these sleek black high-tops. Crafted from premium materials with superior ankle support and modern design.",
    features: [
      "Premium black leather construction",
      "High-top design for ankle support",
      "White contrast sole",
      "Reinforced toe cap",
    ],
  },
  {
    id: 3,
    name: "Sport Runner Orange",
    price: "$99.99",
    image: product3,
    description:
      "Athletic performance meets bold style. Featuring breathable mesh and dynamic orange accents for the modern urban athlete.",
    features: [
      "Breathable mesh upper",
      "Bold orange stripe design",
      "Responsive cushioning",
      "Lightweight construction",
    ],
  },
  {
    id: 4,
    name: "Canvas Low White",
    price: "$79.99",
    image: product4,
    description:
      "Essential canvas sneakers that never go out of style. Comfortable, versatile, and perfect for everyday wear.",
    features: [
      "Classic canvas construction",
      "Vulcanized rubber sole",
      "Ventilation eyelets",
      "Timeless low-top design",
    ],
  },
];

const FeaturedProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  const handleQuickView = (product: typeof products[0]) => {
    setSelectedProduct(product);
    setIsQuickViewOpen(true);
  };

  return (
    <>
      <ProductQuickView
        product={selectedProduct}
        open={isQuickViewOpen}
        onOpenChange={setIsQuickViewOpen}
      />
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Featured Products
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover our most popular styles
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Card
              key={product.id}
              className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <Button
                    variant="accent"
                    size="sm"
                    onClick={() => handleQuickView(product)}
                  >
                    Quick View
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-accent">
                    {product.price}
                  </span>
                  <Button variant="default" size="sm">
                    Buy Now
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default FeaturedProducts;
