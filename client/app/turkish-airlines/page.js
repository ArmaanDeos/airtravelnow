import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import AirlinesBanner from "@/components/TopAirlines/AirlinesBanner";
import AirlinesContent from "@/components/TopAirlines/AirlinesContent";
import MobileBanner from "@/components/TopAirlines/MobileBanner";
import TopAirlinesAndDestinations from "@/components/TopAirlines/TopAirlinesDestination";
import TurkishFlightDeals from "@/components/TopAirlines/TurkishFlightDeals";

// ✅ Metadata for SEO
export const metadata = {
  title: "Turkish Airlines | Book Cheap Tickets to Europe & Asia",
  description:
    "Fly with Turkish Airlines to top destinations in Europe, Asia, and beyond. Discover award-winning service, comfort, and affordable fares with Turkish Airlines reservations.",
};

const TurkishAirlinesPage = () => {
  return (
    <div className="">
      <div className="hidden md:block">
        <Navbar />
      </div>

      <MobileBanner
        title="Turkish Airlines Reservations Desk"
        buttonBg="bg-red-700"
        headerBg="bg-red-700"
        ctaBg="bg-red-700"
        phoneBoxBg="bg-red-700"
      />

      <AirlinesBanner
        backgroundImage="/images/airlines/turkish-airlines.jpg"
        title="Fly to Europe, Asia, and beyond with Turkish Airlines"
      />

      <Services />
      <TurkishFlightDeals />
      <AirlinesContent
        airlineName="Turkish Airlines"
        phoneNumber="0-800-123-4567"
      />
      <TopAirlinesAndDestinations />
      <Footer />
    </div>
  );
};

export default TurkishAirlinesPage;
