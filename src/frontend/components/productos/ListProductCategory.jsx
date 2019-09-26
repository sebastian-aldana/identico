import React from "react";
import { Link } from "react-router-dom";
import AOS from "aos";

class ListProductCategory extends React.Component {
  render() {
    AOS.init();
    const productos = require("../../json/productos.json");

    return (
      <div className="row productos">
        {productos.data.map(dato => {
          if (
            dato.id_tipo == this.props.id &&
            dato.id_marca == this.props.marca
          ) {
            return (
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                class="col-md-6 col-lg-3 text-center p-3 mb-5 pb-5"
              >
                <Link to={`/productos/${this.props.category}/${dato.nombre}`}>
                  <img
                    src={require("../../img/fotos_productos/" + dato.img)}
                    alt=""
                    class="img-fluid"
                    style={{ height: "80%" }}
                  />
                </Link>
                <Link to={`/productos/${this.props.category}/${dato.nombre}`}>
                  <h6 class="bAculC">
                    <span class="py-4 d-inline-block text-white">
                      {dato.nombre}
                    </span>
                  </h6>
                </Link>
              </div>
            );
          }
        })}
      </div>
    );
  }
}

export default ListProductCategory;
