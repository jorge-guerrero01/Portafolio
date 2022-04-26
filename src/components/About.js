import { Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div>
        <Row>
          <p className="about-title text">sobre mi</p>
        </Row>
        <Row>
          <Col className="images">
            <Row>
              <img
                src={require("./images/html5.png")}
                alt="."
                className="img img-about"
              />
              <img
                src={require("./images/css3.png")}
                alt="."
                className="img img-about"
              />
            </Row>
            <Row>
              <img
                src={require("./images/javascript.png")}
                alt="."
                className="img img-about"
              />
              <img
                src={require("./images/react.png")}
                alt="."
                className="img img-about"
              />
            </Row>
          </Col>
          <Col>
            <p className="text about-text">
              hola, tengo 20 años, y trabajo como programador front-end. Amo
              usar JavaScript, React y Node.js, aunque también tengo profundo
              conocimiento en HTML5, CSS3, Bootstrap y jQuery. Adoro el diseño
              de UI/UX y aunque me encuentro en el tercer año de la carrera de
              Ingeniería en Computación, me dedico tiempo completo a la
              programación.
            </p>
            <div className="icon-links">
              <a
                href="https://www.linkedin.com/in/jorge-guerrero-saturnino-58a299227"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={require("./images/linkedin.png")}
                  alt="."
                  className="img icon icon-in"
                />
              </a>
              <a
                href="https://github.com/jorge-guerrero01?tab=repositories"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={require("./images/github.png")}
                  alt="."
                  className="img icon icon-git"
                />
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default About;
