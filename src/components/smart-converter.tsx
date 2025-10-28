import { useState } from "react";
import {
  Sparkles,
  FileText,
  FileUp,
  FileDown,
  FilePlus,
  FileImage,
  FileArchive,
  FileStack,
} from "lucide-react";
import { Button } from "./ui/button";

const converterFeatures = [
  {
    icon: FileUp,
    title: "Word → PDF",
    description: "Easily convert Word files to PDF.",
    accent: "text-[#6366F1]",
  },
  {
    icon: FileDown,
    title: "PDF → Word",
    description: "Easily convert PDF files to Word.",
    accent: "text-[#6366F1]",
  },
  {
    icon: FileUp,
    title: "Word → Excel",
    description: "Easily convert Word files to Excel.",
    accent: "text-[#6366F1]",
  },
  {
    icon: FileDown,
    title: "Excel → Word",
    description: "Easily convert Excel files to Word.",
    accent: "text-[#6366F1]",
  },
  {
    icon: FileImage,
    title: "Image → Text (OCR)",
    description: "Easily extract text from images.",
    accent: "text-[#6366F1]",
  },
  {
    icon: FileArchive,
    title: "Compress PDF",
    description: "Easily compress PDF files for faster sharing.",
    accent: "text-[#6366F1]",
  },
  {
    icon: FileStack,
    title: "Merge multiple PDFs",
    description: "Easily merge multiple PDF files into one.",
    accent: "text-[#6366F1]",
  },
  {
    icon: FilePlus,
    title: "Create new document",
    description: "Easily create new files from notes in the app.",
    accent: "text-[#6366F1]",
  },
];

export function SmartConverterScreen() {
  const [aiSuggestion, setAiSuggestion] = useState(false);

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-[#FAF8FF] via-[#F8F5FF] to-[#E0E7FF] overflow-y-scroll">
      {/* Header */}
      <div className="bg-white border-b border-[#6366F1]/20 px-4 py-4">
        <div className="flex items-center gap-3">
          <div>
            <h2 className="text-[#4A4458] font-bold text-xl">
              Smart Converter
            </h2>
            <p className="text-[#8B7FA3]">
              Document conversion toolkit for students
            </p>
          </div>
        </div>
      </div>

      {/* Main left-aligned section */}
      <div className="flex flex-row flex-1">
        <div className="w-full max-w-xl pl-8 pr-4 py-8 flex flex-col gap-6 items-start">
          {/* Features */}
          <div className="space-y-4 w-full">
            {converterFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-4 bg-white/80 rounded-3xl p-5 shadow hover:shadow-lg transition-all w-full"
                >
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br flex items-center justify-center ${feature.accent} bg-[#EEF2FF]`}
                  >
                    <Icon className={`w-7 h-7 ${feature.accent}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[#6366F1] mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-[#8B7FA3] text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* AI Suggestion */}
          <div className="mt-2 w-full p-5 rounded-3xl bg-gradient-to-r from-[#6366F1]/10 to-[#A78BFA]/10 border border-[#6366F1]/20">
            <div className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-[#6366F1] flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-[#4A4458] mb-1">Jarvis AI</h4>
                <p className="text-[#8B7FA3]">
                  Do you want me to summarize this PDF for you?
                </p>
                <Button
                  className="mt-2 bg-[#6366F1] text-white rounded-full hover:bg-[#4F46E5]"
                  onClick={() => setAiSuggestion(true)}
                >
                  Yes, summarize PDF
                </Button>
                {/* Conditional rendering for AI suggestion */}
                {aiSuggestion ? (
                  <div className="mt-2 text-[#6366F1] text-sm">
                    Jarvis đang tóm tắt PDF cho bạn...
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        {/* Spacer for right side (optional for layout balance) */}
        <div className="flex-1" />
      </div>

      {/* Bottom spacing for navigation */}
      <div className="h-8"></div>
    </div>
  );
}
// ...existing code above is correct, remove duplicate and misplaced JSX below
