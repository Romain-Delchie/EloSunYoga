import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export function scrollToSection(id) {
  const navbar = document.querySelector(".navbar");
  const offsetY = navbar ? navbar.offsetHeight : 80;

  gsap.to(window, {
    duration: 1.2,
    ease: "power3.inOut",
    scrollTo: {
      y: "#" + id,
      offsetY,
    },
  });
}
