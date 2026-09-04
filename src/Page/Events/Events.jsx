import "./Events.css";

export default function Events() {
  return (
    <section className="events" id="evenements">
      <h2>Événements</h2>

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
            Je vous propose des séances personnalisées, imaginées en fonction
            de votre groupe, de votre lieu et de l'ambiance que vous
            souhaitez créer.
          </p>

          <p>
            À travers le mouvement, la respiration et la relaxation, je vous
            invite à ralentir, vous reconnecter à vous-même et profiter
            pleinement de l'instant présent, tout en partageant une
            expérience unique avec vos proches ou vos collègues.
          </p>

          <p>
            Parce que chaque groupe est différent, je place l'écoute, la
            bienveillance et l'adaptation au cœur de mes séances.
          </p>

          <p>
            Une parenthèse hors du quotidien, pour prendre soin de soi…
            ensemble. 🌿
          </p>
        </div>

        <div className="pro-image">
          <img src="/yoga.jpeg" alt="elodie fait du yoga" />
        </div>
      </div>
    </section>
  );
}
