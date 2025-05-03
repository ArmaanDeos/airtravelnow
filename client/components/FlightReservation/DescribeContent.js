import Image from "next/image";

const DescribeContent = () => {
  return (
    <section className="py-16 px-5 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-primary-red uppercase mb-12 tracking-wide">
          Cheap Flight Tickets & Airline Reservation with AirTravelNow
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6 text-gray-800 text-lg leading-relaxed">
            <p>
              AirTravelNow is your trusted platform for hassle-free airline
              reservation and flight booking. Whether you&apos;re looking for
              cheap flight tickets, last-minute airfare, or the best plane
              tickets deals, our smart search tools bring you unbeatable value.
            </p>

            <p>
              With a focus on simplicity and savings, AirTravelNow lets you book
              both domestic and international flights tickets quickly and
              securely. We compare major carriers to offer you the best options
              for airline tickets booking with real-time availability.
            </p>

            <p>
              Our platform ensures your flight ticket booking experience is
              smooth from start to finish. Have questions or need help? Reach
              out to our airline phone number or airline customer care number
              anytime—support is available 24/7.
            </p>

            <p>
              Planning a quick weekend trip, a long-haul international journey,
              or group travel? AirTravelNow makes air ticket booking and flight
              reservation flexible, affordable, and fast—without the stress.
            </p>

            <p>
              From top airlines like Emirates, Qatar Airways, and American
              Airlines to online platforms like booking com flights, we partner
              with the best to deliver you great deals on airline tickets. If
              you&apos;re searching for cheap flights tickets or want to explore
              premium fare options, we’ve got it all.
            </p>

            <p className="font-semibold text-gray-900">
              Explore more and spend less with AirTravelNow. Your destination is
              just one flight ticket away.
            </p>

            <div>
              <h2 className="text-2xl font-bold text-primary-red mb-3">
                Easy Flight Booking with 24/7 Support
              </h2>
              <p>
                We’re committed to giving you a seamless flight ticket booking
                online experience. Whether it’s rescheduling, cancellations, or
                customizations, our support team is here for you.
              </p>
              <p className="mt-3">
                Have questions? Call our airline phone number to speak with our
                friendly customer care team. From finding cheap airline tickets
                to securing the right itinerary, we help make your travel plans
                smooth and affordable.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary-red mb-3">
                Group & International Flights Tickets Made Simple
              </h2>
              <p>
                AirTravelNow makes group airline reservations and international
                flights tickets easy to book and manage. Whether it&apos;s a
                family trip or a corporate retreat, we tailor solutions to your
                needs.
              </p>
              <p className="mt-3">
                Get access to discounted flight ticket packages, flight
                reservation experts, and the best cheap plane tickets for your
                next adventure.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <Image
              src="/images/red-umb/travel-deals.png"
              width={500}
              height={500}
              alt="Travel Deals"
              className="rounded-xl shadow-md w-full h-auto object-cover hidden sm:block"
            />
          </div>
        </div>

        {/* Bottom Image */}
        <div className="mt-5">
          <Image
            src="/images/red-umb/flight-reservations.webp"
            width={1200}
            height={600}
            alt="Flight Reservation"
            className="rounded-xl shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default DescribeContent;
