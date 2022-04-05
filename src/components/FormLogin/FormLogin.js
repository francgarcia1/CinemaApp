import React from "react";
import styles from "./FormStyles.css";
import "./FormLoginStyles";

const FormLogin = () => {
  return (
    <section className="container">
      <div className="invcontainer">
        <h1>Bienvenido, ingresa tus datos para ingresar</h1>
        <div className="formContainer">
          <label for="firstname" class="placeholder">
            Correo eletronico
          </label>
          <input
            className="input"
            type="email"
            placeholder="Ingresa tu Correo"
          ></input>
          <label for="firstname" class="placeholder">
            Constrasena
          </label>
          <input
            className="input"
            type="password"
            placeholder="Ingresa tu contrasena del sitio"
          ></input>
        </div>
        <div className="aceptbtn">
          <a href="/">
            <button>Log in</button>
          </a>
        </div>
        <div className="declinebtn">
          <a href="register">
            <button> Aun no tengo cuenta </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FormLogin;
