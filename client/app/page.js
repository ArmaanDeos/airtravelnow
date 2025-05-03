import BestSellingFlights from "@/components/BestSellingFlights";
import ExclusiveOffer from "@/components/ExclusiveOffer";
import FlightSearchLoader from "@/components/FlightLoader";
import FlightSearch from "@/components/FlightSearchForm";
import Footer from "@/components/Footer";
import HotelSearch from "@/components/Forms/HotelSearchForm";
import VacationSearch from "@/components/Forms/VacationSearchForm";
import HeroBanner from "@/components/HeroBanner";
import Loader from "@/components/LoadingPage";
import Navbar from "@/components/Navbar";

import Services from "@/components/Services";
import TopDestination from "@/components/TopDestination";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Hotel, Palmtree, Plane } from "lucide-react";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroBanner />

      {/* Mobile Search Form - Shows below banner on small screens */}
      <div className="block md:hidden bg-white py-6 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="flights">
            <TabsList className="bg-white/90 backdrop-blur-md rounded-lg shadow-md px-2 py-1 flex gap-2 justify-center mx-auto mb-6">
              {/* <TabsTrigger
                value="flights"
                className="flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold text-gray-700 hover:bg-primary-blue hover:text-white transition-all duration-300 data-[state=active]:bg-primary-red data-[state=active]:text-white"
              >
                <Plane className="w-4 h-4" />
                Flights
              </TabsTrigger>
              <TabsTrigger
                value="hotels"
                className="flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold text-gray-700 hover:bg-primary-blue hover:text-white transition-all duration-300 data-[state=active]:bg-primary-red data-[state=active]:text-white"
              >
                <Hotel className="w-4 h-4" />
                Hotels
              </TabsTrigger>
              <TabsTrigger
                value="vacations"
                className="flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold text-gray-700 hover:bg-primary-blue hover:text-white transition-all duration-300 data-[state=active]:bg-primary-red data-[state=active]:text-white"
              >
                <Palmtree className="w-4 h-4" />
                Vacations
              </TabsTrigger> */}
            </TabsList>

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
      <Services />
      <TopDestination />
      <BestSellingFlights />
      <ExclusiveOffer />
      {/* <FlightSearchLoader /> */}
      <Footer />
    </>
  );
};

export default Home;
