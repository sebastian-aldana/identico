import React from "react";
import { Link } from "react-router-dom";

const Publicaciones = () => {
  const post = require("../../json/posts.json");
  return (
    <>
      {post.data.map(dato => {
        return (
          <div className="publicaciones">
            <img src={require("../../post/" + dato.img)} alt="" />
            <Link to={`/articulo:${dato.url}`}>
              <div className="resumen">
                <h2>{dato.title}</h2>
              </div>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default Publicaciones;
