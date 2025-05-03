const TopAirlinesAndDestinations = () => {
  const airlines = [
    "Virgin Atlantic",
    "Emirates",
    "Qatar Airways",
    "Singapore Airlines",
    "Lufthansa",
    "American Airlines",
    "British Airways",
    "Air France",
    "Cathay Pacific",
    "Delta Airlines",
  ];

  const destinations = [
    "Flights to New York",
    "Flights to London",
    "Flights to Tokyo",
    "Flights to Paris",
    "Flights to Sydney",
    "Flights to Dubai",
    "Flights to Rome",
    "Flights to Bangkok",
    "Flights to Barcelona",
    "Flights to Cape Town",
  ];

  return (
    <section className="py-12 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Top Airlines */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Top Airlines
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {airlines.map((airline, index) => (
              <div
                key={index}
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 py-4 px-4 rounded-md shadow-sm font-medium text-center transition"
              >
                {airline}
              </div>
            ))}
          </div>
        </div>

        {/* Top Destinations */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Top Destinations
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {destinations.map((destination, index) => (
              <div
                key={index}
                className="bg-blue-50 hover:bg-blue-100 text-blue-800 py-4 px-4 rounded-md shadow-sm font-medium text-center transition"
              >
                {destination}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopAirlinesAndDestinations;
