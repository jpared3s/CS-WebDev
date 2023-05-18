import "./App.css";
import Greeter from "./greeter";
import Die from "./die";

function App() {
  return (
    <div>
      <Greeter person="Julian" from="Jacob"/>
      <Die numSides={20}/>
    </div>
  );
}

export default App;
