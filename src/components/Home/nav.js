import React from "react";

const Nav = () => {
  return (
    <div className="ui three item menu">
      <a href="/Home" className="item active">
        Summary
      </a>

      <a href="SplitList" className="item">
        Split
      </a>
      <a href="/CalculatorImage" className="item">
        Calculator
      </a>
    </div>
  );
};

export default Nav;
