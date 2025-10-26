import { useState, useEffect } from "react";
import { Sparkles, Heart, Palette, Calendar, Music, BookOpen } from "lucide-react";

interface WelcomeScreenProps {
  userName: string;
  onContinue: () => void;
}

export function WelcomeScreen({ userName, onContinue }: WelcomeScreenProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  const features = [
    {
      icon: Sparkles,
      title: "AI Assistant",
      description: "Your personal Jarvis to help with everything",
      color: "from-[#A78BFA] to-[#FFC2D4]"
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "Organize your time like never before",
      color: "from-[#FFC2D4] to-[#B5FFCC]"
    },
    {
      icon: Palette,
      title: "Creative Tools",
      description: "Express yourself through music, art, and writing",
      color: "from-[#B5FFCC] to-[#A78BFA]"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleGetStarted = () => {
    setCurrentStep(1);
    setTimeout(() => {
      onContinue();
    }, 2000);
  };

  if (currentStep === 1) {
    return (
      <div className="h-full bg-gradient-to-br from-[#FAF8FF] via-[#F8F5FF] to-[#FFF8FB] flex items-center justify-center p-6">
        <div className="text-center">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#A78BFA] to-[#FFC2D4] flex items-center justify-center shadow-2xl animate-pulse">
            <Heart className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-[#6B46C1] mb-4">
            Welcome to Mozenith!
          </h1>
          <p className="text-[#8B7FA3] text-lg">
            Setting up your personal assistant...
          </p>
          <div className="mt-8 flex justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#A78BFA]"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full bg-gradient-to-br from-[#FAF8FF] via-[#F8F5FF] to-[#FFF8FB] overflow-y-auto">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[#A78BFA]/20 to-[#FFC2D4]/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-16 w-24 h-24 bg-gradient-to-br from-[#FFC2D4]/20 to-[#B5FFCC]/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-gradient-to-br from-[#B5FFCC]/20 to-[#A78BFA]/20 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 min-h-full flex items-center justify-center p-6">
        <div className="w-full max-w-md text-center">
          {/* Welcome Header */}
          <div className={`transition-all duration-1000 ${isAnimating ? 'translate-y-8 opacity-0' : 'translate-y-0 opacity-100'}`}>
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#A78BFA] to-[#FFC2D4] flex items-center justify-center shadow-2xl">
              <Sparkles className="w-12 h-12 text-white animate-pulse" />
            </div>
            
            <h1 className="text-4xl font-bold text-[#6B46C1] mb-4">
              Welcome, {userName}! 🎉
            </h1>
            
            <p className="text-[#8B7FA3] text-lg mb-8">
              You're all set! Let's explore what Mozenith can do for you.
            </p>
          </div>

          {/* Features Preview */}
          <div className={`space-y-6 mb-8 transition-all duration-1000 delay-300 ${isAnimating ? 'translate-y-8 opacity-0' : 'translate-y-0 opacity-100'}`}>
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className={`p-6 rounded-3xl bg-white/80 backdrop-blur-sm border border-white/50 shadow-lg transition-all duration-500 delay-${(index + 1) * 200} ${isAnimating ? 'scale-95 opacity-0' : 'scale-100 opacity-100'}`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg font-bold text-[#6B46C1] mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-[#8B7FA3] text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Get Started Button */}
          <div className={`transition-all duration-1000 delay-700 ${isAnimating ? 'translate-y-8 opacity-0' : 'translate-y-0 opacity-100'}`}>
            <button
              onClick={handleGetStarted}
              className="w-full py-4 px-6 bg-gradient-to-r from-[#A78BFA] to-[#FFC2D4] text-white font-bold text-lg rounded-3xl shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
            >
              <span>Let's Get Started</span>
              <Sparkles className="w-6 h-6 animate-pulse" />
            </button>
          </div>

          {/* Fun fact */}
          <div className={`mt-8 p-4 rounded-2xl bg-gradient-to-r from-[#A78BFA]/10 to-[#FFC2D4]/10 border border-[#A78BFA]/20 transition-all duration-1000 delay-900 ${isAnimating ? 'translate-y-8 opacity-0' : 'translate-y-0 opacity-100'}`}>
            <p className="text-[#6B46C1] text-sm italic">
              💡 Tip: Tap the glowing Jarvis button anytime to chat with your AI assistant!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}