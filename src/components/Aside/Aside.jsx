import React, { Fragment } from "react";
import Redes from "./Redes";
import "../../css/aside.css";
import Buscador from "./Buscador";
import Publicaciones from "./Publicaciones";

const Aside = () => {
  return (
    <Fragment>
      <div className="aside">
        <Redes />
        <Buscador />

        <Publicaciones />
      </div>
      <div class="clear" />
    </Fragment>
  );
};

export default Aside;
