
import { Card, CardContent } from "@/components/ui/card";
import { Target, Clock, Apple, Youtube, Brain, Calendar } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Target,
      title: "Smart Goal Setting",
      description: "AI analyzes your fitness goals and creates personalized pathways for weight loss, muscle building, or endurance improvement.",
      gradient: "from-emerald-400 to-cyan-400"
    },
    {
      icon: Clock,
      title: "Time Intelligence",
      description: "Optimize your workouts for any schedule. From 15-minute HIIT sessions to comprehensive hour-long routines.",
      gradient: "from-blue-400 to-indigo-400"
    },
    {
      icon: Apple,
      title: "Nutrition Science",
      description: "Get meal recommendations based on your dietary preferences, restrictions, and fitness objectives.",
      gradient: "from-pink-400 to-rose-400"
    },
    {
      icon: Youtube,
      title: "Video Curation",
      description: "Access handpicked YouTube workout videos from certified trainers that match your personalized plan.",
      gradient: "from-orange-400 to-red-400"
    },
    {
      icon: Brain,
      title: "AI Intelligence",
      description: "Advanced machine learning algorithms continuously adapt your plan based on progress and preferences.",
      gradient: "from-violet-400 to-purple-400"
    },
    {
      icon: Calendar,
      title: "Weekly Structure",
      description: "Receive organized weekly plans with progressive difficulty to maintain motivation and prevent plateaus.",
      gradient: "from-teal-400 to-green-400"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold font-poppins mb-6 text-gray-900">
            Powerful Features for
            <br />
            <span className="bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">
              Real Results
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the future of fitness with AI-driven personalization that adapts to you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className={`border-0 shadow-xl hover-lift bg-white group cursor-pointer`}>
              <CardContent className="p-8">
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold font-poppins mb-4 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
