import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Carrousel from "../components/Carousel/Carousel";
import Head from "../components/Head/Head";

import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Footer from "../components/Footer/Footer";

const Layout = props => {
  return (
    <>
      <Navbar />
      <Carrousel />
      {props.children}
      <Head />
      <Footer />
    </>
  );
};

export default Layout;
