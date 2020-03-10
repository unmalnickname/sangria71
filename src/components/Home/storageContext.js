import React, { createContext, useState } from "react";

//Crear el Context
export const StorageContext = createContext();

// Provideer es donde se encuentra las funciones y state
const StorageProvider = (props) => {
  // crear el state del Context
  const [tips, guardarTips] = useState([]);
  const [split, guardarSplit] = useState([]);

  return (
    <StorageContext.Provider
      value={{
        tips,
        guardarTips,
        split,
        guardarSplit
      }}
    >
      {props.children}
    </StorageContext.Provider>
  );
};

export default StorageProvider;
