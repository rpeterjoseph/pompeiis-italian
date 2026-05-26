const menuCategories = [
  {
    category: "Pizzas",
    emoji: "🍕",
    color: "#8B1A1A",
    items: [
      { name: "Classic Margherita", description: "Fresh tomato sauce, mozzarella, fresh basil" },
      { name: "Pepperoni Pizza", description: "Loaded with premium pepperoni & mozzarella" },
      { name: "BBQ Chicken Pizza", description: "Tangy BBQ sauce, grilled chicken, red onion" },
      { name: "Specialty Meat Pizza", description: "Sausage, pepperoni, ham, ground beef, bacon" },
      { name: "Vegetarian Supreme", description: "Garden-fresh veggies on zesty tomato sauce" },
    ],
  },
  {
    category: "Pasta",
    emoji: "🍝",
    color: "#5C6B2E",
    items: [
      { name: "Lasagna", description: "Classic layered lasagna with meat sauce & ricotta" },
      { name: "Pasta Alfredo", description: "Creamy house-made Alfredo over your choice of pasta" },
      { name: "Ravioli", description: "Cheese-filled ravioli in marinara or Alfredo" },
      { name: "Manicotti", description: "Stuffed pasta shells baked in rich tomato sauce" },
      { name: "Spaghetti & Meatballs", description: "Classic spaghetti with hand-rolled meatballs" },
    ],
  },
  {
    category: "Appetizers",
    emoji: "🥖",
    color: "#C9A84C",
    items: [
      { name: "Garlic Cheese Bread", description: "Toasted bread loaded with garlic butter & cheese" },
      { name: "Bruschetta Bread", description: "Roma tomatoes, fresh basil, extra virgin olive oil" },
      { name: "Mozzarella Sticks", description: "Golden-fried with marinara dipping sauce" },
    ],
  },
  {
    category: "Entrées",
    emoji: "🍆",
    color: "#8B1A1A",
    items: [
      { name: "Eggplant Parmesan", description: "Breaded eggplant with marinara & melted mozzarella" },
      { name: "Chicken Parmesan", description: "Breaded chicken breast, marinara, melted cheese" },
      { name: "Italian Sub", description: "Stacked with Italian meats, provolone & peppers" },
    ],
  },
  {
    category: "Salads & Soups",
    emoji: "🥗",
    color: "#5C6B2E",
    items: [
      { name: "Garden Salad", description: "Fresh greens with house Italian dressing" },
      { name: "Caesar Salad", description: "Romaine, croutons, Parmesan, Caesar dressing" },
      { name: "Minestrone Soup", description: "Hearty vegetable soup — a daily house specialty" },
      { name: "Italian Wedding Soup", description: "Savory broth with mini meatballs & greens" },
    ],
  },
  {
    category: "Beverages",
    emoji: "🍷",
    color: "#C9A84C",
    items: [
      { name: "Wine Selection", description: "Red, white & rosé — ask your server for today's list" },
      { name: "Craft & Draft Beer", description: "Full selection including Redbridge gluten-free beer" },
      { name: "Cocktails & Spirits", description: "Full bar available — ask about our specialty drinks" },
    ],
  },
];

export default function Menu() {
  return (
    <section
      id="menu"
      className="py-20 bg-[#FDF6E3]"
      aria-label="Featured menu items"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[#8B1A1A] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Fresh & Homemade
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-[#2C2C2C] mb-4"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Our <span className="text-[#8B1A1A] italic">Menu</span>
          </h2>
          <div className="w-16 h-1 bg-[#C9A84C] mx-auto mb-5 rounded-full" />
          <p className="text-gray-600 max-w-xl mx-auto text-lg">
            Every item is made fresh in our kitchen. From classic pizzas to hearty pasta — there&apos;s
            something for the whole family.
          </p>
          <p className="mt-3 text-sm text-gray-500 italic">
            Ask about our daily specials. Full menu available in-store or by calling{" "}
            <a href="tel:+18109663400" className="text-[#8B1A1A] hover:underline font-medium">
              (810) 966-3400
            </a>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuCategories.map((cat) => (
            <div
              key={cat.category}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100"
            >
              {/* Card header */}
              <div
                className="px-6 py-4 flex items-center gap-3"
                style={{ backgroundColor: cat.color }}
              >
                <span className="text-2xl" role="img" aria-label={cat.category}>
                  {cat.emoji}
                </span>
                <h3
                  className="text-white font-bold text-lg"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  {cat.category}
                </h3>
              </div>

              {/* Items */}
              <ul className="px-6 py-4 space-y-4">
                {cat.items.map((item) => (
                  <li key={item.name} className="border-b border-gray-50 last:border-0 pb-3 last:pb-0">
                    <p className="font-semibold text-[#2C2C2C] text-sm">{item.name}</p>
                    <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-500 text-sm mb-4">
            This is a featured selection. For our full menu with pricing, call us or visit in person.
          </p>
          <a
            href="tel:+18109663400"
            className="inline-flex items-center gap-2 bg-[#8B1A1A] hover:bg-[#A52020] text-white font-semibold px-8 py-3 rounded-full transition-all duration-200 hover:-translate-y-0.5 shadow-md"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call for Full Menu
          </a>
        </div>
      </div>
    </section>
  );
}
