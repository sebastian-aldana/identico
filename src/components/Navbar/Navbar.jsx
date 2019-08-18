import React from "react";
import llamada from "../../img/llamada.png";
import logo from "../../img/logo.png";

import { Link } from "react-router-dom";

const Navbar = () => {
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
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="IDéntico" style={{ maxWidth: "197px" }} />
          </Link>

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

          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/nosotros" className="nav-link">
                  Quiénes Somos
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/productos" className="nav-link">
                  Productos
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/servicios" className="nav-link">
                  Servicios
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/blog" className="nav-link">
                  Blog
                </Link>
              </li>
              {/* <!-- <li className="nav-item"><a href="" className="nav-link">Blog</a></li> --> */}
              <li className="nav-item">
                <a href="#contactanos" className="nav-link scroll">
                  Contacto
                </a>
              </li>
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

          <form className="busqueda d-none d-lg-block" action="resultados">
            <fieldset className="search-footer">
              <input id="search-box" type="text" name="buscar" />
            </fieldset>
          </form>
        </div>
      </nav>

      <div>
        <a
          href=""
          className="btn-llamanos"
          data-toggle="modal"
          data-target="#exampleModal"
          style={{ position: "fixed", zIndex: 10000, top: "20%", left: "0" }}
        >
          <img src={llamada} alt="Te llamamos" style={{ width: "90px" }} />
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
                <form
                  className="px-5 py-5 py-md-4"
                  method="post"
                  action="procesa.php"
                >
                  <div className="form-group mt-4 mt-md-0">
                    <input
                      type="text"
                      className="form-control"
                      id="id_nombre_dos"
                      name="nombre"
                      placeholder="Nombre"
                    />
                    <div className="invalid-feedback" />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="id_email_dos"
                      name="email"
                      placeholder="Email"
                    />
                    <div className="invalid-feedback" />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      rows="5"
                      id="id_msj_dos"
                      name="msj"
                      placeholder="Mensaje"
                    />
                    <div className="invalid-feedback" />
                  </div>
                  <div className="form-row">
                    <div className="form-group col-12">
                      <div
                        className="g-recaptcha"
                        data-sitekey="6LcVhnkUAAAAAHSk1tt1yOGPPE6y6OtE85kvxAni"
                      />
                    </div>
                    <div className="form-group col-12 text-center text-md-right">
                      <button
                        type="submit"
                        id="id_enviar_dos"
                        className="btn btn-primary badge-pill px-4"
                      >
                        ENVIAR
                      </button>
                    </div>
                  </div>
                  <input type="hidden" name="InsertContact" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
