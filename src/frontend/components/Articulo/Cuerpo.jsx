import React, { Component } from "react";
import Redes from "../Aside/Redes";
import "../../css/articulo.css";

const Titulo = props => {
  const posts = require("../../json/posts.json");

  return (
    <>
      {posts.data.map(post => {
        if (post.url == props.id) {
          return (
            <div>
              <div className="articulo-titulo">
                <h2>{post.title}</h2>
                <p>{post.description}</p>
                <img src={require("../../post/" + post.img)} alt="" />
              </div>
              <p
                dangerouslySetInnerHTML={{
                  __html: `${post.post}`
                }}
              />
              <Redes />
            </div>
          );
        }
      })}
    </>
  );
};
export default Titulo;
