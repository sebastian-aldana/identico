import React from "react";
import AOS from "aos";

import camaras from "../../img/camaras.png";
import camaras_2 from "../../img/camaras2.png";
import camaras_4 from "../../img/camaras4.png";

const Camaras = () => {
  AOS.init();
  return (
    <div
      class="tab-pane fade show active p-3 p-md-5 text-justify"
      id="seguridad"
      role="tabpanel"
      aria-labelledby="identinet-tab"
    >
      <div class="row justify-content-center">
        <div class="col-11" style={{ overflow: "hidden" }}>
          <span
            data-aos="fade-right"
            data-aos-duration="1000"
            class="d-block text-center my-4"
          >
            <img src={camaras} class="img-fluid" alt="" />
          </span>
          <span
            data-aos="fade-right"
            data-aos-duration="1000"
            class="d-block text-center my-4"
          >
            <img src={camaras_2} class="img-fluid" alt="" />
          </span>

          <div class="col-md-12">
            <ul
              style={{ float: "left" }}
              class="col-md-12 camarasp"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <h3 data-aos="fade-left" data-aos-duration="1000" class="cAculC ">
                Soluciones de Videovigilancia y CCTV
              </h3>
              <li class="camarasp">Reconocimiento Facial</li>
              <li class="camarasp">
                Conteo de personas u objetos (colores, perfiles… etc.)
              </li>
              <li class="camarasp">Seguimiento a personas u objetos</li>
              <li class="camarasp">
                Grabación para acción post mortem y auditorias
              </li>
              <li class="camarasp">
                Alarmas para supervisión y vigilancia de zonas o por eventos
                atípicos
              </li>
              <li class="camarasp">
                Supervisión con baja iluminación o mediante Infrarrojos
              </li>
              <li class="camarasp">Reconocimiento de placas</li>
              <li class="camarasp">Medición de velocidad</li>
              <li class="camarasp">
                Reconocimiento de personas en una multitud
              </li>
            </ul>

            <div style={{ clear: "both" }} />
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              style={{ textAlign: "center" }}
            >
              <a
                href="#contactanos"
                class="nav-link scroll"
                onclick="gtag('event', 'camaras', {'event_category' : 'llamados a la accion'});"
              >
                <span class="btn btn-primary" style={{ width: "300px" }}>
                  ¡Cotiza ya!
                </span>
              </a>
            </div>
          </div>
          <span
            style={{ float: "right" }}
            class="col-md-12"
            data-aos="fade-right"
            data-aos-duration="1000"
            class="d-block text-center my-4"
          >
            <img
              src={camaras_4}
              style={{ width: "100%" }}
              class="img-fluid"
              alt=""
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Camaras;
