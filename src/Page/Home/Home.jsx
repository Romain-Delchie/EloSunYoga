import Navbar from "../../components/Navbar/Navbar";
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
    </>
  );
};

export default Home;
