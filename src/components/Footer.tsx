
import { Heart, Crown } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white py-16 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Crown className="w-8 h-8 text-purple-400" />
              <h3 className="text-3xl font-bold font-poppins bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Shadow Fitness
              </h3>
            </div>
            <p className="text-gray-300 mb-8 max-w-md leading-relaxed text-lg">
              Rise from E-Rank to S-Rank with the power of the System. 
              Your transformation awaits, future Shadow Monarch.
            </p>
            <div className="flex items-center gap-3 text-gray-300">
              <span className="text-lg">Built with</span>
              <Heart className="w-5 h-5 text-red-400 fill-current" />
              <span className="text-lg">for anime fitness fans</span>
            </div>
          </div>

          {/* Features */}
          <div>
            <h4 className="font-bold mb-6 text-white text-lg">Hunter Features</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Rank Up System</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Daily Quests</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Shadow Training</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Hunter's Arsenal</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold mb-6 text-white text-lg">Guild Support</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Contact Guild</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Hunter FAQ</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">System Privacy</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Hunter Terms</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p className="text-lg">&copy; 2024 Shadow Fitness System. All hunters welcome.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
