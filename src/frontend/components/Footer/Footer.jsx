import React from "react";
import pago_tarjeta from "../../img/pago-tarjeta.jpg";
import tarjetas from "../../img/tarjetas.png";
import Formulario from "../cliengo/Formulario";
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

      <div className="btn-whatsapp">
        <a
          href="https://api.whatsapp.com/send?phone=5215579501027"
          target="_blank"
          rel="noreferrer"
        >
          <img className="img-btn-contacto" src="/images/whatsapp.png" alt="" />
        </a>
      </div>
      <div className="btn-skype">
        <a href="skype:live:info_824599?chat" target="_blank" rel="noreferrer">
          <img className="img-btn-contacto" src="/images/skype.png" alt="" />
        </a>
        <div className="barra-blanca-bot"></div>
      </div>

      <footer className="pt-5" id="contactanos">
        <div className="container-fluid">
          <div className="row posr">
            <img
              src="/images/btn-contacto.png"
              alt="Cotáctanos"
              className="pestania"
            />
            <div className="col-md-4 col-sm-8 p-5 align-self-center">
              <div>
                <Formulario />
              </div>
            </div>

            <div className="col-md-8 col-sm-4 p-0 align-self-right text-right">
              <img src={img_footer} alt="" className="img-fluid" />
            </div>

            <div class="col-12 p-0">
              <div class="bdAzulO text-center text-white py-4">
                <p class="iconos">
                  <a
                    href="https://www.facebook.com/IdenticoMex/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>
                      <i className="fab fa-facebook-f"></i>
                    </span>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/identicomx/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>
                      <i className="fab fa-linkedin-in"></i>
                    </span>
                  </a>
                </p>
                <p>
                  <a
                    href="#"
                    className="text-white"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Av. Insurgentes Sur No. 1863, Piso 3, Int. 301, Col.
                   
                    Guadalupe Inn, CP 01020
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
                <p>
                  <a
                    className="text-white"
                    href="https://identicomexico.com/avisoprivacidad"
                  >
                    Aviso de Privacidad
                  </a>
                </p>
                <p className="m-0">Copyright &copy; IDéntico</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
