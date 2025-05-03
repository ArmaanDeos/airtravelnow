import FlightDeals from "./FlightDeals";

const EmiratesFlightDeals = () => {
  const deals = [
    {
      origin: "Dubai",
      destination: "London",
      price: 420,
      dateRange: "10 May - 17 May",
    },
    {
      origin: "Dubai",
      destination: "New York",
      price: 720,
      dateRange: "15 May - 22 May",
    },
    {
      origin: "Dubai",
      destination: "Sydney",
      price: 890,
      dateRange: "5 June - 15 June",
    },
    {
      origin: "Dubai",
      destination: "Mumbai",
      price: 210,
      dateRange: "12 May - 18 May",
    },
    {
      origin: "Dubai",
      destination: "Johannesburg",
      price: 460,
      dateRange: "1 July - 8 July",
    },
    {
      origin: "Dubai",
      destination: "Paris",
      price: 430,
      dateRange: "20 June - 27 June",
    },
    {
      origin: "Dubai",
      destination: "Los Angeles",
      price: 780,
      dateRange: "8 July - 15 July",
    },
    {
      origin: "Dubai",
      destination: "Singapore",
      price: 390,
      dateRange: "10 Aug - 17 Aug",
    },
    {
      origin: "Dubai",
      destination: "Istanbul",
      price: 270,
      dateRange: "22 May - 29 May",
    },
  ];

  return (
    <FlightDeals
      airline="Emirates"
      origin="Dubai"
      deals={deals}
      buttonColor="bg-[#d71920]"
    />
  );
};

export default EmiratesFlightDeals;
