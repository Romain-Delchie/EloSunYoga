import "./Pricing.css";

export default function Pricing() {
  return (
    <section className="pricing" id="pricing">

      <h2>Tarifs</h2>

      <div className="pricing-top">

        <div className="pricing-image">
          <img src="/dos.jpeg" alt="Yoga" />
        </div>

        <div className="pricing-content">

          <h3>Yoga Vinyasa - Chaise - Yin Yoga</h3>

          <div className="pricing-block">

            <p><strong>Cours collectifs</strong> - petit groupe - 8 personnes maximum</p>

            <p>Durée : 60 mins</p>

            <ul>
              <li>Séance découverte 10€</li>
              <li>Séance à l'unité 20€</li>
              <li>20 séances 350€ (6 mois)</li>
            </ul>

            <p>A l'année :</p>

            <ul>
              <li>1 séance par semaine 490€ (13€ la séance)</li>
              <li>2 séances par semaine 760€ (10€ la séance)</li>
            </ul>

          </div>

          <div className="pricing-block">

            <p><strong>Cours particuliers</strong> : Vinyasa - Chaise & Yin Yoga</p>

            <p>Durée : 60 mins - en ligne ou en présentiel</p>

            <ul>
              <li>Séance à l'unité 70€ sur Salon de Provence et alentours</li>
            </ul>

            <p>Tarif modifiable selon la distance.</p>

            <p>(possibilité de forfait sur demande)</p>

          </div>

        </div>

      </div>

      <div className="company">

        <h3>TARIFS Yoga en entreprise</h3>

        <p>
          Je propose des séances de yoga sur chaise, sur mesure,
          en fonction de vos besoins.
        </p>

        <p>
          Une pause bien-être pour vos collaborateurs,
          une source de détente,
          de concentration
          et de motivation.
        </p>

        <p>
          Chaque entreprise est unique :
          je vous envoie un devis personnalisé sur demande.
        </p>

        <p>
          Contactez-moi pour en discuter
          et créer ensemble une offre adaptée.
        </p>

      </div>

    </section>
  );
}