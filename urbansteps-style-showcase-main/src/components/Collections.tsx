import { Button } from "@/components/ui/button";
import menCollection from "@/assets/collection-men.jpg";
import womenCollection from "@/assets/collection-women.jpg";
import newArrivals from "@/assets/collection-new.jpg";
import bestSellers from "@/assets/collection-bestsellers.jpg";

const collections = [
  {
    title: "Men's Sneakers",
    image: menCollection,
    description: "Stylish and comfortable kicks for every occasion",
  },
  {
    title: "Women's Sneakers",
    image: womenCollection,
    description: "Fashion-forward designs that match your style",
  },
  {
    title: "New Arrivals",
    image: newArrivals,
    description: "Fresh styles just landed in our collection",
  },
  {
    title: "Best Sellers",
    image: bestSellers,
    description: "Customer favorites that never go out of style",
  },
];

const Collections = () => {
  return (
    <section id="collections" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Explore Our Collections
          </h2>
          <p className="text-muted-foreground text-lg">
            Find the perfect pair for your style
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {collections.map((collection, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg h-80 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={collection.image}
                alt={collection.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <h3 className="text-3xl font-bold text-foreground mb-2">
                  {collection.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {collection.description}
                </p>
                <Button variant="accent" size="lg">
                  Shop Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
