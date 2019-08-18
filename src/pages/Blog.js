import React from "react";
import Aside from "../components/Aside/Aside";
import PostDestacados from "../components/PostDestacados";

import Head from "../components/Head/Head";
import Navbar from "../components/Navbar/Navbar";

import "../css/blog.css";

const Blog = () => {
  return (
    <>
      <Navbar />
      <h1>Aqui deven ir el componente del Carrousel</h1>
      <div className="section">
        <div className="section-container">
          <PostDestacados />
          <Aside />
        </div>
      </div>
      <Head />
    </>
  );
};

export default Blog;
