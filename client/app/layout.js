import { Roboto, WindSong, Poppins } from "next/font/google";
import "./global.css";
import FixedButton from "@/components/FixedButton";
import Providers from "./provider";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

const windSong = WindSong({
  variable: "--font-windsong",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "AirTravelNow | Cheap Flight Tickets & Airline Reservations Online",
  description:
    "AirTravelNow offers cheap flight tickets, airline reservations, and exclusive international flight deals. Book online or call our travel helpline at 0800 058 4202 for fast and secure booking.",
  keywords: [
    "AirTravelNow",
    "Airline Reservation",
    "Flight Reservation",
    "cheap flight tickets",
    "airline phone number",
    "flight booking",
    "airline tickets booking",
    "discount flights",
    "air ticket booking",
    "cheap airline tickets",
    "cheap plane tickets",
    "book flights online",
    "international flight tickets",
    "flight deals today",
    "best airfare deals",
    "airline customer care number",
    "airfare discounts",
    "budget travel flights",
  ],
  openGraph: {
    title: "AirTravelNow – Book Cheap Flights & Airline Tickets Online",
    description:
      "Get cheap airline tickets and top international flight deals at AirTravelNow. Call 0800 058 4202 or book online for the best prices.",
    url: "https://airtravelnow.online",
    images: [
      {
        url: "/seo-image.jpg",
        width: 1200,
        height: 630,
        alt: "AirTravelNow Cheap Airline Tickets",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@airtravelnow",
    title: "AirTravelNow – Affordable Flight Booking & Reservations",
    description:
      "AirTravelNow provides budget-friendly flight reservations and airline ticket deals. Book online or call 0800 058 4202 today.",
    images: ["/seo-image.jpg"],
  },
  metadataBase: new URL("https://airtravelnow.online"),
  alternates: {
    canonical: "https://airtravelnow.online",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="author" content="AirTravelNow" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/images/red-umb/logo-dark.png" />

        {/* Call Generative Tags */}
        <meta name="format-detection" content="telephone=yes" />
        <meta name="telephone" content="0800 058 4202" />

        {/* JSON-LD Structured Data for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              name: "AirTravelNow",
              url: "https://airtravelnow.online",
              telephone: "0800 058 4202",
              description:
                "AirTravelNow is your trusted partner for affordable airline tickets, cheap flights, and international flight reservations. Call our 24/7 travel hotline for assistance.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "UK",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "0800 058 4202",
                contactType: "Customer Service",
                areaServed: "UK",
                availableLanguage: ["English"],
              },
            }),
          }}
        />
      </head>
      <body
        className={`${roboto.variable} ${windSong.variable} ${poppins.variable} antialiased`}
      >
        <Providers>{children}</Providers>
        <div className="hidden md:block">
          <FixedButton />
        </div>
      </body>
    </html>
  );
}
