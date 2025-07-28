
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Mail, CheckCircle, Crown } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
      {/* Animated background elements with mystical feel */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-40 h-40 bg-purple-500/10 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-32 right-20 w-32 h-32 bg-indigo-500/15 rounded-full animate-pulse-slow" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-pink-500/10 rounded-full animate-pulse-slow" style={{animationDelay: '0.8s'}}></div>
        <div className="absolute bottom-32 right-1/3 w-36 h-36 bg-purple-500/10 rounded-full animate-pulse-slow" style={{animationDelay: '2.2s'}}></div>
        {/* Mystical particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-pulse opacity-70"></div>
        <div className="absolute top-3/4 right-1/3 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-pink-400 rounded-full animate-pulse opacity-80"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass rounded-full px-6 py-3 mb-8 border border-purple-400/30">
            <Crown className="w-5 h-5 text-yellow-400" />
            <span className="text-white font-semibold bg-gradient-to-r from-yellow-400 to-purple-400 bg-clip-text text-transparent">Join the Shadow Army</span>
          </div>

          {/* Headline */}
          <h2 className="text-6xl md:text-7xl font-bold font-poppins text-white mb-8">
            Rise to S-Rank
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Shadow Monarch
            </span>
          </h2>

          {/* Description */}
          <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            The System has chosen you. Begin your transformation and unlock the power that lies dormant within.
          </p>

          {/* Benefits with anime theme */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-white">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-purple-400" />
              <span className="font-medium">No Payment Required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-purple-400" />
              <span className="font-medium">Early Hunter Access</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-purple-400" />
              <span className="font-medium">Personal System</span>
            </div>
          </div>

          {/* CTA Button */}
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-purple-700 hover:to-indigo-800 text-white font-bold px-16 py-8 text-2xl rounded-full transition-all duration-300 hover:scale-105 shadow-2xl border border-purple-400/30"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <Mail className="mr-4 w-7 h-7" />
            Accept the System
            <ArrowRight className="ml-4 w-7 h-7" />
          </Button>

          {/* Stats with Solo Leveling references */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-white">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2 text-purple-400">25,000+</div>
              <div className="text-gray-300">Hunters Awakened</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2 text-blue-400">7 Days</div>
              <div className="text-gray-300">To Feel The Power</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2 text-yellow-400">S-Rank</div>
              <div className="text-gray-300">Transformation Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
