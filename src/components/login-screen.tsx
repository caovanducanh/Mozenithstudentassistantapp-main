import { useState } from "react";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  Sparkles,
  ArrowRight,
  Apple,
  Chrome,
} from "lucide-react";

interface LoginScreenProps {
  onLogin: () => void;
  onSwitchToRegister: () => void;
}

export function LoginScreen({ onLogin, onSwitchToRegister }: LoginScreenProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      onLogin();
    }, 2000);
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`Login with ${provider}`);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onLogin();
    }, 1500);
  };

  return (
    <div className="h-full bg-gradient-to-br from-[#FAF8FF] via-[#F8F5FF] to-[#FFF8FB] overflow-y-auto">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[#A78BFA]/20 to-[#FFC2D4]/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-16 w-24 h-24 bg-gradient-to-br from-[#FFC2D4]/20 to-[#B5FFCC]/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-gradient-to-br from-[#B5FFCC]/20 to-[#A78BFA]/20 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 min-h-full flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          {/* Logo and Welcome */}
          <div className="flex flex-col items-center mb-14">
            <div className="flex justify-center items-center mb-8">
              <Sparkles className="w-20 h-20 animate-pulse" />
            </div>
            <h1 className="text-3xl font-bold text-[#6B46C1] mb-4">
              Welcome Back
            </h1>
            <p className="text-[#8B7FA3] text-lg text-center mb-2">
              Sign in to continue your journey with Mozenith
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-8 mb-10">
            {/* Email Field */}
            <div className="space-y-3">
              <label
                className="text-sm font-medium text-[#6B46C1] mb-1"
                htmlFor="email"
              >
                Email Address
              </label>
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full py-4 bg-white/80 border border-[#A78BFA]/20 rounded-2xl text-[#6B46C1]"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-3 mt-4">
              <label
                className="text-sm font-medium text-[#6B46C1] mb-1 "
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-12 py-4 bg-white/80 backdrop-blur-sm border border-[#A78BFA]/20 rounded-2xl text-[#6B46C1] placeholder-[#8B7FA3] focus:outline-none focus:ring-2 focus:ring-[#A78BFA]/50 focus:border-[#A78BFA] transition-all"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-[#A78BFA] hover:text-[#6B46C1] transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between mt-4 mb-4">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 text-[#A78BFA] bg-white border-[#A78BFA]/30 rounded focus:ring-[#A78BFA]/50 focus:ring-2"
                />
                <span className="ml-2 text-sm text-[#8B7FA3]">Remember me</span>
              </label>
              <button
                type="button"
                className="text-sm text-[#A78BFA] hover:text-[#6B46C1] font-medium transition-colors"
              >
                Forgot password?
              </button>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 px-6 bg-gradient-to-r from-[#A78BFA] to-[#FFC2D4] text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
              ) : (
                <>
                  Sign In
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="mt-4 mb-4 flex items-center">
            <div className="flex-1 border-t border-[#A78BFA]/20"></div>
            <div className="px-4 text-sm text-[#8B7FA3]">or continue with</div>
            <div className="flex-1 border-t border-[#A78BFA]/20"></div>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-6 mb-12">
            <button
              onClick={() => handleSocialLogin("Google")}
              className="flex items-center justify-center gap-2 py-4 px-4 bg-white/80 backdrop-blur-sm border border-[#A78BFA]/20 rounded-2xl text-[#6B46C1] font-medium hover:bg-white hover:shadow-lg transition-all"
            >
              <Chrome className="w-5 h-5" />
              Google
            </button>
            <button
              onClick={() => handleSocialLogin("Apple")}
              className="flex items-center justify-center gap-2 py-4 px-4 bg-white/80 backdrop-blur-sm border border-[#A78BFA]/20 rounded-2xl text-[#6B46C1] font-medium hover:bg-white hover:shadow-lg transition-all"
            >
              <Apple className="w-5 h-5" />
              Apple
            </button>
          </div>

          {/* Sign Up Link */}
          <div className="text-center mb-8 mt-4">
            <p className="text-[#8B7FA3]">
              Don't have an account?{" "}
              <button
                onClick={onSwitchToRegister}
                className="text-[#A78BFA] hover:text-[#6B46C1] font-medium transition-colors"
              >
                Sign up for free
              </button>
            </p>
          </div>

          {/* Terms */}
          <div className="mt-10 text-center">
            <p className="text-xs text-[#8B7FA3]">
              By signing in, you agree to our{" "}
              <a href="#" className="text-[#A78BFA] hover:underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-[#A78BFA] hover:underline">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
