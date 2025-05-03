import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import AirlinesBanner from "@/components/TopAirlines/AirlinesBanner";
import AirlinesContent from "@/components/TopAirlines/AirlinesContent";
import BritishFlightDeals from "@/components/TopAirlines/BritishFlightDeals";
import MobileBanner from "@/components/TopAirlines/MobileBanner";
import TopAirlinesAndDestinations from "@/components/TopAirlines/TopAirlinesDestination";

// ✅ Metadata for SEO
export const metadata = {
  title: "British Airways | Book Cheap Flights to Europe & Beyond",
  description:
    "Book your flights with British Airways to top destinations in Europe, North America, and beyond. Experience world-class service and comfort with British Airways reservations.",
};

const BritishAirwaysPage = () => {
  return (
    <div className="">
      <div className="hidden md:block">
        <Navbar />
      </div>
      <MobileBanner
        title="British Airways Reservations Desk"
        buttonBg="bg-[#003b5c]"
        headerBg="bg-[#003b5c]"
        ctaBg="bg-[#003b5c]"
        phoneBoxBg="bg-[#003b5c]"
      />
      <AirlinesBanner
        backgroundImage="/images/airlines/british-airways.jpg"
        title="Fly to Europe, North America, and more with British Airways"
      />
      <Services />
      <BritishFlightDeals />
      <AirlinesContent
        airlineName="British Airways"
        phoneNumber="0-800-123-9876"
      />
      <TopAirlinesAndDestinations />
      <Footer />
    </div>
  );
};

export default BritishAirwaysPage;
