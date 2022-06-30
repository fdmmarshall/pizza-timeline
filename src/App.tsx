import React, { useState } from "react";
import Title from "components/Title";
import WholePizza from "components/WholePizza";
import TopHalf from "components/TopHalf";
import BottomHalf from "components/BottomHalf";
import PizzaTimeline from "components/Timeline";
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
        <TopHalf display={splitPizzaDisplay} />
        <PizzaTimeline display={splitPizzaDisplay} />
        <BottomHalf display={splitPizzaDisplay} />
      </footer>
    </div>
  );
}

export default App;
