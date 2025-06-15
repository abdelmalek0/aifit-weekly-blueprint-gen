
import { Card, CardContent } from "@/components/ui/card";
import { UserCircle, Settings, Zap, Play } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: UserCircle,
      number: "01",
      title: "Tell Us About You",
      description: "Share your fitness goals, available time, body metrics, and preferences in just a few minutes.",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Settings,
      number: "02", 
      title: "AI Creates Your Plan",
      description: "Our advanced AI analyzes your profile and generates a scientifically-backed personalized plan.",
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: Zap,
      number: "03",
      title: "Receive Your Program",
      description: "Get your complete weekly plan with workouts, meals, and detailed instructions delivered instantly.",
      color: "from-pink-500 to-rose-600"
    },
    {
      icon: Play,
      number: "04",
      title: "Start Your Journey",
      description: "Follow your plan with curated video workouts and track your amazing transformation.",
      color: "from-violet-500 to-purple-600"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold font-poppins mb-6 text-gray-900">
            How It <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get your personalized fitness transformation in four simple steps.
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
                <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-3xl flex items-center justify-center mb-6 mx-auto mt-8 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
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
