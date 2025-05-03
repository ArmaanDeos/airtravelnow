"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const FlightDeals = ({
  airline = "Virgin",
  origin = "New York", // default origin
  deals,
  buttonColor = "bg-red-600",
}) => {
  const [lastUpdated, setLastUpdated] = useState("");

  useEffect(() => {
    const fixedTime = new Date("2025-04-17T21:35:00");
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };
    setLastUpdated(fixedTime.toLocaleString("en-US", options));
  }, []);

  return (
    <section className="py-10 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
          {airline} Airlines Flight Deals
        </h2>
        <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto mb-6">
          Explore unbeatable deals on {airline} Airlines flights from {origin},
          offering affordable fares to top destinations. Whether you&apos;re
          flying one-way or round trip, we’ve got special offers updated just
          for you.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {deals.map((deal, idx) => (
            <div
              key={idx}
              className="bg-white shadow-lg p-4 border border-gray-200 flex justify-between items-center"
            >
              {/* Left: Route + Date */}
              <div className="flex flex-col items-start text-left">
                <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2 mb-1">
                  {deal.origin} <span className="text-blue-500">✈️</span>{" "}
                  {deal.destination}
                </h3>
                <p className="text-sm text-gray-500">{deal.dateRange}</p>
              </div>

              {/* Right: Price + Button */}
              <div className="text-right flex flex-col items-end">
                <p className="text-lg font-bold text-green-700 mb-2">
                  £{deal.price}
                </p>
                <a
                  href="tel:0-800-058-4202"
                  className={`text-white ${buttonColor} py-1.5 px-4 text-sm font-medium hover:opacity-90 transition`}
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Terms and Conditions */}
      <div className="max-w-6xl mx-auto px-4 pb-10 mt-10">
        <p className="text-sm text-gray-700 text-center leading-relaxed">
          * Fares displayed on this Site are updated as of {lastUpdated} PM EST.
          They are for One Way or Round Trips as mentioned alongside. These
          include{" "}
          <Link href="/terms-conditions" className="text-primary-red underline">
            Our Service Fees
          </Link>{" "}
          and{" "}
          <Link href="/terms-conditions" className="text-primary-red underline">
            Taxes & Fees
          </Link>
          . Please read our{" "}
          <Link href="/terms-conditions" className="text-primary-red underline">
            Terms & Conditions
          </Link>{" "}
          carefully.
        </p>
      </div>
    </section>
  );
};

export default FlightDeals;
