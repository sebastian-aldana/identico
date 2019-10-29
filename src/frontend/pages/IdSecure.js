import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Layout from "../containers/Layout";
import img1 from "../img/seguridad.png";
import img2 from "../img/seguridad2.png";
import img3 from "../img/seguridad3.png";
import img4 from "../img/seguridad4.png";
import img5 from "../img/seguridad5.png";
import img6 from "../img/seguridad6.png";

const IdSecure = () => {
  AOS.init();
  return (
    <Layout>
      <span id="idsecure" />

      <div class="row justify-content-center my-5 tabss">
        <div className="col-12 p-0">
          <span id="contacto" />

          <div
            className="tab-pane fade show active p-3 p-md-5 text-justify"
            id="identinet"
            role="tabpanel"
            aria-labelledby="identinet-tab"
          >
            <div className="row justify-content-center">
              <div className="col-11" style={{ overflow: "hidden" }}>
                <span
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  className="d-block text-center my-4"
                ></span>

                <h3
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  className="cAculC"
                >
                  IDentisecure, nace como una respuesta a nuestros clientes para
                  complementar sus esquemas de seguridad física, con esquemas de
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
                  className="d-block text-center my-4"
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

        <div className="container row">
          <div className="card col-md-4 mb-3">
            <div className="row no-gutters">
              <div className="card-header bg-primary text-center w-100">
                <h5 className="card-title text-white">
                  Seguridad en el Endpoint y dispositivos móviles
                </h5>
              </div>
              <div className="col-md-5">
                <img src={img1} className="w-100" alt="" />
              </div>
              <div className="col-md-7">
                <div className="card-body">
                  <p>
                    <ul>
                      <li>Antivirus</li>
                      <li>Antimalware</li>
                      <li>EDR</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card col-md-4 mb-3">
            <div className="row no-gutters">
              <div className="card-header bg-primary text-center w-100">
                <h5 className="card-title text-white">
                  Protección de fuga de datos
                </h5>
              </div>

              <div className="col-md-5 ">
                <img src={img2} className="w-100" alt="" />
              </div>
              <div className="col-md-7 ">
                <div className="card-body">
                  <p>
                    <ul>
                      <li>Cumplimiento Regulatorio</li>
                      <li>GDRP</li>
                      <li>LFPDPP</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card col-md-4 mb-3">
            <div className="row no-gutters">
              <div className="card-header bg-primary text-center w-100">
                <h5 className="card-title text-white">
                  Protección Perimetral y navegación Web
                </h5>
              </div>
              <div className="col-md-5">
                <img src={img3} className="w-100" alt="" />
              </div>
              <div className="col-md-7">
                <div className="card-body">
                  <p>
                    <ul>
                      <li>Firewalls de ultima generación</li>
                      <li>IPS/IDS</li>
                      <li>Filtrado Web</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card col-md-4">
            <div className="row no-gutters">
              <div className="card-header bg-primary text-center w-100">
                <h5 className="card-title text-white">
                  Seguridad correo electrónico
                </h5>
              </div>
              <div className="col-md-5">
                <img src={img4} className="w-100" alt="" />
              </div>
              <div className="col-md-7">
                <div className="card-body">
                  <p>
                    <ul>
                      <li>Anti-phishing y Antimalware</li>
                      <li>Proteccion contra amenazas avanzadas</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card col-md-4">
            <div className="row no-gutters">
              <div className="card-header bg-primary text-center w-100">
                <h5 className="card-title text-white">
                  App Security, información y control de identidad
                </h5>
              </div>
              <div className="col-md-5">
                <img src={img5} className="w-100" alt="" />
              </div>
              <div className="col-md-7">
                <div className="card-body">
                  <p>
                    <ul>
                      <li>CASB</li>
                      <li>Web application firewall</li>
                      <li>Database security</li>
                      <li>Identity Management</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card col-md-4">
            <div className="row no-gutters">
              <div className="card-header bg-primary text-center w-100">
                <h5 className="card-title text-white">
                  Autenticación y Risk Management
                </h5>
              </div>
              <div className="col-md-5 ">
                <img src={img6} className="w-100 " alt="" />
              </div>
              <div className="col-md-7">
                <div className="card-body">
                  <p>
                    <ul>
                      <li>Autenticación multifactor</li>
                      <li>App Shield para aplicaciones moviles</li>
                      <li>Motores de riesgo</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Termina */}
        </div>
      </div>
    </Layout>
  );
};

export default IdSecure;
