import React from "react";
import { Link } from "react-router-dom";
import LogosConsumibles from "./LogosConsumibles";

const Consumibles = () => {
  const data = require("../../json/productos.json");
  return (
    <div class="row justify-content-center my-5 tabss">
      <div class="col-12 p-0">
        <span id="contacto" />

        <div
          class="tab-pane fade show active p-3 p-md-5 text-justify"
          id="identimovil"
          role="tabpanel"
          aria-labelledby="identimovil-tab"
        >
          <LogosConsumibles />
          <div class="row productos" id="show_filtro_marca_consumibles">
            <div class="col-12">Consumibles</div>
            {data.data.map(data => {
              return (
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  class="col-md-6 col-lg-3 text-center p-3 mb-5 pb-5"
                >
                  <Link to={`/productos/consumibles/${data.nombre}`}>
                    <img
                      src={require("../../img/fotos_productos/" + data.img)}
                      class="img-fluid"
                      style={{ height: "290px", width: "auto" }}
                    />
                  </Link>
                  <Link to={`/productos/consumibles/${data.nombre}`}>
                    <h6 class="bAculC">
                      <span class="py-4 d-inline-block text-white">
                        {data.nombre}
                      </span>
                    </h6>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consumibles;
