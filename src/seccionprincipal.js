import React, { useState } from "react";
import "./App.css";

function SeccionPrincipal() {
  const [mostrarMensaje, setMostrarMensaje] = useState(false);

  return (
    <main>
      <section className="seccion-principal" id="inicio">
        <div className="contenido-principal">
          <p className="etiqueta">HECHO CON AMOR ♡</p>

          <h1>
            Un pequeño dulce,
            <br />
            una gran felicidad.
          </h1>

          <p className="descripcion">
            En Dulce Encanto convertimos tus momentos especiales
            en recuerdos deliciosos. Descubre nuestros pasteles,
            cupcakes y otras dulces creaciones.
          </p>

          <a href="#productos" className="boton-comprar">
            Descubrir delicias
          </a>
        </div>

        <div className="imagen-principal">
          <img
            src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85"
            alt="Pastel decorado de chocolate"
            className="imagen-destacada"
          />
          <span className="decoracion">♡ Hecho con amor</span>
        </div>
      </section>

      <section className="seccion-nosotros" id="nosotros">
        <p className="etiqueta">NUESTRA ESENCIA</p>
        <h2>Endulzamos tus mejores momentos</h2>
        <p>
          Preparamos cada detalle con dedicación, ingredientes
          seleccionados y mucho amor para compartir contigo.
        </p>
      </section>

      <section className="seccion-productos" id="productos">
        <p className="etiqueta">NUESTROS FAVORITOS</p>
        <h2>Pequeñas tentaciones</h2>

        <div className="productos">
          <article className="producto">
            <img
              src="https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?auto=format&fit=crop&w=600&q=80"
              alt="Pastel artesanal"
            />
            <h3>Pasteles</h3>
            <p>Perfectos para celebrar momentos únicos.</p>
          </article>

          <article className="producto">
            <img
              src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=600&q=80"
              alt="Cupcakes decorados"
            />
            <h3>Cupcakes</h3>
            <p>Pequeños, coloridos y llenos de sabor.</p>
          </article>

          <article className="producto">
            <img
              src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=600&q=80"
              alt="Galletas dulces"
            />
            <h3>Galletas</h3>
            <p>El acompañante ideal para tus tardes.</p>
          </article>
        </div>
      </section>

      <section className="seccion-sorpresa">
        <p className="etiqueta">TENEMOS ALGO PARA TI</p>
        <h2>¡Un dulce regalo te espera!</h2>
        <p>Presiona el botón y descubre tu sorpresa.</p>

        <button
          className="boton-accion"
          onClick={() => setMostrarMensaje(!mostrarMensaje)}
        >
          {mostrarMensaje ? "Ocultar sorpresa" : "Descubrir sorpresa"}
        </button>

        {mostrarMensaje && (
          <p className="mensaje-sorpresa">
            ¡Endulzamos tu día! ♡ Tienes un 20% de descuento
            en tu primera compra.
          </p>
        )}
      </section>
    </main>
  );
}

export default SeccionPrincipal;