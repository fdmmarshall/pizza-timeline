import React, { useState } from "react";
import Title from "components/title";
import PizzaSection from "components/pizza";
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
        <PizzaSection display={wholePizzaDisplay} />
      </footer>
    </div>
  );
}

export default App;
