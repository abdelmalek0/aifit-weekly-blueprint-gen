
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Target, Clock, Zap, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 gradient-bg"></div>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-white/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-white/10 rounded-full animate-float" style={{animationDelay: '0.5s'}}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/30 backdrop-blur-sm rounded-full px-4 py-2 mb-8 animate-fade-in">
          <Zap className="w-4 h-4" />
          <span className="text-sm font-medium text-white">Powered by Advanced AI</span>
        </div>

        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl font-bold font-poppins mb-6 animate-fade-in text-white drop-shadow-lg" style={{animationDelay: '0.2s'}}>
          Your Personal
          <br />
          <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
            AI Fitness Coach
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-white/95 mb-8 max-w-3xl mx-auto animate-fade-in drop-shadow-md" style={{animationDelay: '0.4s'}}>
          Get personalized weekly workout plans, meal recommendations, and curated YouTube exercises 
          tailored to your goals, schedule, and body metrics.
        </p>

        {/* Feature highlights */}
        <div className="flex flex-wrap justify-center gap-6 mb-10 animate-fade-in" style={{animationDelay: '0.6s'}}>
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
            <Target className="w-5 h-5" />
            <span className="text-white font-medium">Goal-Based Plans</span>
          </div>
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
            <Clock className="w-5 h-5" />
            <span className="text-white font-medium">Time-Optimized</span>
          </div>
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
            <Play className="w-5 h-5" />
            <span className="text-white font-medium">YouTube Workouts</span>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{animationDelay: '0.8s'}}>
          <Button size="lg" className="bg-gradient-to-r from-fitness-primary to-fitness-secondary hover:from-fitness-primary/90 hover:to-fitness-secondary/90 text-white font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg border-0">
            <Mail className="mr-2 w-5 h-5" />
            Join Waitlist
          </Button>
          <Button size="lg" className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 font-semibold px-8 py-4 text-lg rounded-full border-2 border-white/30 hover:border-white/50 transition-all duration-300">
            See How It Works
            <Play className="ml-2 w-5 h-5" />
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 animate-fade-in" style={{animationDelay: '1s'}}>
          <p className="text-white/80 mb-4 drop-shadow-sm">Trusted by fitness enthusiasts worldwide</p>
          <div className="flex justify-center items-center gap-8 text-white/70">
            <div className="text-center">
              <div className="text-2xl font-bold text-white drop-shadow-sm">10K+</div>
              <div className="text-sm">Plans Generated</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white drop-shadow-sm">95%</div>
              <div className="text-sm">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white drop-shadow-sm">4.9★</div>
              <div className="text-sm">User Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
