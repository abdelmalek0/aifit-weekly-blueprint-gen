
import { Card, CardContent } from "@/components/ui/card";
import { Target, Clock, Apple, Youtube, Brain, Calendar } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Target,
      title: "Goal-Specific Plans",
      description: "Whether you want to lose weight, build muscle, or improve endurance, our AI creates plans tailored to your specific fitness goals."
    },
    {
      icon: Clock,
      title: "Time-Optimized Workouts",
      description: "Input your available time and get maximally effective workouts that fit your busy schedule, from 15-minute HIIT to full hour sessions."
    },
    {
      icon: Apple,
      title: "Personalized Nutrition",
      description: "Receive meal recommendations and nutrition guidelines that complement your workout plan and dietary preferences."
    },
    {
      icon: Youtube,
      title: "Curated Video Workouts",
      description: "Get handpicked YouTube workout videos that match your plan, with professional trainers and proven routines."
    },
    {
      icon: Brain,
      title: "AI-Powered Intelligence",
      description: "Advanced algorithms analyze your body metrics, goals, and preferences to create scientifically-backed fitness plans."
    },
    {
      icon: Calendar,
      title: "Weekly Planning",
      description: "Receive structured weekly plans with progressive difficulty and variety to keep you motivated and challenged."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
            Everything You Need to
            <span className="gradient-text"> Succeed</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI-powered platform combines cutting-edge technology with proven fitness science 
            to deliver personalized results that actually work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-fitness-primary to-fitness-secondary rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold font-poppins mb-4">{feature.title}</h3>
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
