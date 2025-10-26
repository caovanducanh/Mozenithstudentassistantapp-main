import { useState } from "react";
import { Crown, Check, Star, Zap, Shield, Sparkles } from "lucide-react";

export function PaymentScreen() {
  const [selectedPlan, setSelectedPlan] = useState<"monthly" | "yearly">("monthly");

  const features = {
    free: [
      "Basic AI chat responses",
      "Limited schedule entries",
      "3 diary entries per day",
      "Basic music stems",
      "5 aesthetic boards"
    ],
    premium: [
      "Advanced AI conversations",
      "Unlimited schedule management",
      "Unlimited diary entries",
      "Full music stem separation",
      "Unlimited aesthetic boards",
      "Priority support",
      "Advanced analytics",
      "Custom themes",
      "Export functionality"
    ]
  };

  const pricing = {
    monthly: { price: "$9.99", period: "month" },
    yearly: { price: "$99.99", period: "year", savings: "Save 17%" }
  };

  return (
    <div className="h-full bg-gradient-to-br from-[#FAF8FF] via-[#F8F5FF] to-[#FFF8FB] overflow-y-auto">
      {/* Header */}
      <div className="p-6 text-center">
        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#A78BFA] to-[#FFC2D4] flex items-center justify-center">
          <Crown className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-[#6B46C1] mb-2">Upgrade to Premium</h1>
        <p className="text-[#8B7FA3] text-lg">
          Unlock the full potential of your AI assistant
        </p>
      </div>

      {/* Current Plan Status */}
      <div className="mx-6 mb-6 p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-[#A78BFA]/20">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#10B981] to-[#059669] flex items-center justify-center">
            <Star className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-[#6B46C1]">Current Plan: Free</h3>
            <p className="text-[#8B7FA3] text-sm">Limited features available</p>
          </div>
        </div>
      </div>

      {/* Plan Comparison */}
      <div className="mx-6 space-y-4">
        {/* Free Plan */}
        <div className="p-6 rounded-3xl bg-white/60 backdrop-blur-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-gray-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-700">Free Plan</h3>
              <p className="text-gray-500">Basic features</p>
            </div>
          </div>
          <div className="space-y-2">
            {features.free.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                <span className="text-gray-600 text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Premium Plan */}
        <div className="p-6 rounded-3xl bg-gradient-to-br from-[#A78BFA]/10 to-[#FFC2D4]/10 border-2 border-[#A78BFA]/30 relative overflow-hidden">
          {/* Popular badge */}
          <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r from-[#A78BFA] to-[#FFC2D4] text-white text-xs font-bold">
            POPULAR
          </div>

          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#A78BFA] to-[#FFC2D4] flex items-center justify-center">
              <Crown className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#6B46C1]">Premium Plan</h3>
              <p className="text-[#8B7FA3]">Full access to all features</p>
            </div>
          </div>

          {/* Pricing Toggle */}
          <div className="flex items-center justify-center mb-4">
            <div className="bg-white/50 rounded-full p-1 flex">
              <button
                onClick={() => setSelectedPlan("monthly")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedPlan === "monthly"
                    ? "bg-[#A78BFA] text-white shadow-lg"
                    : "text-[#8B7FA3]"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setSelectedPlan("yearly")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedPlan === "yearly"
                    ? "bg-[#A78BFA] text-white shadow-lg"
                    : "text-[#8B7FA3]"
                }`}
              >
                Yearly
              </button>
            </div>
          </div>

          {/* Price Display */}
          <div className="text-center mb-4">
            <div className="text-3xl font-bold text-[#6B46C1]">
              {pricing[selectedPlan].price}
              <span className="text-lg text-[#8B7FA3]">/{pricing[selectedPlan].period}</span>
            </div>
            {selectedPlan === "yearly" && (
              <div className="text-sm text-green-600 font-medium">
                {pricing.yearly.savings}
              </div>
            )}
          </div>

          <div className="space-y-2 mb-6">
            {features.premium.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#A78BFA]" />
                <span className="text-[#6B46C1] text-sm">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#A78BFA] to-[#FFC2D4] text-white font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] flex items-center justify-center gap-2">
            <Zap className="w-5 h-5" />
            Upgrade Now
          </button>
        </div>
      </div>

      {/* Security Note */}
      <div className="mx-6 mt-6 p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-green-200">
        <div className="flex items-center gap-3">
          <Shield className="w-6 h-6 text-green-600" />
          <div>
            <p className="text-sm text-gray-700 font-medium">Secure Payment</p>
            <p className="text-xs text-gray-500">Cancel anytime • 30-day money-back guarantee</p>
          </div>
        </div>
      </div>

      {/* Bottom spacing for navigation */}
      <div className="h-8"></div>
    </div>
  );
}