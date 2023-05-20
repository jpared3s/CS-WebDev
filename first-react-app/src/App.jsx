import "./App.css";
// import Greeter from "./greeter";
// import Die from "./die";
import DoubleDice from "./DoubleDice";
import Heading from "./Heading";

function App() {
  return (
    <div>
      <Heading color= "red" text = "Raptors"></Heading>
      {/* <Greeter person="Julian" from="Jacob"/>
      <Die numSides={20}/> */}
      <DoubleDice />
    </div>
  );
}

export default App;
