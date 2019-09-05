import React from "react";
import { Link } from "react-router-dom";

const GridPost = () => {
  const post = require("../json/posts.json");
  return (
    <>
      {post.data.map(dato => {
        return (
          <Link className="item" to={`/articulo/${dato.url}`}>
            <div className="titulos" key={dato.id}>
              <h6>{dato.category}</h6>
              <p className="link">{dato.title}</p>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default GridPost;
