import React from "react";
import IncomeState from "./context/income/IncomeState";
import "./styles/css/App.css";

// Components
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <IncomeState>
      <div className="App">
        <Navbar />
        <Home />
      </div>
    </IncomeState>
  );
}

export default App;
