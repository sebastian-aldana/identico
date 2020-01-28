import React, { useState } from "react";
import axios from "axios";

const Formulario = () => {
  //Código de instalación Cliengo para www.identicomexico.com

  const [cliente, guardarCliente] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    websiteId: "",
    status: ""
  });

  const API_KEY = "c4dd79a3-5d9e-4d97-9c44-71357a90f58d";
  const URL = `https://api.cliengo.com/1.0/contacts?api_key=c4dd79a3-5d9e-4d97-9c44-71357a90f58d`;

  const actualizarState = e => {
    // Almacenar lo que el usuario escribe en el State
    guardarCliente({
      // obtener copia del estate
      ...cliente,
      //agregar nuevos valores
      [e.target.name]: e.target.value,
      websiteId: "5e2f17ece4b02e8af10aff51",
      status: "new"
    });
  };

  const enviarCliente = e => {
    e.preventDefault();

    console.log(cliente);
    axios
      .post(
        "https://api.cliengo.com/1.0/contacts?api_key=c4dd79a3-5d9e-4d97-9c44-71357a90f58d",
        cliente
      )
      .then(function(response) {
        console.log("response creando contact: ", response);
      })
      .catch(function(error) {
        console.log("error no se pudo crear contact: ", error);
      });
  };
  const mySubmitFunction = () => {
    Leadaki.saveContact({
      full_name: document.getElementById("fullName").value,
      phone: document.getElementById("phone").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value
    });
  };
  return (
    <form onSubmit={enviarCliente}>
      <input
        type="text"
        name="name"
        id="name"
        defaultValue="John Doe"
        onChange={actualizarState}
      />
      <input
        type="text"
        name="email"
        id="email"
        defaultValue="email@company.com"
        onChange={actualizarState}
      />
      <input
        type="text"
        name="phone"
        id="phone"
        defaultValue="+1 555-5555"
        onChange={actualizarState}
      />
      <textarea
        type="text"
        name="message"
        id="message"
        onChange={actualizarState}
      >
        Lorem impsum...
      </textarea>
      <input type="submit" value="Send Information" />
    </form>
  );
};

export default Formulario;
