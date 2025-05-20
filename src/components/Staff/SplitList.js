import React, { useContext } from "react";
import { Message, Button, Divider, Header, Segment } from "semantic-ui-react";
import { TipsContext } from "./tipsContext.js";

const SplitList = () => {
  const {
    porcentaje1,
    guardarPorcentaje1,
    porcentaje2,
    guardarPorcentaje2,
    porcentaje3,
    guardarPorcentaje3,
    valorFinal,
    GuardarValor
  } = useContext(TipsContext);

  // const [divisible, guardarDivisor] = useState([]);
  const dividir = valorFinal;

  const obtenerSeleccion1 = (value) => {
    guardarPorcentaje1(value);
    console.log(value);
  };

  const obtenerSeleccion2 = (value) => {
    guardarPorcentaje2(value);
    console.log(value);
  };

  const obtenerSeleccion3 = (value) => {
    guardarPorcentaje3(value);
    console.log(value);
  };
  const Guardar = () => {
    const valorTotal =
      parseFloat(porcentaje1) +
      parseFloat((porcentaje2 / 100) * 75) +
      parseFloat(porcentaje3 / 2);
    GuardarValor(valorTotal);
    return valorTotal;
  };

  return (
    <Segment>
      <Message floating>{dividir}</Message>

      <Header as="h3">Waiter 100 %</Header>
      <div>
        <Button.Group>
          <Button onClick={() => obtenerSeleccion1(1)}>1</Button>
          <Button onClick={() => obtenerSeleccion1(2)}>2</Button>
          <Button onClick={() => obtenerSeleccion1(3)}>3</Button>
          <Button onClick={() => obtenerSeleccion1(4)}>4</Button>
          <Button onClick={() => obtenerSeleccion1(5)}>5</Button>
          <Button onClick={() => obtenerSeleccion1(6)}>6</Button>
          <Button className="active" onClick={() => obtenerSeleccion1(7)}>
            7
          </Button>
        </Button.Group>
      </div>
      <Divider section />
      <Header as="h3">Food Runner 75%</Header>
      <div>
        <Button.Group>
          <Button onClick={() => obtenerSeleccion2(1)}>1</Button>
          <Button onClick={() => obtenerSeleccion2(2)}>2</Button>
          <Button onClick={() => obtenerSeleccion2(3)}>3</Button>
          <Button onClick={() => obtenerSeleccion2(4)}>4</Button>
          <Button onClick={() => obtenerSeleccion2(5)}>5</Button>
          <Button onClick={() => obtenerSeleccion2(6)}>6</Button>
          <Button onClick={() => obtenerSeleccion2(7)}>7</Button>
        </Button.Group>
      </div>
      <Divider section />
      <Header as="h3">BusBoys 50% </Header>
      <div>
        <Button.Group>
          <Button onClick={() => obtenerSeleccion3(1)}>1</Button>
          <Button onClick={() => obtenerSeleccion3(2)}>2</Button>
          <Button onClick={() => obtenerSeleccion3(3)}>3</Button>
          <Button onClick={() => obtenerSeleccion3(4)}>4</Button>
          <Button onClick={() => obtenerSeleccion3(5)}>5</Button>
          <Button onClick={() => obtenerSeleccion3(6)}>6</Button>
          <Button onClick={() => obtenerSeleccion3(7)}>7</Button>
        </Button.Group>
        <Divider section />

        <button
          onClick={() => {
            Guardar();
          }}
          className="ui positive basic button"
        >
          Summit
        </button>
      </div>
    </Segment>
  );
};

export default SplitList;
