
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Sparkles, FileText, BarChart3, Share } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: Sparkles,
      title: "Create with AI",
      description: "Simply describe your lesson topic and let our AI generate comprehensive content including slides, scripts, and assessments.",
      color: "bg-primary"
    },
    {
      number: "02",
      icon: FileText,
      title: "Customize & Edit",
      description: "Review and customize the generated content. Edit, regenerate, or add your personal touch to make it perfect.",
      color: "bg-accent"
    },
    {
      number: "03",
      icon: BarChart3,
      title: "Track & Analyze",
      description: "Monitor learner progress with detailed analytics and SnapScore metrics to optimize engagement.",
      color: "bg-gray-800"
    },
    {
      number: "04",
      icon: Share,
      title: "Share & Export",
      description: "Export your lessons as PDF, PowerPoint, or use embed codes to share across platforms.",
      color: "bg-blue-500"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-gray-50 to-yellow-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How It 
            <span className="text-gradient"> Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From concept to completion in four simple steps
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative animate-slide-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
                  <CardContent className="p-8 text-center">
                    <div className="relative mb-6">
                      <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg">
                        <span className="text-sm font-bold text-gray-900">{step.number}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
