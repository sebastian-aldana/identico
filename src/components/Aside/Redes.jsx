import React from "react";
import facebook from "../../img/facebook.svg";
import whatsapp from "../../img/whatsapp.svg";
import linkedin from "../../img/linkedin.svg";
const Redes = () => {
  return (
    <div className="redes-sociales">
      <a target="_blank" href="">
        <img src={facebook} alt="imagen" />
      </a>
      <a target="_blank" href="">
        <img src={linkedin} alt="imagen" />
      </a>
      <a target="_blank" href="">
        <img src={whatsapp} alt="imagen" />
      </a>
    </div>
  );
};

export default Redes;
