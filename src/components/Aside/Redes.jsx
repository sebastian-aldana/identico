import React from "react";
import facebook from "../../img/facebook.svg";
import whatsapp from "../../img/whatsapp.svg";
import linkedin from "../../img/linkedin.svg";
import twitter from "../../img/twitter.svg";
const Redes = () => {
  const URLactual = window.location;
  return (
    <>
      <h3>Comparte en tus redes sociales</h3>
      <div className="redes-sociales">
        <a
          target="_blank"
          href={`http://www.facebook.com/sharer.php?u=${URLactual}`}
        >
          <img src={facebook} alt="imagen" />
        </a>
        <a
          target="_blank"
          href="javascript:var dir=window.document.URL;var tit=window.document.title;var tit2=encodeURIComponent(tit);window.location.href=('http://twitter.com/?status='+tit2+'%20'+dir+'');"
        >
          <img src={twitter} alt="imagen" />
        </a>
        <a
          target="_blank"
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${URLactual}`}
        >
          <img src={linkedin} alt="imagen" />
        </a>
      </div>
    </>
  );
};

export default Redes;
