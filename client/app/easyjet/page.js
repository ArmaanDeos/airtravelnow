import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import AirlinesBanner from "@/components/TopAirlines/AirlinesBanner";
import AirlinesContent from "@/components/TopAirlines/AirlinesContent";
import EasyJetFlightDeals from "@/components/TopAirlines/EasyJetFlightDeals";
import MobileBanner from "@/components/TopAirlines/MobileBanner";
import TopAirlinesAndDestinations from "@/components/TopAirlines/TopAirlinesDestination";

// ✅ Metadata for SEO
export const metadata = {
  title: "EasyJet | Cheap Flights to Europe & Popular Holiday Destinations",
  description:
    "Book cheap flights with EasyJet to top European destinations. Get unbeatable airfare deals and experience budget-friendly travel with EasyJet flight reservations.",
};

const EasyJetPage = () => {
  return (
    <div className="">
      <div className="hidden md:block">
        <Navbar />
      </div>
      <MobileBanner
        title="EasyJet Reservations Desk"
        buttonBg="bg-[#ff6600]"
        headerBg="bg-[#ff6600]"
        ctaBg="bg-[#ff6600]"
        phoneBoxBg="bg-[#ff6600]"
      />
      <AirlinesBanner
        backgroundImage="/images/airlines/easyjet.png"
        title="Fly to Europe & Beyond with Budget-Friendly EasyJet Flights"
      />
      <Services />
      <EasyJetFlightDeals />
      <AirlinesContent airlineName="EasyJet" phoneNumber="0-800-555-1234" />
      <TopAirlinesAndDestinations />
      <Footer />
    </div>
  );
};

export default EasyJetPage;
