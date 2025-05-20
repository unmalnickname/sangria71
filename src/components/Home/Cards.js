import React, { useContext } from "react";
import { StorageContext } from "./storageContext";
import { TipsContext } from "../Staff/tipsContext";

const Cards = (props) => {
  const { tips } = useContext(StorageContext);
  const { valorFinal } = useContext(TipsContext);
  const dividir = valorFinal;

  return (
    <div className="ui card DivTips ">
      <div className="content">
        <div className="header">
          <h1 className="summary">$ {tips}</h1>
        </div>
        <div className="meta">
          <span className="right floated time">
            <h3>
              <div className="ui transparent input">
                <h4>/{dividir}</h4>
              </div>
            </h3>
          </span>
          <span className="category">Earn</span>
        </div>
        <div className="description">
          <p />
        </div>
      </div>
      <div className="extra content">
        <div className="right floated author">{}</div>
      </div>
    </div>
  );
};

export default Cards;
