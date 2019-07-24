import React, { useState } from "react";

import Acceso from "../components/productos/Acceso";
import Camaras from "../components/productos/Camaras";
import Consumibles from "../components/productos/Consumibles";
import Impresoras from "../components/productos/Impresoras";
import Tarjetas from "../components/productos/Tarjetas";

const Productos = () => {
  const [componente, setComponente] = useState(<Impresoras />);
  const [active, setActive] = useState(0);
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
            <li
              class={
                active === 0
                  ? "nav-item text-center active"
                  : "nav-item text-center"
              }
            >
              <a
                class={
                  active === 0 ? "nav-link total acti active" : "nav-link total"
                }
                href="impresoras#impresoras-pvc"
                onClick={e => {
                  e.preventDefault();
                  setActive(0);
                  setComponente(<Impresoras />);
                }}
              >
                <span class="medio">
                  IMPRESORA
                  <br />
                  DE CREDENCIALES
                </span>
              </a>
            </li>

            <li
              class={
                active === 1
                  ? "nav-item text-center active"
                  : "nav-item text-center"
              }
            >
              <a
                class={
                  active === 1 ? "nav-link total acti active" : "nav-link total"
                }
                onClick={e => {
                  e.preventDefault();
                  setActive(1);
                  setComponente(<Consumibles />);
                }}
              >
                <span class="medio">CONSUMIBLES</span>
              </a>
            </li>

            <li
              class={
                active === 2
                  ? "nav-item text-center active"
                  : "nav-item text-center"
              }
            >
              <a
                class={
                  active === 2 ? "nav-link total acti active" : "nav-link total"
                }
                onClick={e => {
                  e.preventDefault();
                  setActive(2);
                  setComponente(<Tarjetas />);
                }}
              >
                <span class="medio">TARJETAS</span>
              </a>
            </li>
            <li
              class={
                active === 3
                  ? "nav-item text-center active"
                  : "nav-item text-center"
              }
            >
              <a
                class={
                  active === 3 ? "nav-link total acti active" : "nav-link total"
                }
                onClick={e => {
                  e.preventDefault();
                  setActive(3);
                  setComponente(<Acceso />);
                }}
              >
                <span class="medio">
                  CONTROL <br /> DE ACCESO
                </span>
              </a>
            </li>
            <li
              class={
                active === 4
                  ? "nav-item text-center active"
                  : "nav-item text-center"
              }
            >
              <a
                class={
                  active === 4 ? "nav-link total acti active" : "nav-link total"
                }
                onClick={e => {
                  e.preventDefault();
                  setActive(4);
                  setComponente(<Camaras />);
                }}
              >
                <span class="medio">
                  CAMARAS <br /> DE SEGURIDAD
                </span>
              </a>
            </li>
          </ul>
          <>{componente}</>
        </div>
      </div>
    </div>
  );
};

export default Productos;
