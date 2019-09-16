import React from "react";
import { Link } from "react-router-dom";

class ListCategory extends React.Component {
  render() {
    const productos = require("../../json/productos.json");

    return (
      <div className="row productos">
        {productos.data.map(dato => {
          if (dato.id_tipo == this.props.id) {
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

export default ListCategory;
