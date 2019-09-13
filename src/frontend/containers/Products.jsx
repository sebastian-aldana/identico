import React from "react";
import { Link } from "react-router-dom";
import Layout from "../containers/Layout";

const Productos = props => {
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
              <li class="nav-item text-center">
                <Link to="/productos/impresoras" class="nav-link total centro">
                  <span>
                    IMPRESORA
                    <br />
                    DE CREDENCIALES
                  </span>
                </Link>
              </li>

              <li class="nav-item text-center">
                <Link to="/productos/consumibles" class="nav-link total centro">
                  <span>CONSUMIBLES</span>
                </Link>
              </li>

              <li class="nav-item text-center">
                <Link to="/productos/tarjetas" class="nav-link total centro">
                  <span>TARJETAS</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {props.children}
      </div>
    </Layout>
  );
};

export default Productos;
