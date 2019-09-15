import React from "react";
import { Link } from "react-router-dom";

const ProductosRecomendados = ({ recomendado }) => {
  return (
    <div className="card">
      <div className="align-items-stretch">
        <img
          src={require("../../img/fotos_productos/" + recomendado.img)}
          class="card-img-top"
          alt="..."
        ></img>
      </div>
      <div className="card-body">
        <h2 className="card-title"> {recomendado.nombre}</h2>
      </div>
      <div className="card-footer">
        <button className="btn btn-primary">Agregar al carrito</button>{" "}
        <Link
          target="_blank"
          to={`/productos/impresoras/${recomendado.nombre}`}
          className="btn btn-secondary"
        >
          Ver mas
        </Link>
      </div>
    </div>
  );
};

export default ProductosRecomendados;
