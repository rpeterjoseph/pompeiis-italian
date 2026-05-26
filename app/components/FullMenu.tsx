import IncludedBanner from "./IncludedBanner";

type MenuItem = { name: string; description?: string; price?: string; badge?: string };
type MenuCategory = { id: string; label: string; color: string; items: MenuItem[] };

const menuData: MenuCategory[] = [
  {
    id: "appetizers",
    label: "Appetizers",
    color: "#8B1A1A",
    items: [
      { name: "Garlic Escargot", description: "8 jumbo escargot, fresh garlic and green onion simmered in real butter over house bread", price: "$9.95" },
      { name: "Bruschetta Bread", description: "Classic Italian bruschetta on toasted house bread", price: "$8.50" },
      { name: "Pepperoni Stix", description: "House dough pushed out, brushed with garlic butter, loaded with pepperoni and house blended cheeses", price: "$8.50" },
      { name: "Garlic Sautéed Shrimp", description: "8 fresh farm-raised shrimp seared tender in fresh garlic butter, served with house bread", price: "$10.50" },
      { name: "Cheesy Garlic Bread", price: "$6.95" },
      { name: "Spicy Andouille Sausage", description: "Fresh Italian andouille, red and green peppers and pepperoncini sautéed in house marinara", price: "$9.95" },
      { name: "Calamari Aosta", description: "Dusted calamari steaks flash fried with red onion, spinach, fresh basil in a white wine-garlic sauce with a hint of marinara", price: "$9.95" },
      { name: "Mama Lula's Meatballs with Meat Sauce", price: "$6.50" },
      { name: "Mama Lula's Meatballs Baked with Cheese", price: "$8.50" },
    ],
  },
  {
    id: "soups-salads",
    label: "Soups & Salads",
    color: "#5C6B2E",
    items: [
      { name: "Baked French Onion Soup", description: "Homemade French onion soup topped with croutons and three cheeses, baked to perfection", price: "$4.95" },
      { name: "Italian Chicken Florentine Soup", description: "Tomatoes, fresh vegetables, spinach and herbs simmered with chicken, served with a touch of pasta", price: "$4.50" },
      { name: "Endless Colossal Salad", description: "Fresh mixed greens and assorted seasoned vegetables hand tossed in our signature dressing", price: "$5.95" },
      { name: "Greek Dinner Salad", description: "Mixed greens, fresh vegetables, black olives, feta cheese and beets tossed in our signature dressing", price: "$9.50" },
      { name: "Antipasto Dinner Salad", description: "Fresh lettuce, tomatoes, black olives, green peppers, onions, ham, salami and mozzarella cheeses, tossed in house dressing", price: "$9.50" },
      { name: "The Olympian Steak Salad", description: "Steak, artichokes, red onion, fresh mushrooms, black olives, capers, spinach, garlic with mixed greens tossed in our homemade dressing", price: "$11.95" },
    ],
  },
  {
    id: "specialty-pizzas",
    label: "Specialty Pizzas",
    color: "#8B1A1A",
    items: [
      { name: "Pompeii's Pie", description: "Cheese, pepperoni, ham, bacon, Italian sausage, green peppers and onions", price: "$15.00+" },
      { name: "Chicken Broccoli Alfredo Pizza", description: "Alfredo sauce with broccoli, chicken breast and house cheeses", price: "$15.00+" },
      { name: "Papa Pepperoni", description: "Mega pepperoni buried in house cheeses and dusted with Parmesan", price: "$11.50+" },
      { name: "Veggie Pizza", description: "Green peppers, onions, mushrooms, black olives, hot pepper rings", price: "$13.50+" },
      { name: "Sicilian Pizza", description: "Light sauce, chopped garlic, fresh tomatoes, fresh basil", price: "$12.00+" },
      { name: "Mediterranean Veggie", description: "Olive oil, garlic, black olive, artichoke, capers, fresh mushroom, red onion, spinach, roasted red pepper, feta and house cheeses", price: "$15.00+" },
      { name: "Venetian Pizza", description: "Chicken, artichokes, mushrooms, roasted peppers with rosemary", price: "$15.00+" },
      { name: "Tuscan Pizza", description: "Thin crust brushed with butter and garlic, topped with olive oil, capers, spinach, ricotta and pizza cheeses", price: "$13.00+" },
      { name: "Southwest Chicken BBQ", description: "BBQ sauce, tender chicken breast, red onion, bacon, jalapeños and house cheeses", price: "$15.00+" },
    ],
  },
  {
    id: "calzones",
    label: "Calzones",
    color: "#C9A84C",
    items: [
      { name: "Classic Calzone", description: "Homemade pizza dough stuffed with your favorite pizza toppings, cheese and pizza sauce", price: "$9.50" },
      { name: "Chicken Broccoli Alfredo Calzone", description: "Seasoned chicken breast, fresh broccoli, homemade Alfredo sauce and pizza cheese", price: "$10.50" },
      { name: "Spaghetti & Meatball Calzone", description: "Pasta, homemade meatballs, homemade meat sauce and house blended cheeses", price: "$10.50", badge: "Fan Favorite" },
      { name: "Veggie Calzone", description: "Fresh mushrooms, green peppers, onions, hot pepper rings, black olives, pizza sauce and cheese", price: "$10.50" },
      { name: "Italian Calzone", description: "Ham, salami, Italian sausage, cheese, onions, green peppers and pizza sauce", price: "$10.50" },
      { name: "Meat Lovers Calzone", description: "Ham, bacon, Italian sausage, pepperoni and cheese with pizza sauce", price: "$10.50" },
    ],
  },
  {
    id: "house-grilles",
    label: "House Grilles",
    color: "#5C6B2E",
    items: [
      { name: "Chicken Ranch Club Grille", description: "Grilled chicken, bacon, our ranch, cheese, lettuce and tomato", price: "$9.50" },
      { name: "Italian Grille", description: "Ham, salami, Italian sausage, green peppers, onions, lettuce, tomatoes, our dressing grilled with house cheeses", price: "$9.50" },
      { name: "Meatball Grille", description: "Homemade meatballs, pizza cheeses, homemade meat sauce", price: "$9.50" },
      { name: "Chicken Bruschetta Grille", description: "Seasoned chicken breast, spinach, bruschetta mix, house cheeses and a hint of house dressing", price: "$9.50" },
      { name: "Mushroom & Roasted Red Pepper Grille", description: "Fresh mushroom, red onion, roasted red pepper, house dressing and cheeses", price: "$9.50" },
      { name: "BBQ Chicken Grille", description: "Fajita sliced chicken tossed with red onions, our own BBQ sauce and grilled with house cheeses", price: "$9.50" },
      { name: "Asiago Grille", description: "Italian sausage, tomato, red onion, banana peppers, house dressing and Asiago", price: "$9.50" },
      { name: "½ Grille & Crock of Soup", description: "Choice of grille and chicken florentine soup", price: "$8.95" },
    ],
  },
  {
    id: "lunch-specials",
    label: "Lunch Specials",
    color: "#8B1A1A",
    items: [
      { name: "Pasta Alfredo", description: "Your favorite pasta tossed in our signature Alfredo sauce", price: "$8.50" },
      { name: "Ravioli", description: "Cheese or meat filled ravioli, covered in one of our homemade sauces", price: "$7.95" },
      { name: "Pasta Carbonara", description: "Sautéed ham, bacon, fresh mushrooms and onions, tossed with choice of pasta in our homemade garlic cream sauce", price: "$9.50" },
      { name: "Personal Pizza", description: "Pepperoni, cheese and pizza sauce", price: "$5.50" },
      { name: "Spaghetti", description: "Full portion of our spaghetti with meat sauce", price: "$7.50" },
      { name: "Lasagna", description: "Full order of our homemade lasagna filled with layers of meat sauce and cheeses, baked to perfection", price: "$8.95" },
      { name: "Crock O' Ravioli", description: "Our meat ravioli topped with homemade meat sauce and baked with house cheeses", price: "$6.50" },
      { name: "Crock O' Lasagna", description: "Our homemade lasagna covered in meat sauce and house blended cheeses, baked to perfection", price: "$6.95" },
      { name: "Crock O' Mostaccioli", description: "Our mostaccioli served in meat sauce and topped with house blended cheeses, baked golden brown", price: "$6.50" },
      { name: "Gondola O' Chicken Parmesan", description: "Hefty portion of our chicken Parmesan baked and served over your choice of pasta", price: "$8.95" },
      { name: "Soup & AYCE Salad", description: "Chicken florentine soup with all-you-can-eat salad", price: "$7.50" },
    ],
  },
  {
    id: "pasta",
    label: "Traditional Pasta",
    color: "#C9A84C",
    items: [
      { name: "Fettuccine Carbonara", description: "Sautéed ham, bacon, fresh mushroom and onions tossed with fettuccine in homemade garlic cream sauce", price: "$15.95", badge: "Chef's Favorite" },
      { name: "Lasagna", description: "Our tantalizing lasagna layered with hearty meat sauce, 4 cheeses, and baked to perfection", price: "$13.95" },
      { name: "Manicotti", description: "Rich 5-cheese filling, rolled in pasta, baked golden brown and topped with homemade marinara", price: "$14.95" },
      { name: "Eggplant Parmigiana Pasta", description: "Eggplant lightly breaded and baked golden brown, served over pasta with homemade marinara", price: "$14.50" },
      { name: "Fresh Primavera Pasta", description: "Fresh mushrooms, broccoli, peppers, onion, spinach in a light garlic marinara sauce", price: "$14.95" },
      { name: "Ravioli", description: "Imported ravioli filled with meat or cheese, topped with one of our homemade red sauces", price: "$11.95" },
      { name: "Portabella Ravioli", description: "Flavor-filled imported ravioli simmered in a roasted red pepper, red onion and spinach cream sauce", price: "$14.50" },
      { name: "Pasta Alfredo", description: "Homemade Alfredo sauce tossed with your choice of pasta", price: "$12.95" },
      { name: "Spaghetti", description: "Served with our rich meat sauce", price: "$11.50" },
    ],
  },
  {
    id: "chicken-sausage",
    label: "Chicken & Sausage",
    color: "#8B1A1A",
    items: [
      { name: "Chicken Parmesan", description: "Tantalizing breaded chicken breast smothered with zesty marinara sauce and bubbling house cheeses over your choice of pasta", price: "$15.95" },
      { name: "Sausage & Pepper Romana", description: "Fresh Italian sausage sautéed with red and green peppers, fresh garlic, finished with homemade marinara-ricotta cheese sauce and pasta", price: "$15.95" },
      { name: "Andouille & Chicken Jambalaya", description: "Homemade andouille sausage, chicken breast, onion, peppers and okra sautéed in spicy brown sauce, tossed with pasta", price: "$16.95" },
      { name: "Smothered Chicken", description: "Breaded chicken breast topped with sautéed green peppers, onions and fresh mushrooms, smothered with house cheeses over pasta", price: "$15.50" },
      { name: "Spicy Chicken Artichoke Toscana", description: "Dusted chicken breast sautéed with artichokes, onions, tomatoes and capers, reduced in a spicy cream sauce", price: "$16.95" },
      { name: "Chicken Scaloppini", description: "Fresh chicken, dusted and sautéed with artichokes and a delicate lemon caper sauce over pasta", price: "$15.95" },
    ],
  },
  {
    id: "seafood",
    label: "Seafood",
    color: "#5C6B2E",
    items: [
      { name: "Grouper Asiago", description: "Pan fried with broccoli, red onions, tomatoes, black olives, white wine and baked with Asiago cheese over a blush sauce pasta", price: "$18.95" },
      { name: "Shrimp Lasagna Alfredo", description: "Our house lasagna topped with 3 jumbo sautéed shrimp and covered in homemade Alfredo", price: "$16.95" },
      { name: "Cajun Grouper", description: "Cajun dusted grouper filet, seared hot to perfection and served over pasta Alfredo", price: "$18.95" },
      { name: "Grouper Scaloppine", description: "Generous filet lightly dusted and seared in a lemon caper sauce with artichokes and choice of pasta", price: "$18.95" },
      { name: "Shrimp & Grouper Scampi", description: "Jumbo shrimp and grouper dusted and pan fried in real butter with fresh garlic and green onion", price: "$17.95" },
      { name: "Grouper Siciliano", description: "Italian breaded grouper sautéed and served over pasta marinara", price: "$18.95" },
      { name: "Shrimp & Artichoke Pesto Tortellini", description: "6 jumbo shrimp, artichokes and red onion seared in pesto cream sauce, tossed with cheese tortellini", price: "$17.95" },
    ],
  },
  {
    id: "veal-steak",
    label: "Veal & Steak",
    color: "#C9A84C",
    items: [
      { name: "Steak Tortellini", description: "Fresh diced ribeye, mushrooms, onion and cheese tortellini tossed in a mushroom cream sauce", price: "$17.50" },
      { name: "Veal Parmesan", description: "Pounded-to-order cutlet, breaded and baked with marinara and cheese over pasta", price: "$18.95" },
      { name: "Steak Medallion Siciliano", description: "Fresh ribeye medallions Italian breaded and sautéed golden brown, served over pasta marinara", price: "$16.95" },
      { name: "Veal Marsala", description: "Our veal dusted and sautéed with fresh mushrooms in a sweet Marsala wine sauce", price: "$18.95" },
      { name: "Veal Scaloppini", description: "Pounded-to-order cutlets dusted and seared in a lemon-caper sauce with artichokes, tossed with choice of pasta", price: "$18.95" },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    color: "#8B1A1A",
    items: [
      { name: "Tiramisu", price: "$5.95" },
      { name: "Cannoli", price: "$3.95" },
      { name: "Classic Crème Brûlée", price: "$5.95" },
      { name: "Chocolate Lava Cake", price: "$5.95" },
      { name: "Hot Apple Cobbler", price: "$5.95" },
      { name: "Spumoni Ice Cream", price: "$3.95" },
      { name: "Vanilla Ice Cream", price: "$3.95" },
    ],
  },
  {
    id: "gluten-free",
    label: "Gluten-Free Options",
    color: "#5C6B2E",
    items: [
      { name: "Gluten-Free Pizza Crust", description: "Available for any pizza on our menu" },
      { name: "Gluten-Free Garlic Cheese Bread", description: "Our fan-favorite on a gluten-free base" },
      { name: "Rice Pasta", description: "Substitute rice pasta in any pasta dish" },
      { name: "Served Over Fresh Spinach", description: "Many entrées available over a bed of fresh spinach instead of pasta" },
      { name: "Redbridge Gluten-Free Beer", description: "Sorghum-based gluten-free beer available at the bar" },
    ],
  },
];

export default function FullMenu() {
  return (
    <div>
      <IncludedBanner />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Category nav */}
        <div className="flex flex-wrap gap-2 mb-12 justify-center">
          {menuData.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="text-xs font-semibold px-3 py-1.5 rounded-full border border-[#C9A84C]/30 text-[#8B1A1A] hover:bg-[#8B1A1A] hover:text-white hover:border-[#8B1A1A] transition-all duration-200"
            >
              {cat.label}
            </a>
          ))}
        </div>

        <div className="space-y-16">
          {menuData.map((cat) => (
            <section key={cat.id} id={cat.id} className="scroll-mt-24">
              {/* Category header */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="h-8 w-1 rounded-full flex-shrink-0"
                  style={{ backgroundColor: cat.color }}
                />
                <h2
                  className="text-2xl sm:text-3xl font-bold text-[#2C2C2C]"
                  style={{ fontFamily: "var(--font-oranienbaum), serif" }}
                >
                  {cat.label}
                </h2>
                <div className="flex-1 h-px bg-gray-200" />
              </div>

              {/* Items grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {cat.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-start justify-between gap-4 py-3 border-b border-gray-100 group"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span
                          className="font-semibold text-[#2C2C2C] text-sm leading-snug"
                          style={{ fontFamily: "var(--font-oranienbaum), serif" }}
                        >
                          {item.name}
                        </span>
                        {item.badge && (
                          <span
                            className="text-[10px] font-bold px-2 py-0.5 rounded-full text-white uppercase tracking-wide flex-shrink-0"
                            style={{ backgroundColor: cat.color }}
                          >
                            {item.badge}
                          </span>
                        )}
                      </div>
                      {item.description && (
                        <p className="text-gray-500 text-xs leading-relaxed mt-0.5">{item.description}</p>
                      )}
                    </div>
                    {item.price && (
                      <span
                        className="font-bold text-sm flex-shrink-0 mt-0.5"
                        style={{ color: cat.color }}
                      >
                        {item.price}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <p className="text-center text-gray-400 text-xs mt-12 border-t border-gray-100 pt-8">
          Prices subject to change. See in-store menu or call{" "}
          <a href="tel:+18109663400" className="text-[#8B1A1A] hover:underline">
            (810) 966-3400
          </a>{" "}
          for current pricing. Menu items and availability may vary.
        </p>
      </div>
    </div>
  );
}
