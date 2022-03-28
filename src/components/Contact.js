import React, { useRef } from "react";
import { Container } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const Result = () => {
  return (
    <p className="contact-success">
      Tu mensaje se envió con éxito,<br></br>¡te contactaré pronto!
    </p>
  );
};

const Contact = () => {
  const form = useRef();
  const [result, showResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ij0n251",
        "template_4sdde5e",
        form.current,
        "RzuW6Vp1EDM5eDm5I"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };
  // Hide Result
  setTimeout(() => {
    showResult(false);
  }, 5000);

  return (
    <div>
      <h1 className="text contact-title" id="contact">
        contacto
      </h1>
      <h2 className="text contact-title subtitle">
        puedes contactarme en mi{" "}
        <a
          href="https://www.linkedin.com/in/jorge-guerrero-saturnino-58a299227"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        , o si es de tu preferencia, enviarme un correo, ¡y responderé lo antes
        posible!
      </h2>

      <section className="contact-section">
        <Container>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type={"text"}
              name="name"
              placeholder="Tu nombre"
              required
            ></input>
            <input
              type={"email"}
              name="email"
              placeholder="Tu correo"
              required
            ></input>
            <input
              type={"text"}
              name="phone"
              placeholder="Tu número de teléfono"
              required
            ></input>
            <textarea
              name="message"
              rows={"4"}
              placeholder="¿Cómo te puedo ayudar?"
            ></textarea>
            <button type="submit">enviar</button>
            <div className="row">{result ? <Result /> : null}</div>
          </form>
        </Container>
      </section>
    </div>
  );
};

export default Contact;
