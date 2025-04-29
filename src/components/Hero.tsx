import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-16 md:py-24 px-4 relative overflow-hidden">
      {/* Updated Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-orange-50">
          {/* Geometric patterns */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-80 h-80 bg-blue-400/10 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
            <div className="absolute top-0 right-20 w-72 h-72 bg-orange-300/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-48 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
            
            {/* Additional geometric elements */}
            <div className="hidden md:block absolute top-40 right-40 w-40 h-40 bg-secondary/10 rounded-lg rotate-12 animate-float"></div>
            <div className="hidden md:block absolute top-20 left-1/3 w-24 h-24 bg-primary/20 rounded-lg -rotate-12 animate-float animation-delay-3000"></div>
            <div className="hidden md:block absolute bottom-20 right-1/4 w-32 h-32 bg-blue-300/10 rounded-full animate-float animation-delay-5000"></div>
            
            {/* Lines */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute left-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-primary/40 to-transparent"></div>
              <div className="absolute left-2/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-secondary/40 to-transparent"></div>
              <div className="absolute left-3/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-primary/40 to-transparent"></div>
              
              <div className="absolute top-1/4 left-0 h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>
              <div className="absolute top-2/4 left-0 h-px w-full bg-gradient-to-r from-transparent via-secondary/40 to-transparent"></div>
              <div className="absolute top-3/4 left-0 h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Share and Store Digital 
            <span className="gradient-text block mt-2">Visiting Cards</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Create, customize and share your professional digital visiting cards. 
            Never run out of physical cards again.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 button-hover"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-secondary text-secondary hover:bg-secondary hover:text-white button-hover"
            >
              View Templates
            </Button>
          </div>
        </div>

        <div className="md:w-1/2 rounded-lg overflow-hidden relative">
          <div className="bg-white shadow-xl rounded-xl p-6 card-shadow max-w-md mx-auto">
            <div className="bg-gradient-to-r from-primary to-secondary rounded-t-lg p-6 text-white mb-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold">John Doe</h3>
                  <p className="opacity-90">Product Manager</p>
                </div>
                <div className="bg-white rounded-full h-16 w-16 flex items-center justify-center">
                  <span className="text-primary text-xl font-bold">JD</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center">
                <div className="bg-primary/10 p-2 rounded-full mr-3">
                  <svg className="h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-gray-700">john.doe@example.com</span>
              </div>
              <div className="flex items-center">
                <div className="bg-primary/10 p-2 rounded-full mr-3">
                  <svg className="h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-gray-700">(123) 456-7890</span>
              </div>
              <div className="flex items-center">
                <div className="bg-primary/10 p-2 rounded-full mr-3">
                  <svg className="h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <span className="text-gray-700">visitingbook.com</span>
              </div>
            </div>

            <div className="mt-6 flex justify-center">
              <div className="bg-gray-800 text-sm text-white py-1 px-3 rounded-md">Scan QR to save contact</div>
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute -bottom-6 -right-6 bg-secondary rounded-full h-20 w-20 z-0 opacity-20"></div>
          <div className="absolute top-10 -left-10 bg-primary rounded-full h-16 w-16 z-0 opacity-20"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
