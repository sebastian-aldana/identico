import React, { Component } from "react";
import Fondo from "../../img/fondo-art.jpg";

const Titulo = () => {
  return (
    <div className="articulo-titulo">
      <img src={Fondo} alt="" />
      <h1>Titulo del articulo</h1>
    </div>
  );
};
export default Titulo;
