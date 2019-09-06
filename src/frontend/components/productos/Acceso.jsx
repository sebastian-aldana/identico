import React from "react";

import control from "../../img/control.png";
import control_3 from "../../img/control3.png";
import control_2 from "../../img/control2.png";

import AOS from "aos";

const Acceso = () => {
  AOS.init();
  return (
    <>
      <div
        class="tab-pane fade show active p-3 p-md-5 text-justify"
        id="acceso"
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
              <img src={control} class="img-fluid" alt="" />
            </span>
            <span
              data-aos="fade-right"
              data-aos-duration="1000"
              class="d-block text-center my-4"
            >
              <img src={control_3} class="img-fluid" alt="" />
            </span>
            <h3 data-aos="fade-left" data-aos-duration="1000" class="cAculC">
              Control de Acceso,Tiempo-Asistencia y Visitantes
            </h3>

            <p data-aos="fade-right" data-aos-duration="1000">
              <span class="negrilla">Control de Acceso:</span> Aseguramos que
              sus visitantes tengan diversos controles físicos durante la
              estancia dentro de su organización. Mecanismos para el control de
              Acceso: reconocimiento facial, huella dactilar, tarjeta de
              proximidad, reconocimiento de iris.
            </p>

            <p data-aos="fade-left" data-aos-duration="1000">
              <span class="negrilla">Control de Asistencia:</span> Le
              facilitamos al área de recursos humanos medir con precisión el
              tiempo trabajado por empleado, tiempo extra, así como tiempos
              muertos, retardos y permisos o eventos singulares que impactan la
              nomina. Asegurando el pago exacto y correcto de cada jornada.
              Mecanismos para el control de tiempo y asistencia: reconocimiento
              facial, huella dactilar, tarjeta de proximidad, reconocimiento de
              iris.
            </p>
            <p data-aos="fade-right" data-aos-duration="1000">
              <span class="negrilla">Control y registro de Visitas:</span> Toda
              empresa moderna ofrece su primera impresión en la recepción de sus
              oficinas en donde acuden sus clientes, aliados y socios de
              negocio. Proveer una imagen eficiente, sencilla, segura y
              auditable, es la misión de nuestras soluciones. Ofrecemos registro
              de visitas almacenando imágenes de las respectivas
              identificaciones oficiales o empresariales, capturando la foto y
              datos particulares que le permitirán reconocer recurrencias,
              manejar listas blancas o negras, estadísticas, impresión de
              stickers con foto, reportes particulares para compartir con áreas
              de Seguridad Física y perimetral o con toda la empresa.
              <div
                data-aos="fade-right"
                data-aos-duration="1000"
                style={{ textAlign: "center" }}
              >
                <a
                  href="#contactanos"
                  class="nav-link scroll"
                  onclick="gtag('event', 'Control de acceso', {'event_category' : 'llamados a la accion'});"
                >
                  <span class="btn btn-primary" style={{ width: "300px" }}>
                    ¡Cotiza ya!
                  </span>
                </a>
              </div>
              <span
                data-aos="fade-left"
                data-aos-duration="1000"
                class="d-block text-center my-4"
              >
                <img src={control_2} class="img-fluid" alt="" />
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Acceso;
