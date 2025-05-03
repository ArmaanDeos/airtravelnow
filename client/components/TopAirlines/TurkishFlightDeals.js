import FlightDeals from "./FlightDeals";

const TurkishFlightDeals = () => {
  const deals = [
    {
      origin: "Istanbul",
      destination: "New York",
      price: 350,
      dateRange: "12 May - 19 May",
    },
    {
      origin: "Istanbul",
      destination: "Dubai",
      price: 290,
      dateRange: "5 June - 12 June",
    },
    {
      origin: "Istanbul",
      destination: "Paris",
      price: 120,
      dateRange: "10 May - 15 May",
    },
    {
      origin: "Istanbul",
      destination: "Tokyo",
      price: 650,
      dateRange: "20 July - 30 July",
    },
    {
      origin: "Istanbul",
      destination: "Rome",
      price: 170,
      dateRange: "18 May - 25 May",
    },
    {
      origin: "Istanbul",
      destination: "Toronto",
      price: 380,
      dateRange: "8 June - 15 June",
    },
    {
      origin: "Istanbul",
      destination: "Bangkok",
      price: 460,
      dateRange: "1 Aug - 10 Aug",
    },
    {
      origin: "Istanbul",
      destination: "Cape Town",
      price: 530,
      dateRange: "12 Sept - 22 Sept",
    },
    {
      origin: "Istanbul",
      destination: "Barcelona",
      price: 145,
      dateRange: "15 May - 22 May",
    },
  ];

  return (
    <FlightDeals
      airline="Turkish Airlines"
      origin="Istanbul"
      deals={deals}
      buttonColor="bg-[#e30b17]"
    />
  );
};

export default TurkishFlightDeals;
