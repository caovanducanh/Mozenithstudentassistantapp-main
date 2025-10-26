import { Send, Sparkles } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const sampleMessages = [
  { id: 1, type: "bot", text: "Hi there! I'm Jarvis, your personal assistant. How can I help you today?" },
  { id: 2, type: "user", text: "I have an exam tomorrow and I'm feeling anxious" },
  { id: 3, type: "bot", text: "I understand exam stress can be overwhelming. Let's break this down together. First, would you like me to help you create a study schedule for today? Also, I can suggest some calming music to help you focus." },
];

const quickPrompts = [
  "Plan my study schedule",
  "I feel stressed",
  "Play relaxing music",
  "Show my calendar",
];

export function ChatbotScreen() {
  const [messages, setMessages] = useState(sampleMessages);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    
    const newMessage = {
      id: messages.length + 1,
      type: "user" as const,
      text: input,
    };
    
    setMessages([...messages, newMessage]);
    setInput("");
    
    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        type: "bot" as const,
        text: "I'm here to help! While I'm a demo, in the full version I would assist you with that request.",
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-[#FAF8FF] via-[#F3E8FF] to-[#E9D5FF]">
      {/* Header with Jarvis Avatar */}
      <div className="flex flex-col items-center pt-8 pb-6">
        <div className="relative">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#A78BFA] to-[#FFC2D4] flex items-center justify-center shadow-lg animate-pulse">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
          <div className="absolute inset-0 w-20 h-20 rounded-full bg-[#A78BFA] opacity-30 animate-ping"></div>
        </div>
        <h2 className="mt-4 text-[#4A4458]">Jarvis</h2>
        <p className="text-[#8B7FA3]">Your Personal Assistant</p>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 pb-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] rounded-3xl px-5 py-3 ${
                message.type === "user"
                  ? "bg-[#A78BFA] text-white"
                  : "bg-white text-[#4A4458] shadow-sm"
              }`}
            >
              <p>{message.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Prompts */}
      <div className="px-4 py-2">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {quickPrompts.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => setInput(prompt)}
              className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full whitespace-nowrap hover:bg-white transition-colors border border-[#A78BFA]/20"
            >
              <p className="text-[#4A4458]">{prompt}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Input Area */}
      <div className="px-4 pb-6 pt-2">
        <div className="flex gap-2 items-center bg-white rounded-full px-4 py-2 shadow-md">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder="Ask me anything..."
            className="flex-1 border-0 focus-visible:ring-0 bg-transparent"
          />
          <Button
            onClick={handleSend}
            size="icon"
            className="rounded-full bg-[#A78BFA] hover:bg-[#9270F0] h-10 w-10"
          >
            <Send className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
