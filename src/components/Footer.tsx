
import { Heart, Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-8 h-8 text-emerald-400" />
              <h3 className="text-3xl font-bold font-poppins bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                AI Fitness Coach
              </h3>
            </div>
            <p className="text-gray-300 mb-8 max-w-md leading-relaxed text-lg">
              Revolutionizing fitness with AI-powered personalized plans. 
              Your journey to optimal health starts here.
            </p>
            <div className="flex items-center gap-3 text-gray-300">
              <span className="text-lg">Made with</span>
              <Heart className="w-5 h-5 text-red-400 fill-current" />
              <span className="text-lg">for fitness enthusiasts</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-6 text-white text-lg">Features</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">AI Workouts</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Meal Planning</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Progress Tracking</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Video Library</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold mb-6 text-white text-lg">Support</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p className="text-lg">&copy; 2024 AI Fitness Coach. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
