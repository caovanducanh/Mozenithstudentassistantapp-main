import { useState } from "react";
import { 
  User, 
  Volume2, 
  VolumeX, 
  Trash2, 
  Bell, 
  Moon, 
  Sun, 
  Shield, 
  HelpCircle,
  ChevronRight,
  LogOut,
  Database
} from "lucide-react";

interface SettingsItem {
  icon: any;
  label: string;
  description: string;
  action?: () => void;
  hasArrow?: boolean;
  isToggle?: boolean;
  toggleValue?: boolean;
  onToggle?: (value: boolean) => void;
  isDestructive?: boolean;
  isCustom?: boolean;
  customContent?: React.ReactNode;
}

interface SettingsScreenProps {
  onLogout?: () => void;
}

export function SettingsScreen({ onLogout }: SettingsScreenProps) {
  const [volume, setVolume] = useState(75);
  const [isMuted, setIsMuted] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [showClearDialog, setShowClearDialog] = useState(false);

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseInt(e.target.value);
    setVolume(newVolume);
    if (newVolume === 0) {
      setIsMuted(true);
    } else {
      setIsMuted(false);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const clearCache = () => {
    // Simulate cache clearing
    setTimeout(() => {
      setShowClearDialog(false);
      // You could show a success message here
    }, 1000);
  };

  const settingsSections: { title: string; items: SettingsItem[] }[] = [
    {
      title: "Profile",
      items: [
        {
          icon: User,
          label: "Account Information",
          description: "Manage your profile and preferences",
          action: () => console.log("Open profile"),
          hasArrow: true
        }
      ]
    },
    {
      title: "Audio & Visual",
      items: [
        {
          icon: isMuted ? VolumeX : Volume2,
          label: "Volume",
          description: `${isMuted ? "Muted" : `${volume}%`}`,
          isCustom: true,
          customContent: (
            <div className="flex items-center gap-3 w-full">
              <button
                onClick={toggleMute}
                className="p-2 rounded-full hover:bg-[#A78BFA]/10 transition-colors"
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5 text-[#8B7FA3]" />
                ) : (
                  <Volume2 className="w-5 h-5 text-[#A78BFA]" />
                )}
              </button>
              <input
                type="range"
                min="0"
                max="100"
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                style={{
                  background: `linear-gradient(to right, #A78BFA 0%, #A78BFA ${volume}%, #e5e7eb ${volume}%, #e5e7eb 100%)`
                }}
              />
              <span className="text-sm text-[#8B7FA3] w-10 text-right">
                {isMuted ? "0%" : `${volume}%`}
              </span>
            </div>
          )
        },
        {
          icon: darkMode ? Moon : Sun,
          label: "Theme",
          description: darkMode ? "Dark mode" : "Light mode",
          isToggle: true,
          toggleValue: darkMode,
          onToggle: setDarkMode
        }
      ]
    },
    {
      title: "Notifications",
      items: [
        {
          icon: Bell,
          label: "Push Notifications",
          description: "Get notified about updates and reminders",
          isToggle: true,
          toggleValue: notifications,
          onToggle: setNotifications
        }
      ]
    },
    {
      title: "Data & Storage",
      items: [
        {
          icon: Database,
          label: "Storage Usage",
          description: "View app data usage",
          action: () => console.log("Open storage"),
          hasArrow: true
        },
        {
          icon: Trash2,
          label: "Clear Cache",
          description: "Free up space by clearing temporary data",
          action: () => setShowClearDialog(true),
          isDestructive: true
        }
      ]
    },
    {
      title: "Support",
      items: [
        {
          icon: HelpCircle,
          label: "Help & Support",
          description: "Get help and contact support",
          action: () => console.log("Open help"),
          hasArrow: true
        },
        {
          icon: Shield,
          label: "Privacy Policy",
          description: "View our privacy policy",
          action: () => console.log("Open privacy"),
          hasArrow: true
        }
      ]
    },
    {
      title: "Account",
      items: [
        {
          icon: LogOut,
          label: "Sign Out",
          description: "Sign out of your account",
          action: onLogout || (() => console.log("Sign out")),
          isDestructive: true
        }
      ]
    }
  ];

  return (
    <div className="h-full bg-gradient-to-br from-[#FAF8FF] via-[#F8F5FF] to-[#FFF8FB] overflow-y-auto">
      {/* Header */}
      <div className="p-6 pb-4">
        <h1 className="text-3xl font-bold text-[#6B46C1] mb-2">Settings</h1>
        <p className="text-[#8B7FA3] text-lg">
          Customize your Mozenith experience
        </p>
      </div>

      {/* Settings Sections */}
      <div className="px-6 space-y-6">
        {settingsSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="space-y-3">
            <h2 className="text-lg font-semibold text-[#6B46C1] mb-3">
              {section.title}
            </h2>
            
            <div className="space-y-2">
              {section.items.map((item, itemIndex) => {
                const Icon = item.icon;
                
                return (
                  <div
                    key={itemIndex}
                    className="p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-white/50 shadow-sm"
                  >
                    {item.isCustom ? (
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#A78BFA]/10 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-[#A78BFA]" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium text-[#6B46C1] mb-1">{item.label}</h3>
                          {item.customContent}
                        </div>
                      </div>
                    ) : (
                      <button
                        onClick={item.action}
                        className="w-full flex items-center gap-3 text-left"
                      >
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          item.isDestructive 
                            ? "bg-red-100" 
                            : "bg-[#A78BFA]/10"
                        }`}>
                          <Icon className={`w-5 h-5 ${
                            item.isDestructive 
                              ? "text-red-500" 
                              : "text-[#A78BFA]"
                          }`} />
                        </div>
                        
                        <div className="flex-1">
                          <h3 className={`font-medium mb-1 ${
                            item.isDestructive 
                              ? "text-red-600" 
                              : "text-[#6B46C1]"
                          }`}>
                            {item.label}
                          </h3>
                          <p className="text-[#8B7FA3] text-sm">
                            {item.description}
                          </p>
                        </div>
                        
                        {item.isToggle ? (
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              className="sr-only peer"
                              checked={item.toggleValue}
                              onChange={(e) => item.onToggle?.(e.target.checked)}
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#A78BFA]"></div>
                          </label>
                        ) : item.hasArrow ? (
                          <ChevronRight className="w-5 h-5 text-[#8B7FA3]" />
                        ) : null}
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Clear Cache Confirmation Dialog */}
      {showClearDialog && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-6">
          <div className="bg-white rounded-3xl p-6 max-w-sm w-full">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center">
                <Trash2 className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Clear Cache?</h3>
              <p className="text-gray-600 mb-6">
                This will remove temporary files and may help improve app performance. Your personal data will not be affected.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowClearDialog(false)}
                  className="flex-1 py-3 px-4 rounded-2xl border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={clearCache}
                  className="flex-1 py-3 px-4 rounded-2xl bg-red-500 text-white font-medium hover:bg-red-600 transition-colors"
                >
                  Clear Cache
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom spacing for navigation */}
      <div className="h-8"></div>
    </div>
  );
}