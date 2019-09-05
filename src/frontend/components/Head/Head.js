import React from "react";
import { Helmet } from "react-helmet";

import icon from "../../img/favicon.png";

import custom_styles from "../../css/custom_styles.css";
import styles from "../../css/estilos.css";
import slick_css from "../../js/slick/slick.css";
import slick_theme from "../../js/slick/slick-theme.css";

import font_awesome from "../../js/fontawesome-all";

class Head extends React.Component {
  render() {
    return (
      <div className="application">
        <Helmet>
          <meta charset="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta
            name="description"
            content="IDéntico México Las impresoras de credenciales de PVC y de tarjetas personalizadas para afiliación, identificación de empleados, bonos, regalos o gafetes."
          />
          <title>Home | IDéntico</title>
          <link rel="icon" href={icon} type="image/x-icon" />

          <noscript>{`
        <link  rel="preload  as="style" href="../../css/estilos.css" />
          <link  rel="preload  as="style" href="../../css/custom_styles.css" />
        `}</noscript>

          {/* <script
            src="https://www.google.com/recaptcha/api.js"
            type="text/javascript"
          /> */}
        </Helmet>
      </div>
    );
  }
}

export default Head;
