import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do you offer cash on delivery?",
    answer:
      "Yes! We offer Cash on Delivery (COD) for all orders. You can pay when your sneakers arrive at your doorstep.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy. If you're not completely satisfied with your purchase, you can return it for a full refund or exchange. Items must be unused and in original packaging.",
  },
  {
    question: "How long is delivery?",
    answer:
      "Standard delivery takes 3-5 business days. Express shipping is available for 1-2 business day delivery. You'll receive tracking information once your order ships.",
  },
  {
    question: "Are the sneakers true to size?",
    answer:
      "Yes, our sneakers run true to size. We recommend ordering your regular shoe size. Check our size guide for detailed measurements. If you're between sizes, we suggest sizing up.",
  },
  {
    question: "Do you ship nationwide?",
    answer:
      "Yes! We ship to all locations nationwide with reliable courier services to ensure your order arrives safely. Free shipping on orders over $150.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order ships, you'll receive a tracking number via email to monitor your delivery in real-time. You can also track your order in the 'My Orders' section of your account.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, Mastercard, American Express), debit cards, PayPal, and Cash on Delivery (COD) for your convenience.",
  },
  {
    question: "How do I care for my sneakers?",
    answer:
      "Clean your sneakers with a soft brush and mild soap. Air dry them away from direct heat or sunlight. Use a protective spray to maintain the material quality. Avoid machine washing.",
  },
  {
    question: "Can I exchange for a different size or color?",
    answer:
      "Yes! Exchanges are free within 30 days of delivery. Simply contact our customer service team, and we'll arrange an exchange for you.",
  },
  {
    question: "What if my sneakers arrive damaged?",
    answer:
      "We carefully package all orders, but if your sneakers arrive damaged, contact us immediately with photos. We'll send a replacement or issue a full refund right away.",
  },
];

const FAQ = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-lg">
              Everything you need to know about UrbanSteps
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <AccordionTrigger className="text-left font-bold text-foreground hover:text-accent">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
