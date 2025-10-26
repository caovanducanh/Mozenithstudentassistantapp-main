import { Palette, Calendar, CreditCard, Settings, Sparkles } from "lucide-react";

type Screen = "chatbot" | "creatives" | "schedule" | "payment" | "settings";

interface BottomNavProps {
  activeScreen: Screen;
  onScreenChange: (screen: Screen) => void;
}

export function BottomNav({ activeScreen, onScreenChange }: BottomNavProps) {
  const navItems = [
    { id: "creatives" as Screen, icon: Palette, label: "Creatives" },
    { id: "schedule" as Screen, icon: Calendar, label: "Schedule" },
    { id: "chatbot" as Screen, icon: Sparkles, label: "Jarvis", isCenter: true },
    { id: "payment" as Screen, icon: CreditCard, label: "Payment" },
    { id: "settings" as Screen, icon: Settings, label: "Settings" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#A78BFA]/10 px-4 pb-safe">
      <div className="flex items-end justify-around h-20 relative">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeScreen === item.id;

          if (item.isCenter) {
            return (
              <button
                key={item.id}
                onClick={() => onScreenChange(item.id)}
                className="relative -top-6"
              >
                <div className="relative">
                  {/* Glowing background */}
                  <div className="absolute inset-0 w-16 h-16 rounded-full bg-gradient-to-br from-[#A78BFA] to-[#FFC2D4] opacity-50 blur-lg"></div>
                  
                  {/* Main button */}
                  <div className={`relative w-16 h-16 rounded-full bg-gradient-to-br from-[#A78BFA] to-[#FFC2D4] flex items-center justify-center shadow-xl transition-all ${
                    isActive ? "scale-110" : "scale-100"
                  }`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Pulse animation when active */}
                  {isActive && (
                    <div className="absolute inset-0 w-16 h-16 rounded-full bg-[#A78BFA] opacity-30 animate-ping"></div>
                  )}
                </div>
              </button>
            );
          }

          return (
            <button
              key={item.id}
              onClick={() => onScreenChange(item.id)}
              className="flex flex-col items-center gap-1 py-2 transition-all"
            >
              <Icon
                className={`w-6 h-6 transition-colors ${
                  isActive ? "text-[#A78BFA]" : "text-[#8B7FA3]"
                }`}
              />
              <span
                className={`transition-colors ${
                  isActive ? "text-[#A78BFA]" : "text-[#8B7FA3]"
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
