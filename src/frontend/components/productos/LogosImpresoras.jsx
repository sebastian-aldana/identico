import React from "react";
import { Link } from "react-router-dom";
import logo_zebra from "../../img/logo-zebra.jpg";
import logo_fargo from "../../img/logo-fargo.jpg";
import logo_data from "../../img/logo-datacard.jpg";

const LogosImpresoras = () => {
  return (
    <div class="row justify-content-center">
      <div class="col-11 text-center text-md-left">
        <span class="mx-2">
          <Link to="/productos/impresoras/zebra">
            <img src={logo_zebra} class="img-fluid" />
          </Link>
        </span>
        <span class="mx-2">
          <Link to="/productos/impresoras/fargo">
            <img src={logo_fargo} class="img-fluid" />
          </Link>
        </span>
        <span class="mx-2">
          <Link to="/productos/impresoras/datacard">
            <img src={logo_data} class="img-fluid" />
          </Link>
        </span>
      </div>
    </div>
  );
};

export default LogosImpresoras;
