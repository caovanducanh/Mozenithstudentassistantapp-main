import { Plus, Smile, Meh, Frown, Sparkles } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

const moods = [
  { icon: Smile, label: "Happy", color: "#BBF7D0" },
  { icon: Meh, label: "Neutral", color: "#BAE6FD" },
  { icon: Frown, label: "Sad", color: "#FFC2D4" },
];

const sampleEntries = [
  {
    id: 1,
    date: "October 21, 2025",
    mood: "Happy",
    moodColor: "#BBF7D0",
    content: "Today was a productive day! Finished all my assignments early and had time to relax. Feeling grateful for the good weather and spending time with friends.",
  },
  {
    id: 2,
    date: "October 20, 2025",
    mood: "Neutral",
    moodColor: "#BAE6FD",
    content: "Regular day, nothing special. Attended classes and worked on the group project. Need to manage my time better.",
  },
  {
    id: 3,
    date: "October 19, 2025",
    mood: "Sad",
    moodColor: "#FFC2D4",
    content: "Feeling a bit overwhelmed with upcoming exams. Need to create a better study schedule and take breaks.",
  },
];

export function DiaryScreen() {
  const [isWriting, setIsWriting] = useState(false);
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [entry, setEntry] = useState("");

  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-[#FAF8FF] via-[#FFF0F5] to-[#F3E8FF] overflow-hidden">
      {/* Header */}
      <div className="bg-white border-b border-[#FFC2D4]/20 px-4 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-[#4A4458]">My Diary</h2>
            <p className="text-[#8B7FA3]">Reflect on your day</p>
          </div>
          <Button
            onClick={() => setIsWriting(!isWriting)}
            size="icon"
            className="rounded-full bg-gradient-to-r from-[#FFC2D4] to-[#A78BFA] hover:opacity-90"
          >
            <Plus className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* New Entry Form */}
      {isWriting && (
        <div className="bg-white border-b border-[#FFC2D4]/20 px-4 py-4">
          <div className="mb-3">
            <p className="mb-2 text-[#4A4458]">How are you feeling today?</p>
            <div className="flex gap-3">
              {moods.map((mood) => (
                <button
                  key={mood.label}
                  onClick={() => setSelectedMood(mood.label)}
                  className={`flex flex-col items-center gap-1 px-4 py-2 rounded-2xl transition-all ${
                    selectedMood === mood.label
                      ? "bg-opacity-100 shadow-md"
                      : "bg-opacity-50 hover:bg-opacity-70"
                  }`}
                  style={{ backgroundColor: mood.color }}
                >
                  <mood.icon className="w-6 h-6 text-[#4A4458]" />
                  <span className="text-[#4A4458]">{mood.label}</span>
                </button>
              ))}
            </div>
          </div>
          
          <Textarea
            value={entry}
            onChange={(e) => setEntry(e.target.value)}
            placeholder="What's on your mind today?"
            className="min-h-[120px] rounded-2xl border-[#FFC2D4]/30 focus:border-[#FFC2D4] mb-3 resize-none"
          />
          
          <div className="flex gap-2">
            <Button
              onClick={() => {
                setIsWriting(false);
                setEntry("");
                setSelectedMood(null);
              }}
              className="flex-1 rounded-full bg-[#FFC2D4] hover:bg-[#FFB3C9]"
            >
              Save Entry
            </Button>
            <Button
              onClick={() => {
                setIsWriting(false);
                setEntry("");
                setSelectedMood(null);
              }}
              variant="outline"
              className="rounded-full border-[#FFC2D4]/30"
            >
              Cancel
            </Button>
          </div>
        </div>
      )}

      {/* Past Entries */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-4">
          {sampleEntries.map((entry) => (
            <div
              key={entry.id}
              className="bg-white rounded-3xl p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-[#4A4458]">{entry.date}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: entry.moodColor }}
                    ></div>
                    <span className="text-[#8B7FA3]">{entry.mood}</span>
                  </div>
                </div>
              </div>
              <p className="text-[#4A4458] leading-relaxed">{entry.content}</p>
            </div>
          ))}
        </div>

        {/* AI Reflection Suggestion */}
        <div className="mt-4 bg-gradient-to-r from-[#E9D5FF] to-[#FFC2D4]/30 rounded-3xl p-4 border border-[#A78BFA]/20">
          <div className="flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-[#A78BFA] flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-[#4A4458] mb-1">Jarvis Reflection</h4>
              <p className="text-[#8B7FA3]">
                I've noticed you've been feeling a bit stressed lately. Remember to take breaks and practice self-care. You're doing great! 💜
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
