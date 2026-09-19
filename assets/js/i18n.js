/* Multilíngue — traduções e preferência de idioma/região.
   Site estático: as traduções vivem aqui e a escolha do visitante
   fica guardada no localStorage do browser. */

const TRANSLATIONS = {
  pt: {
    "html.lang": "pt-PT",
    "title": "Nathalia Perdigão | Depilação a Laser e Unhas em Castelo Branco",
    "meta.description": "Depilação a laser, unhas de acrílico e bronzeamento em solário em Castelo Branco. Marque a sua sessão com a Nathalia Perdigão pelo WhatsApp.",

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
    "local.address": "Rua Dr. Simplício Magro, lote 107, 6000-332 Castelo Branco, Portugal.",

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
    "g19": "Bronzeamento em solário",
    "g20": "Solário vertical",
    "g21": "Roupão Nath Bronze",
    "g22": "Bronzeadores e hidratantes",
    "g23": "A cabine",
    "g24": "Painel de comando",
    "g25": "GardaSun powertower",
    "g26": "Bordado Nath Bronze",
    "g27": "A sala do solário",

    "contato.title": "Contato",
    "contato.text": "Para agendamentos e dúvidas:",
    "contato.phone": "+351 919 872 094",
    "contato.address": "Rua Dr. Simplício Magro, lote 107, 6000-332 Castelo Branco, Portugal.",

    "footer.rights": "Todos os direitos reservados.",

    "cookies.link": "Cookies",
    "cookies.title": "As suas escolhas de privacidade",
    "cookies.intro": "Pode decidir o que autoriza. A sua escolha fica guardada neste dispositivo e pode alterá-la a qualquer momento pelo link “Cookies”, no rodapé.",
    "cookies.rejectAll": "✕ Rejeitar tudo",
    "cookies.acceptAll": "✓ Aceitar tudo",
    "cookies.necessaryTitle": "Necessárias",
    "cookies.alwaysActive": "Sempre ativas",
    "cookies.necessaryText": "Guardam no seu navegador o idioma que escolheu e a sua decisão sobre cookies. Não saem do seu dispositivo nem identificam quem é.",
    "cookies.mapsTitle": "Mapa",
    "cookies.mapsText": "Mostra a localização do espaço. É carregado a partir do Google Maps, que recebe o seu endereço IP e pode colocar cookies. Sem autorização, o mapa não é carregado.",
    "cookies.analyticsTitle": "Analytics",
    "cookies.analyticsText": "Google Analytics, para perceber como o site é visitado e onde melhorar. Só é ativado se autorizar esta categoria.",
    "cookies.save": "Guardar e continuar",
    "cookies.readMore": "Ver política de cookies completa",
    "cookies.mapPlaceholder": "O mapa está bloqueado até autorizar a categoria “Mapa” nas preferências de cookies.",
    "cookies.mapEnable": "Ativar mapa",

    "cookiesPolicy.title": "Política de Cookies",
    "cookiesPolicy.intro": "Cookies são pequenos ficheiros guardados no seu dispositivo. Este site usa também o localStorage do navegador, que funciona de forma semelhante: fica guardado no seu aparelho e não é enviado para nenhum servidor nosso.",
    "cookiesPolicy.necessaryTitle": "Necessários (sempre ativos)",
    "cookiesPolicy.n1": "Idioma e região escolhidos, para não ter de os selecionar em cada visita.",
    "cookiesPolicy.n2": "A sua decisão sobre cookies, para não lhe voltarmos a perguntar em cada página.",
    "cookiesPolicy.n3": "Guardados apenas neste dispositivo; nunca identificam quem é nem são partilhados com terceiros.",
    "cookiesPolicy.mapsTitle": "Mapa (Google Maps)",
    "cookiesPolicy.m1": "Usado na secção “Localização” para mostrar o mapa do espaço.",
    "cookiesPolicy.m2": "Só é carregado depois de autorizar esta categoria; até lá, vê apenas a morada em texto.",
    "cookiesPolicy.m3": "Quando autorizado, o Google recebe o seu endereço IP e pode colocar cookies próprios, segundo a política de privacidade do Google.",
    "cookiesPolicy.analyticsTitle": "Analytics (Google Analytics)",
    "cookiesPolicy.a1": "Usado para perceber quantas pessoas visitam o site e que páginas veem, de forma agregada.",
    "cookiesPolicy.a2": "Só corre depois de autorizar esta categoria. Se recusar depois de ter autorizado, os cookies _ga já colocados são apagados.",
    "cookiesPolicy.a3": "Fornecido pela Google, segundo a política de privacidade da Google.",
    "cookiesPolicy.durationTitle": "Duração",
    "cookiesPolicy.durationText": "A sua escolha fica guardada neste dispositivo até a alterar ou até limpar os dados de navegação do browser.",
    "cookiesPolicy.changeTitle": "Alterar a sua escolha",
    "cookiesPolicy.changeText": "Pode mudar de ideias a qualquer momento através do link “Cookies”, no rodapé do site.",
    "cookiesPolicy.contactText": "Se tiver dúvidas sobre esta política, contacte-nos.",
    "cookiesPolicy.updated": "Última atualização: setembro de 2026.",

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
    "title": "Nathalia Perdigão | Laser Hair Removal & Nails in Castelo Branco",
    "meta.description": "Laser hair removal, acrylic nails and solarium tanning in Castelo Branco, Portugal. Book your session with Nathalia Perdigão on WhatsApp.",

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
    "local.address": "Rua Dr. Simplício Magro, lote 107, 6000-332 Castelo Branco, Portugal.",

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
    "g19": "Solarium tanning",
    "g20": "Vertical tanning booth",
    "g21": "Nath Bronze robe",
    "g22": "Tanning lotions and moisturisers",
    "g23": "The treatment room",
    "g24": "Control panel",
    "g25": "GardaSun powertower",
    "g26": "Nath Bronze embroidery",
    "g27": "The solarium room",

    "contato.title": "Contact",
    "contato.text": "For bookings and enquiries:",
    "contato.phone": "+351 919 872 094",
    "contato.address": "Rua Dr. Simplício Magro, lote 107, 6000-332 Castelo Branco, Portugal.",

    "footer.rights": "All rights reserved.",

    "cookies.link": "Cookies",
    "cookies.title": "Your privacy choices",
    "cookies.intro": "You can decide what to allow. Your choice is saved on this device and you can change it anytime via the “Cookies” link in the footer.",
    "cookies.rejectAll": "✕ Reject all",
    "cookies.acceptAll": "✓ Accept all",
    "cookies.necessaryTitle": "Necessary",
    "cookies.alwaysActive": "Always active",
    "cookies.necessaryText": "Save the language you chose and your cookie decision in your browser. They never leave your device or identify you.",
    "cookies.mapsTitle": "Map",
    "cookies.mapsText": "Shows the location of the studio. It is loaded from Google Maps, which receives your IP address and may set cookies. Without authorisation, the map is not loaded.",
    "cookies.analyticsTitle": "Analytics",
    "cookies.analyticsText": "Google Analytics, to understand how the site is visited and where to improve. It only runs if you authorise this category.",
    "cookies.save": "Save and continue",
    "cookies.readMore": "See full cookie policy",
    "cookies.mapPlaceholder": "The map is blocked until you authorise the “Map” category in cookie preferences.",
    "cookies.mapEnable": "Enable map",

    "cookiesPolicy.title": "Cookie Policy",
    "cookiesPolicy.intro": "Cookies are small files stored on your device. This site also uses the browser's localStorage, which works in a similar way: it stays on your device and is never sent to any server of ours.",
    "cookiesPolicy.necessaryTitle": "Necessary (always active)",
    "cookiesPolicy.n1": "The language and region you chose, so you don't have to select them on every visit.",
    "cookiesPolicy.n2": "Your cookie decision, so we don't ask you again on every page.",
    "cookiesPolicy.n3": "Stored only on this device; they never identify you or get shared with third parties.",
    "cookiesPolicy.mapsTitle": "Map (Google Maps)",
    "cookiesPolicy.m1": "Used in the “Location” section to show the studio's map.",
    "cookiesPolicy.m2": "Only loaded once you authorise this category; until then, you only see the address as text.",
    "cookiesPolicy.m3": "Once authorised, Google receives your IP address and may set its own cookies, under Google's privacy policy.",
    "cookiesPolicy.analyticsTitle": "Analytics (Google Analytics)",
    "cookiesPolicy.a1": "Used to understand, in aggregate, how many people visit the site and which pages they see.",
    "cookiesPolicy.a2": "Only runs once you authorise this category. If you decline after having authorised it, any _ga cookies already set are deleted.",
    "cookiesPolicy.a3": "Provided by Google, under Google's privacy policy.",
    "cookiesPolicy.durationTitle": "Duration",
    "cookiesPolicy.durationText": "Your choice is stored on this device until you change it or clear your browser's browsing data.",
    "cookiesPolicy.changeTitle": "Changing your choice",
    "cookiesPolicy.changeText": "You can change your mind at any time via the “Cookies” link in the site footer.",
    "cookiesPolicy.contactText": "If you have questions about this policy, contact us.",
    "cookiesPolicy.updated": "Last updated: September 2026.",

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
    "title": "Nathalia Perdigão | Épilation Laser et Ongles à Castelo Branco",
    "meta.description": "Épilation laser, ongles en gel-acrylique et bronzage en solarium à Castelo Branco, Portugal. Réservez votre séance avec Nathalia Perdigão sur WhatsApp.",

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
    "local.address": "Rua Dr. Simplício Magro, lote 107, 6000-332 Castelo Branco, Portugal.",

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
    "g19": "Bronzage en solarium",
    "g20": "Solarium vertical",
    "g21": "Peignoir Nath Bronze",
    "g22": "Accélérateurs de bronzage et hydratants",
    "g23": "La cabine",
    "g24": "Panneau de commande",
    "g25": "GardaSun powertower",
    "g26": "Broderie Nath Bronze",
    "g27": "La salle du solarium",

    "contato.title": "Contact",
    "contato.text": "Pour les rendez-vous et les questions :",
    "contato.phone": "+351 919 872 094",
    "contato.address": "Rua Dr. Simplício Magro, lote 107, 6000-332 Castelo Branco, Portugal.",

    "footer.rights": "Tous droits réservés.",

    "cookies.link": "Cookies",
    "cookies.title": "Vos choix de confidentialité",
    "cookies.intro": "Vous pouvez décider ce que vous autorisez. Votre choix est enregistré sur cet appareil et vous pouvez le modifier à tout moment via le lien «Cookies», dans le pied de page.",
    "cookies.rejectAll": "✕ Tout refuser",
    "cookies.acceptAll": "✓ Tout accepter",
    "cookies.necessaryTitle": "Nécessaires",
    "cookies.alwaysActive": "Toujours actifs",
    "cookies.necessaryText": "Enregistrent dans votre navigateur la langue choisie et votre décision sur les cookies. Ils ne quittent jamais votre appareil et ne vous identifient pas.",
    "cookies.mapsTitle": "Carte",
    "cookies.mapsText": "Affiche la localisation de l'institut. Elle est chargée depuis Google Maps, qui reçoit votre adresse IP et peut déposer des cookies. Sans autorisation, la carte n'est pas chargée.",
    "cookies.analyticsTitle": "Analytics",
    "cookies.analyticsText": "Google Analytics, pour comprendre comment le site est consulté et où l'améliorer. Il n'est activé que si vous autorisez cette catégorie.",
    "cookies.save": "Enregistrer et continuer",
    "cookies.readMore": "Voir la politique de cookies complète",
    "cookies.mapPlaceholder": "La carte est bloquée tant que vous n'avez pas autorisé la catégorie «Carte» dans les préférences de cookies.",
    "cookies.mapEnable": "Activer la carte",

    "cookiesPolicy.title": "Politique de Cookies",
    "cookiesPolicy.intro": "Les cookies sont de petits fichiers stockés sur votre appareil. Ce site utilise aussi le localStorage du navigateur, qui fonctionne de façon similaire : il reste sur votre appareil et n'est envoyé à aucun de nos serveurs.",
    "cookiesPolicy.necessaryTitle": "Nécessaires (toujours actifs)",
    "cookiesPolicy.n1": "La langue et la région choisies, pour ne pas avoir à les sélectionner à chaque visite.",
    "cookiesPolicy.n2": "Votre décision sur les cookies, pour ne pas vous la redemander à chaque page.",
    "cookiesPolicy.n3": "Enregistrés uniquement sur cet appareil ; ils ne vous identifient jamais et ne sont partagés avec aucun tiers.",
    "cookiesPolicy.mapsTitle": "Carte (Google Maps)",
    "cookiesPolicy.m1": "Utilisée dans la section «Localisation» pour afficher la carte de l'institut.",
    "cookiesPolicy.m2": "Chargée uniquement après autorisation de cette catégorie ; jusque-là, seule l'adresse en texte est visible.",
    "cookiesPolicy.m3": "Une fois autorisé, Google reçoit votre adresse IP et peut déposer ses propres cookies, selon la politique de confidentialité de Google.",
    "cookiesPolicy.analyticsTitle": "Analytics (Google Analytics)",
    "cookiesPolicy.a1": "Utilisé pour comprendre, de façon agrégée, combien de personnes visitent le site et quelles pages elles consultent.",
    "cookiesPolicy.a2": "Ne fonctionne qu'après autorisation de cette catégorie. Si vous refusez après avoir autorisé, les cookies _ga déjà déposés sont supprimés.",
    "cookiesPolicy.a3": "Fourni par Google, selon la politique de confidentialité de Google.",
    "cookiesPolicy.durationTitle": "Durée",
    "cookiesPolicy.durationText": "Votre choix est enregistré sur cet appareil jusqu'à ce que vous le modifiiez ou effaciez les données de navigation du navigateur.",
    "cookiesPolicy.changeTitle": "Modifier votre choix",
    "cookiesPolicy.changeText": "Vous pouvez changer d'avis à tout moment via le lien «Cookies», dans le pied de page du site.",
    "cookiesPolicy.contactText": "Pour toute question sur cette politique, contactez-nous.",
    "cookiesPolicy.updated": "Dernière mise à jour : septembre 2026.",

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

  if (t["title"]) document.title = t["title"];

  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute("content", t["meta.description"]);

  // Open Graph e Twitter Card seguem o mesmo texto: evita que a pré-visualização
  // ao partilhar o link fique dessincronizada do idioma escolhido.
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle && t["title"]) ogTitle.setAttribute("content", t["title"]);
  const twitterTitle = document.querySelector('meta[name="twitter:title"]');
  if (twitterTitle && t["title"]) twitterTitle.setAttribute("content", t["title"]);

  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute("content", t["meta.description"]);
  const twitterDesc = document.querySelector('meta[name="twitter:description"]');
  if (twitterDesc) twitterDesc.setAttribute("content", t["meta.description"]);

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
