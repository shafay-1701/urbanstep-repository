import { ShieldCheck, Banknote, Truck } from "lucide-react";

const badges = [
  {
    icon: ShieldCheck,
    title: "Secure Checkout",
    description: "100% Protected Payment",
  },
  {
    icon: Banknote,
    title: "COD Available",
    description: "Cash on Delivery",
  },
  {
    icon: Truck,
    title: "Fast Shipping",
    description: "3-5 Day Delivery",
  },
];

const TrustBadges = () => {
  return (
    <section className="py-12 bg-muted border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-4 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10">
                <badge.icon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="font-bold text-foreground">{badge.title}</p>
                <p className="text-sm text-muted-foreground">
                  {badge.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
