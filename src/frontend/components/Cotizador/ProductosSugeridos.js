import React from "react";
import { Link } from "react-router-dom";

const ProductosRecomendados = ({ sugerido }) => {
  return (
    <div className="card">
      <div className="align-items-stretch">
        <img
          src={require("../../img/fotos_productos/" + sugerido.img)}
          className="card-img-top"
          alt="..."
        ></img>
      </div>
      <div className="card-body">
        <h2 className="card-title"> {sugerido.nombre}</h2>
      </div>
      <div className="card-footer">
        <button className="btn btn-primary">Agregar al carrito</button>{" "}
        <Link
          target="_blank"
          to={`/productos/impresoras/${sugerido.nombre}`}
          className="btn btn-secondary"
        >
          Ver mas
        </Link>
      </div>
    </div>
  );
};

export default ProductosRecomendados;
