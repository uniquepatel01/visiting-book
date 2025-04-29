
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const VideoSection = () => {
  return (
    <section id="how-it-works" className="py-16 relative overflow-hidden">
      {/* Updated Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-orange-100">
          <div className="absolute inset-0">
            {/* Wave effect background */}
            <div className="absolute inset-0 opacity-20">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1440 320">
                <path fill="rgba(255, 100, 50, 0.2)" fillOpacity="1" d="M0,160L48,144C96,128,192,96,288,90.7C384,85,480,107,576,128C672,149,768,171,864,165.3C960,160,1056,128,1152,128C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
              </svg>
            </div>
            <div className="absolute inset-0 opacity-20 animate-wave animation-delay-2000">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1440 320">
                <path fill="rgba(50, 150, 255, 0.2)" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,229.3C672,245,768,267,864,250.7C960,235,1056,181,1152,176C1248,171,1344,213,1392,234.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
              </svg>
            </div>
            
            {/* Dots pattern */}
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px)',
              backgroundSize: '30px 30px'
            }}></div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how easy it is to create and share your digital visiting cards
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
          {/* Video Placeholder with animated gradient overlay */}
          <div className="relative bg-gray-800 aspect-video flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 animate-gradient"></div>
            <Button 
              className="bg-white text-primary hover:bg-white/90 rounded-full h-20 w-20 flex items-center justify-center z-10 animate-pulse"
              variant="outline"
            >
              <Play size={36} fill="currentColor" />
            </Button>
          </div>
          
          {/* Video Steps */}
          <div className="bg-white p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start">
              <div className="bg-primary/10 rounded-full h-10 w-10 flex items-center justify-center mr-4 shrink-0">
                <span className="font-bold text-primary">1</span>
              </div>
              <div>
                <h4 className="font-medium mb-2">Create Your Card</h4>
                <p className="text-gray-600 text-sm">Choose a template and customize it with your information</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-primary/10 rounded-full h-10 w-10 flex items-center justify-center mr-4 shrink-0">
                <span className="font-bold text-primary">2</span>
              </div>
              <div>
                <h4 className="font-medium mb-2">Share Instantly</h4>
                <p className="text-gray-600 text-sm">Generate a QR code or sharing link in seconds</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-primary/10 rounded-full h-10 w-10 flex items-center justify-center mr-4 shrink-0">
                <span className="font-bold text-primary">3</span>
              </div>
              <div>
                <h4 className="font-medium mb-2">Track Engagement</h4>
                <p className="text-gray-600 text-sm">See who viewed your card and when</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
