
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "How do I create my first digital visiting card?",
    answer: "Creating your first card is easy! Simply sign up for an account, choose a template that suits your style, customize it with your information, and your card is ready to share. The entire process takes less than 5 minutes."
  },
  {
    question: "Can I share my digital card with people who don't have the app?",
    answer: "Absolutely! Your digital card can be shared via email, text message, social media, or as a QR code. Recipients don't need the app to view your card - they'll see it in their web browser."
  },
  {
    question: "How do I update my information if it changes?",
    answer: "Simply log in to your account, navigate to your card, and edit any information you want to update. The changes will be applied immediately, and anyone who accesses your card will see the updated information."
  },
  {
    question: "Is my data secure on VisitingBook?",
    answer: "Yes, we take security seriously. All your data is encrypted both in transit and at rest. We use industry-standard security protocols to ensure your information remains private and secure."
  },
  {
    question: "Can I create multiple cards for different purposes?",
    answer: "Yes! Depending on your subscription plan, you can create multiple cards for different purposes - one for your primary job, another for your side business, one for personal use, and so on."
  },
  {
    question: "How do I track who has viewed my card?",
    answer: "Our analytics dashboard shows you exactly who viewed your card, when they viewed it, and which information they engaged with most. This gives you valuable insights into how your network is interacting with your profile."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about VisitingBook
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-medium text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-10 text-center">
            <p className="text-gray-600">
              Still have questions? <a href="#" className="text-primary font-medium hover:underline">Contact our support team</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
