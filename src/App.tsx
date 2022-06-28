import React from "react";
import Title from "components/title";
import PizzaSection from "components/pizza";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title />
      </header>
      <section>
        <PizzaSection />
      </section>
    </div>
  );
}

export default App;
