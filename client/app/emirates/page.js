import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import AirlinesBanner from "@/components/TopAirlines/AirlinesBanner";
import AirlinesContent from "@/components/TopAirlines/AirlinesContent";
import MobileBanner from "@/components/TopAirlines/MobileBanner";
import EmiratesFlightDeals from "@/components/TopAirlines/EmiratesFlightDeals";
import TopAirlinesAndDestinations from "@/components/TopAirlines/TopAirlinesDestination";

// ✅ Metadata for SEO
export const metadata = {
  title: "Emirates | Fly Better with Emirates to the Middle East & Beyond",
  description:
    "Book your flights with Emirates and experience luxury travel, world-class service, and the best in-flight entertainment. Great deals to Dubai and global destinations.",
};

const EmiratesPage = () => {
  return (
    <div className="">
      <div className="hidden md:block">
        <Navbar />
      </div>
      <MobileBanner
        title="Emirates Reservations Desk"
        buttonBg="bg-[#d71920]"
        headerBg="bg-[#d71920]"
        ctaBg="bg-[#d71920]"
        phoneBoxBg="bg-[#d71920]"
      />
      <AirlinesBanner
        backgroundImage="/images/airlines/emirates.webp"
        title="Fly Better with Emirates – World-Class Comfort and Style"
      />
      <Services />
      <EmiratesFlightDeals />
      <AirlinesContent airlineName="Emirates" phoneNumber="0-800-444-5678" />
      <TopAirlinesAndDestinations />
      <Footer />
    </div>
  );
};

export default EmiratesPage;
