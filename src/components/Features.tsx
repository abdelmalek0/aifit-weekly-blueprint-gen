
import { Card, CardContent } from "@/components/ui/card";
import { Sword, Clock, Apple, Youtube, Brain, Calendar } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Sword,
      title: "Rank Up System",
      description: "Start as E-Rank and level up through personalized training quests. Unlock new abilities and reach S-Rank fitness like Sung Jin-Woo.",
      gradient: "from-red-500 to-orange-500"
    },
    {
      icon: Clock,
      title: "Daily Quests",
      description: "Complete daily fitness challenges to gain EXP and level up your stats. Miss a day? Face the penalty - just like the System!",
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      icon: Apple,
      title: "Shadow Nutrition",
      description: "Fuel your body with meal plans worthy of a Shadow Monarch. Optimized nutrition to support your transformation journey.",
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: Youtube,
      title: "Hunter's Arsenal",
      description: "Access a curated library of workout videos from top trainers. Each exercise is a weapon in your fitness arsenal.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Brain,
      title: "System Intelligence",
      description: "Advanced AI analyzes your progress and adapts your training like the mysterious System that chose Sung Jin-Woo.",
      gradient: "from-violet-500 to-purple-500"
    },
    {
      icon: Calendar,
      title: "Shadow Army Planning",
      description: "Organize your weekly training regime with the precision of commanding a shadow army. Progressive difficulty awaits.",
      gradient: "from-gray-700 to-gray-900"
    }
  ];

  return (
    <section className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold font-poppins mb-6 text-white">
            Awaken Your Hidden
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Shadow Powers
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Like the System that transformed Sung Jin-Woo, our AI will unlock your true potential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className={`border border-gray-700 shadow-xl hover-lift bg-gray-800 group cursor-pointer`}>
              <CardContent className="p-8">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold font-poppins mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
