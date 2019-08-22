import React from "react";
import img from "../../img/teamwork.svg";
import { Link } from "react-router-dom";

const Publicaciones = () => {
  const post = require("../../json/posts.json");
  return (
    <>
      {post.data.map(dato => {
        return (
          <Link to={`/articulo:${dato.url}`}>
            <div className="publicaciones">
              <img src={require("../../post/" + dato.img)} alt="" />
              <div className="resumen">
                <h2>{dato.title}</h2>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default Publicaciones;
