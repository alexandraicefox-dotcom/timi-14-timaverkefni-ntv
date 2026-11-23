import "./App.css";
import Header from "./components/Header";
import MenuItem from "./components/MenuItem";
import MenuSection from "./components/MenuSection";
import Footer from "./components/Footer";

const drinks = [
  {
    id: 1,
    name: "Latte",
    description: "Espresso með flóaðri mjólk",
    price: 690,
  },
  {
    id: 2,
    name: "Haframjólkur Latte",
    description: "Með haframjólk",
    price: 740,
    isVegan: true,
  },
  {
    id: 3,
    name: "Vegan Matcha Latte",
    description: "Með haframjólk eða soya mjólk",
    price: 890,
    isVegan: true,
  },
  {
    id: 4,
    name: "Espresso",
    description: "Nýmalaður espresso frá Brasilíu",
    price: 650,
    isVegan: true,
  },
  {
    id: 5,
    name: "Te",
    description: "Sérvalið te í bestu gæðum",
    price: 600,
    isVegan: true,
  },
];

const food = [
  {
    id: 1,
    name: "Króssant",
    description: "Smjörbakað horn",
    price: 590,
    emoji: "🥐",
  },
  {
    id: 2,
    name: "Samloka",
    description: "Með osti og grænmeti",
    price: 990,
    emoji: "🥪",
  },
  {
    id: 3,
    name: "Kanilsnúður",
    description: "Með kanil og glassúr",
    price: 650,
    emoji: "🍥",
  },
  {
    id: 4,
    name: "Súkkulaðikaka",
    description: "Dökk og mjúk",
    price: 790,
    emoji: "🍰",
  },
];

export default function app() {
  return (
    <main>
      <Header name="Kaffi kóði" slogan="Gott kaffi, góður dagur!" />

      <MenuSection title="Drykkir">
        {drinks.map((drink) => (
          <MenuItem
            key={drink.id}
            name={drink.name}
            description={drink.description}
            price={drink.price}
            isVegan={drink.isVegan}
          />
        ))}
      </MenuSection>

      <MenuSection title="Matur">
        {food.map((item) => (
          <MenuItem
            key={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            emoji={item.emoji}
          />
        ))}
      </MenuSection>

      <Footer
        address="Kaffigata 1, Reykjavík"
        openingHours="Opið virka daga 08:00–17:00"
      />
    </main>
  );
}
