import React, { Component } from "react";
import Nav from "../Home/nav";
import SplitList from "./SplitList";

import TipsContextProvider from "./tipsContext";

class Staff extends Component {
  render() {
    return (
      <TipsContextProvider>
        <div>
          <Nav />
          <SplitList />
        </div>
      </TipsContextProvider>
    );
  }
}

export default Staff;
