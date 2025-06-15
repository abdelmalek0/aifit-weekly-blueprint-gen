
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Mail, CheckCircle } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-40 h-40 bg-white/5 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-32 right-20 w-32 h-32 bg-white/10 rounded-full animate-pulse-slow" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-white/5 rounded-full animate-pulse-slow" style={{animationDelay: '0.8s'}}></div>
        <div className="absolute bottom-32 right-1/3 w-36 h-36 bg-white/5 rounded-full animate-pulse-slow" style={{animationDelay: '2.2s'}}></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass rounded-full px-6 py-3 mb-8">
            <Sparkles className="w-5 h-5 text-yellow-300" />
            <span className="text-white font-semibold">Limited Beta Access</span>
          </div>

          {/* Headline */}
          <h2 className="text-6xl md:text-7xl font-bold font-poppins text-white mb-8">
            Transform Your Body
            <br />
            <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent">
              Starting Today
            </span>
          </h2>

          {/* Description */}
          <p className="text-2xl text-white/95 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join the fitness revolution. Get early access to AI-powered personalized plans 
            that deliver real results.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-white">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-emerald-300" />
              <span className="font-medium">No Credit Card Required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-emerald-300" />
              <span className="font-medium">Early Access Benefits</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-emerald-300" />
              <span className="font-medium">100% Personalized</span>
            </div>
          </div>

          {/* CTA Button */}
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-500 hover:to-cyan-500 text-gray-900 font-bold px-16 py-8 text-2xl rounded-full transition-all duration-300 hover:scale-105 shadow-2xl border-0"
          >
            <Mail className="mr-4 w-7 h-7" />
            Join Waitlist Now
            <ArrowRight className="ml-4 w-7 h-7" />
          </Button>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-white">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">15,000+</div>
              <div className="text-white/80">People Waiting</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">5 Days</div>
              <div className="text-white/80">Average to See Results</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-white/80">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
