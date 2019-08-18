import React from "react";
import Aside from "../components/Aside/Aside";
import PostDestacados from "../components/PostDestacados";
import GridPost from "../components/GridPost";

import Head from "../components/Head/Head";
import Navbar from "../components/Navbar/Navbar";

import "../css/blog.css";

const Blog = () => {
  return (
    <div className="background-gradient">
      <Navbar />
      <div className="section ">
        <div className="grid-post-container">
          <GridPost />
        </div>
      </div>
      <div className="section">
        <div className="section-container">
          <PostDestacados />
          <Aside />
        </div>
      </div>
      <Head />
    </div>
  );
};

export default Blog;
