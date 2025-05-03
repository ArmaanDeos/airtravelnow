import FlightDeals from "./FlightDeals";

const BritishFlightDeals = () => {
  const deals = [
    {
      origin: "London",
      destination: "New York",
      price: 340,
      dateRange: "12 May - 19 May",
    },
    {
      origin: "London",
      destination: "Dubai",
      price: 300,
      dateRange: "5 June - 12 June",
    },
    {
      origin: "London",
      destination: "Paris",
      price: 115,
      dateRange: "10 May - 15 May",
    },
    {
      origin: "London",
      destination: "Tokyo",
      price: 580,
      dateRange: "20 July - 30 July",
    },
    {
      origin: "London",
      destination: "Rome",
      price: 160,
      dateRange: "18 May - 25 May",
    },
    {
      origin: "London",
      destination: "Toronto",
      price: 370,
      dateRange: "8 June - 15 June",
    },
    {
      origin: "London",
      destination: "Bangkok",
      price: 440,
      dateRange: "1 Aug - 10 Aug",
    },
    {
      origin: "London",
      destination: "Cape Town",
      price: 520,
      dateRange: "12 Sept - 22 Sept",
    },
    {
      origin: "London",
      destination: "Barcelona",
      price: 140,
      dateRange: "15 May - 22 May",
    },
  ];

  return (
    <FlightDeals
      airline="British Airways"
      origin="London"
      deals={deals}
      buttonColor="bg-[#003b5c]"
    />
  );
};

export default BritishFlightDeals;
