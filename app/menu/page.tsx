import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import FullMenu from "../components/FullMenu";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Full menu for Pompeii's Pizzeria & Italian Eatery in Port Huron, MI. Stone-oven pizzas, homemade pasta, calzones, seafood, veal, desserts & more.",
};

export default function MenuPage() {
  return (
    <main>
      <PageHero
        eyebrow="Fresh & Homemade Daily"
        title="Our Menu"
        subtitle="Stone-oven pizzas, homemade pasta, calzones, seafood, and more — all made fresh in our kitchen."
      />
      <FullMenu />
    </main>
  );
}
