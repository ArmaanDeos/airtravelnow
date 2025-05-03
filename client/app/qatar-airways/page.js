import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import AirlinesBanner from "@/components/TopAirlines/AirlinesBanner";
import AirlinesContent from "@/components/TopAirlines/AirlinesContent";
import MobileBanner from "@/components/TopAirlines/MobileBanner";
import QatarFlightDeals from "@/components/TopAirlines/QatarAirwaysFlightDeals";
import TopAirlinesAndDestinations from "@/components/TopAirlines/TopAirlinesDestination";

// ✅ Metadata for SEO
export const metadata = {
  title: "Qatar Airways | Book Flights to Middle East, Asia, & Beyond",
  description:
    "Book your flights with Qatar Airways and enjoy world-class service, premium comfort, and great fares to top destinations worldwide. Cheap airline tickets available now.",
};

const QatarAirwaysPage = () => {
  return (
    <div className="">
      <div className="hidden md:block">
        <Navbar />
      </div>
      <MobileBanner
        title="Qatar Airways Reservations Desk"
        buttonBg="bg-[#5c0a2c]"
        headerBg="bg-[#5c0a2c]"
        ctaBg="bg-[#5c0a2c]"
        phoneBoxBg="bg-[#5c0a2c]"
      />
      <AirlinesBanner
        backgroundImage="/images/airlines/qatar-airways.jpeg"
        title="Experience Award-Winning Service with Qatar Airways Flights"
      />
      <Services />
      <QatarFlightDeals />
      <AirlinesContent
        airlineName="Qatar Airways"
        phoneNumber="0-800-700-9876"
      />
      <TopAirlinesAndDestinations />
      <Footer />
    </div>
  );
};

export default QatarAirwaysPage;
