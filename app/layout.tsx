import type { Metadata } from "next";
import { Oranienbaum, Lato } from "next/font/google";
import "./globals.css";

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
  title: "Pompeii's Pizzeria & Italian Eatery | Port Huron, MI",
  description:
    "Family-owned Italian restaurant in Port Huron, MI since 2002. Serving homemade pizza, pasta, lasagna, catering & more in the Blue Water Area. Call (810) 966-3400.",
  keywords:
    "Italian restaurant Port Huron, pizza Port Huron, pasta Port Huron, Pompeii's Italian, Blue Water Area restaurant, family restaurant Michigan, catering Port Huron",
  openGraph: {
    title: "Pompeii's Pizzeria & Italian Eatery",
    description:
      "Family-owned Italian restaurant in Port Huron, MI serving homemade pizza, pasta, lasagna & more since 2002.",
    type: "website",
    locale: "en_US",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Pompeii's Pizzeria & Italian Eatery",
  description:
    "Family-owned Italian restaurant in Port Huron, MI since 2002. Serving homemade-style pizza, pasta, lasagna & more in the Blue Water Area.",
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
  servesCuisine: ["Italian", "Pizza", "Pasta"],
  priceRange: "$$",
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Credit Card",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday"],
      opens: "11:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Thursday"],
      opens: "11:00",
      closes: "22:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday", "Saturday"],
      opens: "11:00",
      closes: "23:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday"],
      opens: "12:00",
      closes: "21:00",
    },
  ],
  acceptsReservations: "True",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.5",
    bestRating: "5",
    ratingCount: "200",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${oranienbaum.variable} ${lato.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body style={{ fontFamily: "var(--font-lato), Lato, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
