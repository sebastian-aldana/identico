import React from "react";
import Aside from "../components/Aside/Aside";
import Head from "../components/Head/Head";
import Navbar from "../components/Navbar/Navbar";
import Titulo from "../components/Articulo/Titulo";
import Cuerpo from "../components/Articulo/Cuerpo";

import "../css/blog.css";

const Articulo = () => {
  return (
    <div className="background-gradient">
      <Navbar />
      <div className="section " />
      <Titulo />
      <div className="section">
        <div className="section-container">
          <Cuerpo />
          <Aside />
        </div>
      </div>
      <Head />
    </div>
  );
};

export default Articulo;
