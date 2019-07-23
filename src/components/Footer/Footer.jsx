import React from "react";
import pago_tarjeta from "../../img/pago-tarjeta.jpg";
import tarjetas from "../../img/tarjetas.png";
import whatsapp from "../../img/whatsapp.png";
import contacto from "../../img/btn-contacto.png";
import img_footer from "../../img/imagen-footer.png";

import HubspotForm from "react-hubspot-form";

const Footer = () => {
  return (
    <>
      <div className="row my-5">
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
      <div
        className="btn-whatsapp"
        style={{
          width: "70px",
          position: "fixed",
          top: "250px",
          zIndex: "10000"
        }}
      >
        <a
          href="https://api.whatsapp.com/send?phone=5215579501027"
          target="_blank"
        >
          <img src={whatsapp} alt="" style={{ width: "90px" }} />
        </a>
      </div>
      <footer className="pt-5" id="contactanos">
        <div className="container-fluid">
          <div className="row posr">
            <img
              src={contacto}
              alt="Cotáctanos"
              style={{ width: "278px", height: "57px" }}
              className="pestania"
            />

            <div
              className="col-md-8 p-0 align-self-center"
              style={{ marginTop: "50px", maxWidth: "1fr" }}
            >
              <div style={{ paddingLeft: "20px" }}>
                {/* <HubspotForm
                    portalId="5239056"
                    formId="33ec6d78-377e-4ef6-affe-44f79914547b"
                  /> */}
              </div>
            </div>

            <div className="col-md-4 p-0 align-self-center text-center">
              <img src={img_footer} alt="" className="img-fluid" />
            </div>

            <div className="col-12 p-0">
              <div className="bdAzulO text-center text-white py-4">
                <p className="iconos">
                  <a
                    href="https://www.facebook.com/IdenticoMex/"
                    target="_blank"
                  >
                    <span>
                      <i className="fab fa-facebook-f" />
                    </span>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/identicomx/"
                    target="_blank"
                  >
                    <span>
                      <i className="fab fa-linkedin-in" />
                    </span>
                  </a>
                </p>
                <p style={{ fontWeight: "100", fontSize: "14px" }}>
                  <a
                    href="https://www.google.com/maps/place/Av+Sonora+119,+Roma+Nte.,+06700+Ciudad+de+M%C3%A9xico,+CDMX/@19.4166312,-99.1706431,3a,75y,243.4h,86.19t/data=!3m7!1e1!3m5!1sjgzQBWGsrxaej2jwWAvvLg!2e0!6s%2F%2Fgeo0.ggpht.com%2Fcbk%3Fpanoid%3DjgzQBWGsrxaej2jwWAvvLg%26output%3Dthumbnail%26cb_client%3Dsearch.TACTILE.gps%26thumb%3D2%26w%3D86%26h%3D86%26yaw%3D238.53912%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656!4m8!1m2!2m1!1sAv.+Sonora+119,+PB,+Col.+Roma+Norete,+Del.+Cuauhtemoc,+06700!3m4!1s0x85d1ff46feec46d1:0xc942c36094cbafab!8m2!3d19.4165364!4d-99.1708065"
                    className="text-white"
                    target="_blank"
                  >
                    Av. Ejercito Nacional 505, Despacho 401, Col. Granada, CDMX,
                    11520
                  </a>
                  <br />
                  <a className="text-white" href="tel:+525587894997">
                    DF y zona metropolitana : 55 8789 4997
                  </a>
                  <br />
                  <a className="text-white" href="tel:+525587894997">
                    Línea gratuita a nivel nacional : 01-800-953-0984
                  </a>
                  <br />
                  <a
                    className="text-white"
                    href="mailto:info@identicodf.com.mx"
                  >
                    info@identicodf.com.mx
                  </a>
                </p>
                <p style={{ fontWeight: "100", fontSize: "14px" }}>
                  <a className="text-white" href="aviso-de-privacidad.php">
                    Aviso de Privacidad
                  </a>
                </p>
                <p
                  className="m-0"
                  style={{ fontWeight: "100", fontSize: "14px" }}
                >
                  Copyright &copy; IDéntico 2019
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
