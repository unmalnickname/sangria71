import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";
import Home from "./components/Home/Home";
import Staff from "./components/Staff/staff_staff";
import CalculatorImage from "./components/calculator/calculatorImage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/SplitList" component={Staff} />
          <Route path="/CalculatorImage" component={CalculatorImage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
