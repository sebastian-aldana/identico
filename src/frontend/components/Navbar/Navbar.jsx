import React, { useState } from "react";
import HubspotForm from "react-hubspot-form";
import llamada from "../../img/llamada.png";
import logo from "../../img/logo.png";
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
      console.log(w);
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
          href="https://www.google.com/maps/place/Oficina+401,+Av+Ej%C3%A9rcito+Nacional+505,+Granada,+11520+Ciudad+de+M%C3%A9xico,+CDMX,+M%C3%A9xico/@19.4381931,-99.190458,3a,75y,93.79h,90t/data=!3m8!1e1!3m6!1sbutW4vY7cksBfLI-bPF1SA!2e0!3e11!6s%2F%2Fgeo3.ggpht.com%2Fmaps%2Fphotothumb%2Ffd%2Fv1%3Fbpb%3DChAKDnNlYXJjaC5UQUNUSUxFElIKRAm5tq5oBwLShRGa6RAjil7OVhowCxDThbhCGicaJQoWChQKEgm5tq5oBwLShRERh7Ms_m3hpBILT2ZpY2luYSA0MDEMKgoNAAAAABUAAAAAGgUIeBDoAg%26gl%3DCO!7i13312!8i6656!4m5!3m4!1s0x85d2020768aeb6b9:0x56ce5e8a2310e99a!8m2!3d19.4382031!4d-99.1906407"
          className="text-white"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Av. Ejercito Nacional 505, Oficina 401, Col. Granada, CDMX, 11520{" "}
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
                    console.log(props);
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
                <HubspotForm
                  portalId="5239056"
                  formId="33ec6d78-377e-4ef6-affe-44f79914547b"
                  onSubmit={() => console.log("Submit!")}
                  onReady={form => console.log("Form ready!")}
                  loading={<div>Loading...</div>}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
