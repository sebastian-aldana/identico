import React from "react";

const GridPost = () => {
  const post = require("../json/posts.json");
  return (
    <>
      {post.data.map(dato => {
        return (
          <div className="item">
            <div className="titulos" key={dato.id}>
              <h6>{dato.categoria}</h6>
              <p>{dato.title}</p>
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
