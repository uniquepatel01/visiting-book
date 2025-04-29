
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Palette,
  BarChart3,
  RefreshCw,
  Cable,
  Smartphone,
  HardDrive,
  Users,
  Globe,
  Puzzle
} from "lucide-react";

const features = [
  {
    title: "Create Digital Cards",
    description: "Design beautiful digital visiting cards with customizable templates and your branding.",
    icon: (
      <svg className="h-10 w-10 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
  },
  {
    title: "Share Instantly",
    description: "Share your digital card via email, SMS, QR code, or social media with a single click.",
    icon: (
      <svg className="h-10 w-10 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
      </svg>
    ),
  },
  {
    title: "Organize Contacts",
    description: "Store and organize all your contacts in one secure place with easy search and filtering.",
    icon: (
      <svg className="h-10 w-10 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  }
];

const utilities = [
  {
    title: "Template Gallery",
    description: "Access hundreds of professionally designed card templates",
    icon: <Palette className="h-8 w-8 text-primary" />
  },
  {
    title: "Analytics Dashboard",
    description: "Track card views, shares and engagement metrics",
    icon: <BarChart3 className="h-8 w-8 text-primary" />
  },
  {
    title: "Auto Sync",
    description: "Keep your contact information updated across all devices",
    icon: <RefreshCw className="h-8 w-8 text-primary" />
  },
  {
    title: "CRM Integration",
    description: "Connect with your favorite CRM platforms seamlessly",
    icon: <Cable className="h-8 w-8 text-primary" />
  },
  {
    title: "Mobile App",
    description: "Access your cards on the go with our mobile application",
    icon: <Smartphone className="h-8 w-8 text-primary" />
  },
  {
    title: "Offline Access",
    description: "View and share cards even without internet connection",
    icon: <HardDrive className="h-8 w-8 text-primary" />
  },
  {
    title: "Team Collaboration",
    description: "Work together with your team on card management",
    icon: <Users className="h-8 w-8 text-primary" />
  },
  {
    title: "Custom Domains",
    description: "Host your digital cards on your own domain",
    icon: <Globe className="h-8 w-8 text-primary" />
  },
  {
    title: "API Access",
    description: "Integrate digital cards into your own applications",
    icon: <Puzzle className="h-8 w-8 text-primary" />
  }
];

const FeatureSection = () => {
  return (
    <section id="features" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to create, share and manage digital visiting cards
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="card-shadow hover:border-primary/30 transition-colors">
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-10">Essential Utilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {utilities.map((utility, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-lg transition-shadow duration-300 hover:border-primary/30"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  {utility.icon}
                  <h4 className="text-lg font-semibold">{utility.title}</h4>
                  <p className="text-gray-600">{utility.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;

