import React from "react";
import pago_tarjeta from "../../img/pago-tarjeta.jpg";
import tarjetas from "../../img/tarjetas.png";
import whatsapp from "../../img/whatsapp.png";
import contacto from "../../img/btn-contacto.png";
import img_footer from "../../img/imagen-footer.png";

const Footer = () => {
  return (
    <>
      <div className="my-5">
        <div
          className="col-12 my-4 p-0 parallax fondoimg"
          style={{ backgroundImage: `url(${pago_tarjeta})` }}
        >
          <div className="total">
            <div className="medio text-center">
              <h1 className="text-white mt-4 mb-0">
                Paga con tu tarjeta de credito
              </h1>
              <div style={{ height: "50px" }} />
              <img
                src={tarjetas}
                alt="IDéntico"
                className="img-fluid"
                style={{ width: "300px", backgroundPosition: "top" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
