import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Carrousel from "../components/Carousel/Carousel";
import Head from "../components/Head/Head";

import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Layout = props => {
  return (
    <>
      <Head />
      <Navbar />
      <Carrousel />
      {props.children}
    </>
  );
};

export default Layout;
