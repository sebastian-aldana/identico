import React from "react";
import home_2 from "../img/home-2.jpg";
import logo_blanco from "../img/logo-blanco.png";

function Detalle(props) {
  return (
    <div class="container-fluid detalleProducto">
      <div class="row justify-content-center pb-5" />

      <div class="row justify-content-center py-5">
        <div class="col-11 col-md-4 p-0 my-5 text-center align-self-center producto">
          <div class="zoom" id="ex1">
            <img
              src="<?php echo $url_absoluta; ?>img/fotos_productos/<?php echo utf8_encode($row_DetalleProducto['img']); ?>"
              width="600"
              height="600"
              alt=""
              class="img-fluid"
            />
          </div>
        </div>
        <div class="col-11 col-md-4 my-5 pl-5 text-justify align-self-start">
          <h1 class="text-center mb-4 cAculC">{props.titulo}</h1>
          <p>Descripcion</p>
          <div class="mt-5 text-center">
            <a
              href="<?php echo $url_absoluta; ?>fichas_pdf/<?php echo $row_DetalleProducto['ficha_pdf']; ?>"
              class="btn btn-primary"
              target="_blank"
            >
              Descargar ficha técnica
            </a>
          </div>
        </div>
      </div>

      <div class="row my-5">
        <div
          class="col-12 my-4 p-0 parallax fondoimg"
          style={{ backgroundImage: `url(${home_2})` }}
        >
          <div
            class="total"
            style={{ backgroundColor: "rgba(0, 150, 199, .6)" }}
          >
            <div class="medio text-center">
              <img
                src={logo_blanco}
                alt="IDéntico"
                class="img-fluid"
                style={{ width: "550px", backgroundPosition: "top" }}
              />
              <h1 class="text-white mt-4 mb-0">
                Expertos en Identificación Segura
              </h1>
            </div>
          </div>
        </div>
      </div>
      <span id="contacto" />
    </div>
  );
}

export default Detalle;
