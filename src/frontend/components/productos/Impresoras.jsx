import React from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import LogosImpresoras from "./LogosImpresoras";

const Impresoras = () => {
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
      <LogosImpresoras />
      <div class="row productos" id="show_filtro_marca_impresoras">
        <div class="col-12">{`Productos ${data.data.length}`}</div>
        {data.data.map(data => {
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
                    style={{ minHeight: "280px", width: "auto" }}
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
        })}
      </div>
    </div>
  );
};

export default Impresoras;
