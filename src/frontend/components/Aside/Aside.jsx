import React from "react";
import Redes from "./Redes";
import "../../css/aside.css";
import Publicaciones from "./Publicaciones";
import Search from "../Navbar/Search";

const Aside = () => {
  return (
    <div className="aside">
      {/* <Search /> */}
      <Publicaciones />
    </div>
  );
};

export default Aside;
