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
              <div
                className="imagen"
                style={{ backgroundImage: `url(${image})` }}
              />
              <div className="texto centro">
                <h5>{post.title}</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorem laboriosam cupiditate atque quas veniam dolor
                  temporibus quidem debitis doloremque itaque? Vero,
                  perferendis. Odio pariatur nihil veritatis corrupti aspernatur
                  dignissimos doloremque.
                </p>
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
