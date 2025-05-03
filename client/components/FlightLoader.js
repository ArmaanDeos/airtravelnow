"use client";

import { PlaneTakeoff, Loader2, PhoneCall } from "lucide-react";

export default function FlightSearchLoader() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-50 px-4">
      {/* Floating Plane Icon */}
      <div className="animate-float mb-6">
        <PlaneTakeoff className="w-14 h-14 text-primary-red drop-shadow-lg" />
      </div>

      {/* Typing Heading */}
      <h1 className="text-3xl md:text-5xl font-extrabold text-primary-blue mb-4 tracking-tight relative">
        <span className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-primary-blue pr-4">
          Searching flights for you...
        </span>
      </h1>

      {/* Loader Spinner */}
      <div className="mb-8">
        <Loader2 className="w-16 h-16 text-primary-blue animate-spin drop-shadow-md" />
        <p className="mt-4 text-gray-600 text-lg font-medium">
          Finding best prices and availability...
        </p>
      </div>

      {/* CTA Contact Box */}
      <div className="bg-gradient-to-r from-primary-red to-red-600 text-white px-6 py-4 rounded-2xl shadow-xl flex items-center gap-4 hover:scale-105 transition-all duration-300">
        <PhoneCall className="w-6 h-6 animate-pulse" />
        <div>
          <p className="text-sm md:text-base">Need help with your booking?</p>
          <p className="text-lg md:text-xl font-bold">
            Call Now: +1 (800) 123-4567
          </p>
        </div>
      </div>
    </div>
  );
}
