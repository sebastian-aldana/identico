import React from "react";
import { Link } from "react-router-dom";

const MasVendidos = props => {
  return (
    <>
      {props.datos.data.map(dato => {
        return <Item dato={dato} state={props.state} />;
      })}
    </>
  );
};

const Item = props => {
  console.log(props.dato.id);

  return (
    <div
      key={props.dato.id}
      data-aos="fade-up"
      data-aos-duration="1000"
      className="col-md-4 mt-2 mb-4 p-4"
    >
      <div className="marco posr">
        <img
          src={require("../img/productos/impresoras/" + props.dato.img)}
          alt=""
          className="img-fluid"
        />

        <h5
          className="m-0 font-weight-bold"
          style={{ backgroundColor: "#fff" }}
        >
          <span className="py-5 py-xl-4 d-inline-block">
            {props.dato.nombre}
          </span>
        </h5>

        <div className="descripcion text-white " style={{ padding: 0 }}>
          <div className="total">
            <div className="medio">
              <p>{props.dato.descripcion}</p>
              <h3>{props.dato.nombre}</h3>
            </div>
          </div>
        </div>
      </div>
      <Link
        className="btn btn-primary"
        to={`/productos/impresoras/${props.dato.nombre}`}
        // onClick={props.state(props.dato.id)}
        role="button"
      >
        Más información
      </Link>
    </div>
  );
};

export default MasVendidos;
