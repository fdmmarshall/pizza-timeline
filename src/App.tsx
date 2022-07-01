import React, { useState } from "react";
import Title from "components/Title";
import WholePizza from "components/WholePizza";
import TopHalf from "components/TopHalf";
import BottomHalf from "components/BottomHalf";
import TimelineContainer from "components/TimelineContainer";
import "./App.css";

function App() {
  const [wholePizzaDisplay, setWholePizzaDisplay] = useState<boolean>(true);
  const [splitPizzaDisplay, setSplitPizzaDisplay] = useState<boolean>(false);

  setTimeout(() => {
    setWholePizzaDisplay(false);
    setSplitPizzaDisplay(true);
  }, 7000);

  return (
    <div className="App">
      <header className="App-header">
        <Title />
      </header>
      <footer className="App-footer">
        <WholePizza display={wholePizzaDisplay} />
        <TopHalf display={splitPizzaDisplay} />
        {splitPizzaDisplay && <TimelineContainer />}
        <BottomHalf display={splitPizzaDisplay} />
      </footer>
    </div>
  );
}

export default App;
