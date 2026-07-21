import "./Yoga.css";

const practices = [
  {
    title: "YOGA VINYASA",
    image: "/pont.jpeg",
    text: [
      "Le yoga vinyasa est un yoga dynamique qui associe mouvement et respiration dans un enchaînement fluide de postures.",
      "Adaptable à tous les niveaux, il contribue au renforcement musculaire, à l'amélioration de la souplesse, de l'équilibre et de la posture.",
      "Il favorise également la réduction du stress, une meilleure gestion des émotions, la concentration et le bien-être général.",
      "Cette pratique participe ainsi à une meilleure santé physique et mentale.",
    ],
  },
  {
    title: "YOGA SUR CHAISE",
    image: "/chaise.jpeg",
    text: [
      "Le yoga sur chaise est une pratique douce qui adapte les postures traditionnelles à l'aide d'une chaise.",
      "Comme le yoga sur tapis, il apporte de nombreux bienfaits pour le corps et l'esprit, favorisant la mobilité, le bien-être et la réduction du stress.",
      "Accessible à tous, quels que soient l'âge ou la condition physique, il permet de prendre soin de soi en douceur au quotidien.",
    ],
  },
  {
    title: "YIN YOGA",
    image: "/coussin.jpeg",
    text: [
      "Le yin yoga est une pratique douce et relaxante, idéale pour ralentir et se ressourcer qui consiste à maintenir les postures plusieurs minutes afin de relâcher les tensions profondes du corps.",
      "Accessible à tous, il favorise la souplesse, la mobilité articulaire et le lâcher-prise.",
      "Véritable invitation au calme, il aide à réduire le stress, à apaiser le mental et à cultiver un bien-être durable dans un quotidien souvent rythmé et exigeant.",
    ],
  },
];

export default function Yoga() {
  return (
    <section className="yoga" id="yoga">
      <div className="yoga-header">
        <h2>Les Pratiques de Yoga</h2>

        <p>
          Je propose des cours de yoga collectifs et individuels dans le pays
          Salonais.
        </p>

        <p>
          Les pratiques sont réalisées en petit groupe de 8 à 10 personnes
          maximum.
        </p>
      </div>

      <div className="yoga-grid">
        {practices.map((practice) => (
            <div className="practice-card" key={practice.title}>
                <div className="yoga-card-image">
            <img src={practice.image} alt={practice.title} />
</div>
            <h3>{practice.title}</h3>

            <div className="practice-text">
              {practice.text.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
