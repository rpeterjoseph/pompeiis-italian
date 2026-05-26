import type { Metadata } from "next";
import { Oranienbaum, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const oranienbaum = Oranienbaum({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-oranienbaum",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Pompeii's Pizzeria & Italian Eatery",
    default: "Pompeii's Pizzeria & Italian Eatery | Port Huron, MI",
  },
  description:
    "The best Italian food in the Blue Water Area. Family-owned since 2002. Stone-oven pizza, homemade pasta, catering & a full bar. 1120 Military St, Port Huron, MI · (810) 966-3400.",
  keywords:
    "Italian restaurant Port Huron, pizza Port Huron, pasta Port Huron, Pompeii's Italian, Blue Water Area restaurant, family restaurant Michigan, catering Port Huron, stone oven pizza",
  openGraph: {
    title: "Pompeii's Pizzeria & Italian Eatery",
    description:
      "The best Italian food in the Blue Water Area. Family-owned since 2002. Stone-oven pizza, homemade pasta & a full bar in Port Huron, MI.",
    type: "website",
    locale: "en_US",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Pompeii's Pizzeria & Italian Eatery",
  description:
    "The best Italian food in the Blue Water Area. Family-owned since 2002 serving stone-oven pizza, homemade pasta, and more in Port Huron, MI.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1120 Military St",
    addressLocality: "Port Huron",
    addressRegion: "MI",
    postalCode: "48060",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 42.9703,
    longitude: -82.4249,
  },
  telephone: "+18109663400",
  email: "pompeiis@sbcglobal.net",
  servesCuisine: ["Italian", "Pizza", "Pasta", "Seafood"],
  priceRange: "$$-$$$",
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Credit Card",
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday"], opens: "11:00", closes: "21:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Thursday"], opens: "11:00", closes: "22:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Friday", "Saturday"], opens: "11:00", closes: "23:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Sunday"], opens: "12:00", closes: "21:00" },
  ],
  acceptsReservations: "True",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.5",
    bestRating: "5",
    ratingCount: "179",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${oranienbaum.variable} ${lato.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body style={{ fontFamily: "var(--font-lato), Lato, sans-serif" }}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
