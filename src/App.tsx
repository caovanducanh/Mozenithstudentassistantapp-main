import { useState } from "react";
import { BottomNav } from "./components/bottom-nav";
import { ChatbotScreen } from "./components/chatbot-screen";
import { ScheduleScreen } from "./components/schedule-screen";
import { CreativesScreen } from "./components/creatives-screen";
import { PaymentScreen } from "./components/payment-screen";
import { SettingsScreen } from "./components/settings-screen";

type Screen = "chatbot" | "creatives" | "schedule" | "payment" | "settings";

interface AppProps {
  user?: { name: string; email: string } | null;
  onLogout?: () => void;
}

export default function App({ user, onLogout }: AppProps) {
  const [activeScreen, setActiveScreen] = useState<Screen>("chatbot");

  const renderScreen = () => {
    switch (activeScreen) {
      case "chatbot":
        return <ChatbotScreen />;
      case "creatives":
        return <CreativesScreen />;
      case "schedule":
        return <ScheduleScreen />;
      case "payment":
        return <PaymentScreen />;
      case "settings":
        return <SettingsScreen onLogout={onLogout} />;
      default:
        return <ChatbotScreen />;
    }
  };

  return (
    <div className="h-screen w-full flex flex-col overflow-hidden bg-[#FAF8FF]">
      {/* Main Content */}
      <div className="flex-1 overflow-hidden pb-20">
        {renderScreen()}
      </div>

      {/* Bottom Navigation */}
      <BottomNav activeScreen={activeScreen} onScreenChange={setActiveScreen} />
    </div>
  );
}
