import { Footprints, Award, Feather, Truck } from "lucide-react";

const features = [
  {
    icon: Footprints,
    title: "All-Day Comfort",
    description: "Ergonomically designed for maximum comfort throughout your day",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Crafted with the finest materials for lasting durability",
  },
  {
    icon: Feather,
    title: "Lightweight Design",
    description: "Ultra-light construction that doesn't compromise on support",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Quick shipping to get your sneakers to you in no time",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Why Choose Us
          </h2>
          <p className="text-muted-foreground text-lg">
            Experience the difference with UrbanSteps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-10 h-10 text-accent group-hover:text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
