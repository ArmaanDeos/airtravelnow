import FlightDeals from "./FlightDeals";

const QatarFlightDeals = () => {
  const deals = [
    {
      origin: "Doha",
      destination: "New York",
      price: 550,
      dateRange: "12 May - 19 May",
    },
    {
      origin: "Doha",
      destination: "London",
      price: 480,
      dateRange: "18 May - 25 May",
    },
    {
      origin: "Doha",
      destination: "Bangkok",
      price: 420,
      dateRange: "5 June - 12 June",
    },
    {
      origin: "Doha",
      destination: "Sydney",
      price: 920,
      dateRange: "10 July - 20 July",
    },
    {
      origin: "Doha",
      destination: "Paris",
      price: 470,
      dateRange: "1 June - 8 June",
    },
    {
      origin: "Doha",
      destination: "Toronto",
      price: 610,
      dateRange: "15 June - 22 June",
    },
    {
      origin: "Doha",
      destination: "Mumbai",
      price: 310,
      dateRange: "5 July - 12 July",
    },
    {
      origin: "Doha",
      destination: "Istanbul",
      price: 350,
      dateRange: "20 June - 27 June",
    },
    {
      origin: "Doha",
      destination: "Singapore",
      price: 440,
      dateRange: "10 Aug - 17 Aug",
    },
  ];

  return (
    <FlightDeals
      airline="Qatar Airways"
      origin="Doha"
      deals={deals}
      buttonColor="bg-[#5c0a2c]"
    />
  );
};

export default QatarFlightDeals;
