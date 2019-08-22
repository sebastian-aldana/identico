import React from "react";
import "../css/postdestacados.css";
import { Link } from "react-router-dom";
import image from "../post/uno.jpg";

const PostDestacados = () => {
  const post = require("../json/posts.json");
  return (
    <div className="destacados">
      <div className="destacados-container">
        <h6 className="destacados-title">Ultimos Post</h6>
        {post.data.map(post => {
          return (
            <>
              <div className="imagen">
                <img src={require("../post/" + post.img)} alt="" />
              </div>
              <div className="texto centro">
                <h5>{post.title}</h5>
                <p>{post.description}</p>
              </div>
              <div className="boton">
                <Link
                  className="btn btn-primary boton-position "
                  to={`/articulo:${post.url}`}
                  role="button"
                >
                  <p>Más información</p>
                </Link>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default PostDestacados;
