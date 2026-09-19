/* Consentimento de cookies (RGPD).
   Enquanto não houver uma escolha guardada, o site fica bloqueado por um
   diálogo modal (fundo esbatido, sem fechar em clique fora ou Esc). Qualquer
   decisão — aceitar, rejeitar ou guardar preferências — persiste a escolha
   neste dispositivo e desbloqueia o site.

   Duas categorias não essenciais: o mapa (Google Maps, só carrega o iframe
   depois de autorizado) e o Analytics (Google Analytics, só é ativado depois
   de autorizado). Retirar o consentimento tem de ser tão fácil como dá-lo. */

const GA_ID = "G-9G4430EXKC";
const COOKIE_STORAGE_KEY = "nathalia-cookie-consent";

function readCookieConsent() {
  try {
    const raw = localStorage.getItem(COOKIE_STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function writeCookieConsent(consent) {
  try {
    localStorage.setItem(COOKIE_STORAGE_KEY, JSON.stringify(consent));
  } catch {
    // modo privado: aplica-se na mesma, só não fica guardado para a próxima visita
  }
}

function applyMapConsent(allowed) {
  const frame = document.getElementById("mapFrame");
  const placeholder = document.getElementById("mapPlaceholder");
  if (!frame) return;

  if (allowed) {
    if (!frame.getAttribute("src") && frame.dataset.src) frame.src = frame.dataset.src;
    if (placeholder) placeholder.style.display = "none";
  } else if (placeholder) {
    placeholder.style.display = "";
  }
}

let analyticsLoaded = false;

function loadAnalytics() {
  window["ga-disable-" + GA_ID] = false;
  if (analyticsLoaded) return;
  analyticsLoaded = true;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", GA_ID);

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
  document.head.appendChild(script);
}

/* Desliga o Analytics (flag oficial da Google) e apaga os cookies _ga que já
   tenham sido gravados. O domínio do cookie depende do host, por isso tenta-se
   o host e cada domínio-pai. */
function stopAnalytics() {
  window["ga-disable-" + GA_ID] = true;

  const labels = location.hostname.split(".");
  const domains = [""];
  for (let i = 0; i < labels.length - 1; i++) {
    const domain = labels.slice(i).join(".");
    domains.push(domain, "." + domain);
  }

  document.cookie.split(";").forEach((cookie) => {
    const name = cookie.split("=")[0].trim();
    if (name !== "_ga" && !name.startsWith("_ga_")) return;
    domains.forEach((domain) => {
      document.cookie = name + "=; Max-Age=0; path=/" + (domain ? "; domain=" + domain : "");
    });
  });
}

function applyAnalyticsConsent(allowed) {
  if (allowed) loadAnalytics();
  else stopAnalytics();
}

function applyCookieConsent(consent) {
  applyMapConsent(!!(consent && consent.maps));
  applyAnalyticsConsent(!!(consent && consent.analytics));
}

(function initCookieConsent() {
  const modal = document.getElementById("cookieModal");
  const policyModal = document.getElementById("cookiePolicyModal");
  if (!modal) return;

  const closeBtn = document.getElementById("cookieClose");
  const rejectBtn = document.getElementById("cookieRejectAll");
  const acceptBtn = document.getElementById("cookieAcceptAll");
  const saveBtn = document.getElementById("cookieSave");
  const toggleMaps = document.getElementById("cookieToggleMaps");
  const toggleAnalytics = document.getElementById("cookieToggleAnalytics");
  const prefsTrigger = document.getElementById("cookieSettings");
  const mapEnableBtn = document.getElementById("mapEnableBtn");
  const policyLink = document.getElementById("cookiePolicyLink");
  const policyClose = document.getElementById("cookiePolicyClose");

  window.A11yDialog.trap(modal);
  if (policyModal) window.A11yDialog.trap(policyModal);

  let blocking = false;

  const focusDefault = () => {
    const target = blocking ? acceptBtn : closeBtn;
    if (target) target.focus();
  };

  const openPrefs = (blockNav) => {
    blocking = blockNav;
    const existing = readCookieConsent();
    toggleMaps.checked = !!(existing && existing.maps);
    toggleAnalytics.checked = !!(existing && existing.analytics);

    const alreadyOpen = modal.classList.contains("is-open") ||
      (policyModal && policyModal.classList.contains("is-open"));
    if (!alreadyOpen) window.A11yDialog.remember();

    if (policyModal) policyModal.classList.remove("is-open");
    modal.classList.add("is-open");
    modal.classList.toggle("is-blocking", blocking);
    document.body.style.overflow = "hidden";
    setTimeout(focusDefault, 50);
  };

  const persist = (maps, analytics) => {
    const consent = { maps: !!maps, analytics: !!analytics, ts: Date.now() };
    writeCookieConsent(consent);
    applyCookieConsent(consent);
    modal.classList.remove("is-open", "is-blocking");
    document.body.style.overflow = "";
    blocking = false;
    window.A11yDialog.restore();
  };

  const closePolicy = () => {
    if (!policyModal) return;
    policyModal.classList.remove("is-open");
    modal.classList.add("is-open");
    setTimeout(focusDefault, 50);
  };

  acceptBtn.addEventListener("click", () => persist(true, true));
  rejectBtn.addEventListener("click", () => persist(false, false));
  saveBtn.addEventListener("click", () => persist(toggleMaps.checked, toggleAnalytics.checked));
  closeBtn.addEventListener("click", () => persist(toggleMaps.checked, toggleAnalytics.checked));

  modal.addEventListener("click", (event) => {
    if (event.target === modal && !blocking) persist(toggleMaps.checked, toggleAnalytics.checked);
  });

  if (prefsTrigger) prefsTrigger.addEventListener("click", () => openPrefs(false));
  if (mapEnableBtn) {
    mapEnableBtn.addEventListener("click", () => {
      const existing = readCookieConsent();
      persist(true, !!(existing && existing.analytics));
    });
  }

  if (policyLink && policyModal) {
    policyLink.addEventListener("click", (event) => {
      event.preventDefault();
      modal.classList.remove("is-open");
      policyModal.classList.add("is-open");
      setTimeout(() => policyClose && policyClose.focus(), 50);
    });
  }

  if (policyModal && policyClose) {
    policyClose.addEventListener("click", closePolicy);
    policyModal.addEventListener("click", (event) => {
      if (event.target === policyModal) closePolicy();
    });
  }

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    if (policyModal && policyModal.classList.contains("is-open")) {
      closePolicy();
    } else if (modal.classList.contains("is-open") && !blocking) {
      persist(toggleMaps.checked, toggleAnalytics.checked);
    }
  });

  const existing = readCookieConsent();
  if (existing) {
    applyCookieConsent(existing);
    toggleMaps.checked = !!existing.maps;
    toggleAnalytics.checked = !!existing.analytics;
  } else {
    openPrefs(true);
  }
})();
