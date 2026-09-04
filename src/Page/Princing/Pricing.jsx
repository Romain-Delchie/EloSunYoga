import "./Pricing.css";

export default function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <h2>Tarifs et planning</h2>

      <div className="pricing-top">
        <div className="pricing-image">
          <img src="/planning.jpeg" alt="Yoga" />
        </div>

        <div className="pricing-content">
          <h3>Yoga Vinyasa - Chaise - Yin Yoga</h3>

          <div className="pricing-block">
            <p>
              <strong>
                <u>Cours collectifs</u>
              </strong>{" "}
              :
              <br />
              Petit groupe - 8 personnes maximum
            </p>

            <p>Durée : 60 mins</p>

            <ul>
              <li>Séance découverte 10€</li>
              <li>Séance à l'unité 20€</li>
              <li>20 séances 350€ (6 mois)</li>
              <li>
                À l'année 490€ <span>(13€ la séance)</span>
              </li>
            </ul>
          </div>

          <div className="pricing-block">
            <p>
              <strong>
                <u>Cours particuliers</u>
              </strong>{" "}
              :
              <br />
              Vinyasa - Chaise & Yin Yoga
            </p>

            <p>Durée : 60 mins - en ligne ou en présentiel</p>

            <ul>
              <li>Séance à l'unité 70€ Pays Salonais</li>
            </ul>

            <p>Tarif modifiable selon la distance.</p>

            <p>(possibilité de forfait sur demande)</p>
          </div>
        </div>
      </div>
    </section>
  );
}