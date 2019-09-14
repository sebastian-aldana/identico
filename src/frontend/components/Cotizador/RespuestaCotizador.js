import React from "react";
import ProductosRecomendados from "./ProductosRecomendados";
import ProductosSugeridos from "./ProductosSugeridos";
const productos = require("../../json/productos.json");

const RespuestaCotizador = ({ impresoras, impresorasRetransferencia }) => {
  const { id1, id2, id3 } = impresoras;
  const { id4, id5, id6 } = impresorasRetransferencia;

  const productosRecomendados = productos.data.filter(function(producto) {
    return (
      producto.id === `${id1}` ||
      producto.id === `${id2}` ||
      producto.id === `${id3}`
    );
  });
  const productosSugeridos = productos.data.filter(function(producto) {
    return (
      producto.id === `${id4}` ||
      producto.id === `${id5}` ||
      producto.id === `${id6}`
    );
  });
  if (productosSugeridos.length !== 0) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-5">
            <h2 className="text-center">Tus recomendados son:</h2>
          </div>
          {productosRecomendados.map(recomendado => {
            return (
              <div className="col-md-4 d-flex align-items-stretch">
                <ProductosRecomendados
                  key={productosRecomendados.id}
                  recomendado={recomendado}
                />
              </div>
            );
          })}

          <div className="col-md-12 mt-5">
            <h2 className="text-center">
              Dispositivos de alta definicio o retransferencia
            </h2>
          </div>
          {productosSugeridos.map(sugerido => {
            return (
              <div className="col-md-4 d-flex align-items-stretch">
                <ProductosSugeridos
                  key={productosSugeridos.id}
                  sugerido={sugerido}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-5">
            <h2 className="text-center">Tus recomendados son:</h2>
          </div>
          {productosRecomendados.map(recomendado => {
            return (
              <div className="col-md-4 d-flex align-items-stretch">
                <ProductosRecomendados
                  key={productosRecomendados.id}
                  recomendado={recomendado}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

export default RespuestaCotizador;
