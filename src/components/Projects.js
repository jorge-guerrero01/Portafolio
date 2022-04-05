import { Row, Col, Container } from "react-bootstrap";

const Projects = () => {
  return (
    <section className="projects-section" id="proyectos">
      <div>
        <Row>
          <p className="text projects-title">proyectos</p>
        </Row>
        <Row className="projects">
          <Col className="project-col">
            <Container className="project-container">
              <Row>
                <h1 className="text project-title">omnifood</h1>
              </Row>
              <Row>
                <img
                  src={require("./images/omnifood.png")}
                  alt="."
                  className="img project-img"
                />
              </Row>
              <Row>
                <h2 className="text project-text">
                  esta aplicación web fue parte de mi curso de HTML, CSS y
                  jQuery. Mi primera experiencia con el diseño "responsive".
                </h2>
              </Row>
              <div>
                <a
                  href="https://omnifoodjorge.000webhostapp.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="project-btn"
                >
                  visitar
                </a>
              </div>
            </Container>
          </Col>
          <Col className="project-col">
            <Container className="project-container">
              <Row>
                <h1 className="text project-title">pig game</h1>
              </Row>
              <Row>
                <img
                  src={require("./images/pig-game.png")}
                  alt="."
                  className="img project-img"
                />
              </Row>
              <Row>
                <h2 className="text project-text">
                  simple aplicación web parte de mi curso de JavaScript. Hace
                  uso de todos los conceptos clave del lenguaje.
                </h2>
              </Row>
              <div>
                <a
                  href="https://jorgeguerrero-pig-game.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                  className="project-btn"
                >
                  visitar
                </a>
              </div>
            </Container>
          </Col>
          <Col className="project-col">
            <Container className="project-container">
              <Row>
                <h1 className="text project-title">forkify </h1>
              </Row>
              <Row>
                <img
                  src={require("./images/forkify.png")}
                  alt="."
                  className="img project-img"
                />
              </Row>
              <Row>
                <h2 className="text project-text">
                  esta aplicación web fue parte de mi curso de JavaScript, donde
                  aprendí a crear mejores interfaces, y utilizar API's y Node.JS
                </h2>
              </Row>
              <div>
                <a
                  href="https://jorge-guerrero-forkify.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                  className="project-btn"
                >
                  visitar
                </a>
              </div>
            </Container>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Projects;
