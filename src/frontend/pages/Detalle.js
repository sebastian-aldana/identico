import React from "react";
import Productos from "./Productos";
import Tarjetas from "../components/productos/Tarjetas";
import LogosImpresoras from "../components/productos/LogosImpresoras";
import LogosConsumibles from "../components/productos/LogosConsumibles";
import ListProduct from "../components/productos/ListProduct";
import ListCategory from "../components/productos/ListCategory";
import ListProductCategory from "../components/productos/ListProductCategory";

class Detalle extends React.Component {
  render() {
    const params = this.props.match.params;
    if (params.category === "impresoras") {
      if (params.id !== undefined) {
        if (params.id === "zebra") {
          return (
            <Productos>
              <LogosImpresoras />
              <ListProductCategory
                id="1"
                marca="1"
                category={params.category}
              />
              {/* <p>1,1</p> */}
            </Productos>
          );
        } else if (params.id === "fargo") {
          return (
            <Productos>
              <LogosImpresoras />
              <ListProductCategory
                id="1"
                marca="2"
                category={params.category}
              />
              {/* <p>1,2</p> */}
            </Productos>
          );
        } else if (params.id === "datacard") {
          return (
            <Productos>
              <LogosImpresoras />
              <ListProductCategory
                id="1"
                marca="3"
                category={params.category}
              />
              {/* <p>1,3</p> */}
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
          <ListCategory id="1" category={params.category} />
        </Productos>
      );
    } else if (params.category === "consumibles") {
      if (params.id !== undefined) {
        if (params.id === "zebra") {
          return (
            <Productos>
              <LogosConsumibles />
              <ListProductCategory
                id="2"
                marca="1"
                category={params.category}
              />
              {/* <p>2,1</p> */}
            </Productos>
          );
        } else if (params.id === "datacard") {
          return (
            <Productos>
              <LogosConsumibles />
              <ListProductCategory
                id="2"
                marca="2"
                category={params.category}
              />
              {/* <p>2,2</p> */}
            </Productos>
          );
        } else {
          return (
            <>
              <ListProduct id={params.id} />;
            </>
          );
        }
      }
      return (
        <Productos>
          <LogosConsumibles />
          <ListCategory id="2" category={params.category} />
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
