import React, { useState } from "react";
import Title from "components/Title";
import WholePizza from "components/WholePizza";
import SplitPizza from "components/SplitPizza";
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
