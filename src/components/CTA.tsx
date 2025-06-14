
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Mail } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-bg"></div>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full animate-float"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-white/5 rounded-full animate-float" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-white/5 rounded-full animate-float" style={{animationDelay: '0.8s'}}></div>
        <div className="absolute bottom-10 right-1/3 w-28 h-28 bg-white/5 rounded-full animate-float" style={{animationDelay: '2.2s'}}></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/30 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-white text-sm font-medium">Ready to Transform?</span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-6xl font-bold font-poppins text-white mb-6 drop-shadow-lg">
            Start Your Fitness
            <br />
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Journey Today
            </span>
          </h2>

          {/* Description */}
          <p className="text-xl md:text-2xl text-white/95 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-sm">
            Join thousands of people who have transformed their lives with AI-powered fitness plans. 
            Your personalized workout and nutrition plan is just minutes away.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2 drop-shadow-sm">10,000+</div>
              <div className="text-white/80">Success Stories</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2 drop-shadow-sm">7 Days</div>
              <div className="text-white/80">Average to See Results</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2 drop-shadow-sm">100%</div>
              <div className="text-white/80">Personalized Plans</div>
            </div>
          </div>

          {/* CTA Button */}
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-fitness-secondary to-fitness-accent hover:from-fitness-secondary/90 hover:to-fitness-accent/90 text-white font-bold px-12 py-6 text-xl rounded-full transition-all duration-300 hover:scale-105 shadow-2xl border-0"
          >
            <Mail className="mr-3 w-6 h-6" />
            Join Waitlist Now
            <ArrowRight className="ml-3 w-6 h-6" />
          </Button>

          {/* Trust indicators */}
          <div className="mt-8 text-white/80">
            <p className="text-sm drop-shadow-sm">✓ No credit card required  ✓ Early access  ✓ 100% personalized</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
