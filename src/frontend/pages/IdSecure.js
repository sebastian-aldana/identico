import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Layout from "../containers/Layout";

const IdSecure = () => {
  AOS.init();
  return (
    <Layout>
      <span id="idsecure" />

      <div class="row justify-content-center my-5 tabss">
        <div class="col-12 p-0">
          <span id="contacto" />

          <div
            class="tab-pane fade show active p-3 p-md-5 text-justify"
            id="identinet"
            role="tabpanel"
            aria-labelledby="identinet-tab"
          >
            <div class="row justify-content-center">
              <div class="col-11" style={{ overflow: "hidden" }}>
                <span
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  class="d-block text-center my-4"
                ></span>

                <h3
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  class="cAculC"
                >
                  IDentisecure, nace como una respuesta a nuestros clientes para
                  complementar sus esquemas de seguridad físico, con esquemas de
                  seguridad informática.
                </h3>

                <p data-aos="fade-right" data-aos-duration="1000">
                  Con el objetivo de atender el incremento de ataques de
                  ciberseguridad, ponemos a su disposición un equipo de trabajo
                  experto para diseñar una estrategia integral y un conjunto de
                  soluciones de los principales fabricantes de la industria que
                  permita cubrir los principales vectores de ataque como son el
                  Endpoint, las redes y navegación web, los ataques por correo
                  electrónico, Protección de fuga de información para
                  cumplimiento de regulaciones como la ley federal de protección
                  de datos en posesión de particulares (LFDPDPP) o GDPR (Global
                  Data protection Rule) y seguridad para aplicaciones en la
                  nube.
                </p>

                <h3 data-aos="fade-left" data-aos-duration="1000">
                  Modelo de Servicio
                </h3>
                <h4>Servicios de ciberseguridad :</h4>

                <span
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  class="d-block text-center my-4"
                ></span>

                <ul data-aos="fade-left" data-aos-duration="1000">
                  <li>Análisis de penetración (Hacking Ético)</li>

                  <li>Análisis de riesgos y vulnerabilidades</li>

                  <li>Análisis de cumplimiento de regulaciones</li>

                  <li>
                    Servicios profesionales de instalación y puesta a punto de
                    las soluciones
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IdSecure;
