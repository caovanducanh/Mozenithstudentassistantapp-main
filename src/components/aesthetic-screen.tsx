import { Plus, Grid3x3, LayoutGrid } from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";

const moodBoards = [
  {
    id: 1,
    name: "Study Inspiration",
    images: [
      "https://images.unsplash.com/photo-1760662939135-d13f04cc3a13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwc3R1ZHklMjBkZXNrfGVufDF8fHx8MTc2MTAyMTMxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1700561571174-4e1992ee86a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwd29ya3NwYWNlJTIwcGxhbnRzfGVufDF8fHx8MTc2MTAyMTM1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1675001849511-509a2351ff69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0ZWwlMjBhZXN0aGV0aWMlMjBmbGF0bGF5fGVufDF8fHx8MTc2MTAyMTM1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1651251855113-af7669ef68ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXN0aGV0aWMlMjBwaW5rJTIwY29mZmVlfGVufDF8fHx8MTc2MTAyMTM0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ],
    count: 24,
    color: "#A78BFA",
  },
  {
    id: 2,
    name: "Soft Aesthetics",
    images: [
      "https://images.unsplash.com/photo-1610960565152-2adaa5fa6d39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0ZWwlMjBhZXN0aGV0aWMlMjByb29tfGVufDF8fHx8MTc2MTAyMTMxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1616418928117-4e6d19be2df1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwYmVkcm9vbSUyMGFlc3RoZXRpY3xlbnwxfHx8fDE3NjEwMjEzNTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1631791222734-2f1cb65e2fa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXZlbmRlciUyMGZsb3dlcnMlMjBmaWVsZHxlbnwxfHx8fDE3NjEwMjEzMTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1682335688718-cd3c073bd18b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0JTIwY2xvdWRzJTIwc2t5fGVufDF8fHx8MTc2MDk3MTMwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ],
    count: 18,
    color: "#FFC2D4",
  },
  {
    id: 3,
    name: "Dreamy Vibes",
    images: [
      "https://images.unsplash.com/photo-1647202037141-c216ab789e50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmVhbXklMjBzdW5zZXQlMjBjbG91ZHN8ZW58MXx8fHwxNzYxMDIxMzUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1518562945832-b19c158b01bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0JTIwYXJjaGl0ZWN0dXJlJTIwbWluaW1hbHxlbnwxfHx8fDE3NjEwMjEzNTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1682335688718-cd3c073bd18b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0JTIwY2xvdWRzJTIwc2t5fGVufDF8fHx8MTc2MDk3MTMwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1631791222734-2f1cb65e2fa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXZlbmRlciUyMGZsb3dlcnMlMjBmaWVsZHxlbnwxfHx8fDE3NjEwMjEzMTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ],
    count: 32,
    color: "#BAE6FD",
  },
];

export function AestheticScreen() {
  const [selectedBoard, setSelectedBoard] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "masonry">("grid");

  const selectedBoardData = moodBoards.find((b) => b.id === selectedBoard);

  if (selectedBoard && selectedBoardData) {
    return (
      <div className="flex flex-col h-screen bg-gradient-to-br from-[#FAF8FF] via-[#FFF0F5] to-[#F0F9FF] overflow-auto">
        {/* Header */}
        <div className="bg-white border-b border-[#FFC2D4]/20 px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <button
                onClick={() => setSelectedBoard(null)}
                className="text-[#A78BFA] mb-2 hover:underline"
              >
                ← Back to Boards
              </button>
              <h2 className="text-[#4A4458]">{selectedBoardData.name}</h2>
              <p className="text-[#8B7FA3]">{selectedBoardData.count} images</p>
            </div>
            <Button
              size="icon"
              className="rounded-full bg-gradient-to-r from-[#FFC2D4] to-[#A78BFA] hover:opacity-90"
            >
              <Plus className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="grow overflow-y-auto p-4 pb-28">
          <div className="columns-2 gap-4 space-y-4">
            {selectedBoardData.images.map((image, idx) => (
              <div
                key={idx}
                className="break-inside-avoid rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
              >
                <ImageWithFallback
                  src={image}
                  alt={`${selectedBoardData.name} ${idx + 1}`}
                  className="w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-[#FAF8FF] via-[#FFF0F5] to-[#F0F9FF] overflow-auto">
      {/* Header */}
      <div className="bg-white border-b border-[#FFC2D4]/20 px-4 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-[#4A4458]">Aesthetic</h2>
            <p className="text-[#8B7FA3]">Your mood boards</p>
          </div>
          <Button
            size="icon"
            className="rounded-full bg-gradient-to-r from-[#FFC2D4] to-[#A78BFA] hover:opacity-90"
          >
            <Plus className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Mood Boards Grid */}
      <div className="grow overflow-y-auto p-4 pb-28">
        <div className="space-y-4">
          {moodBoards.map((board) => (
            <div
              key={board.id}
              onClick={() => setSelectedBoard(board.id)}
              className="group cursor-pointer"
            >
              {/* Preview Collage */}
              <div className="rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all mb-2 bg-white">
                <div className="grid grid-cols-2 gap-0.5">
                  {board.images.slice(0, 4).map((image, idx) => (
                    <div key={idx} className="aspect-square overflow-hidden">
                      <ImageWithFallback
                        src={image}
                        alt={`${board.name} preview ${idx + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Board Info */}
              <div className="px-2">
                <h3 className="text-[#4A4458] mb-1">{board.name}</h3>
                <p className="text-[#8B7FA3]">{board.count} images</p>
              </div>
            </div>
          ))}
        </div>

        {/* Add New Board Card */}
        <div className="mt-4 bg-gradient-to-br from-[#E9D5FF] to-[#FFC2D4]/30 rounded-3xl p-6 border-2 border-dashed border-[#A78BFA]/30 flex flex-col items-center justify-center min-h-[200px] cursor-pointer hover:border-[#A78BFA]/50 transition-colors">
          <div className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center mb-3">
            <Plus className="w-8 h-8 text-[#A78BFA]" />
          </div>
          <h3 className="text-[#4A4458] mb-1">Create New Board</h3>
          <p className="text-[#8B7FA3] text-center">
            Add images by URL or keyword
          </p>
        </div>
      </div>
    </div>
  );
}
