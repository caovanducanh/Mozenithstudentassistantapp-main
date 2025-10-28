import { useState } from "react";
import {
  Music,
  Image,
  BookOpen,
  ChevronRight,
  Calculator,
  FileText,
} from "lucide-react";
import { SmartConverterScreen } from "./smart-converter";
import { MusicScreen } from "./music-screen";
import { DiaryScreen } from "./diary-screen";
import { AestheticScreen } from "./aesthetic-screen";
import { CalculatorScreen } from "./calculator-screen";

type CreativeTab =
  | "overview"
  | "music"
  | "diary"
  | "aesthetic"
  | "calculator"
  | "smart-converter";

export function CreativesScreen() {
  const [activeTab, setActiveTab] = useState<CreativeTab>("overview");

  // ...existing code...
  if (activeTab !== "overview") {
    const renderCreativeContent = () => {
      switch (activeTab) {
        case "music":
          return <MusicScreen />;
        case "diary":
          return <DiaryScreen />;
        case "aesthetic":
          return <AestheticScreen />;
        case "calculator":
          return <CalculatorScreen />;
        case "smart-converter":
          return <SmartConverterScreen />;
        default:
          return null;
      }
    };

    return (
      <div className="h-full flex flex-col">
        {/* Back button */}
        <div className="p-4 bg-white border-b border-[#A78BFA]/10">
          <button
            onClick={() => setActiveTab("overview")}
            className="flex items-center gap-2 text-[#8B7FA3] hover:text-[#A78BFA] transition-colors"
          >
            <ChevronRight className="w-5 h-5 rotate-180" />
            <span>Back to Creatives</span>
          </button>
        </div>
        {/* Content */}
        <div className="flex-1">{renderCreativeContent()}</div>
      </div>
    );
  }

  const creativeOptions = [
    {
      id: "music" as CreativeTab,
      title: "Music Studio",
      description: "Discover stems, create playlists, and find your focus",
      icon: Music,
      accent: "text-[#FF6B9D]",
    },
    {
      id: "diary" as CreativeTab,
      title: "Personal Diary",
      description: "Reflect, journal, and track your emotional journey",
      icon: BookOpen,
      accent: "text-[#A78BFA]",
    },
    {
      id: "aesthetic" as CreativeTab,
      title: "Aesthetic Boards",
      description: "Curate visual inspiration and mood boards",
      icon: Image,
      accent: "text-[#10B981]",
    },
    {
      id: "calculator" as CreativeTab,
      title: "Calculator",
      description: "Quickly calculate numbers and expressions",
      icon: Calculator,
      accent: "text-[#F59E42]",
    },
    {
      id: "smart-converter" as CreativeTab,
      title: "Smart Converter",
      description:
        "Document conversion toolkit, OCR, compress/merge PDF, create new documents",
      icon: FileText,
      accent: "text-[#6366F1]",
    },
  ];

  return (
    <div className="h-full bg-gradient-to-br from-[#FAF8FF] via-[#F8F5FF] to-[#FFF8FB] overflow-y-auto">
      {/* Header */}
      <div className="p-6 pb-4">
        <h1 className="text-3xl font-bold text-[#6B46C1] mb-2">Creatives</h1>
        <p className="text-[#8B7FA3] text-lg">
          Express yourself through music, words, and visuals
        </p>
      </div>

      {/* Creative Options */}
      <div className="px-6 space-y-4">
        {creativeOptions.map((option) => {
          const Icon = option.icon;

          return (
            <button
              key={option.id}
              onClick={() => setActiveTab(option.id)}
              className="w-full p-6 rounded-3xl bg-white/80 backdrop-blur-sm border border-white/50 shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] group"
            >
              <div className="flex items-center gap-4">
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br flex items-center justify-center group-hover:scale-110 transition-transform`}
                >
                  <Icon className={`w-8 h-8 ${option.accent}`} />
                </div>

                {/* Content */}
                <div className="flex-1 text-left">
                  <h3 className="text-xl font-bold text-[#6B46C1] mb-1">
                    {option.title}
                  </h3>
                  <p className="text-[#8B7FA3]">{option.description}</p>
                </div>

                {/* Arrow */}
                <ChevronRight className="w-6 h-6 text-[#A78BFA] group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          );
        })}
      </div>

      {/* Inspirational Quote */}
      <div className="mt-8 mx-6 p-6 rounded-3xl bg-gradient-to-r from-[#A78BFA]/10 to-[#FFC2D4]/10 border border-[#A78BFA]/20">
        <div className="text-center">
          <p className="text-[#6B46C1] font-medium italic text-lg mb-2">
            "Creativity is intelligence having fun"
          </p>
          <p className="text-[#8B7FA3] text-sm">— Albert Einstein</p>
        </div>
      </div>

      {/* Bottom spacing for navigation */}
      <div className="h-8"></div>
    </div>
  );
}
