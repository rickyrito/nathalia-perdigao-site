/* Multilíngue — traduções e preferência de idioma/região.
   Site estático: as traduções vivem aqui e a escolha do visitante
   fica guardada no localStorage do browser. */

const TRANSLATIONS = {
  pt: {
    "html.lang": "pt-BR",
    "meta.description": "Nathalia Perdigão — especialista em depilação a laser e nail designer em Castelo Branco, Portugal.",

    "nav.sobre": "Sobre",
    "nav.servicos": "Serviços",
    "nav.localizacao": "Localização",
    "nav.galeria": "Galeria",
    "nav.contato": "Contato",

    "hero.eyebrow": "Especialista em estética",
    "hero.subtitle": "Depilação a laser e unhas de acrílico. Pele lisa o ano todo, em Castelo Branco.",
    "hero.btnServices": "Ver serviços",
    "hero.btnBook": "Agendar",

    "sobre.title": "Sobre",
    "sobre.text": "Especialista em depilação a laser e nail designer, natural de Belo Horizonte, Brasil, e radicada em Castelo Branco, Portugal. Trabalho para que cada cliente tenha pele lisa o ano todo e unhas impecáveis, com técnica e cuidado em cada atendimento.",

    "servicos.title": "Serviços",

    "laser.title": "Depilação a Laser",
    "laser.desc": "Pele lisa o ano todo, com tecnologia que elimina até os pelos mais escuros e grossos.",
    "laser.b1": "Pele lisinha e macia",
    "laser.b2": "Ausência de dor e sem riscos de cortes ou flacidez",
    "laser.b3": "Elimina pelos escuros e grossos",
    "laser.b4": "Ganho de tempo e ótimo custo-benefício",
    "laser.b5": "Evita o escurecimento das axilas e traz resultados duradouros",

    "nails.title": "Unhas de Acrílico / Nail Design",
    "nails.desc": 'Unhas de acrílico com acabamento profissional. Confira o trabalho no Instagram <a href="https://www.instagram.com/nathperdigao_naildesigner/" target="_blank" rel="noopener">@nathperdigao_naildesigner</a>.',

    "solario.title": "Bronzeamento em Solário",
    "solario.desc": "Protocolo em 3 sessões para uma marquinha uniforme e duradoura.",
    "solario.b1": "1ª sessão — ativa a melanina e prepara a pele para as demais sessões",
    "solario.b2": "2ª sessão — realça a marquinha e corrige áreas que não bronzearam",
    "solario.b3": "3ª sessão — fixa a marquinha e garante durabilidade da cor por 4 semanas ou mais",

    "pes.title": "Cuidado de Pés",
    "pes.desc": 'Tratamento de renovação da pele dos pés, em parceria com a esteticista <a href="https://www.instagram.com/ofelialopesbeauty/" target="_blank" rel="noopener">@ofelialopesbeauty</a>.',

    "local.title": "Localização",
    "local.address": "Rotunda da Ministra, Carapalha, Castelo Branco, Portugal.",

    "galeria.title": "Galeria",
    "g1": "Nathalia Perdigão",
    "g2": "Depilação a laser",
    "g3": "Nathalia Perdigão, nail designer",
    "g4": "Nail design colorido",
    "g5": "Unhas de acrílico",
    "g6": "Nail art com glitter",
    "g7": "Nail design em azul turquesa",
    "g8": "Unhas nude com ombré",
    "g9": "Nathalia Perdigão",
    "g10": "É mais que depilação, é liberdade",
    "g11": "Unhas vermelhas com detalhe floral",
    "g12": "Unhas rosa com glitter",
    "g13": "Descubra o poder do laser",
    "g14": "Unhas bordô com glitter prateado",
    "g15": "Francesinha branca com strass",
    "g16": "Nathalia Perdigão",
    "g17": "Unhas bordô com francesinha invertida",
    "g18": "Unhas nude com ombré subtil",

    "contato.title": "Contato",
    "contato.text": "Para agendamentos e dúvidas:",

    "footer.rights": "Todos os direitos reservados.",

    "aria.menu": "Abrir menu",
    "aria.prev": "Imagem anterior",
    "aria.next": "Próxima imagem",
    "aria.close": "Fechar imagem",
    "aria.whatsapp": "Contactar via WhatsApp",
    "aria.locale": "Escolher idioma e região",

    "search.placeholder": "Pesquisar no site…",
    "search.empty": "Sem resultados para",
    "search.hint": "Pesquise por serviços, secções ou fotos.",
    "search.groupServices": "Serviços",
    "search.groupSections": "Secções",
    "search.groupGallery": "Galeria",
    "aria.image": "Imagem",
    "search.label": "Pesquisar",
    "aria.search": "Pesquisar",

    "a11y.link": "Acessibilidade",
    "a11y.title": "Declaração de Acessibilidade",
    "a11y.intro": "Este site foi desenvolvido tendo como referência as diretrizes WCAG 2.1, nível AA. Abaixo está o que foi feito e o que ainda falta verificar.",
    "a11y.measuresTitle": "Medidas aplicadas",
    "a11y.m1": "Contrastes de cor verificados segundo a fórmula WCAG, com um mínimo de 4,5:1 no texto.",
    "a11y.m2": "Navegação completa por teclado, com indicador de foco visível e sem armadilhas de foco.",
    "a11y.m3": "Texto alternativo em todas as imagens.",
    "a11y.m4": "Estrutura semântica, com títulos hierarquizados e áreas da página identificadas.",
    "a11y.m5": "Respeito pela preferência do sistema por movimento reduzido.",
    "a11y.m6": "Conteúdo disponível em português, francês e inglês.",
    "a11y.limitsTitle": "Limitações conhecidas",
    "a11y.l1": "A verificação foi sobretudo automática. Ainda não foi feita uma auditoria com leitores de ecrã, pelo que podem existir barreiras por detetar.",
    "a11y.l2": "O mapa é fornecido pelo Google Maps, um serviço externo cuja acessibilidade não controlamos.",
    "a11y.l3": "As descrições de algumas fotografias de trabalhos são sucintas e estão a ser melhoradas.",
    "a11y.contactTitle": "Encontrou alguma barreira?",
    "a11y.contactText": "Se tiver dificuldade em usar alguma parte deste site, diga-nos — é a forma mais rápida de o corrigirmos.",
    "a11y.contactCta": "Falar por WhatsApp",
    "a11y.updated": "Última atualização: agosto de 2026.",
    "modal.title": "Idioma e região",
    "modal.desc": "O conteúdo do site será apresentado no idioma escolhido.",
    "modal.location": "Região",
    "modal.language": "Idioma",
    "modal.save": "Guardar",

    "country.pt": "Portugal",
    "country.fr": "França",
    "country.br": "Brasil",
    "country.uk": "Reino Unido",
    "country.other": "Outro"
  },

  en: {
    "html.lang": "en",
    "meta.description": "Nathalia Perdigão — laser hair removal specialist and nail designer in Castelo Branco, Portugal.",

    "nav.sobre": "About",
    "nav.servicos": "Services",
    "nav.localizacao": "Location",
    "nav.galeria": "Gallery",
    "nav.contato": "Contact",

    "hero.eyebrow": "Beauty & aesthetics specialist",
    "hero.subtitle": "Laser hair removal and acrylic nails. Smooth skin all year round, in Castelo Branco.",
    "hero.btnServices": "View services",
    "hero.btnBook": "Book now",

    "sobre.title": "About",
    "sobre.text": "Laser hair removal specialist and nail designer, originally from Belo Horizonte, Brazil, and based in Castelo Branco, Portugal. I work so that every client enjoys smooth skin all year round and flawless nails, with skill and care at every appointment.",

    "servicos.title": "Services",

    "laser.title": "Laser Hair Removal",
    "laser.desc": "Smooth skin all year round, with technology that removes even the darkest and coarsest hair.",
    "laser.b1": "Smooth, soft skin",
    "laser.b2": "Painless, with no risk of cuts or sagging",
    "laser.b3": "Removes dark and coarse hair",
    "laser.b4": "Saves time and offers great value",
    "laser.b5": "Prevents underarm darkening and delivers lasting results",

    "nails.title": "Acrylic Nails / Nail Design",
    "nails.desc": 'Acrylic nails with a professional finish. See the work on Instagram <a href="https://www.instagram.com/nathperdigao_naildesigner/" target="_blank" rel="noopener">@nathperdigao_naildesigner</a>.',

    "solario.title": "Solarium Tanning",
    "solario.desc": "A 3-session protocol for even, long-lasting tan lines.",
    "solario.b1": "Session 1 — activates melanin and prepares the skin for the following sessions",
    "solario.b2": "Session 2 — enhances the tan lines and evens out areas that did not tan",
    "solario.b3": "Session 3 — sets the tan lines and keeps the colour for 4 weeks or more",

    "pes.title": "Foot Care",
    "pes.desc": 'Foot skin renewal treatment, in partnership with beautician <a href="https://www.instagram.com/ofelialopesbeauty/" target="_blank" rel="noopener">@ofelialopesbeauty</a>.',

    "local.title": "Location",
    "local.address": "Rotunda da Ministra, Carapalha, Castelo Branco, Portugal.",

    "galeria.title": "Gallery",
    "g1": "Nathalia Perdigão",
    "g2": "Laser hair removal",
    "g3": "Nathalia Perdigão, nail designer",
    "g4": "Colourful nail design",
    "g5": "Acrylic nails",
    "g6": "Glitter nail art",
    "g7": "Turquoise blue nail design",
    "g8": "Nude ombré nails",
    "g9": "Nathalia Perdigão",
    "g10": "More than hair removal — it's freedom",
    "g11": "Red nails with floral detail",
    "g12": "Pink nails with glitter",
    "g13": "Discover the power of laser",
    "g14": "Burgundy nails with silver glitter",
    "g15": "White French tips with rhinestones",
    "g16": "Nathalia Perdigão",
    "g17": "Burgundy nails with reverse French",
    "g18": "Subtle nude ombré nails",

    "contato.title": "Contact",
    "contato.text": "For bookings and enquiries:",

    "footer.rights": "All rights reserved.",

    "aria.menu": "Open menu",
    "aria.prev": "Previous image",
    "aria.next": "Next image",
    "aria.close": "Close image",
    "aria.whatsapp": "Contact via WhatsApp",
    "aria.locale": "Choose language and region",

    "search.placeholder": "Search the site…",
    "search.empty": "No results for",
    "search.hint": "Search for services, sections or photos.",
    "search.groupServices": "Services",
    "search.groupSections": "Sections",
    "search.groupGallery": "Gallery",
    "aria.image": "Image",
    "search.label": "Search",
    "aria.search": "Search",

    "a11y.link": "Accessibility",
    "a11y.title": "Accessibility Statement",
    "a11y.intro": "This site was built using the WCAG 2.1 Level AA guidelines as its reference. Below is what has been done and what is still to be verified.",
    "a11y.measuresTitle": "Measures taken",
    "a11y.m1": "Colour contrast verified against the WCAG formula, with a minimum of 4.5:1 for text.",
    "a11y.m2": "Full keyboard navigation, with a visible focus indicator and no keyboard traps.",
    "a11y.m3": "Alternative text on every image.",
    "a11y.m4": "Semantic structure, with a proper heading hierarchy and identified page regions.",
    "a11y.m5": "The system preference for reduced motion is respected.",
    "a11y.m6": "Content available in Portuguese, French and English.",
    "a11y.limitsTitle": "Known limitations",
    "a11y.l1": "Testing has been largely automated. A screen reader audit has not yet been carried out, so undetected barriers may remain.",
    "a11y.l2": "The map is provided by Google Maps, an external service whose accessibility we do not control.",
    "a11y.l3": "Descriptions of some work photos are brief and are being improved.",
    "a11y.contactTitle": "Found a barrier?",
    "a11y.contactText": "If you have difficulty using any part of this site, please tell us — it is the fastest way for us to fix it.",
    "a11y.contactCta": "Message on WhatsApp",
    "a11y.updated": "Last updated: August 2026.",
    "modal.title": "Language & region",
    "modal.desc": "The site content will be shown in the language you choose.",
    "modal.location": "Location",
    "modal.language": "Language",
    "modal.save": "Save",

    "country.pt": "Portugal",
    "country.fr": "France",
    "country.br": "Brazil",
    "country.uk": "United Kingdom",
    "country.other": "Other"
  },

  fr: {
    "html.lang": "fr",
    "meta.description": "Nathalia Perdigão — spécialiste en épilation laser et nail designer à Castelo Branco, Portugal.",

    "nav.sobre": "À propos",
    "nav.servicos": "Services",
    "nav.localizacao": "Localisation",
    "nav.galeria": "Galerie",
    "nav.contato": "Contact",

    "hero.eyebrow": "Spécialiste en esthétique",
    "hero.subtitle": "Épilation laser et ongles en acrylique. Une peau douce toute l'année, à Castelo Branco.",
    "hero.btnServices": "Voir les services",
    "hero.btnBook": "Prendre rendez-vous",

    "sobre.title": "À propos",
    "sobre.text": "Spécialiste en épilation laser et nail designer, originaire de Belo Horizonte, au Brésil, et installée à Castelo Branco, au Portugal. Je travaille pour que chaque cliente ait une peau douce toute l'année et des ongles impeccables, avec technique et attention à chaque rendez-vous.",

    "servicos.title": "Services",

    "laser.title": "Épilation Laser",
    "laser.desc": "Une peau douce toute l'année, avec une technologie qui élimine même les poils les plus foncés et les plus épais.",
    "laser.b1": "Une peau douce et lisse",
    "laser.b2": "Sans douleur, sans risque de coupures ni de relâchement",
    "laser.b3": "Élimine les poils foncés et épais",
    "laser.b4": "Gain de temps et excellent rapport qualité-prix",
    "laser.b5": "Évite le noircissement des aisselles et offre des résultats durables",

    "nails.title": "Ongles en Acrylique / Nail Design",
    "nails.desc": 'Ongles en acrylique avec une finition professionnelle. Découvrez le travail sur Instagram <a href="https://www.instagram.com/nathperdigao_naildesigner/" target="_blank" rel="noopener">@nathperdigao_naildesigner</a>.',

    "solario.title": "Bronzage en Solarium",
    "solario.desc": "Un protocole en 3 séances pour des marques uniformes et durables.",
    "solario.b1": "1re séance — active la mélanine et prépare la peau pour les séances suivantes",
    "solario.b2": "2e séance — accentue les marques et corrige les zones non bronzées",
    "solario.b3": "3e séance — fixe les marques et garantit la couleur pendant 4 semaines ou plus",

    "pes.title": "Soin des Pieds",
    "pes.desc": 'Traitement de renouvellement de la peau des pieds, en partenariat avec l\'esthéticienne <a href="https://www.instagram.com/ofelialopesbeauty/" target="_blank" rel="noopener">@ofelialopesbeauty</a>.',

    "local.title": "Localisation",
    "local.address": "Rotunda da Ministra, Carapalha, Castelo Branco, Portugal.",

    "galeria.title": "Galerie",
    "g1": "Nathalia Perdigão",
    "g2": "Épilation laser",
    "g3": "Nathalia Perdigão, nail designer",
    "g4": "Nail design coloré",
    "g5": "Ongles en acrylique",
    "g6": "Nail art à paillettes",
    "g7": "Nail design bleu turquoise",
    "g8": "Ongles nude en ombré",
    "g9": "Nathalia Perdigão",
    "g10": "Plus qu'une épilation, une liberté",
    "g11": "Ongles rouges avec motif floral",
    "g12": "Ongles roses à paillettes",
    "g13": "Découvrez la puissance du laser",
    "g14": "Ongles bordeaux à paillettes argentées",
    "g15": "French blanche avec strass",
    "g16": "Nathalia Perdigão",
    "g17": "Ongles bordeaux en french inversée",
    "g18": "Ongles nude en ombré subtil",

    "contato.title": "Contact",
    "contato.text": "Pour les rendez-vous et les questions :",

    "footer.rights": "Tous droits réservés.",

    "aria.menu": "Ouvrir le menu",
    "aria.prev": "Image précédente",
    "aria.next": "Image suivante",
    "aria.close": "Fermer l'image",
    "aria.whatsapp": "Contacter via WhatsApp",
    "aria.locale": "Choisir la langue et la région",

    "search.placeholder": "Rechercher sur le site…",
    "search.empty": "Aucun résultat pour",
    "search.hint": "Recherchez des services, des sections ou des photos.",
    "search.groupServices": "Services",
    "search.groupSections": "Sections",
    "search.groupGallery": "Galerie",
    "aria.image": "Image",
    "search.label": "Rechercher",
    "aria.search": "Rechercher",

    "a11y.link": "Accessibilité",
    "a11y.title": "Déclaration d'accessibilité",
    "a11y.intro": "Ce site a été conçu en prenant pour référence les directives WCAG 2.1, niveau AA. Voici ce qui a été fait et ce qui reste à vérifier.",
    "a11y.measuresTitle": "Mesures appliquées",
    "a11y.m1": "Contrastes de couleur vérifiés selon la formule WCAG, avec un minimum de 4,5:1 pour le texte.",
    "a11y.m2": "Navigation complète au clavier, avec indicateur de focus visible et sans piège au clavier.",
    "a11y.m3": "Texte alternatif sur toutes les images.",
    "a11y.m4": "Structure sémantique, avec hiérarchie de titres et régions de page identifiées.",
    "a11y.m5": "Respect de la préférence système pour un mouvement réduit.",
    "a11y.m6": "Contenu disponible en portugais, français et anglais.",
    "a11y.limitsTitle": "Limites connues",
    "a11y.l1": "Les vérifications ont été principalement automatiques. Aucun audit avec lecteurs d'écran n'a encore été réalisé ; des obstacles non détectés peuvent subsister.",
    "a11y.l2": "La carte est fournie par Google Maps, un service externe dont nous ne contrôlons pas l'accessibilité.",
    "a11y.l3": "Les descriptions de certaines photos de réalisations sont succinctes et sont en cours d'amélioration.",
    "a11y.contactTitle": "Vous rencontrez un obstacle ?",
    "a11y.contactText": "Si vous avez des difficultés à utiliser une partie de ce site, dites-le-nous — c'est le moyen le plus rapide de le corriger.",
    "a11y.contactCta": "Écrire sur WhatsApp",
    "a11y.updated": "Dernière mise à jour : août 2026.",
    "modal.title": "Langue et région",
    "modal.desc": "Le contenu du site sera affiché dans la langue choisie.",
    "modal.location": "Région",
    "modal.language": "Langue",
    "modal.save": "Enregistrer",

    "country.pt": "Portugal",
    "country.fr": "France",
    "country.br": "Brésil",
    "country.uk": "Royaume-Uni",
    "country.other": "Autre"
  }
};

/* Região -> idioma sugerido, e bandeira mostrada no cabeçalho */
const COUNTRY_LANG = { pt: "pt", br: "pt", fr: "fr", uk: "en", other: "en" };
const COUNTRY_FLAG = { pt: "🇵🇹", br: "🇧🇷", fr: "🇫🇷", uk: "🇬🇧", other: "🌐" };
const LANG_LABEL = { pt: "Português", en: "English", fr: "Français" };

const STORAGE_KEY = "np-locale";
const DEFAULT_LOCALE = { country: "pt", lang: "pt" };

function readLocale() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved && TRANSLATIONS[saved.lang] && COUNTRY_LANG[saved.country]) return saved;
  } catch (e) {
    /* preferência inválida ou localStorage indisponível — usa o padrão */
  }
  return DEFAULT_LOCALE;
}

function saveLocale(locale) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(locale));
  } catch (e) {
    /* modo privado: aplica na mesma, apenas não persiste */
  }
}

function applyLocale(locale) {
  const t = TRANSLATIONS[locale.lang];
  if (!t) return;

  document.documentElement.lang = t["html.lang"];

  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute("content", t["meta.description"]);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const value = t[el.dataset.i18n];
    if (value !== undefined) el.textContent = value;
  });

  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const value = t[el.dataset.i18nHtml];
    if (value !== undefined) el.innerHTML = value;
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const value = t[el.dataset.i18nPlaceholder];
    if (value !== undefined) el.setAttribute("placeholder", value);
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const value = t[el.dataset.i18nAria];
    if (value !== undefined) el.setAttribute("aria-label", value);
  });

  // opções de região usam o idioma ativo
  document.querySelectorAll("#localeCountry option").forEach((opt) => {
    const value = t["country." + opt.value];
    if (value !== undefined) opt.textContent = value;
  });

  // gatilho no cabeçalho
  const flag = document.getElementById("localeFlag");
  const label = document.getElementById("localeLabel");
  if (flag) flag.textContent = COUNTRY_FLAG[locale.country] || "🌐";
  if (label) label.textContent = LANG_LABEL[locale.lang];

  // permite que outros scripts atualizem texto que geram dinamicamente
  document.dispatchEvent(new CustomEvent("localechange", { detail: locale }));
}

(function initLocale() {
  let current = readLocale();
  applyLocale(current);

  const modal = document.getElementById("localeModal");
  const openBtn = document.getElementById("localeTrigger");
  const closeBtn = document.getElementById("localeClose");
  const saveBtn = document.getElementById("localeSave");
  const countrySel = document.getElementById("localeCountry");
  const langSel = document.getElementById("localeLanguage");

  if (!modal || !openBtn) return;

  if (window.A11yDialog) window.A11yDialog.trap(modal);

  const openModal = () => {
    if (window.A11yDialog) window.A11yDialog.remember();
    countrySel.value = current.country;
    langSel.value = current.lang;
    modal.classList.add("is-open");
    document.body.style.overflow = "hidden";
    setTimeout(() => countrySel.focus(), 50);
  };

  const closeModal = () => {
    modal.classList.remove("is-open");
    document.body.style.overflow = "";
    if (window.A11yDialog) window.A11yDialog.restore();
  };

  openBtn.addEventListener("click", openModal);
  closeBtn.addEventListener("click", closeModal);

  // escolher a região sugere o idioma correspondente
  countrySel.addEventListener("change", () => {
    langSel.value = COUNTRY_LANG[countrySel.value] || "en";
  });

  saveBtn.addEventListener("click", () => {
    current = { country: countrySel.value, lang: langSel.value };
    saveLocale(current);
    applyLocale(current);
    closeModal();
  });

  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeModal();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("is-open")) closeModal();
  });
})();
