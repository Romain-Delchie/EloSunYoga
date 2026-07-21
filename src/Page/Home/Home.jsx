import Navbar from "../../components/Navbar/Navbar";
import About from "../About/About";
import Hero from "../Hero/Hero";
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
      </main>
    </>
  );
};

export default Home;
