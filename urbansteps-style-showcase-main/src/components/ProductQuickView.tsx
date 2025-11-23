import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Check } from "lucide-react";
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  description?: string;
  features?: string[];
  sizes?: string[];
}

interface ProductQuickViewProps {
  product: Product | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ProductQuickView = ({
  product,
  open,
  onOpenChange,
}: ProductQuickViewProps) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  if (!product) return null;

  const defaultSizes = ["7", "8", "9", "10", "11", "12"];
  const sizes = product.sizes || defaultSizes;

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }
    // Cart functionality would go here
    alert(`Added ${product.name} (Size ${selectedSize}) to cart!`);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {product.name}
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
          {/* Product Image */}
          <div className="relative bg-muted rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-96 object-cover"
            />
            <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
              New Arrival
            </Badge>
          </div>

          {/* Product Details */}
          <div className="flex flex-col gap-6">
            {/* Price */}
            <div>
              <p className="text-4xl font-bold text-accent">{product.price}</p>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-accent text-accent"
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  (128 reviews)
                </span>
              </div>
            </div>

            {/* Description */}
            <div>
              <h4 className="font-bold text-foreground mb-2">Description</h4>
              <p className="text-muted-foreground">
                {product.description ||
                  "Premium quality sneakers crafted with the finest materials for ultimate comfort and style. Perfect for everyday wear, featuring breathable fabric and cushioned soles for all-day support."}
              </p>
            </div>

            {/* Features */}
            <div>
              <h4 className="font-bold text-foreground mb-3">Key Features</h4>
              <ul className="space-y-2">
                {(product.features || [
                  "Premium leather construction",
                  "Breathable mesh lining",
                  "Cushioned insole for comfort",
                  "Durable rubber outsole",
                ]).map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Size Selection */}
            <div>
              <h4 className="font-bold text-foreground mb-3">Select Size</h4>
              <div className="grid grid-cols-6 gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`h-12 rounded-md border-2 font-medium transition-all ${
                      selectedSize === size
                        ? "border-accent bg-accent text-accent-foreground"
                        : "border-border hover:border-accent"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 mt-auto">
              <Button
                variant="hero"
                size="lg"
                className="flex-1"
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
              <Button variant="outline" size="lg" className="flex-1">
                Buy Now
              </Button>
            </div>

            {/* Additional Info */}
            <div className="border-t border-border pt-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Free Shipping</span>
                <span className="font-medium">On orders over $150</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Returns</span>
                <span className="font-medium">30-day free returns</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Delivery</span>
                <span className="font-medium">3-5 business days</span>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductQuickView;
