import Navbar from "../../components/Navbar/Navbar";
import PromoPopup from "../../components/PromoPopup/PromoPopup";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Hero from "../Hero/Hero";
import Pricing from "../Princing/Pricing";
import Yoga from "../Yoga/Yoga";


import "./Home.css";

const Home = () => {
  return (
    <>
      <Navbar />

      <main className="home">
              <Hero />
              <About />
        <Yoga />
        <Pricing />
        <Contact />
      </main>

      <PromoPopup />
    </>
  );
};

export default Home;
