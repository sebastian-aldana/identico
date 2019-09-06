import React from "react";

const datos = require("../json/servicios.json");
const dato = datos.data;

class Ciclo extends React.Component {
  constructor(props) {
    super(props);
    console.log("1. constructor");
    this.state = { data: dato };

    console.log("1. constructor");
  }
  componentDidMount() {
    console.log("3.component did mount");
    this.setState({
      data: []
    });
    console.log("3.component did mount");
  }
  render() {
    console.log("2.Render");
    console.log(this.state.data);
    console.log("2.Render");
    return <h1>{this.state.data}</h1>;
  }
}

export default Ciclo;
