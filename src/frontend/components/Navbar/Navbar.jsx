import React, { useState } from "react";
import llamada from "../../img/llamada.png";
import logo from "../../img/logo.png";

import Formulario from "../cliengo/Formulario";
import { HashLink } from "react-router-hash-link";

import Search from "./Search";

const Navbar = props => {
  const [active, setActive] = useState(false);
  const scroll = () => window.scrollTo(0, 300);
  const top = () => window.scrollTo(0, 0);
  const toggle = () => {
    var w = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    );
    if (w < 1000) {
      setActive(!active);
    }
  };
  return (
    <>
      <div
        className="d-block text-white text-center p-2"
        style={{ fontSize: ".8em", background: "#0195C6" }}
      >
        <i className="fas fa-map-marker-alt" />
        <a
          href="#"
          className="text-white"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Av. Insurgentes Sur No. 1863, Puso 3, Int. 301, Col. Guadalupe Inn, CP
          01020{" "}
        </a>
        <span className="ml-3">
          <i className="fas fa-phone" />
        </span>{" "}
        CDMX y zona metropolitana : 55 8789 4997 - Línea gratuita a nivel
        nacional : 01-800-953-0984{" "}
        <span className="ml-3">
          <i className="fas fa-envelope" />
        </span>
        <a className="text-white" href="mailto:info@identicodf.com.mx">
          info@identicodf.com.mx
        </a>
      </div>
      <div
        className="d-block bdAzulO text-white text-center p-2"
        style={{ fontSize: ".8em" }}
      >
        <i className="fas fa-credit-card" />
        <span>
          {" "}
          ¡Paga ahora con tus tarjetas de credito! visa, mastercard o american
          express
        </span>
      </div>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <HashLink
            className="navbar-brand"
            onClick={() => {
              top(), toggle();
            }}
            to="/"
          >
            <img src={logo} alt="IDéntico" style={{ maxWidth: "197px" }} />
          </HashLink>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="cAzulM">
              <i className="fas fa-2x fa-bars" />
            </span>
          </button>

          <div
            className={
              active
                ? " navbar-collapse collapsing  "
                : " collapse navbar-collapse  "
            }
            id="navbarResponsive"
          >
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <HashLink
                  to="/"
                  onClick={() => {
                    top();
                    toggle();
                  }}
                  className="nav-link"
                >
                  Inicio
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink
                  to="/nosotros"
                  onClick={() => {
                    scroll(), toggle();
                  }}
                  className="nav-link"
                >
                  Quiénes Somos
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink
                  to="/productos"
                  onClick={() => {
                    scroll(), toggle();
                  }}
                  className="nav-link"
                >
                  Productos
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink
                  to="/servicios"
                  onClick={() => {
                    scroll(), toggle();
                  }}
                  className="nav-link"
                >
                  Servicios
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink
                  to="/blog"
                  onClick={() => {
                    top(), toggle();
                  }}
                  className="nav-link"
                >
                  Blog
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink
                  smooth
                  onClick={toggle}
                  to="#contactanos"
                  className="nav-link scroll"
                >
                  Contacto
                </HashLink>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link btn btn-primary"
                  href="http://identishop.myshopify.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  COMPRA ONLINE
                </a>
              </li>
              {/* <li className="nav-item">
                <HashLink
                  smooth
                  onClick={toggle}
                  to="/cotizador"
                  className="nav-link scroll"
                >
                  Cotizador
                </HashLink>
              </li> */}
              <li className="nav-item d-flex d-lg-none">
                <form className="form-row" action="resultados" method="post">
                  <div className="col-auto">
                    <input
                      className="form-control"
                      type="search"
                      aria-label="Search"
                      name="Buscar"
                    />
                  </div>
                  <div className="col-auto">
                    <button className="btn btn-outline-primary" type="submit">
                      Buscar
                    </button>
                  </div>
                </form>
              </li>
            </ul>
          </div>

          <Search />
        </div>
      </nav>

      <div>
        <a
          href=""
          className="btn-llamanos"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          <img src={llamada} alt="Te llamamos" className="img-btn-contacto" />
        </a>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                <Formulario />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;