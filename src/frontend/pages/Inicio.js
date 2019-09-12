import React from "react";

import Slider from "react-slick";

import { Link } from "react-router-dom";

import mas_vendido from "../img/btn-mas-vendidos.png";
import productos_destacados from "../img/btn-productos-destacados.png";

import home_2 from "../img/home-2.jpg";
import logo_blanco from "../img/logo-blanco.png";
import logo_zebra from "../img/logo-zebra.jpg";
import logo_fargo from "../img/logo-fargo.jpg";
import "../img/whatsapp.png";

import MasVendidos from "../components/MasVendidos";
import Layout from "../containers/Layout";

import AOS from "aos";

// if (typeof window !== "undefined") {
//   import AOS from "aos";
// }

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
    <Layout>
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
              <MasVendidos datos={mas_vendidos} />
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
                    <div>
                      <img
                        // src={home_1}
                        // onClick={props.cambio(item.id)}
                        to={`/detalle/${item.nombre}`}
                        src={require("../img/productos/impresoras/" + item.img)}
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <Link
                      to={`/productos/impresoras/${item.nombre}`}
                      // onClick={props.cambio(item.id)}
                    >
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
                <h1 className="text-white mt-4 mb-0">Expertos</h1>
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
    </Layout>
  );
}

export default Inicio;
