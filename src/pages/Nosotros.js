import React from "react";

import respeto from "../img/respeto.png";
import responsabilidad from "../img/responsabilidad.png";
import compromiso from "../img/compromiso.png";
import honradez from "../img/honradez.png";
import profesionalismo from "../img/profesionalismo.png";

function Nosotros() {
  return (
    <div class="row justify-content-center">
      <div class="col-11 cAzulM py-3 mt-5 text-justify">
        <p>
          <span class="cAculC max">IDÉNTICO MÉXICO S.A. DE C.V.</span> fue
          creada en el año 2003, su experiencia en la industria de
          identificación de tarjetas plásticas de pvc y asesoría para la
          identificación segura y eficiente utilizando las mejores tecnologías,
          se remonta al año 1988 en Colombia (Sudamérica), los accionistas
          fundadores de la empresa en ese país, con vínculos mexicanos deciden
          emprender nuevos negocios en Ciudad de México.
        </p>
        <p>
          Propósito Fundamental: Entregar soluciones integrales y rentables de
          la industria de identificación que satisfagan a nuestros clientes en
          Latinoamérica, utilizando tecnología diversificada que atienda a
          clientes y comunidades con productos y servicios innovadores. Este
          propósito nace en 1988, nos ha llevado hacia una manera diferente de
          relacionarnos en la que todos los involucrados nos sentimos
          satisfechos.
        </p>
      </div>

      <div class="col-12 p-0 my-5">
        <h2>
          <span
            class="bAculC text-white py-3"
            style={{ paddingLeft: "10%", paddingRight: "2%" }}
          >
            VALORES
          </span>
        </h2>
      </div>

      <div class="col-11 mb-5 text-justify">
        <div
          data-aos="zoom-in"
          class="row py-3 py-md-5 px-3"
          style={{ background: "#f5f5f5" }}
        >
          <div class="col-md-4 col-lg-2 text-center align-self-center pt-3 pt-lg-0 pb-4 pb-lg-0">
            <img src={`${respeto}`} alt="Respeto" class="img-fluid" />
          </div>
          <div class="col-md-8 col-lg-10 cAzulM align-self-center">
            <h4 style={{ color: "#f0c756" }}>
              <strong>Respeto</strong>
            </h4>
            <p>
              Es la capacidad que se tiene para entender y comprender que cada
              ser humano es distinto y, en consecuencia, piensa y actúa de una
              forma diferente en un momento dado.
            </p>
            <ul>
              <li>Aprender a escuchar</li>
              <li>Aprender cada día</li>
              <li>Colocarse en el lugar de la otra persona</li>
              <li>Conservar y cultivar la paciencia y la comprensión</li>
              <li>Actuar bajo el concepto de igualdad</li>
            </ul>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          class="row py-3 py-md-5 px-3"
          style={{ background: "#ebebeb" }}
        >
          <div class="col-md-4 col-lg-2 text-center align-self-center pt-3 pt-lg-0 pb-4 pb-lg-0">
            <img
              src={`${responsabilidad}`}
              alt="Responsabilidad"
              class="img-fluid"
            />
          </div>
          <div class="col-md-8 col-lg-10 cAzulM align-self-center">
            <h4 style={{ color: "#33acb5" }}>
              <strong>Responsabilidad</strong>
            </h4>
            <p>
              Es la capacidad de dar respuesta ante una obligación, función, rol
              o actividad asignada o asumida. Cumplir de una forma eficiente y
              eficaz con el compromiso adquirido.
            </p>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          class="row py-3 py-md-5 px-3"
          style={{ background: "#f5f5f5" }}
        >
          <div class="col-md-4 col-lg-2 text-center align-self-center pt-3 pt-lg-0 pb-4 pb-lg-0">
            <img src={`${compromiso}`} alt="Compromiso" class="img-fluid" />
          </div>
          <div class="col-md-8 col-lg-10 cAzulM align-self-center">
            <h4 style={{ color: "#96ac8b" }}>
              <strong>Compromiso</strong>
            </h4>
            <ul>
              <li>Entregar sin esperar contraprestación.</li>
              <li>Es estar dispuesto a dar más de lo requerido.</li>
              <li>
                Es obligarse con las causas, con las personas, con la familia,
                con el trabajo independientemente de la remuneración.
              </li>
              <li>
                Es dar el máximo de sus capacidades profesionales y personales
                para el desarrollo de una actividad.
              </li>
            </ul>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          class="row py-3 py-md-5 px-3"
          style={{ background: "#ebebeb" }}
        >
          <div class="col-md-4 col-lg-2 text-center align-self-center pt-3 pt-lg-0 pb-4 pb-lg-0">
            <img src={`${honradez}`} alt="Honradez" class="img-fluid" />
          </div>
          <div class="col-md-8 col-lg-10 cAzulM align-self-center">
            <h4 style={{ color: "#72a5c5" }}>
              <strong>Honradez</strong>
            </h4>
            <ul>
              <li>Observar constantemente comportamientos éticos y morales.</li>
              <li>No cohonestar con conductas fraudulentas y corruptoras.</li>
              <li>Ser justo en las actuaciones y en las decisiones.</li>
            </ul>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          class="row py-3 py-md-5 px-3"
          style={{ background: "#f5f5f5" }}
        >
          <div class="col-md-4 col-lg-2 text-center align-self-center pt-3 pt-lg-0 pb-4 pb-lg-0">
            <img
              src={`${profesionalismo}`}
              alt="Profesionalismo"
              class="img-fluid"
            />
          </div>
          <div class="col-md-8 col-lg-10 cAzulM align-self-center">
            <h4 style={{ color: "#c5435a" }}>
              <strong>Profesionalismo</strong>
            </h4>
            <ul>
              <li>
                Respuesta eficaz en la gestión que genere un desempeño de
                excelencia con equidad económica, amor al trabajo y la
                convicción de brindar lo mejor de sí, con alto sentido del deber
                social.
              </li>
              <span id="contacto" />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nosotros;
