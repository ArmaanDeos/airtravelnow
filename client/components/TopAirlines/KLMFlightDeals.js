import FlightDeals from "./FlightDeals";

const KLMFlightDeals = () => {
  const deals = [
    {
      origin: "Amsterdam",
      destination: "New York",
      price: 510,
      dateRange: "12 May - 19 May",
    },
    {
      origin: "Amsterdam",
      destination: "Dubai",
      price: 440,
      dateRange: "1 June - 8 June",
    },
    {
      origin: "Amsterdam",
      destination: "Nairobi",
      price: 620,
      dateRange: "10 June - 20 June",
    },
    {
      origin: "Amsterdam",
      destination: "Delhi",
      price: 430,
      dateRange: "18 May - 25 May",
    },
    {
      origin: "Amsterdam",
      destination: "Toronto",
      price: 480,
      dateRange: "25 June - 2 July",
    },
    {
      origin: "Amsterdam",
      destination: "Tokyo",
      price: 740,
      dateRange: "5 July - 15 July",
    },
    {
      origin: "Amsterdam",
      destination: "Cape Town",
      price: 660,
      dateRange: "20 Aug - 30 Aug",
    },
    {
      origin: "Amsterdam",
      destination: "Rome",
      price: 160,
      dateRange: "15 May - 22 May",
    },
    {
      origin: "Amsterdam",
      destination: "Barcelona",
      price: 150,
      dateRange: "12 May - 19 May",
    },
  ];

  return (
    <FlightDeals
      airline="KLM Royal Dutch Airlines"
      origin="Amsterdam"
      deals={deals}
      buttonColor="bg-[#003DA5]"
    />
  );
};

export default KLMFlightDeals;
