import React from "react";

import banner_1 from "../../img/slider/banner-1.jpg";
import banner_2 from "../../img/slider/banner-2.jpg";
import banner_3 from "../../img/slider/banner-3.jpg";
import banner_4 from "../../img/slider/banner-4.jpg";
import banner_5 from "../../img/slider/banner-5.jpg";
import next_banner from "../../img/next-banner.png";
import prev_banner from "../../img/prev-banner.png";

const Carrousel = () => {
  return (
    <>
      <div className="col p-0">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={banner_5} alt="Contáctanos" />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src={banner_1}
                alt="Expertos en IDentificación Segura"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src={banner_2}
                alt="Credencializa a todos tus empleados"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src={banner_3}
                alt="Somos distribuidores Zebra"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src={banner_4}
                alt="Somos distribuidores FARGO"
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span className="" aria-hidden="true">
              <img src={prev_banner} alt="" />
            </span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span className="" aria-hidden="true">
              <img src={next_banner} alt="" />
            </span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Carrousel;
