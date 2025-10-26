import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, User, Sparkles, ArrowRight, Apple, Chrome, Check } from "lucide-react";

interface RegisterScreenProps {
  onRegister: () => void;
  onSwitchToLogin: () => void;
}

export function RegisterScreen({ onRegister, onSwitchToLogin }: RegisterScreenProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    if (field === "password") {
      calculatePasswordStrength(value);
    }
  };

  const calculatePasswordStrength = (password: string) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    setPasswordStrength(strength);
  };

  const getPasswordStrengthColor = () => {
    if (passwordStrength <= 2) return "bg-red-400";
    if (passwordStrength <= 3) return "bg-yellow-400";
    if (passwordStrength <= 4) return "bg-blue-400";
    return "bg-green-400";
  };

  const getPasswordStrengthText = () => {
    if (passwordStrength <= 2) return "Weak";
    if (passwordStrength <= 3) return "Fair";
    if (passwordStrength <= 4) return "Good";
    return "Strong";
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    if (!acceptTerms) {
      alert("Please accept the terms and conditions");
      return;
    }

    setIsLoading(true);
    
    // Simulate registration process
    setTimeout(() => {
      setIsLoading(false);
      onRegister();
    }, 2500);
  };

  const handleSocialRegister = (provider: string) => {
    console.log(`Register with ${provider}`);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onRegister();
    }, 1500);
  };

  return (
    <div className="h-full bg-gradient-to-br from-[#FAF8FF] via-[#F8F5FF] to-[#FFF8FB] overflow-y-auto">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-16 right-8 w-28 h-28 bg-gradient-to-br from-[#FFC2D4]/20 to-[#A78BFA]/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-60 left-12 w-36 h-36 bg-gradient-to-br from-[#B5FFCC]/20 to-[#FFC2D4]/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 right-1/4 w-32 h-32 bg-gradient-to-br from-[#A78BFA]/20 to-[#B5FFCC]/20 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 min-h-full flex items-center justify-center p-6 py-12">
        <div className="w-full max-w-md">
          {/* Logo and Welcome */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-[#A78BFA] to-[#FFC2D4] flex items-center justify-center shadow-2xl">
              <Sparkles className="w-10 h-10 text-white animate-pulse" />
            </div>
            <h1 className="text-3xl font-bold text-[#6B46C1] mb-2">Join Mozenith</h1>
            <p className="text-[#8B7FA3] text-lg">
              Create your account and start your journey
            </p>
          </div>

          {/* Registration Form */}
          <form onSubmit={handleRegister} className="space-y-6">
            {/* Full Name Field */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#6B46C1]" htmlFor="fullName">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-[#A78BFA]" />
                </div>
                <input
                  id="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange("fullName", e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/80 backdrop-blur-sm border border-[#A78BFA]/20 rounded-2xl text-[#6B46C1] placeholder-[#8B7FA3] focus:outline-none focus:ring-2 focus:ring-[#A78BFA]/50 focus:border-[#A78BFA] transition-all"
                  placeholder="Enter your full name"
                  required
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#6B46C1]" htmlFor="email">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-[#A78BFA]" />
                </div>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/80 backdrop-blur-sm border border-[#A78BFA]/20 rounded-2xl text-[#6B46C1] placeholder-[#8B7FA3] focus:outline-none focus:ring-2 focus:ring-[#A78BFA]/50 focus:border-[#A78BFA] transition-all"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#6B46C1]" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-[#A78BFA]" />
                </div>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                  className="w-full pl-12 pr-12 py-4 bg-white/80 backdrop-blur-sm border border-[#A78BFA]/20 rounded-2xl text-[#6B46C1] placeholder-[#8B7FA3] focus:outline-none focus:ring-2 focus:ring-[#A78BFA]/50 focus:border-[#A78BFA] transition-all"
                  placeholder="Create a password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-[#A78BFA] hover:text-[#6B46C1] transition-colors"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              
              {/* Password Strength Indicator */}
              {formData.password && (
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-[#8B7FA3]">Password strength:</span>
                    <span className={`font-medium ${passwordStrength >= 4 ? 'text-green-600' : passwordStrength >= 3 ? 'text-blue-600' : passwordStrength >= 2 ? 'text-yellow-600' : 'text-red-600'}`}>
                      {getPasswordStrengthText()}
                    </span>
                  </div>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((level) => (
                      <div
                        key={level}
                        className={`h-2 flex-1 rounded-full transition-colors ${
                          level <= passwordStrength ? getPasswordStrengthColor() : 'bg-gray-200'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Confirm Password Field */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#6B46C1]" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-[#A78BFA]" />
                </div>
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  value={formData.confirmPassword}
                  onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                  className="w-full pl-12 pr-12 py-4 bg-white/80 backdrop-blur-sm border border-[#A78BFA]/20 rounded-2xl text-[#6B46C1] placeholder-[#8B7FA3] focus:outline-none focus:ring-2 focus:ring-[#A78BFA]/50 focus:border-[#A78BFA] transition-all"
                  placeholder="Confirm your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-[#A78BFA] hover:text-[#6B46C1] transition-colors"
                >
                  {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                <p className="text-sm text-red-500">Passwords don't match</p>
              )}
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-start gap-3">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                  className="w-4 h-4 text-[#A78BFA] bg-white border-[#A78BFA]/30 rounded focus:ring-[#A78BFA]/50 focus:ring-2"
                />
              </label>
              <div className="text-sm text-[#8B7FA3]">
                I agree to the{" "}
                <a href="#" className="text-[#A78BFA] hover:underline">Terms of Service</a>{" "}
                and{" "}
                <a href="#" className="text-[#A78BFA] hover:underline">Privacy Policy</a>
              </div>
            </div>

            {/* Register Button */}
            <button
              type="submit"
              disabled={isLoading || !acceptTerms || formData.password !== formData.confirmPassword}
              className="w-full py-4 px-6 bg-gradient-to-r from-[#A78BFA] to-[#FFC2D4] text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
              ) : (
                <>
                  Create Account
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="my-8 flex items-center">
            <div className="flex-1 border-t border-[#A78BFA]/20"></div>
            <div className="px-4 text-sm text-[#8B7FA3] bg-[#FAF8FF]">or sign up with</div>
            <div className="flex-1 border-t border-[#A78BFA]/20"></div>
          </div>

          {/* Social Registration */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <button
              onClick={() => handleSocialRegister("Google")}
              className="flex items-center justify-center gap-2 py-3 px-4 bg-white/80 backdrop-blur-sm border border-[#A78BFA]/20 rounded-2xl text-[#6B46C1] font-medium hover:bg-white hover:shadow-lg transition-all"
            >
              <Chrome className="w-5 h-5" />
              Google
            </button>
            <button
              onClick={() => handleSocialRegister("Apple")}
              className="flex items-center justify-center gap-2 py-3 px-4 bg-white/80 backdrop-blur-sm border border-[#A78BFA]/20 rounded-2xl text-[#6B46C1] font-medium hover:bg-white hover:shadow-lg transition-all"
            >
              <Apple className="w-5 h-5" />
              Apple
            </button>
          </div>

          {/* Sign In Link */}
          <div className="text-center">
            <p className="text-[#8B7FA3]">
              Already have an account?{" "}
              <button
                onClick={onSwitchToLogin}
                className="text-[#A78BFA] hover:text-[#6B46C1] font-medium transition-colors"
              >
                Sign in
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}