import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import ImagePlaceholder from "../components/ImagePlaceholder";
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

      {/* Menu banner photo — replace with a wide food-spread or pizza shot */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <ImagePlaceholder
          label="Stone Oven Pizza & Fresh Pasta Spread"
          sublabel="Wide food photo — replace with actual kitchen/food shot"
          className="h-64"
        />
      </div>

      <FullMenu />
    </main>
  );
}
