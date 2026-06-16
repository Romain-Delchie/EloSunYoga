import "./ConstructionPage.css";
import { FaInstagram,  FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function ConstructionPage() {
  return (
    <section className="construction">
      <div className="construction__overlay" />

      <div className="construction__content">
        <p className="construction__brand">ELOSUNYOGA</p>

        <h1 className="construction__title">
          Site en
          <br />
          Construction
        </h1>

        <p className="construction__subtitle">
          De belles choses prennent forme.
          <br />
          Le site arrive très bientôt !
        </p>

        <div className="construction__badge">2026/2027</div>

        <p className="construction__opening">
          Rendez-Vous fin Août pour l'ouverture des cours 2026/2027
        </p>

        <div className="construction__socials">
          <a
            href="https://www.facebook.com/share/1abLAoUnHF/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://www.instagram.com/elo.sun.yoga?igsh=MWcxa3Y5dXRtYjVsbw%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </section>
  );
}
