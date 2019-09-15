import React from "react";
import Productos from "./Productos";
import Tarjetas from "../components/productos/Tarjetas";
import LogosImpresoras from "../components/productos/LogosImpresoras";
import LogosConsumibles from "../components/productos/LogosConsumibles";
import ListProduct from "../components/productos/ListProduct";
import ListCategory from "../components/productos/ListCategory";

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
              <p>1,1</p>
            </Productos>
          );
        } else if (params.id === "fargo") {
          return (
            <Productos>
              <LogosImpresoras />
              <p>1,2</p>
            </Productos>
          );
        } else if (params.id === "datacard") {
          return (
            <Productos>
              <LogosImpresoras />
              <p>1,3</p>
            </Productos>
          );
        } else {
          return (
            <>
              <p>1</p>
              <ListProduct id={params.id} />
            </>
          );
        }
      }
      return (
        <Productos>
          <LogosImpresoras />
          <ListCategory id="1" />
        </Productos>
      );
    } else if (params.category === "consumibles") {
      if (params.id !== undefined) {
        if (params.id === "zebra") {
          return (
            <Productos>
              <LogosConsumibles />
              <p>2,1</p>
            </Productos>
          );
        } else if (params.id === "datacard") {
          return (
            <Productos>
              <LogosConsumibles />
              <p>2,2</p>
            </Productos>
          );
        } else {
          return (
            <>
              <p>2</p>
              <ListProducts id={params.id} />;
            </>
          );
        }
      }
      return (
        <Productos>
          <LogosConsumibles />
          <ListCategory id="2" />
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
