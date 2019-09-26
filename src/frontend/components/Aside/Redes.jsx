import React from "react";
import facebook from "../../img/facebook.svg";
import "../../css/compartir.css";
import linkedin from "../../img/linkedin.svg";
import twitter from "../../img/twitter.svg";
const Redes = () => {
  const URLactual = window.location;
  return (
    <div>
      <h3>Comparte en tus redes sociales</h3>
      <div className="redes-sociales">
        <a
          target="_blank"
          href={`http://www.facebook.com/sharer.php?u=${URLactual}`}
        >
          <img src={facebook} alt="imagen" /> Facebook
        </a>
        <a
          target="_blank"
          href={`http://twitter.com/intent/tweet?text=${URLactual}`}
        >
          <img src={twitter} alt="imagen" /> Twitter
        </a>

        <a
          target="_blank"
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${URLactual}`}
        >
          <img src={linkedin} alt="imagen" /> Linkedin
        </a>
      </div>
    </div>
  );
};

export default Redes;
