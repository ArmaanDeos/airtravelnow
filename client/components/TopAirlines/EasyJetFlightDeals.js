import FlightDeals from "./FlightDeals";

const EasyJetFlightDeals = () => {
  const deals = [
    {
      origin: "London",
      destination: "Amsterdam",
      price: 60,
      dateRange: "10 May - 15 May",
    },
    {
      origin: "London",
      destination: "Barcelona",
      price: 75,
      dateRange: "12 May - 19 May",
    },
    {
      origin: "London",
      destination: "Berlin",
      price: 85,
      dateRange: "5 June - 12 June",
    },
    {
      origin: "London",
      destination: "Rome",
      price: 95,
      dateRange: "18 May - 25 May",
    },
    {
      origin: "London",
      destination: "Lisbon",
      price: 80,
      dateRange: "20 June - 27 June",
    },
    {
      origin: "London",
      destination: "Nice",
      price: 70,
      dateRange: "15 May - 22 May",
    },
    {
      origin: "London",
      destination: "Prague",
      price: 90,
      dateRange: "1 July - 8 July",
    },
    {
      origin: "London",
      destination: "Budapest",
      price: 85,
      dateRange: "10 July - 17 July",
    },
    {
      origin: "London",
      destination: "Athens",
      price: 100,
      dateRange: "5 Aug - 12 Aug",
    },
  ];

  return (
    <FlightDeals
      airline="EasyJet"
      origin="London"
      deals={deals}
      buttonColor="bg-[#ff6600]"
    />
  );
};

export default EasyJetFlightDeals;
