import "./App.css";
// import Greeter from "./greeter";
// import Die from "./die";
// import DoubleDice from "./DoubleDice";
// import Heading from "./Heading";
// import ColorList from "./ColorList";
import ShoppingList from "./ShoppingList";

function App() {
  const data = [
    { item: "eggs", quantity: 4, completed: false },
    { item: "milk", quantity: 23, completed: true },
    { item: "cereal", quantity: 2, completed: false },
    { item: "strawberries", quantity: 7, completed: true },
    { item: "chocolate", quantity: 6, completed: false },
    { item: "berries", quantity: 1, completed: false },
  ];
  return (
    <div>
      <ShoppingList items={data} />
    </div>
  );
}

export default App;
