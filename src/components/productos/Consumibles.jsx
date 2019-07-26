import React, { useState } from "react";
import AOS from "aos";

import logo_zebra from "../../img/logo-zebra.jpg";
import logo_datacard from "../../img/logo-datacard.jpg";

const Consumibles = () => {
  const data = require("../../json/productos.json");
  const [active, setActive] = useState(1);
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
          <div class="row justify-content-center">
            <div class="col-11 text-center text-md-left">
              <span class="mx-2">
                <a
                  href="http://identicomexico.com/impresoras-fargo#impresoras-fargo"
                  class="btn btn-link"
                  onClick={e => {
                    e.preventDefault();
                    setActive(1);
                  }}
                >
                  <img src={logo_zebra} class="img-fluid" />
                </a>
              </span>
              <span class="mx-2">
                <a
                  href="http://identicomexico.com/impresoras-fargo#impresoras-fargo"
                  class="btn btn-link"
                  onClick={e => {
                    e.preventDefault();
                    setActive(2);
                  }}
                >
                  <img src={logo_datacard} class="img-fluid" />
                </a>
              </span>
            </div>
          </div>

          <div class="row productos" id="show_filtro_marca_consumibles">
            <div class="col-12">Consumibles</div>
            {data.data.map(data => {
              if (data.id_tipo == 2 && data.id_marca == active) {
                console.log("1");
                return (
                  <div
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    class="col-md-6 col-lg-3 text-center p-3 mb-5 pb-5"
                  >
                    <a href="producto-detalle/<?php echo $row_Consumibles['id']; ?>/<?php echo $url_producto; ?>">
                      <img
                        src={require("../../img/fotos_productos/" + data.img)}
                        class="img-fluid"
                      />
                    </a>

                    <h6 class="bAculC">
                      <span class="py-4 d-inline-block text-white">
                        {data.nombre}
                      </span>
                    </h6>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consumibles;
