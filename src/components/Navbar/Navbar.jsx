import { NavLink } from "react-router-dom";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import "./Navbar.css";

const Navbar = () => {
    gsap.registerPlugin(ScrollToPlugin);
    const goTo = (id) => {
      gsap.to(window, {
        duration: 1.1,
       ease: "back.out(1.1)",
        scrollTo: "#" + id,
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
