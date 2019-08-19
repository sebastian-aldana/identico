import React from "react";

const Search = () => {
  return (
    <form className="busqueda d-none d-lg-block" action="resultados">
      <fieldset className="search-footer">
        <input id="search-box" type="text" name="buscar" />
      </fieldset>
    </form>
  );
};

export default Search;
