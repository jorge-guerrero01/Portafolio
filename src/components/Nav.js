import React, { useState } from "react";

const Nav = () => {
  window.addEventListener("scroll", function () {
    let nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 350);
  });
  const width = window.screen.width;
  const [show, setShow] = useState(width > 992 ? true : false);

  return (
    <div>
      <nav id="main-nav" className="navbar">
        <h1 className="name">
          jorge<br></br>guerrero
        </h1>
        <ul className={show ? "main-nav" : "toggle-nav"}>
          <li>
            <a href="#about" className="nav">
              sobre&nbsp;mi
            </a>
          </li>
          <li>
            <a href="#proyectos" className="nav">
              proyectos
            </a>
          </li>
          <li>
            <a href="#contact" className="nav">
              contacto
            </a>
          </li>
        </ul>
        <button className="toggle-icon" onClick={() => setShow(!show)}>
          <i
            id="icon"
            className={show ? "fa-solid fa-xmark" : "fa-solid fa-bars"}
          ></i>
        </button>
        <h2 className="title text">&lt;Programador Front-End&gt;</h2>
      </nav>
    </div>
  );
};
export default Nav;
