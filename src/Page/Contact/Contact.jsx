

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

export default function Contact() {
  const form = useRef();

  const [loading, setLoading] = useState(false);

  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        "service_s642c9m",
        "template_9gcrjyl",
        form.current,
        "CxuVMpOAKH5TwT1g2",
      )
      .then(() => {
        setSent(true);
        setLoading(false);
        form.current.reset();
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-overlay"></div>

      <div className="contact-card">
        <h2>Contactez-moi</h2>

        <p className="contact-info">
          elosunyoga@gmail.com &nbsp;&nbsp; | &nbsp;&nbsp; 06.08.34.91.03
        </p>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Nom" required />

          <input type="email" name="email" placeholder="E-mail" required />

          <textarea
            name="message"
            placeholder="Rédigez votre message ici..."
            required
          />

          <button disabled={loading}>{loading ? "Envoi..." : "Envoyer"}</button>
        </form>

        {sent && <p className="success">Votre message a bien été envoyé ✓</p>}
      </div>
    </section>
  );
}