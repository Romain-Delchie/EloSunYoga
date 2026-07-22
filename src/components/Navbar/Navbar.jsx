import { useState } from "react";
import { FaInstagram, FaFacebookF, FaBars, FaTimes } from "react-icons/fa";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import "./Navbar.css";

gsap.registerPlugin(ScrollToPlugin);

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const goTo = (id) => {
    setOpen(false);

    gsap.to(window, {
      duration: 1.2,
      ease: "power3.inOut",
      scrollTo: {
        y: "#" + id,
        offsetY: 80,
      },
    });
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
          <li onClick={() => goTo("contact")}>CONTACT</li>
        </nav>

        <div className="social">
          <a href="#">
            <FaInstagram />
          </a>

          <a href="#">
            <FaFacebookF />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
