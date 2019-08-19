import React from "react";
import { Link } from "react-router-dom";

const GridPost = () => {
  const post = require("../json/posts.json");
  return (
    <>
      {post.data.map(dato => {
        return (
          <div className="item">
            <div className="titulos" key={dato.id}>
              <h6>{dato.categoria}</h6>
              <Link to={`/articulo:${dato.url}`}>
                <p className="link">{dato.title}</p>
              </Link>
            </div>
          </div>
        );
      })}
      {/* <div className="item">
        <div className="titulos">
          <h6>Categoria</h6>
          <p>Titulo</p>
        </div>
      </div>
      <div className="item">
        <div className="titulos">
          <h6>Categoria</h6>
          <p>Titulo</p>
        </div>
      </div>
      <div className="item">
        <div className="titulos">
          <h6>Categoria</h6>
          <p>Titulo</p>
        </div>
      </div>
      <div className="item">
        <div className="titulos">
          <h6>Categoria</h6>
          <p>Tiyulo</p>
        </div>
      </div> */}
    </>
  );
};

export default GridPost;
