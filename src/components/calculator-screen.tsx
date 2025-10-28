import { Calculator } from "lucide-react";
import { useState } from "react";

export function CalculatorScreen() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<string | null>(null);

  // Educational & fun functions
  const handleCtoF = () => {
    const val = parseFloat(input);
    if (!isNaN(val)) {
      setResult(((val * 9) / 5 + 32).toFixed(2) + " °F");
    } else {
      setResult("Error");
    }
  };

  const handleFtoC = () => {
    const val = parseFloat(input);
    if (!isNaN(val)) {
      setResult((((val - 32) * 5) / 9).toFixed(2) + " °C");
    } else {
      setResult("Error");
    }
  };

  const handleSqrt = () => {
    const val = parseFloat(input);
    if (!isNaN(val) && val >= 0) {
      setResult(Math.sqrt(val).toFixed(4));
    } else {
      setResult("Error");
    }
  };

  const handlePercent = () => {
    const val = parseFloat(input);
    if (!isNaN(val)) {
      setResult((val / 100).toString());
    } else {
      setResult("Error");
    }
  };

  const handlePower = () => {
    const [base, exp] = input.split("^").map(Number);
    if (!isNaN(base) && !isNaN(exp)) {
      setResult(Math.pow(base, exp).toString());
    } else {
      setResult("Error (use a^b)");
    }
  };

  const handleFactorial = () => {
    const val = parseInt(input);
    if (!isNaN(val) && val >= 0 && val <= 170) {
      let res = 1;
      for (let i = 2; i <= val; i++) res *= i;
      setResult(res.toLocaleString());
    } else {
      setResult("Error (0-170)");
    }
  };

  const handleRandom = () => {
    setResult((Math.random() * 100).toFixed(2));
  };

  const handlePi = () => {
    setResult(Math.PI.toFixed(8));
  };

  const handleE = () => {
    setResult(Math.E.toFixed(8));
  };

  const handleLog = () => {
    const val = parseFloat(input);
    if (!isNaN(val) && val > 0) {
      setResult(Math.log10(val).toFixed(4));
    } else {
      setResult("Error");
    }
  };

  const handleSin = () => {
    const val = parseFloat(input);
    if (!isNaN(val)) {
      setResult(Math.sin((val * Math.PI) / 180).toFixed(4));
    } else {
      setResult("Error");
    }
  };

  const handleCos = () => {
    const val = parseFloat(input);
    if (!isNaN(val)) {
      setResult(Math.cos((val * Math.PI) / 180).toFixed(4));
    } else {
      setResult("Error");
    }
  };

  const handleTan = () => {
    const val = parseFloat(input);
    if (!isNaN(val)) {
      setResult(Math.tan((val * Math.PI) / 180).toFixed(4));
    } else {
      setResult("Error");
    }
  };

  const handleButtonClick = (value: string) => {
    if (value === "C") {
      setInput("");
      setResult(null);
    } else if (value === "=") {
      try {
        // eslint-disable-next-line no-eval
        const evalResult = eval(input);
        setResult(evalResult.toString());
      } catch {
        setResult("Error");
      }
    } else {
      setInput((prev) => prev + value);
    }
  };

  // Color palette inspired by schedule-screen
  const palette = [
    "#A78BFA", // purple
    "#BAE6FD", // blue
    "#FFC2D4", // pink
    "#BBF7D0", // mint
    "#FED7AA", // peach
    "#F3E8FF", // light purple
    "#E0E7FF", // light blue
  ];

  const buttons = [
    ["7", "8", "9", "/"],
    ["4", "5", "6", "*"],
    ["1", "2", "3", "-"],
    ["0", ".", "C", "+"],
    ["="],
  ];

  return (
    <div className="flex flex-col min-h-screen p-4 bg-gradient-to-br from-[#FAF8FF] to-[#E9F5FF] overflow-y-auto pb-[100px]">
      <div className="bg-white border-b border-[#6366F1]/20 px-4 py-4">
        <div className="flex items-center gap-3">
          <div>
            <h2 className="text-[#4A4458] font-bold text-xl">
              Mini Calculator
            </h2>
            <p className="text-[#8B7FA3]">
              Standard and fun educational functions
            </p>
          </div>
        </div>
      </div>
      <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-6 mb-6 border border-[#A78BFA]/20">
        <div className="mb-2 text-right text-2xl text-[#4A4458] min-h-[2.5rem] font-mono">
          {input || "0"}
        </div>
        <div className="mb-2 text-right text-lg text-[#A78BFA] min-h-[2rem] font-mono">
          {result !== null ? result : ""}
        </div>
        <div className="grid grid-cols-4 gap-2 mb-4">
          {buttons.flat().map((btn, idx) => (
            <button
              key={idx}
              className={`p-3 rounded-2xl font-bold text-lg transition-all shadow-sm border border-[#A78BFA]/10 ${
                btn === "="
                  ? "col-span-4 bg-[#A78BFA] text-white"
                  : palette[idx % palette.length] === "#A78BFA"
                  ? "bg-[#A78BFA] text-white"
                  : `bg-[${
                      palette[idx % palette.length]
                    }] text-[#4A4458] hover:bg-[#A78BFA]/10`
              }`}
              onClick={() => handleButtonClick(btn)}
              style={btn === "=" ? { gridColumn: "span 4" } : {}}
            >
              {btn}
            </button>
          ))}
        </div>
        {/* Fun/Educational Functions */}
        <div className="grid grid-cols-3 gap-2 mb-2">
          <button
            className="p-2 rounded-2xl bg-[#BAE6FD] text-[#4A4458] font-semibold hover:bg-[#A78BFA]/20 transition-all"
            onClick={handleCtoF}
          >
            °C → °F
          </button>
          <button
            className="p-2 rounded-2xl bg-[#FFC2D4] text-[#4A4458] font-semibold hover:bg-[#A78BFA]/20 transition-all"
            onClick={handleFtoC}
          >
            °F → °C
          </button>
          <button
            className="p-2 rounded-2xl bg-[#BBF7D0] text-[#4A4458] font-semibold hover:bg-[#A78BFA]/20 transition-all"
            onClick={handleSqrt}
          >
            √
          </button>
          <button
            className="p-2 rounded-2xl bg-[#FED7AA] text-[#4A4458] font-semibold hover:bg-[#A78BFA]/20 transition-all"
            onClick={handlePercent}
          >
            %
          </button>
          <button
            className="p-2 rounded-2xl bg-[#A78BFA] text-white font-semibold hover:bg-[#9270F0]/80 transition-all"
            onClick={handlePower}
          >
            a^b
          </button>
          <button
            className="p-2 rounded-2xl bg-[#E0E7FF] text-[#4A4458] font-semibold hover:bg-[#A78BFA]/20 transition-all"
            onClick={handleFactorial}
          >
            n!
          </button>
          <button
            className="p-2 rounded-2xl bg-[#F3E8FF] text-[#4A4458] font-semibold hover:bg-[#A78BFA]/20 transition-all"
            onClick={handleRandom}
          >
            Rand
          </button>
          <button
            className="p-2 rounded-2xl bg-[#BAE6FD] text-[#4A4458] font-semibold hover:bg-[#A78BFA]/20 transition-all"
            onClick={handlePi}
          >
            π
          </button>
          <button
            className="p-2 rounded-2xl bg-[#FFC2D4] text-[#4A4458] font-semibold hover:bg-[#A78BFA]/20 transition-all"
            onClick={handleE}
          >
            e
          </button>
          <button
            className="p-2 rounded-2xl bg-[#BBF7D0] text-[#4A4458] font-semibold hover:bg-[#A78BFA]/20 transition-all"
            onClick={handleLog}
          >
            log₁₀
          </button>
          <button
            className="p-2 rounded-2xl bg-[#FED7AA] text-[#4A4458] font-semibold hover:bg-[#A78BFA]/20 transition-all"
            onClick={handleSin}
          >
            sin
          </button>
          <button
            className="p-2 rounded-2xl bg-[#A78BFA] text-white font-semibold hover:bg-[#9270F0]/80 transition-all"
            onClick={handleCos}
          >
            cos
          </button>
          <button
            className="p-2 rounded-2xl bg-[#E0E7FF] text-[#4A4458] font-semibold hover:bg-[#A78BFA]/20 transition-all"
            onClick={handleTan}
          >
            tan
          </button>
        </div>
        <div className="mt-4 text-xs text-[#4A4458] text-center">
          Try: Enter a value and use the fun/educational functions above!
          <br />
          Examples: 100 °C → °F, 212 °F → °C, 25 √, 50 %, 2^8, 5!, sin(30),
          log₁₀(100), π, e, Rand
        </div>
      </div>
    </div>
  );
}
