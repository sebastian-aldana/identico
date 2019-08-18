import React from "react";
import Redes from "./Redes";
import "../../css/aside.css";
import Buscador from "./Buscador";
import Publicaciones from "./Publicaciones";

const Aside = () => {
  return (
    <div className="aside">
      <Redes />
      <Buscador />

      <Publicaciones />
    </div>
  );
};

export default Aside;
