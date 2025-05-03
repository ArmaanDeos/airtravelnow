import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import AirlinesBanner from "@/components/TopAirlines/AirlinesBanner";
import AirlinesContent from "@/components/TopAirlines/AirlinesContent";
import MobileBanner from "@/components/TopAirlines/MobileBanner";
import KLMFlightDeals from "@/components/TopAirlines/KLMFlightDeals";
import TopAirlinesAndDestinations from "@/components/TopAirlines/TopAirlinesDestination";

// ✅ Metadata for SEO
export const metadata = {
  title: "KLM Royal Dutch Airlines | Flights to Amsterdam & Worldwide",
  description:
    "Book KLM flights to top international destinations. Enjoy exceptional Dutch service, modern aircraft, and affordable fares with KLM Royal Dutch Airlines.",
};

const KLMPage = () => {
  return (
    <div className="">
      <div className="hidden md:block">
        <Navbar />
      </div>
      <MobileBanner
        title="KLM Reservations Desk"
        buttonBg="bg-[#003DA5]"
        headerBg="bg-[#003DA5]"
        ctaBg="bg-[#003DA5]"
        phoneBoxBg="bg-[#003DA5]"
      />
      <AirlinesBanner
        backgroundImage="/images/airlines/klm.jpg"
        title="Discover the World with KLM Royal Dutch Airlines"
      />
      <Services />
      <KLMFlightDeals />
      <AirlinesContent
        airlineName="KLM Royal Dutch Airlines"
        phoneNumber="0-800-333-4444"
      />
      <TopAirlinesAndDestinations />
      <Footer />
    </div>
  );
};

export default KLMPage;
