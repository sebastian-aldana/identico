import React, { useState } from "react";

import LoyalStudio from "../../img/loyalstudio.jpg";

import Botones from "../Botones";

const Lealtad = () => {
  const servicios = require("../../json/servicios.json");
  const [active, setActive] = useState(0);
  const [text, setText] = useState(servicios.data[0]);

  const handleClick = id => {
    id.preventDefault();
    console.log(id);

    // setActive(id);
    // setText(servicios.data[id]);
  };

  return (
    <>
      <div className="container-fluid">
        <span id="programa-lealtad" />

        <div className="row justify-content-center my-5 tabss">
          <div className="col-12 p-0">
            <ul
              className="nav nav-tabs mb-4 mb-md-5"
              id="myTab"
              role="tablist"
              style={{ borderBottom: "transparent" }}
            >
              <li
                className={
                  active === 0
                    ? "nav-item text-center active"
                    : " nav-item text-center"
                }
                id="tabUno"
              >
                <a
                  className={
                    active === 0
                      ? "nav-link total acti active"
                      : "nav-link total"
                  }
                  id="lealtad-tab"
                  data-toggle="tab"
                  href="#lealtad"
                  role="tab"
                  aria-controls="lealtad"
                  aria-selected="true"
                  onClick={handleClick}
                >
                  <span className="medio">
                    PROGRAMA
                    <br />
                    DE LEALTAD
                  </span>
                </a>
              </li>
              <li
                className={
                  active === 1
                    ? "nav-item text-center active"
                    : " nav-item text-center"
                }
              >
                <a
                  className={
                    active === 1
                      ? "nav-link total acti active"
                      : "nav-link total"
                  }
                  onClick={handleClick}
                  href="identimovil#identimovil"
                >
                  <span className="medio">IDENTIMÓVIL</span>
                </a>
              </li>
              <li
                className={
                  active === 2
                    ? "nav-item text-center active"
                    : " nav-item text-center"
                }
              >
                <a
                  className={
                    active === 2
                      ? "nav-link total acti active"
                      : "nav-link total"
                  }
                  onClick={handleClick}
                  href="identinet#identinet"
                >
                  <span className="medio">IDÉNTINET</span>
                </a>
              </li>
              <li
                className={
                  active === 3
                    ? "nav-item text-center active"
                    : " nav-item text-center"
                }
              >
                <a
                  className={
                    active === 3
                      ? "nav-link total acti active"
                      : "nav-link total"
                  }
                  onClick={handleClick}
                  href="mantenimineto-correctivo-y-preventivo#mantenimiento"
                >
                  <span className="medio">
                    MANTENIMIENTO
                    <br />
                    CORRECTIVO Y<br />
                    PREVENTIVO
                  </span>
                </a>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active p-3 p-md-5 text-justify"
                id="lealtad"
                role="tabpanel"
                aria-labelledby="lealtad-tab"
              >
                <img
                  src={require("../../img/" + text.img)}
                  alt="LoyalStudio"
                  className="img-fluid float-md-left mr-md-4 mb-4"
                />
                <div
                  dangerouslySetInnerHTML={{
                    __html: `${text.contenido}`
                  }}
                />

                <div />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Lealtad;
