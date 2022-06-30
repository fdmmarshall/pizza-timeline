import React, { useState } from "react";
import Title from "../src/components/title";
import WholePizza from "../src/components/wholePizza";
import SplitPizza from "../src/components/SplitPizza";
import "./App.css";

function App() {
  const [wholePizzaDisplay, setWholePizzaDisplay] = useState<boolean>(true);
  const [splitPizzaDisplay, setSplitPizzaDisplay] = useState<boolean>(false);

  return (
    <div className="App">
      <header className="App-header">
        <Title />
      </header>
      <footer className="App-footer">
        <WholePizza display={wholePizzaDisplay} />
        <SplitPizza display={splitPizzaDisplay} />
      </footer>
    </div>
  );
}

export default App;
