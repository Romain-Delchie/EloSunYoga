import { useState } from "react";
import { FaInstagram, FaFacebookF, FaBars, FaTimes } from "react-icons/fa";
import { scrollToSection } from "../../utils/scrollTo";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const goTo = (id) => {
    setOpen(false);
    scrollToSection(id);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="burger" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </div>

        <nav className={open ? "nav open" : "nav"}>
          <li onClick={() => goTo("home")}>ACCUEIL</li>
          <li onClick={() => goTo("about")}>À PROPOS</li>
          <li onClick={() => goTo("yoga")}>YOGA</li>
          <li onClick={() => goTo("pricing")}>TARIFS & PLANNING</li>
          <li onClick={() => goTo("evenements")}>ÉVÉNEMENTS</li>
          <li onClick={() => goTo("contact")}>CONTACT</li>
        </nav>

        <div className="social">
          <a href="https://www.instagram.com/elo.sun.yoga?igsh=MWcxa3Y5dXRtYjVsbw%3D%3D&utm_source=qr">
            <FaInstagram />
          </a>

          <a href="https://www.facebook.com/share/19KYTtorYr/?mibextid=wwXIfr">
            <FaFacebookF />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
