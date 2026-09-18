/* Consentimento de cookies (RGPD).
   O Google Analytics só é carregado depois de o visitante aceitar. A escolha
   fica guardada no localStorage e pode ser mudada a qualquer momento no link
   "Cookies" do rodapé — retirar o consentimento tem de ser tão fácil como dá-lo. */

(function initConsent() {
  const GA_ID = "G-9G4430EXKC";
  const STORAGE_KEY = "cookieConsent"; // "granted" | "denied"

  const banner = document.getElementById("cookieBanner");
  const acceptBtn = document.getElementById("cookieAccept");
  const rejectBtn = document.getElementById("cookieReject");
  const settingsBtn = document.getElementById("cookieSettings");

  if (!banner || !acceptBtn || !rejectBtn) return;

  const readChoice = () => {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  };

  const saveChoice = (value) => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch (e) {
      /* sem localStorage a escolha vale só para esta visita */
    }
  };

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

  // o aviso não pode tapar o botão de WhatsApp, que fica no mesmo canto
  const syncOffset = () => {
    document.documentElement.style.setProperty("--cookie-banner-h", banner.offsetHeight + "px");
  };

  function showBanner(focus) {
    banner.hidden = false;
    document.body.classList.add("has-cookie-banner");
    syncOffset();
    if (focus) acceptBtn.focus();
  }

  function hideBanner() {
    banner.hidden = true;
    document.body.classList.remove("has-cookie-banner");
  }

  acceptBtn.addEventListener("click", () => {
    saveChoice("granted");
    loadAnalytics();
    hideBanner();
  });

  rejectBtn.addEventListener("click", () => {
    saveChoice("denied");
    stopAnalytics();
    hideBanner();
  });

  if (settingsBtn) settingsBtn.addEventListener("click", () => showBanner(true));

  window.addEventListener("resize", () => {
    if (!banner.hidden) syncOffset();
  });
  // a altura muda quando o texto troca de idioma
  document.addEventListener("localechange", () => {
    if (!banner.hidden) syncOffset();
  });

  const choice = readChoice();
  if (choice === "granted") loadAnalytics();
  else if (choice !== "denied") showBanner(false);
})();
