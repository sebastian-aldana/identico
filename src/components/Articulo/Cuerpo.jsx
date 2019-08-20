import React, { Component } from "react";
import Uno from "../../post/uno.jpg";
import "../../css/articulo.css";

const Titulo = props => {
  console.log(props.id);
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
              <p>{post.post}</p>
            </div>
          );
        }
      })}
    </>
  );
};
export default Titulo;
