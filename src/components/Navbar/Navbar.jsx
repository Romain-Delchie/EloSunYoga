import { NavLink } from "react-router-dom";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import "./Navbar.css";
gsap.registerPlugin(ScrollToPlugin);

const Navbar = () => {
  const goTo = (id) => {
    console.log(id);
    console.log(document.getElementById(id));

    gsap.to(window, {
      duration: 1,
      ease: "power3.out",
      scrollTo: {
        y: "#" + id,
        offsetY: 80,
      },
    });
  };
  return (
    <header className="navbar">
      <div className="navbar-container">
        <nav>
          {/* <a href="#home">ACCUEIL</a>
          <a href="#about">À PROPOS</a>
          <a href="#yoga">YOGA</a>
          <a href="#pricing">TARIFS & PLANNING</a>
          <a href="#pricing">CONTACT</a> */}
          <ul>
            <li onClick={() => goTo("home")}>ACCUEIL</li>

            <li onClick={() => goTo("about")}>À PROPOS</li>

            <li onClick={() => goTo("yoga")}>YOGA</li>

            <li onClick={() => goTo("pricing")}>TARIFS & PLANNING</li>

            <li onClick={() => goTo("contact")}>CONTACT</li>
          </ul>
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
