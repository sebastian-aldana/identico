import React from "react";
import "../css/postdestacados.css";
import uno from "../post/uno.jpg";
import { Link } from "react-router-dom";

const PostDestacados = () => {
  return (
    <div className="destacados">
      <div className="destacados-container">
        <h6 className="destacados-title">Ultimos Post</h6>
        <div className="imagen" />
        <p className="texto centro">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          laboriosam cupiditate atque quas veniam dolor temporibus quidem
          debitis doloremque itaque? Vero, perferendis. Odio pariatur nihil
          veritatis corrupti aspernatur dignissimos doloremque.
        </p>
        <div className="boton">
          <Link
            className="btn btn-primary boton-position "
            to="/"
            // onClick={props.state(props.dato.id)}
            role="button"
          >
            <p>Más información</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostDestacados;
