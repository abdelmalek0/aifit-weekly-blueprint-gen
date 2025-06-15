
import { Card, CardContent } from "@/components/ui/card";
import { UserCircle, Settings, Zap, Play } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: UserCircle,
      number: "01",
      title: "Hunter Registration",
      description: "Register with the System by sharing your current stats, goals, and available training time. Every hunter starts somewhere.",
      color: "from-blue-600 to-indigo-700"
    },
    {
      icon: Settings,
      number: "02", 
      title: "System Awakening",
      description: "The AI System analyzes your profile and creates your personalized leveling path, just like when Jin-Woo first awakened.",
      color: "from-purple-600 to-pink-700"
    },
    {
      icon: Zap,
      number: "03",
      title: "Receive Your Quests",
      description: "Get your weekly training quests, nutrition missions, and special challenges. Complete them to gain EXP and level up.",
      color: "from-red-600 to-orange-700"
    },
    {
      icon: Play,
      number: "04",
      title: "Begin Your Rise",
      description: "Start your transformation from E-Rank to S-Rank. Track your progress as you become the Shadow Monarch of your fitness journey.",
      color: "from-gray-700 to-gray-900"
    }
  ];

  return (
    <section className="py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold font-poppins mb-6 text-gray-900">
            Your Path to <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">S-Rank</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Follow the System's guidance and transform from weakest to strongest in four simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="border-0 shadow-xl hover-lift relative group bg-white">
              <CardContent className="p-8 text-center">
                {/* Step number */}
                <div className={`absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                  {step.number}
                </div>

                {/* Icon */}
                <div
                  className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-3xl flex items-center justify-center mb-6 mx-auto mt-8 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <step.icon className="w-10 h-10 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold font-poppins mb-4 text-gray-900">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
