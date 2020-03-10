import React, { createContext, useState } from "react";

//Crear el Context
export const TipsContext = createContext();

// Provideer es donde se encuentra las funciones y state
const TipsContextProvider = (props) => {
  // crear el state del Context
  const [porcentaje1, guardarPorcentaje1] = useState([]);
  const [porcentaje2, guardarPorcentaje2] = useState([]);

  const [porcentaje3, guardarPorcentaje3] = useState([]);
  const [valorFinal, GuardarValor] = useState([]);

  return (
    <TipsContext.Provider
      value={{
        porcentaje1,
        guardarPorcentaje1,
        porcentaje2,
        guardarPorcentaje2,
        porcentaje3,
        guardarPorcentaje3,
        valorFinal,
        GuardarValor
      }}
    >
      {props.children}
    </TipsContext.Provider>
  );
};

export default TipsContextProvider;
