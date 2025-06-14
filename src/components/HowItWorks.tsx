
import { Card, CardContent } from "@/components/ui/card";
import { UserCircle, Settings, Zap, Play } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: UserCircle,
      number: "01",
      title: "Tell Us About You",
      description: "Input your fitness goals, available time, body metrics, and any preferences or restrictions you have."
    },
    {
      icon: Settings,
      number: "02", 
      title: "AI Analysis",
      description: "Our advanced AI analyzes your profile and creates a personalized plan using proven fitness science and nutrition principles."
    },
    {
      icon: Zap,
      number: "03",
      title: "Get Your Plan",
      description: "Receive your complete weekly plan with workouts, meal suggestions, and detailed instructions tailored just for you."
    },
    {
      icon: Play,
      number: "04",
      title: "Start Training",
      description: "Follow your personalized plan with curated YouTube workout videos and track your progress as you achieve your goals."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get your personalized fitness plan in just a few simple steps. 
            Our AI does the heavy lifting so you can focus on getting results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 relative group">
              <CardContent className="p-8 text-center">
                {/* Step number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-8 bg-gradient-to-r from-fitness-primary to-fitness-secondary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.number}
                  </div>
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-fitness-primary/10 to-fitness-secondary/10 rounded-2xl flex items-center justify-center mb-6 mx-auto mt-4 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-8 h-8 text-fitness-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold font-poppins mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Connection lines for desktop */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none">
          <div className="relative h-full">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="absolute top-1/2 bg-gradient-to-r from-fitness-primary to-fitness-secondary h-0.5 opacity-30"
                style={{
                  left: `${(i * 25) - 2}%`,
                  width: '4%',
                  transform: 'translateY(-50%)'
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
