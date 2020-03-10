import React, { useContext } from "react";
import { StorageContext } from "./storageContext";
// import TipsTab from "./tipsTab";

const Placeholder = () => {
  const { guardarTips } = useContext(StorageContext);

  function handleClick(e) {
    e.preventDefault();

    const input1 = document.getElementById("amount-Cash").value;
    const input2 = document.getElementById("amount-Cards").value;
    guardarTips(parseFloat(input1) + parseFloat(input2));

    // console.log(`The link was clicked.${input1}`);
  }

  return (
    <div className="Placeholder">
      <div className="ui right labeled input">
        <label htmlFor="amount" className="ui label">
          Cash $
        </label>
        <input
          autoComplete="on"
          type="tel"
          placeholder={parseFloat(0)}
          id="amount-Cash"
        />
        <div className="ui basic label"></div>
      </div>
      <div className="ui right labeled input">
        <label htmlFor="amount" className="ui label cards">
          Cards $
        </label>

        <input type="tel" placeholder={parseFloat(0)} id="amount-Cards" />
        <div className="ui basic label "></div>
      </div>

      <button onClick={handleClick} className="ui positive basic button">
        Summit
      </button>

      <h2>{JSON.stringify()}</h2>
    </div>
  );
};

export default Placeholder;
