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
    GuardarValor
  } = useContext(TipsContext);

  // const [divisible, guardarDivisor] = useState([]);
  const dividir = parseFloat(localStorage.getItem("valorTotal"));

  const obtenerSeleccion1 = (e) => {
    // e.preventDefault();

    const button1 = document.getElementById(e.target.id).innerText;
    guardarPorcentaje1(button1);

    console.log(button1);
  };

  const obtenerSeleccion2 = (e) => {
    // e.preventDefault();

    const button2 = document.getElementById(e.target.id).innerText;
    guardarPorcentaje2(button2);

    console.log(button2);
  };

  const obtenerSeleccion3 = (e) => {
    // e.preventDefault();

    const button3 = document.getElementById(e.target.id).innerText;
    guardarPorcentaje3(button3);

    // guardarTips(parseFloat(input1) + parseFloat(input2));

    console.log(button3);
  };
  const Guardar = (e) => {
    // e.preventDefault();

    localStorage.setItem(
      "valorTotal",
      parseFloat(porcentaje1) +
        parseFloat((porcentaje2 / 100) * 75) +
        parseFloat(porcentaje3 / 2)
    );
    var valorTotal = parseFloat(localStorage.getItem("valorTotal"));

    GuardarValor(valorTotal);
    // guardarDivisor(valorTotal);
    // console.log(valorTotal);
    return valorTotal;
  };

  return (
    <Segment>
      <Message floating>{dividir}</Message>

      <Header as="h3">Waiter 100 %</Header>
      <div>
        <Button.Group onClick={obtenerSeleccion1}>
          <Button id="1">1</Button>
          <Button id="2">2</Button>
          <Button id="3">3</Button>
          <Button id="4">4</Button>
          <Button id="5">5</Button>
          <Button id="6">6</Button>
          <Button className="active" id="7">
            7
          </Button>
        </Button.Group>
      </div>
      <Divider section />
      <Header as="h3">Food Runner 75%</Header>
      <div>
        <Button.Group onClick={obtenerSeleccion2}>
          <Button id="1">1</Button>
          <Button id="2">2</Button>
          <Button id="3">3</Button>
          <Button id="4">4</Button>
          <Button id="5">5</Button>
          <Button id="6">6</Button>
          <Button id="7">7</Button>
        </Button.Group>
      </div>
      <Divider section />
      <Header as="h3">BusBoys 50% </Header>
      <div>
        <Button.Group onClick={obtenerSeleccion3}>
          <Button id="1">1</Button>
          <Button id="2">2</Button>
          <Button id="3">3</Button>
          <Button id="4">4</Button>
          <Button id="5">5</Button>
          <Button id="6">6</Button>
          <Button id="7">7</Button>
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
