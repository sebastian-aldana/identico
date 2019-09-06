import React, { useState } from "react";

import Consumibles from "../components/productos/Consumibles";
import Impresoras from "../components/productos/Impresoras";
import Tarjetas from "../components/productos/Tarjetas";
import Layout from "../containers/Layout";

const Productos = () => {
  const [componente, setComponente] = useState(<Impresoras />);
  const [active, setActive] = useState(0);
  return (
    <Layout>
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
                    active === 0
                      ? "nav-link total acti active centro"
                      : "nav-link total centro"
                  }
                  href="impresoras#impresoras-pvc"
                  onClick={e => {
                    e.preventDefault();
                    setActive(0);
                    setComponente(<Impresoras />);
                  }}
                >
                  <span>
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
                    active === 1
                      ? "nav-link total acti active centro"
                      : "nav-link total centro"
                  }
                  onClick={e => {
                    e.preventDefault();
                    setActive(1);
                    setComponente(<Consumibles />);
                  }}
                >
                  <span>CONSUMIBLES</span>
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
                    active === 2
                      ? "nav-link total acti active centro"
                      : "nav-link total centro"
                  }
                  onClick={e => {
                    e.preventDefault();
                    setActive(2);
                    setComponente(<Tarjetas />);
                  }}
                >
                  <span>TARJETAS</span>
                </a>
              </li>
            </ul>
            <>{componente}</>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Productos;
