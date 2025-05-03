"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plane, Hotel, Palmtree } from "lucide-react";
import FlightSearch from "../FlightSearchForm";
import HotelSearch from "../Forms/HotelSearchForm";
import VacationSearch from "../Forms/VacationSearchForm";

const AirlinesBanner = ({ backgroundImage, title, subtitle, children }) => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black/40 z-0" />
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24 text-center">
        <div className="max-w-6xl mx-auto mt-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white font-medium mb-6 md:mb-8">
            {subtitle}
          </p>
          {children && <div className="mt-6">{children}</div>}
          {/* Tabs */}
          <div className="hidden md:block">
            <Tabs defaultValue="flights">
              {/* Tabs List (Responsive) */}
              <TabsList className="bg-white/90 backdrop-blur-md rounded-none shadow-md px-2 py-1 flex flex-wrap gap-2 justify-start md:justify-center ">
                <TabsTrigger
                  value="flights"
                  className="flex items-center gap-2 px-4 py-2 rounded-none text-sm font-semibold text-gray-700 hover:bg-primary-blue hover:text-white transition-all duration-300 data-[state=active]:bg-primary-red data-[state=active]:text-white"
                >
                  <Plane className="w-4 h-4" />
                  Flights
                </TabsTrigger>
                <TabsTrigger
                  value="hotels"
                  className="flex items-center gap-2 px-4 py-2 rounded-none text-sm font-semibold text-gray-700 hover:bg-primary-blue hover:text-white transition-all duration-300 data-[state=active]:bg-primary-red data-[state=active]:text-white"
                >
                  <Hotel className="w-4 h-4" />
                  Hotels
                </TabsTrigger>
                <TabsTrigger
                  value="vacations"
                  className="flex items-center gap-2 px-4 py-2 rounded-none text-sm font-semibold text-gray-700 hover:bg-primary-blue hover:text-white transition-all duration-300 data-[state=active]:bg-primary-red data-[state=active]:text-white"
                >
                  <Palmtree className="w-4 h-4" />
                  Vacations
                </TabsTrigger>
              </TabsList>

              {/* Tab Content */}
              <TabsContent value="flights">
                <FlightSearch />
              </TabsContent>
              <TabsContent value="hotels">
                <HotelSearch />
              </TabsContent>
              <TabsContent value="vacations">
                <VacationSearch />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirlinesBanner;
