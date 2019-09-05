import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import mifare from "../../img/mifare.png";
import credenciales from "../../img/credenciales.png";
import HID from "../../img/hid.png";

const Tarjetas = () => {
  AOS.init();
  return (
    <>
      <span id="tarjetas" />

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
                >
                  <img src={mifare} class="img-fluid" alt="" />
                </span>

                <h3
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  class="cAculC"
                >
                  Credenciales de acceso (RFID, MIFARE®, Indala, Rosslare)
                </h3>

                <p data-aos="fade-right" data-aos-duration="1000">
                  MIFARE® es la marca de tarjetas inteligentes sin contacto
                  (Chip interno en la tarjeta) usadas en numerosas aplicaciones
                  en todo el mundo, ya que cuenta con la combinación segura de
                  cualquier ecosistema deseado en una sola credencial
                  permitiendo múltiples aplicaciones reales.
                </p>

                <p data-aos="fade-left" data-aos-duration="1000">
                  Las tarjetas MIFARE se pueden utilizar en una gran cantidad de
                  aplicaciones y en prácticamente todas las industrias ya sean
                  pequeñas, medianas o grandes empresas para:
                </p>

                <span
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  class="d-block text-center my-4"
                >
                  <img src={credenciales} class="img-fluid" alt="" />
                </span>

                <ul data-aos="fade-left" data-aos-duration="1000">
                  <li>Tarjetas de Lealtad</li>

                  <li>Control de acceso</li>

                  <li>Sistema de Transporte</li>

                  <li>Micropagos</li>

                  <li>Casinos</li>

                  <li>Estacionamiento para autos</li>

                  <li>Tarjetas de residencia</li>

                  <li>Monederos electrónicos</li>

                  <li>Membresías</li>

                  <li>Clubes Deportivos</li>

                  <li>Tarjetas Bancarias</li>

                  <li>Identificación de alumnos y profesores</li>
                </ul>

                <span
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  class="d-block text-center my-4"
                >
                  <img src={HID} class="img-fluid" alt="" />
                </span>

                <h3
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  class="cAculC"
                >
                  HID
                </h3>

                <p data-aos="fade-right" data-aos-duration="1000">
                  Una tarjeta inteligente contiene un circuito integrado con
                  microprocesador que permite ejecutar programas, almacenar
                  datos e incorporar mecanismos de alta seguridad. Permite
                  escribir y leer datos como en una computadora personal, con
                  varias propiedades especiales (ej. un procesador criptográfico
                  seguro, sistema de archivos seguro, características legibles
                  por humanos).
                </p>

                <p data-aos="fade-left" data-aos-duration="1000">
                  Ventajas
                </p>

                <ul data-aos="fade-right" data-aos-duration="1000">
                  <li>Gran capacidad de memoria.</li>

                  <li>Altos niveles de seguridad.</li>

                  <li>
                    Garantizar operaciones económicas, 100% efectivas y a prueba
                    de robos.
                  </li>

                  <li>Reducción de fraudes.</li>

                  <li>Confiabilidad y Seguridad en la información.</li>

                  <li>
                    A través de Internet los usuarios de tarjetas inteligentes
                    podrán comprar por computadora y pagar por red.
                  </li>

                  <li>Reducción de los costos para empresarios y usuarios.</li>

                  <li>Estándares específicos ISO 7810, 7811, 9992, 10536.</li>

                  <li>Tarjetas inteligentes multiservicio.</li>
                </ul>

                <div
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  style={{ textAlign: "center" }}
                >
                  <a
                    href="#contactanos"
                    class="nav-link scroll"
                    onclick="gtag('event', 'tarjetas', {'event_category' : 'llamados a la accion'});"
                  >
                    <span class="btn btn-primary" style={{ width: "300px" }}>
                      ¡Cotiza ya!
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tarjetas;
