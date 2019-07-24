import React from "react";

function Productos() {
  return (
    <div class="container-fluid">
      <div class="row justify-content-center my-5 tabss">
        <div class="col-12 p-0">
          <ul
            class="nav  productos"
            id="myTab"
            role="tablist"
            style={{ borderbottom: "transparent" }}
          >
            <li class="nav-item text-center active">
              <a
                class="nav-link total acti active"
                href="impresoras#impresoras-pvc"
              >
                <span class="medio">
                  IMPRESORA
                  <br />
                  DE CREDENCIALES
                </span>
              </a>
            </li>

            <li class="nav-item text-center">
              <a class="nav-link total" href="consumibles#consumibles">
                <span class="medio">CONSUMIBLES</span>
              </a>
            </li>

            <li class="nav-item text-center">
              <a class="nav-link total" href="tarjetas#tarjetas">
                <span class="medio">TARJETAS</span>
              </a>
            </li>
            <li class="nav-item text-center">
              <a class="nav-link total" href="control#acceso">
                <span class="medio">
                  CONTROL <br /> DE ACCESO
                </span>
              </a>
            </li>
            <li class="nav-item text-center">
              <a class="nav-link total" href="camaras#seguridad">
                <span class="medio">
                  CAMARAS <br /> DE SEGURIDAD
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Productos;
