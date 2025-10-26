import { Play, Pause, SkipForward, SkipBack, Music2, Volume2 } from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const playlists = [
  {
    id: 1,
    name: "Focus Flow",
    description: "Calm instrumental music for deep focus",
    image: "https://images.unsplash.com/photo-1760662939135-d13f04cc3a13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwc3R1ZHklMjBkZXNrfGVufDF8fHx8MTc2MTAyMTMxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "#A78BFA",
    songs: 24,
  },
  {
    id: 2,
    name: "Chill Vibes",
    description: "Relaxing tunes for unwinding",
    image: "https://images.unsplash.com/photo-1610960565152-2adaa5fa6d39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0ZWwlMjBhZXN0aGV0aWMlMjByb29tfGVufDF8fHx8MTc2MTAyMTMxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "#FFC2D4",
    songs: 18,
  },
  {
    id: 3,
    name: "Study Lofi",
    description: "Lo-fi beats for productive sessions",
    image: "https://images.unsplash.com/photo-1682335688718-cd3c073bd18b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0JTIwY2xvdWRzJTIwc2t5fGVufDF8fHx8MTc2MDk3MTMwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "#BAE6FD",
    songs: 32,
  },
  {
    id: 4,
    name: "Nature Sounds",
    description: "Peaceful ambient nature recordings",
    image: "https://images.unsplash.com/photo-1631791222734-2f1cb65e2fa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXZlbmRlciUyMGZsb3dlcnMlMjBmaWVsZHxlbnwxfHx8fDE3NjEwMjEzMTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "#BBF7D0",
    songs: 15,
  },
];

const currentSong = {
  title: "Peaceful Piano",
  artist: "Study Music",
  stems: [
    { name: "Piano", active: true },
    { name: "Ambient", active: true },
    { name: "Bass", active: false },
    { name: "Strings", active: true },
  ],
};

export function MusicScreen() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedPlaylist, setSelectedPlaylist] = useState<number | null>(null);

  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-[#FAF8FF] via-[#E9F5FF] to-[#E8FAF0] overflow-hidden">
      {/* Header */}
      <div className="bg-white border-b border-[#A78BFA]/10 px-4 py-4">
        <h2 className="text-[#4A4458]">Music</h2>
        <p className="text-[#8B7FA3]">Your curated playlists</p>
      </div>

      {/* Playlists Grid */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="grid grid-cols-2 gap-4 mb-6">
          {playlists.map((playlist) => (
            <div
              key={playlist.id}
              onClick={() => setSelectedPlaylist(playlist.id)}
              className="group cursor-pointer"
            >
              <div className="aspect-square rounded-3xl overflow-hidden mb-2 shadow-md hover:shadow-xl transition-all">
                <ImageWithFallback
                  src={playlist.image}
                  alt={playlist.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-[#4A4458] mb-1">{playlist.name}</h3>
              <p className="text-[#8B7FA3]">{playlist.songs} songs</p>
            </div>
          ))}
        </div>
      </div>

      {/* Now Playing Mini Player */}
      <div className="bg-white border-t border-[#A78BFA]/10 px-4 py-4 pb-20">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#A78BFA] to-[#BAE6FD] flex items-center justify-center">
            <Music2 className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h4 className="text-[#4A4458]">{currentSong.title}</h4>
            <p className="text-[#8B7FA3]">{currentSong.artist}</p>
          </div>
        </div>

        {/* Stems Control */}
        <div className="mb-3">
          <p className="mb-2 text-[#8B7FA3]">Audio Stems</p>
          <div className="flex gap-2 flex-wrap">
            {currentSong.stems.map((stem, idx) => (
              <button
                key={idx}
                className={`px-3 py-1.5 rounded-full transition-all ${
                  stem.active
                    ? "bg-[#A78BFA] text-white"
                    : "bg-[#F3E8FF] text-[#8B7FA3]"
                }`}
              >
                {stem.name}
              </button>
            ))}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-3">
          <div className="h-1.5 bg-[#F3E8FF] rounded-full overflow-hidden">
            <div className="h-full w-1/3 bg-gradient-to-r from-[#A78BFA] to-[#FFC2D4] rounded-full"></div>
          </div>
          <div className="flex justify-between mt-1">
            <span className="text-[#8B7FA3]">1:23</span>
            <span className="text-[#8B7FA3]">4:15</span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4">
          <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#F3E8FF] transition-colors">
            <SkipBack className="w-5 h-5 text-[#4A4458]" />
          </button>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-[#A78BFA] to-[#FFC2D4] hover:opacity-90 transition-opacity shadow-lg"
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 text-white" />
            ) : (
              <Play className="w-6 h-6 text-white ml-0.5" />
            )}
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#F3E8FF] transition-colors">
            <SkipForward className="w-5 h-5 text-[#4A4458]" />
          </button>
        </div>
      </div>
    </div>
  );
}
