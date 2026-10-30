import React from "react";
import Menu from "./menu";
import SeccionPrincipal from "./seccionprincipal";
import Footer from "./footer";
import "./App.css";

function App() {
  return (
    <div className="contenedor-app">
      <Menu />
      <SeccionPrincipal />
      <Footer />
    </div>
  );
}

export default App;