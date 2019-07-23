import React from "react";

import LoyalStudio from "../../img/loyalstudio.jpg";

const Lealtad = () => {
  const servicios = require("../../json/servicios.json");
  return (
    <>
      <div class="container-fluid">
        <span id="programa-lealtad" />

        <div class="row justify-content-center my-5 tabss">
          <div class="col-12 p-0">
            <ul
              class="nav nav-tabs mb-4 mb-md-5"
              id="myTab"
              role="tablist"
              style={{ borderBottom: "transparent" }}
            >
              <li class="nav-item text-center active" id="tabUno">
                <a
                  class="nav-link total acti active"
                  id="lealtad-tab"
                  data-toggle="tab"
                  href="#lealtad"
                  role="tab"
                  aria-controls="lealtad"
                  aria-selected="true"
                >
                  <span class="medio">
                    PROGRAMA
                    <br />
                    DE LEALTAD
                  </span>
                </a>
              </li>
              <li class="nav-item text-center">
                <a class="nav-link total" href="identimovil#identimovil">
                  <span class="medio">IDENTIMÓVIL</span>
                </a>
              </li>
              <li class="nav-item text-center">
                <a class="nav-link total" href="identinet#identinet">
                  <span class="medio">IDÉNTINET</span>
                </a>
              </li>
              <li class="nav-item text-center">
                <a
                  class="nav-link total"
                  href="mantenimineto-correctivo-y-preventivo#mantenimiento"
                >
                  <span class="medio">
                    MANTENIMIENTO
                    <br />
                    CORRECTIVO Y<br />
                    PREVENTIVO
                  </span>
                </a>
              </li>
            </ul>
            <div class="tab-content" id="myTabContent">
              <div
                class="tab-pane fade show active p-3 p-md-5 text-justify"
                id="lealtad"
                role="tabpanel"
                aria-labelledby="lealtad-tab"
              >
                {servicios.data.map(servicio => {
                  return (
                    <>
                      <img
                        src={LoyalStudio}
                        alt="LoyalStudio"
                        class="img-fluid float-md-left mr-md-4 mb-4"
                      />
                      <div
                        dangerouslySetInnerHTML={{
                          __html: `${servicio.contenido}`
                        }}
                      />
                    </>
                  );
                })}
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
