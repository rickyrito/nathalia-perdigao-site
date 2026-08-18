/* Acessibilidade partilhada pelos diálogos (pesquisa, idioma, galeria).
   Mantém o foco dentro do diálogo aberto e devolve-o a quem o abriu. */

window.A11yDialog = (function () {
  const FOCUSABLE = [
    "a[href]", "button:not([disabled])", "input:not([disabled])",
    "select:not([disabled])", "textarea:not([disabled])", "[tabindex]:not([tabindex='-1'])"
  ].join(",");

  function focusableIn(container) {
    return Array.from(container.querySelectorAll(FOCUSABLE))
      .filter((el) => el.offsetWidth > 0 || el.offsetHeight > 0 || el === document.activeElement);
  }

  /* Prende o Tab dentro do diálogo enquanto estiver aberto */
  function trap(dialog) {
    dialog.addEventListener("keydown", (event) => {
      if (event.key !== "Tab") return;
      const items = focusableIn(dialog);
      if (!items.length) return;

      const first = items[0];
      const last = items[items.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    });
  }

  let lastTrigger = null;

  function remember() {
    lastTrigger = document.activeElement;
  }

  function restore() {
    if (lastTrigger && typeof lastTrigger.focus === "function") lastTrigger.focus();
    lastTrigger = null;
  }

  return { trap, remember, restore, focusableIn };
})();

/* Modal da declaração de acessibilidade */
(function initStatement() {
  const modal = document.getElementById("a11yModal");
  const trigger = document.getElementById("a11yTrigger");
  const closeBtn = document.getElementById("a11yClose");
  if (!modal || !trigger) return;

  window.A11yDialog.trap(modal);

  const open = () => {
    window.A11yDialog.remember();
    modal.classList.add("is-open");
    document.body.style.overflow = "hidden";
    setTimeout(() => closeBtn.focus(), 50);
  };

  const close = () => {
    modal.classList.remove("is-open");
    document.body.style.overflow = "";
    window.A11yDialog.restore();
  };

  trigger.addEventListener("click", open);
  closeBtn.addEventListener("click", close);

  modal.addEventListener("click", (event) => {
    if (event.target === modal) close();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("is-open")) close();
  });
})();
