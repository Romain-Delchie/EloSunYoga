import { useEffect, useState } from "react";
import "./PromoPopup.css";

export default function PromoPopup() {
  const [popupOpen, setPopupOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPopupOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`promo-popup ${
        popupOpen ? "promo-popup--open" : "promo-popup--closed"
      }`}
    >
      <button
        className="promo-popup__close"
        onClick={() => setPopupOpen(false)}
      >
        ✕
      </button>

      <img
        src="/tarif popup.jpeg"
        alt="Offre Harmonie"
        className="promo-popup__image"
      />

      <button
        className="promo-popup__tab"
        onClick={() => setPopupOpen(!popupOpen)}
      >
        <span className="promo-popup__arrow">{popupOpen ? "❯" : "❮"}</span>

        <span className="promo-popup__text">Offre Harmonie</span>
      </button>
    </div>
  );
}
