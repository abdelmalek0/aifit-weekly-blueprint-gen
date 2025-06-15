
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Target, Clock } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-violet-600 via-blue-600 to-emerald-500">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-40 right-20 w-20 h-20 bg-white/10 rounded-full animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-white/5 rounded-full animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-white/10 rounded-full animate-pulse-slow" style={{animationDelay: '0.5s'}}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        {/* AI Badge */}
        <div className="inline-flex items-center gap-2 glass rounded-full px-6 py-3 mb-8 animate-fade-in">
          <Sparkles className="w-5 h-5 text-yellow-300" />
          <span className="text-sm font-semibold">AI-Powered Fitness Revolution</span>
        </div>

        {/* Main headline */}
        <h1 className="text-6xl md:text-8xl font-bold font-poppins mb-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
          Your Personal
          <br />
          <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent">
            AI Fitness Coach
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-up" style={{animationDelay: '0.4s'}}>
          Transform your body with personalized weekly workout plans, nutrition guidance, 
          and curated video exercises tailored to your goals and schedule.
        </p>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-scale-in" style={{animationDelay: '0.6s'}}>
          <div className="flex items-center gap-2 glass rounded-full px-6 py-3">
            <Target className="w-5 h-5 text-emerald-300" />
            <span className="font-medium">Goal-Based</span>
          </div>
          <div className="flex items-center gap-2 glass rounded-full px-6 py-3">
            <Clock className="w-5 h-5 text-blue-300" />
            <span className="font-medium">Time-Optimized</span>
          </div>
          <div className="flex items-center gap-2 glass rounded-full px-6 py-3">
            <Zap className="w-5 h-5 text-yellow-300" />
            <span className="font-medium">AI-Powered</span>
          </div>
        </div>

        {/* CTA button */}
        <div className="animate-scale-in" style={{animationDelay: '0.8s'}}>
          <Button size="lg" className="bg-gradient-to-r from-pink-500 to-violet-600 hover:from-pink-600 hover:to-violet-700 text-white font-bold px-12 py-6 text-xl rounded-full transition-all duration-300 hover:scale-105 shadow-2xl border-0">
            Join Waitlist
            <ArrowRight className="ml-3 w-6 h-6" />
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 animate-fade-in" style={{animationDelay: '1s'}}>
          <div className="flex justify-center items-center gap-12 text-white/80">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">10K+</div>
              <div className="text-sm">Plans Generated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">95%</div>
              <div className="text-sm">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">4.9★</div>
              <div className="text-sm">User Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
