import React from "react";
import Productos from "./Productos";
import Tarjetas from "../components/productos/Tarjetas";
import LogosImpresoras from "../components/productos/LogosImpresoras";
import LogosConsumibles from "../components/productos/LogosConsumibles";
import ListProducts from "../components/productos/ListProducts";

class Detalle extends React.Component {
  render() {
    const params = this.props.match.params;
    console.log(this.props);
    if (params.category === "impresoras") {
      if (params.id !== undefined) {
        if (params.id === "zebra") {
          return (
            <Productos>
              <LogosImpresoras />
            </Productos>
          );
        } else if (params.id === "fargo") {
          return (
            <Productos>
              <LogosImpresoras />
            </Productos>
          );
        } else if (params.id === "datacard") {
          return (
            <Productos>
              <LogosImpresoras />
            </Productos>
          );
        } else {
          return <ListProducts id={params.id} />;
        }
      }
      return (
        <Productos>
          <LogosImpresoras />
        </Productos>
      );
    } else if (params.category === "consumibles") {
      if (params.id !== undefined) {
        if (params.id === "zebra") {
          return (
            <Productos>
              <LogosConsumibles />
            </Productos>
          );
        } else if (params.id === "datacard") {
          return (
            <Productos>
              <LogosConsumibles />
            </Productos>
          );
        }
      }
      return (
        <Productos>
          <LogosConsumibles />
        </Productos>
      );
    } else if (params.category === "tarjetas") {
      return (
        <Productos>
          <Tarjetas />
        </Productos>
      );
    }
  }
}

export default Detalle;
