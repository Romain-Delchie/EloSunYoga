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
              petit groupe - 8 personnes maximum
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
      <h2>Événements:</h2>
      <div className="pricing-bottom">
        <div className="pro-section">
          <div className="company">
            <p>
              Et si vous faisiez de votre événement un véritable moment de
              bien-être et de connexion ?
            </p>

            <p>
              EVJF, anniversaire, événement privé ou séance de yoga en
              entreprise…
              <br />
              Je vous propose des séances personnalisées, imaginées en
              fonction de votre groupe, de votre lieu et de l'ambiance que
              vous souhaitez créer.
            </p>

            <p>
              À travers le mouvement, la respiration et la relaxation, je
              vous invite à ralentir, vous reconnecter à vous-même et
              profiter pleinement de l'instant présent, tout en partageant
              une expérience unique avec vos proches ou vos collègues.
            </p>

            <p>
              Parce que chaque groupe est différent, je place l'écoute, la
              bienveillance et l'adaptation au cœur de mes séances.
            </p>

            <p>Une parenthèse hors du quotidien, pour prendre soin de soi… ensemble. 🌿</p>
          </div>
          <div className="pro-image">
            <img src="/yoga.jpeg" alt="elodie fait du yoga" />
          </div>
        </div>
      </div>
    </section>
  );
}