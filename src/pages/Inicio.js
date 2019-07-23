import React from "react";

import $ from "jquery";
import AOS from "aos";

import mas_vendido from "../img/btn-mas-vendidos.png";
import productos_destacados from "../img/btn-productos-destacados.png";

import home_1 from "../img/clientes/aqr.png";

import home_2 from "../img/home-2.jpg";
import logo_blanco from "../img/logo-blanco.png";
import logo_zebra from "../img/logo-zebra.jpg";
import logo_fargo from "../img/logo-fargo.jpg";

function Inicio() {
  const mas_vendidos = require("../json/vendidos.json");
  const destacados = require("../json/destacados.json");
  const clientes = require("../json/clientes.json");
  const url = clientes.url;
  return (
    <>
      <div class="container-fluid">
        <div class="row mt-4">
          <div
            class="col-12"
            style={{ backgroundColor: "#005694", height: "45px" }}
          />
          <div class="col-12 posr" style={{ backgroundColor: "#ededed" }}>
            <img
              src={`${mas_vendido}`}
              alt="Productos más vendidos"
              class="pestania"
            />
            <div class="row justify-content-center masVendidos mt-5 text-center">
              {mas_vendidos.data.map(dato => {
                return (
                  <div
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    class="col-md-4 mt-2 mb-4 p-4"
                  >
                    <div class="marco posr">
                      <img
                        src={require("../img/productos/impresoras/" + dato.img)}
                        alt=""
                        class="img-fluid"
                      />

                      <h5
                        class="m-0 font-weight-bold"
                        style={{ backgroundColor: "#fff" }}
                      >
                        <span class="py-5 py-xl-4 d-inline-block">
                          {dato.nombre}
                        </span>
                      </h5>

                      <div
                        class="descripcion text-white "
                        style={{ padding: 0 }}
                      >
                        <div class="total">
                          <div class="medio">
                            <p>{dato.descripcion}</p>
                            <h3>{dato.nombre}</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <a class="btn btn-primary" href="json 4" role="button">
                      Más información
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div class="row justify-content-center mt-5">
          <div
            class="col-11 mt-4 posr"
            style={{ backgroundColor: "#0096c7", height: "25px" }}
          >
            <img
              src={productos_destacados}
              class="pestania"
              alt="Productos destcados"
              style={{ right: "5%", left: "inherit" }}
            />
          </div>

          <div class="col-11 destacados mt-4">
            <div
              data-aos="fade-down"
              data-aos-duration="1000"
              class="text-center px-2"
            >
              <a href="link">
                <img src="imagen" alt="" class="img-fluid" />
              </a>

              <a href="link">
                <p>json</p>
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
              //   style={{ backgroundColor: rgba(0, 150, 199, 0.6) }}
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

        <div class="row my-5">
          <div class="col-12 text-center">
            <h1>Somos distribuidores</h1>
            <img src={logo_fargo} alt="" class="img-fluid mx-2" />
            <img src={logo_zebra} alt="" class="img-fluid mx-2" />
          </div>
        </div>

        <div class="row justify-content-center my-5">
          <span id="contacto" />
          <div class="col-12 text-center">
            <h2>Nuestros clientes</h2>
          </div>
          <div class="col-10 logos mb-4">
            {clientes.data.map(cliente => {
              return (
                <div>
                  <img
                    src={require("../img/clientes/" + cliente.name + ".png")}
                    class="img-fluid mx-auto"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* <script src="vendor/jquery/jquery.min.js"></script>
		<script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

		<script src="js/scripts.js" type="text/javascript" charset="utf-8"></script>
		<script src="js/valida_contacto.js" type="text/javascript" charset="utf-8"></script>
		<script src="js/valida_te_llamamos.js" type="text/javascript" charset="utf-8"></script>

		<script type="text/javascript" src="js/slick/slick.js"></script>

    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script> */}

      {/* <script type="text/javascript">
        {$(document).ready(function() {
          AOS.init();

          $(".destacados").slick({
            slidesToShow: 4,
            autoplay: true,
            infinite: true,
            autoplaySpeed: 3000,
            responsive: [
              {
                breakpoint: 800,
                settings: {
                  arrows: true,
                  slidesToShow: 3
                }
              },
              {
                breakpoint: 700,
                settings: {
                  arrows: false,
                  dots: true,
                  slidesToShow: 2
                }
              },
              {
                breakpoint: 500,
                settings: {
                  arrows: false,
                  dots: true,
                  slidesToShow: 1
                }
              }
            ]
          });

          $(".logos").slick({
            slidesToShow: 6,
            autoplay: true,
            infinite: true,
            autoplaySpeed: 3000,
            responsive: [
              {
                breakpoint: 800,
                settings: {
                  arrows: true,
                  slidesToShow: 3
                }
              },
              {
                breakpoint: 700,
                settings: {
                  arrows: false,
                  dots: true,
                  slidesToShow: 2
                }
              },
              {
                breakpoint: 500,
                settings: {
                  arrows: false,
                  dots: true,
                  slidesToShow: 1
                }
              }
            ]
          });
        })}
      </script> */}
    </>
  );
}

export default Inicio;
