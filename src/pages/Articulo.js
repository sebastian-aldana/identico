import React from "react";
import Aside from "../components/Aside/Aside";
import Head from "../components/Head/Head";
import Navbar from "../components/Navbar/Navbar";
import Titulo from "../components/Articulo/Titulo";
import Cuerpo from "../components/Articulo/Cuerpo";

import "../css/blog.css";

class Articulo extends React.Component {
  render() {
    var id = this.props.match.params.id;
    var id = id.replace(":", "");
    return (
      <div className="background-gradient">
        <Navbar />
        {/* <Titulo /> */}
        <div className="section">
          <div className="section-container">
            <Cuerpo id={id} />
            <div className="aside-2">
              <Aside />
            </div>
          </div>
        </div>
        <Head />
      </div>
    );
  }
}

export default Articulo;
