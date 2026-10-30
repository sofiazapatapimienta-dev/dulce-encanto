import React from "react";
import "./App.css";

function Menu() {
  return (
    <nav className="menu-navegacion">
      <a className="logo" href="#inicio">
        Dulce Encanto <span>♡</span>
      </a>

      <ul>
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#nosotros">Nosotros</a></li>
        <li><a href="#productos">Productos</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
    </nav>
  );
}

export default Menu;