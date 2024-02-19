import { useState } from "react";
import "./App.css";
import ShoppingList from "./components/ShoppingList";
import Item from "./models/item";
import ShoppingItemForm from "./components/ShoppingItemForm";

function App() {
  // const items = [
  //   { id: 1, product: "apple", quantity: 2 },
  //   { id: 2, product: "pear", quantity: 5 },
  //   { id: 3, product: "orange", quantity: 3 },
  // ];

  const [items, setItems] = useState<Item[]>([]);

  return (
    <>
      {/* <Greeter person="Tom" /> */}
      <ShoppingList items={items} />
      <ShoppingItemForm setItems={setItems} />
    </>
  );
}

export default App;
