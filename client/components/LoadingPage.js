"use client";

import { useEffect, useState } from "react";
import { Plane, Loader2, ArrowRight } from "lucide-react";

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("Starting up...");

  // Phone number for CTA
  const phoneNumber = "0-800-058-4202";

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "");
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress < 30) setStatus("Searching for flights...");
    else if (progress < 60) setStatus("Gathering options...");
    else if (progress < 90) setStatus("Finalizing best results...");
    else setStatus("Ready!");
  }, [progress]);

  return (
    <div className="fixed inset-0 z-50 w-screen h-screen bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
      <div className="w-full max-w-lg px-6 py-8 bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl shadow-xl flex flex-col items-center">
        <h2 className="text-white text-3xl font-semibold mb-6 text-center tracking-wide">
          Finding Your Perfect Flight
        </h2>

        {/* Plane progress bar */}
        <div className="relative w-full h-4 bg-white/20 rounded-full overflow-hidden mb-6">
          <div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-yellow-400 to-red-600 transition-all duration-200"
            style={{ width: `${progress}%` }}
          ></div>
          <div
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-[var(--left)] transition-all duration-200"
            style={{ "--left": `${progress}%` }}
          >
            <div className="p-2 bg-yellow-500 rounded-full shadow-lg">
              <Plane className="w-4 h-4 text-white rotate-45" />
            </div>
          </div>
        </div>

        {/* Status text */}
        <p className="text-white/80 text-sm mb-4">{status}</p>

        {/* Circular Loader */}
        <div className="relative w-10 h-10 mb-6 animate-pulse">
          <svg className="w-full h-full -rotate-90">
            <circle
              cx="20"
              cy="20"
              r="18"
              stroke="white"
              strokeOpacity="0.2"
              strokeWidth="4"
              fill="transparent"
            />
            <circle
              cx="20"
              cy="20"
              r="18"
              stroke="orange"
              strokeWidth="4"
              fill="transparent"
              strokeDasharray="113.1"
              strokeDashoffset={113.1 - (113.1 * progress) / 100}
              className="transition-all duration-300"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <Loader2 className="w-4 h-4 text-white animate-spin" />
          </div>
        </div>

        <p className="text-white text-sm mb-6">{progress}% Complete</p>

        {/* CTA Button and Need Help message */}
        <div className="flex flex-col justify-between items-center flex-grow w-full mt-auto">
          <div className="text-center mt-4">
            <button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-red-600 hover:to-yellow-400 text-white font-semibold py-3 px-8 rounded-xl shadow-lg flex items-center gap-3 transition-all duration-300 transform hover:scale-105">
              <span className="text-lg">The Final Next Step</span>
              <ArrowRight className="w-4 h-4 animate-pulse" />
            </button>

            {/* Need Help CTA */}
            <p className="mt-6 text-white text-sm">
              Need Help?{" "}
              <span className="font-semibold">{`Call us now at ${phoneNumber}`}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
