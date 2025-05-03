import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import AirlinesBanner from "@/components/TopAirlines/AirlinesBanner";
import AirlinesContent from "@/components/TopAirlines/AirlinesContent";
import MobileBanner from "@/components/TopAirlines/MobileBanner";
import TopAirlinesAndDestinations from "@/components/TopAirlines/TopAirlinesDestination";
import VirginFlightDeals from "@/components/TopAirlines/VirginFlightDeals";

// ✅ Metadata export for dynamic head tags
export const metadata = {
  title: "Virgin Atlantic Flights | Book Cheap Tickets & Reservations",
  description:
    "Book your Virgin Atlantic flights to the UK, Europe & North America. Get exclusive deals & top-notch service with Virgin Atlantic reservations.",
};

const VirginAtlanticPage = () => {
  return (
    <div className="">
      <div className="hidden md:block">
        <Navbar />
      </div>
      <MobileBanner
        title="Virgin Reservations Desk"
        buttonBg="bg-red-600"
        headerBg="bg-red-600"
        ctaBg="bg-red-600"
        phoneBoxBg="bg-red-600"
      />

      <AirlinesBanner
        backgroundImage="/images/airlines/virgin-atlantic.jpg"
        title="Take off to the UK and beyond with Virgin Atlantic"
      />
      <Services />
      <VirginFlightDeals />
      <AirlinesContent
        airlineName="Virgin Atlantic"
        phoneNumber="0-800-058-4202"
      />
      <TopAirlinesAndDestinations />
      <Footer />
    </div>
  );
};

export default VirginAtlanticPage;
