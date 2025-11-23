import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Fashion Blogger",
    content:
      "Best sneakers I've ever owned! The comfort is unmatched and they look absolutely stunning. I wear them every single day.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Fitness Enthusiast",
    content:
      "Perfect for both workouts and casual wear. The quality is exceptional and they've held up amazingly well after months of use.",
    rating: 5,
  },
  {
    name: "Emma Davis",
    role: "Urban Explorer",
    content:
      "Finally found sneakers that combine style with all-day comfort. UrbanSteps has become my go-to brand for footwear!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Join thousands of satisfied customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 border-0 shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 italic">
                "{testimonial.content}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-bold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
