import React from "react";
import { Link } from "react-router-dom";
import logo_zebra from "../../img/logo-zebra.jpg";
import logo_datacard from "../../img/logo-datacard.jpg";

const LogosConsumibles = () => {
  return (
    <div class="row justify-content-center">
      <div class="col-11 text-center text-md-left">
        <span class="mx-2">
          <Link to="/productos/consumibles/zebra">
            <img src={logo_zebra} class="img-fluid" />
          </Link>
        </span>
        <span class="mx-2">
          <Link to="/productos/consumibles/datacard">
            <img src={logo_datacard} class="img-fluid" />
          </Link>
        </span>
      </div>
    </div>
  );
};

export default LogosConsumibles;
