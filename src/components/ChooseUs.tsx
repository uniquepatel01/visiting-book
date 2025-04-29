
import { Check } from "lucide-react";

const reasons = [
  {
    title: "Eco-Friendly Solution",
    description: "No more paper waste. Our digital cards help reduce your carbon footprint while maintaining professional appearances.",
  },
  {
    title: "Real-Time Updates",
    description: "Change job, phone number, or address? Update your card once, and all shared versions update automatically.",
  },
  {
    title: "Engagement Analytics",
    description: "Know exactly who viewed your card, when they viewed it, and which information they engaged with most.",
  },
  {
    title: "Enhanced Connectivity",
    description: "Include links to your website, portfolio, social media profiles, and more—options not possible with paper cards.",
  },
  {
    title: "Never Run Out",
    description: "No need to order reprints. Your digital cards are always available whenever you need them.",
  },
  {
    title: "Cost Effective",
    description: "Save money on design, printing, and shipping costs associated with traditional business cards.",
  },
];

const ChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose VisitingBook</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're revolutionizing the way professionals connect in the digital age
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {reasons.map((reason, index) => (
            <div key={index} className="flex">
              <div className="mr-4 mt-1">
                <div className="bg-secondary/10 rounded-full p-1">
                  <Check className="h-5 w-5 text-secondary" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Ready to go digital?</h3>
              <p className="text-lg text-gray-700">Join thousands of professionals who've already made the switch.</p>
            </div>
            <button className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors button-hover">
              Start Creating Cards
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
