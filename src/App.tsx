import React, { useState } from "react";
import Title from "components/Title";
import WholePizza from "components/WholePizza";
import TopHalf from "components/TopHalf";
import BottomHalf from "components/BottomHalf";
import "./App.css";

function App() {
  const [wholePizzaDisplay, setWholePizzaDisplay] = useState<boolean>(false);
  const [splitPizzaDisplay, setSplitPizzaDisplay] = useState<boolean>(true);

  return (
    <div className="App">
      <header className="App-header">
        <Title />
      </header>
      <footer className="App-footer">
        <WholePizza display={wholePizzaDisplay} />
        <TopHalf display={splitPizzaDisplay} />
        <div className="Timeline-container" id="white-space"></div>
        <BottomHalf display={splitPizzaDisplay} />
      </footer>
    </div>
  );
}

export default App;
