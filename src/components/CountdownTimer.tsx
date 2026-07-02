import React, { useState, useEffect } from "react";
import { CONFIG } from "../config";
import { Timer, Award, CheckCircle } from "lucide-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownTimer: React.FC = () => {
  const [targetName, setTargetName] = useState<string>("");
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [status, setStatus] = useState<"beforeReg" | "beforeContest" | "running" | "ended">("beforeReg");

  useEffect(() => {
    const regTime = new Date(CONFIG.dates.registrationOpens).getTime();
    const contestStartTime = new Date(CONFIG.dates.contestStarts).getTime();
    const contestEndTime = new Date(CONFIG.dates.contestEnds).getTime();

    const updateTimer = () => {
      const now = Date.now();

      if (now < regTime) {
        setStatus("beforeReg");
        setTargetName("Registration Opens In");
        calculateTimeLeft(regTime - now);
      } else if (now >= regTime && now < contestStartTime) {
        setStatus("beforeContest");
        setTargetName("Contest Countdown");
        calculateTimeLeft(contestStartTime - now);
      } else if (now >= contestStartTime && now < contestEndTime) {
        setStatus("running");
        setTargetName("The Contest Has Started!");
        setTimeLeft(null);
      } else {
        setStatus("ended");
        setTargetName("Contest Completed");
        setTimeLeft(null);
      }
    };

    const calculateTimeLeft = (diffMs: number) => {
      const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diffMs / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diffMs / 1000 / 60) % 60);
      const seconds = Math.floor((diffMs / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateTimer();
    const timerId = setInterval(updateTimer, 1000);

    return () => clearInterval(timerId);
  }, []);

  const formatNumber = (num: number) => {
    return num.toString().padStart(2, "0");
  };

  return (
    <div className="w-full flex flex-col items-center select-none">
      {/* Header Badge */}
      <div className="flex items-center space-x-2 px-4 py-1.5 rounded-full bg-brand-purple/10 border border-brand-purple/20 mb-4 animate-pulse-slow">
        {status === "running" ? (
          <Award className="w-4 h-4 text-brand-blue-light animate-bounce" />
        ) : status === "ended" ? (
          <CheckCircle className="w-4 h-4 text-green-400" />
        ) : (
          <Timer className="w-4 h-4 text-brand-purple-light" />
        )}
        <span className="text-sm font-semibold tracking-wider uppercase bg-gradient-to-r from-brand-purple-light to-brand-blue-light bg-clip-text text-transparent">
          {targetName}
        </span>
      </div>

      {/* Countdown Timer Display */}
      {timeLeft && (
        <div className="grid grid-cols-4 gap-3 sm:gap-6 max-w-lg w-full px-2">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div
              key={unit}
              className="flex flex-col items-center p-3 sm:p-5 rounded-2xl glass-card border border-brand-purple/10 relative overflow-hidden group hover:border-brand-purple/30 transition-all duration-300"
            >
              {/* Card glowing gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/5 to-brand-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Number */}
              <span className="text-3xl sm:text-5xl font-extrabold tracking-tight font-mono text-white text-glow mb-1">
                {formatNumber(value)}
              </span>

              {/* Unit Label */}
              <span className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-widest">
                {unit}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Special Banner States */}
      {status === "running" && (
        <div className="px-8 py-5 rounded-2xl glass-panel border border-brand-blue/30 text-center max-w-md w-full relative overflow-hidden shadow-neon-blue">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/10 to-brand-blue/10 animate-pulse-slow" />
          <h4 className="text-2xl sm:text-3xl font-black text-white tracking-wide uppercase mb-1">
            Live Now!
          </h4>
          <p className="text-sm text-gray-300 font-sans">
            Solve the 6 coding challenges. The clock is ticking!
          </p>
        </div>
      )}

      {status === "ended" && (
        <div className="px-8 py-5 rounded-2xl glass-panel border border-green-500/20 text-center max-w-md w-full shadow-lg">
          <h4 className="text-2xl sm:text-3xl font-black text-green-400 tracking-wide uppercase mb-1">
            Completed
          </h4>
          <p className="text-sm text-gray-300 font-sans">
            Thank you for participating! Stay tuned for the results announcement.
          </p>
        </div>
      )}
    </div>
  );
};
