import React from "react";

import Slider from "react-slick";
import AOS from "aos";

import { Link } from "react-router-dom";

import mas_vendido from "../img/btn-mas-vendidos.png";
import productos_destacados from "../img/btn-productos-destacados.png";

import home_2 from "../img/home-2.jpg";
import logo_blanco from "../img/logo-blanco.png";
import logo_zebra from "../img/logo-zebra.jpg";
import logo_fargo from "../img/logo-fargo.jpg";

function Inicio(props) {
  AOS.init();
  const mas_vendidos = require("../json/vendidos.json");
  const destacados = require("../json/destacados.json");
  const clientes = require("../json/clientes.json");
  const settings = {
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
  };
  const settins_2 = {
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
  };

  // {
  //   return holamundo;
  // }

  return (
    <>
      <div className="container-fluid">
        <div className="row mt-4">
          <div
            className="col-12"
            style={{ backgroundColor: "#005694", height: "45px" }}
          />
          <div className="col-12 posr" style={{ backgroundColor: "#ededed" }}>
            <img
              src={`${mas_vendido}`}
              alt="Productos más vendidos"
              className="pestania"
            />
            <div className="row justify-content-center masVendidos mt-5 text-center">
              {mas_vendidos.data.map(dato => {
                return (
                  <div
                    key={dato.id}
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    className="col-md-4 mt-2 mb-4 p-4"
                  >
                    <div className="marco posr">
                      <img
                        src={require("../img/productos/impresoras/" + dato.img)}
                        alt=""
                        className="img-fluid"
                      />

                      <h5
                        className="m-0 font-weight-bold"
                        style={{ backgroundColor: "#fff" }}
                      >
                        <span className="py-5 py-xl-4 d-inline-block">
                          {dato.nombre}
                        </span>
                      </h5>

                      <div
                        className="descripcion text-white "
                        style={{ padding: 0 }}
                      >
                        <div className="total">
                          <div className="medio">
                            <p>{dato.descripcion}</p>
                            <h3>{dato.nombre}</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Link
                      className="btn btn-primary"
                      to="/detalle"
                      onClick={props.cambio(dato.id)}
                      role="button"
                    >
                      Más información
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="row justify-content-center mt-5">
          <div
            className="col-11 mt-4 posr"
            style={{ backgroundColor: "#0096c7", height: "25px" }}
          >
            <img
              src={productos_destacados}
              className="pestania"
              alt="Productos destcados"
              style={{ right: "5%", left: "inherit" }}
            />
          </div>

          <div className="col-11 destacados mt-4">
            <Slider {...settins_2}>
              {destacados.data.map(item => {
                return (
                  <div
                    key={item.id}
                    data-aos="fade-down"
                    data-aos-duration="1000"
                    className="text-center px-2"
                  >
                    <Link to="/detalle">
                      <img
                        // src={home_1}
                        onClick={props.cambio(item.id)}
                        src={require("../img/productos/impresoras/" + item.img)}
                        alt=""
                        className="img-fluid"
                      />
                    </Link>
                    <Link to="/detalle" onClick={props.cambio(item.id)}>
                      <p>{item.nombre}</p>
                    </Link>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>

        <div className="row my-5">
          <div
            className="col-12 my-4 p-0 parallax fondoimg"
            style={{ backgroundImage: `url(${home_2})` }}
          >
            <div
              className="total"
              //   style={{ backgroundColor: rgba(0, 150, 199, 0.6) }}
            >
              <div className="medio text-center">
                <img
                  src={logo_blanco}
                  alt="IDéntico"
                  className="img-fluid"
                  style={{ width: "550px", backgroundPosition: "top" }}
                />
                <h1 className="text-white mt-4 mb-0">
                  Expertos en Identificación Segura
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="row my-5">
          <div className="col-12 text-center">
            <h1>Somos distribuidores</h1>
            <img src={logo_fargo} alt="" className="img-fluid mx-2" />
            <img src={logo_zebra} alt="" className="img-fluid mx-2" />
          </div>
        </div>

        <div className="row justify-content-center my-5">
          <span id="contacto" />
          <div className="col-12 text-center">
            <h2>Nuestros clientes</h2>
          </div>
          <div className="col-10 logos mb-4">
            <Slider {...settings}>
              {clientes.data.map(cliente => {
                return (
                  <div key={cliente.id}>
                    <img
                      src={require("../img/clientes/" + cliente.name + ".png")}
                      className="img-fluid mx-auto"
                    />
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default Inicio;
