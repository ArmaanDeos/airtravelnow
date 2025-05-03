import BestSellingFlights from "@/components/BestSellingFlights";
import DescribeContent from "@/components/FlightReservation/DescribeContent";
import MobileFooter from "@/components/FlightReservation/MobileFooter";
import MobilePromo from "@/components/FlightReservation/MobilePromo";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import ExclusiveOffer from "@/components/ExclusiveOffer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Hotel, Palmtree, Plane } from "lucide-react";
import FlightSearch from "@/components/FlightSearchForm";
import HotelSearch from "@/components/Forms/HotelSearchForm";
import VacationSearch from "@/components/Forms/VacationSearchForm";

const FlightReservationPage = () => {
  return (
    <>
      <div className="hidden md:block">
        <Navbar />
      </div>
      <MobilePromo />
      <HeroBanner />
      <div className="block md:hidden mt-5">
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
      <Services />
      <BestSellingFlights />
      <ExclusiveOffer />
      <DescribeContent />
      <div className="block md:hidden">
        <MobileFooter />
      </div>
      <div className="hidden md:block">
        <Footer />
      </div>
    </>
  );
};

export default FlightReservationPage;
