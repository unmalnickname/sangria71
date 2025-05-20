import React, { useContext } from "react";
import { StorageContext } from "./storageContext";
import { TipsContext } from "../Staff/tipsContext";

// import "../App.css";

const Staff = (props) => {
  const { valorFinal } = useContext(TipsContext);
  const dividir = parseFloat(valorFinal) || 0;

  const { tips } = useContext(StorageContext);

  const bar = Math.floor((tips / 100) * 5).toFixed(2);

  const waiter = Math.floor((tips - bar) / dividir).toFixed(2);
  const FoodRunner = Math.floor((waiter / 100) * 75).toFixed(2);
  const Busboys = Math.floor(waiter / 2).toFixed(2);

  const sobran = waiter * 6 + FoodRunner * 2 + Busboys * 6;

  const sobran2 = tips - bar - sobran;

  console.log(sobran2 + valorFinal);
  console.log(dividir);

  return (
    <div className="stafftips  horizontal segments">
      <div className="ui horizontal segments">
        <div className="ui box segment">
          <h3> Waiter:</h3>
        </div>
        <div className="ui segment">
          <h3>${waiter}</h3>
        </div>
      </div>
      <div className="ui horizontal segments">
        <div className="ui box segment">
          <h3> FoodRunners:</h3>
        </div>
        <div className="ui segment">
          <h3>${FoodRunner}</h3>
        </div>
      </div>
      <div className="ui horizontal segments">
        <div className="ui box segment">
          <h3> Busboys:</h3>
        </div>
        <div className="ui segment">
          <h3>${Busboys}</h3>
        </div>
      </div>
      <div className="ui horizontal segments">
        <div className="ui box segment">
          <h3> Bar:</h3>
        </div>
        <div className="ui segment">
          <h3>${bar}</h3>
        </div>
      </div>
      <div className="ui horizontal segments">
        <div className="ui box segment">
          <h3> Restante:</h3>
        </div>
        <div className="ui segment">
          <h3>${sobran2}</h3>
        </div>
      </div>
    </div>
  );
};
export default Staff;
