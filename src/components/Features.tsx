
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Brain, 
  Users, 
  FileImage, 
  BarChart3, 
  User, 
  FileText, 
  RefreshCw, 
  Zap, 
  Download,
  Smartphone
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Lesson Creation",
      description: "Generate comprehensive lessons using OpenAI API with intelligent content adaptation",
      color: "text-primary"
    },
    {
      icon: Users,
      title: "User Authentication",
      description: "Secure authentication system for both educators and learners with role-based access",
      color: "text-accent"
    },
    {
      icon: FileImage,
      title: "Flashdocs Integration",
      description: "Seamless integration with Flashdocs API for rich slides and visual content",
      color: "text-primary"
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Comprehensive dashboard for lesson management with detailed analytics and insights",
      color: "text-accent"
    },
    {
      icon: User,
      title: "Learner Profiles",
      description: "Track individual progress and adapt content based on learning patterns",
      color: "text-primary"
    },
    {
      icon: FileText,
      title: "Multi-Component Lessons",
      description: "Create lessons with slide decks, scripts, quizzes, and interactive elements",
      color: "text-accent"
    },
    {
      icon: RefreshCw,
      title: "Edit & Regenerate",
      description: "Easily edit or regenerate any lesson component with AI assistance",
      color: "text-primary"
    },
    {
      icon: Zap,
      title: "SnapScore Metrics",
      description: "Evaluate lesson engagement with our proprietary SnapScore system",
      color: "text-accent"
    },
    {
      icon: Download,
      title: "Export Options",
      description: "Export lessons as PDF, PowerPoint, or generate embed codes for sharing",
      color: "text-primary"
    },
    {
      icon: Smartphone,
      title: "Mobile Responsive",
      description: "Clean, responsive design that works seamlessly across all devices",
      color: "text-accent"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Powerful Features for 
            <span className="text-gradient"> Modern Education</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to create, manage, and deliver exceptional learning experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in gradient-card group hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
