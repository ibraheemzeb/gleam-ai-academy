
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/20 text-primary mb-8 animate-fade-in">
            <Sparkles className="w-5 h-5 mr-2" />
            <span className="font-medium">Ready to Transform Education?</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Start Creating 
            <span className="text-gradient"> Amazing Lessons </span>
            Today
          </h2>
          
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto animate-fade-in">
            Join thousands of educators who are already using Gleam AI to create 
            engaging, personalized learning experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-black font-semibold px-8 py-4 text-lg">
              Get Started Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg">
              Schedule Demo
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-3xl font-bold text-primary mb-2">✓</div>
              <div className="text-white font-semibold">Free 14-day trial</div>
              <div className="text-gray-400 text-sm">No credit card required</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-3xl font-bold text-primary mb-2">✓</div>
              <div className="text-white font-semibold">Setup in minutes</div>
              <div className="text-gray-400 text-sm">Get started immediately</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-3xl font-bold text-primary mb-2">✓</div>
              <div className="text-white font-semibold">24/7 support</div>
              <div className="text-gray-400 text-sm">We're here to help</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
