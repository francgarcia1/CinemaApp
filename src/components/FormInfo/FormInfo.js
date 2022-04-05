import React from "react";
import { useState } from "react";
import "./FormInfoStyles.css";

const FormInfo = () => {
  const [newnombre, setNewNombre] = useState("");
  const [newpassword, setNewPassword] = useState("");
  const [newemail, setNewEmail] = useState("");

  const crearUsuario = async () => {
    // await addDoc(usuarioCol, {
    //   nombre: newnombre,
    //   password: newpassword,
    //   email: newemail,
    // });
    window.location.replace("/");
  };

  return (
    <section className="container">
      <div className="regcontainer">
        <h1>Para poder registrarte completa los siguientes campos </h1>
        <div className="formContainer">
          <label for="firstname" class="placeholder">
            Nombre Completo
          </label>
          <input
            className="input"
            type="text"
            placeholder="Ingresa tu nombre"
            onChange={(event) => {
              setNewNombre(event.target.value);
            }}
          ></input>
          <label class="placeholder">Correo electronico</label>
          <input
            className="input"
            type="email"
            placeholder="Ingresa tu correo"
            onChange={(event) => {
              setNewEmail(event.target.value);
            }}
          ></input>
          <label class="placeholder">Contrasena</label>
          <input
            className="input"
            type="password"
            placeholder="Ingresa tu contrasena del sitio"
            onChange={(event) => {
              setNewPassword(event.target.value);
            }}
          ></input>
        </div>
        <div className="aceptbtn">
          <a href="/">
            <button>Cancelar</button>
          </a>
        </div>
        <div className="declinebtn">
          <button onClick={crearUsuario}> Crear Cuenta</button>
        </div>
        <img
          alt="maldigo todo"
          src="https://i.pinimg.com/736x/15/a4/8e/15a48e0bac682fd51afc57a09f13df3e.jpg"
        ></img>
      </div>
    </section>
  );
};

export default FormInfo;
