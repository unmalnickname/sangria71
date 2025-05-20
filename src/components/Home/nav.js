import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="ui three item menu">
      <Link to="/Home" className="item active">
        Summary
      </Link>

      <Link to="/SplitList" className="item">
        Split
      </Link>
      <Link to="/CalculatorImage" className="item">
        Calculator
      </Link>
    </div>
  );
};

export default Nav;
