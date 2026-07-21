import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <img src="/construction-img.jpg" alt="Yoga" className="hero-bg" />

      <div className="overlay"></div>

      <div className="hero-content">
        <img src="/logo.png" alt="EloSunYoga" className="hero-logo" />

        <p>Professeur de Yoga</p>
      </div>
    </section>
  );
};

export default Hero;
