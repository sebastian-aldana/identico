import React from "react";
import img from "../../img/teamwork.svg";

const Publicaciones = () => {
  return (
    <div className="publicaciones">
      <img src={img} alt="" />
      <div className="resumen">
        <h2>Titulo del articulo</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nihil
          debitis doloremque officia recusandae illum aspernatur consectetur
          repudiandae
        </p>
      </div>
    </div>
  );
};

export default Publicaciones;
