/* Cada secção (excepto o topo, já visível ao carregar) ganha um fade + leve
   deslize ao entrar no ecrã. A classe que a esconde só é aplicada por aqui,
   nunca no HTML: se este script não correr, a secção fica sempre visível. */

(function initSectionReveal() {
  const sections = document.querySelectorAll("main > .section");
  if (!sections.length) return;

  if (!("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.15 }
  );

  sections.forEach((section) => {
    section.classList.add("section-reveal");
    observer.observe(section);
  });
})();
