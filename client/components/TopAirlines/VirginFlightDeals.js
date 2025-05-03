import FlightDeals from "./FlightDeals";

const VirginFlightDeals = () => {
  const deals = [
    {
      origin: "London",
      destination: "New York",
      price: 320,
      dateRange: "12 May - 19 May",
    },
    {
      origin: "London",
      destination: "Dubai",
      price: 275,
      dateRange: "5 June - 12 June",
    },
    {
      origin: "London",
      destination: "Paris",
      price: 110,
      dateRange: "10 May - 15 May",
    },
    {
      origin: "London",
      destination: "Tokyo",
      price: 600,
      dateRange: "20 July - 30 July",
    },
    {
      origin: "London",
      destination: "Rome",
      price: 150,
      dateRange: "18 May - 25 May",
    },
    {
      origin: "London",
      destination: "Toronto",
      price: 350,
      dateRange: "8 June - 15 June",
    },
    {
      origin: "London",
      destination: "Bangkok",
      price: 420,
      dateRange: "1 Aug - 10 Aug",
    },
    {
      origin: "London",
      destination: "Cape Town",
      price: 510,
      dateRange: "12 Sept - 22 Sept",
    },
    {
      origin: "London",
      destination: "Barcelona",
      price: 135,
      dateRange: "15 May - 22 May",
    },
  ];

  return (
    <FlightDeals
      airline="Virgin Atlantic"
      origin="London"
      deals={deals}
      buttonColor="bg-[#da0530]"
    />
  );
};

export default VirginFlightDeals;
