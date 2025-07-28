
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Target, Clock, Sword, Shield, Crown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
      {/* Animated background elements with darker theme */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-40 right-20 w-20 h-20 bg-blue-500/15 rounded-full animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-indigo-500/10 rounded-full animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-purple-500/15 rounded-full animate-pulse-slow" style={{animationDelay: '0.5s'}}></div>
        {/* Additional mystical elements */}
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-yellow-400 rounded-full animate-pulse opacity-80"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-1/2 left-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse opacity-70"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        {/* Solo Leveling Badge */}
        <div className="inline-flex items-center gap-2 glass rounded-full px-6 py-3 mb-8 animate-fade-in animate-bounce-gentle border border-purple-400/30">
          <Crown className="w-5 h-5 text-yellow-400" />
          <span className="text-sm font-semibold bg-gradient-to-r from-yellow-400 to-purple-400 bg-clip-text text-transparent">Level Up Your Body - Solo Leveling Style</span>
        </div>

        {/* Main headline with Solo Leveling theme */}
        <h1 className="text-6xl md:text-8xl font-bold font-poppins mb-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
          Become the
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Shadow Monarch
          </span>
          <br />
          <span className="text-4xl md:text-5xl text-gray-300">of Fitness</span>
        </h1>

        {/* Subtitle with anime references */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-up" style={{animationDelay: '0.4s'}}>
          Just like Sung Jin-Woo's transformation from E-Rank to Shadow Monarch, 
          unlock your hidden potential with AI-powered training that adapts and evolves with you.
        </p>

        {/* Feature pills with Solo Leveling theme */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-scale-in" style={{animationDelay: '0.6s'}}>
          <div className="flex items-center gap-2 glass rounded-full px-6 py-3 border border-purple-400/20">
            <Sword className="w-5 h-5 text-red-400" />
            <span className="font-medium">Rank Up System</span>
          </div>
          <div className="flex items-center gap-2 glass rounded-full px-6 py-3 border border-blue-400/20">
            <Shield className="w-5 h-5 text-blue-400" />
            <span className="font-medium">Daily Quests</span>
          </div>
          <div className="flex items-center gap-2 glass rounded-full px-6 py-3 border border-yellow-400/20">
            <Zap className="w-5 h-5 text-yellow-400" />
            <span className="font-medium">Shadow Training</span>
          </div>
        </div>

        {/* Email signup form */}
        <div className="animate-scale-in max-w-md mx-auto" style={{animationDelay: '0.8s'}}>
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <input 
              type="email" 
              placeholder="Enter your email to join the Shadow Army"
              className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-purple-400/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 backdrop-blur-sm"
            />
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-purple-700 hover:to-indigo-800 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-2xl border border-purple-400/30">
              Join Waitlist
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
          <p className="text-sm text-gray-400">Join the Shadow Army of Fitness</p>
        </div>

        {/* Stats with Solo Leveling terminology */}
        <div className="mt-16 animate-fade-in" style={{animationDelay: '1s'}}>
          <div className="flex justify-center items-center gap-12 text-gray-300">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">S-Rank</div>
              <div className="text-sm">Transformation Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">10K+</div>
              <div className="text-sm">Hunters Trained</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">∞</div>
              <div className="text-sm">Shadow Power</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
