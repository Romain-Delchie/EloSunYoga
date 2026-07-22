import "./About.css";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export default function About() {
const sectionRef = useRef(null);
const imageRef = useRef(null);
const leftRef = useRef(null);
  useGSAP(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    const left = leftRef.current;

    const distance = () => {
      // hauteur réelle de la section
      const sectionHeight = section.offsetHeight;

      // hauteur réelle de l'image
      const imageHeight = image.offsetHeight;

      // l'image descend jusqu'au bas de la section
      return sectionHeight - imageHeight - 160;
    };

    gsap.to(image, {
      y: distance,

      ease: "none",

      scrollTrigger: {
        trigger: section,

        start: "top top",

        end: "bottom bottom",

        scrub: 1,

        invalidateOnRefresh: true,
      },
    });

    gsap.to(left, {
      y: 70,

      ease: "none",

      scrollTrigger: {
        trigger: section,

        start: "top top",

        end: "bottom bottom",

        scrub: 1,
      },
    });
  });
  return (
    <section className="about" id="about" ref={sectionRef}>
      <div className="about-left" ref={leftRef}>
        <h2>Qui suis-je ?</h2>

        <p className="intro">
          Je m'appelle Elodie et je suis professeur de yoga.
        </p>

        <div className="quote">
          <p>
            Choisir un cours de yoga, c'est aussi choisir la personne qui vous
            accompagnera dans cette expérience.
          </p>

          <p>
            Partager un peu de son temps, de son énergie et parfois même de son
            histoire.
          </p>
        </div>

        <div className="content">
          <p>
            Pendant plus de 15 ans, j’ai évolué dans l’univers des cosmétiques,
            un domaine profondément lié au bien-être et à l’attention portée aux
            autres. Passionnée d’aromathérapie, de voyages en van, de
            photographie et de rencontres humaines, j’ai toujours été animée par
            une même envie : apporter de la joie, créer du lien et contribuer au
            bien-être de ceux qui m’entourent.
          </p>

          <p>
            Le yoga fait partie de ma vie depuis plus de 10 ans. Ce qui a
            commencé comme une pratique personnelle est devenu au fil du temps
            une véritable philosophie de vie, un espace de reconnexion à soi,
            d’équilibre et de sérénité.
          </p>

          <p>
            Aujourd’hui, c’est avec authenticité, bienveillance et enthousiasme
            que je partage cette pratique, en proposant des cours accessibles à
            tous, dans le respect de chaque corps et de chaque parcours.
          </p>

          <p>
            Au plaisir de vous rencontrer et de vous accompagner sur le tapis.
          </p>
        </div>
      </div>

      <div className="about-right">
        <img ref={imageRef} src="/bras.jpeg" alt="Elodie Yoga" />
      </div>
    </section>
  );
}