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

      {/* Menu banner photo — replace with a wide food-spread or pizza shot */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <img
          src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=1400&q=80"
          alt="Stone oven pizza and fresh pasta spread"
          className="w-full h-64 object-cover rounded-2xl"
        />
      </div>

      <FullMenu />
    </main>
  );
}
