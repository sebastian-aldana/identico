import React, { useState } from "react";
import logo_zebra from "../../img/logo-zebra.jpg";
import logo_fargo from "../../img/logo-fargo.jpg";

import { Link } from "react-router-dom";

import AOS from "aos";

const Impresoras = () => {
  const [active, setActive] = useState(1);
  const data = require("../../json/productos.json");
  var numero = 0;
  AOS.init();
  return (
    <div
      class="tab-pane fade show active p-3 p-md-5 text-justify"
      id="lealtad"
      role="tabpanel"
      aria-labelledby="lealtad-tab"
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
              <img src={logo_fargo} class="img-fluid" />
            </a>
          </span>
        </div>
      </div>

      <div class="row productos" id="show_filtro_marca_impresoras">
        <div class="col-12">{`Productos`}</div>
        {data.data.map(data => {
          if (data.id_marca == active && data.id_tipo == 1) {
            numero = data.length;
            return (
              <>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  class="col-md-6 col-lg-3 text-center p-3 mb-5 pb-5"
                >
                  <Link to={`/productos/impresoras/${data.nombre}`}>
                    <img
                      src={require("../../img/fotos_productos/" + data.img)}
                      alt=""
                      class="img-fluid"
                    />
                  </Link>
                  <Link to={`/productos/impresoras/${data.nombre}`}>
                    <h6 class="bAculC">
                      <span class="py-4 d-inline-block text-white">
                        {data.nombre}
                      </span>
                    </h6>
                  </Link>
                </div>
              </>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Impresoras;
