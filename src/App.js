import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import IncomeState from "./context/income/IncomeState";
import "./styles/css/App.css";

// Components
import Home from "./components/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";

function App() {
  return (
    <IncomeState>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
      </Router>
    </IncomeState>
  );
}

export default App;
