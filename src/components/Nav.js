const Nav = () => {
  window.addEventListener("scroll", function () {
    let nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 350);
  });
  return (
    <div>
      <nav id="navbar" className="navbar">
        <h1 className="name">
          jorge<br></br>guerrero
        </h1>

        <ul className="main-nav">
          <li>
            <a href="#about" className="">
              sobre&nbsp;mi
            </a>
          </li>
          <li>
            <a href="#proyectos" className="">
              proyectos
            </a>
          </li>
          <li>
            <a href="#contact" className="">
              contacto
            </a>
          </li>
        </ul>
        <h2 className="title text">&lt;Programador Front-End&gt;</h2>
      </nav>
    </div>
  );
};

export default Nav;
