/* Pesquisa do site.
   O índice é construído a partir do DOM no momento da pesquisa, por isso
   acompanha automaticamente o idioma ativo — não duplica as traduções. */

(function initSearch() {
  const overlay = document.getElementById("searchOverlay");
  const trigger = document.getElementById("searchTrigger");
  const closeBtn = document.getElementById("searchClose");
  const input = document.getElementById("searchInput");
  const results = document.getElementById("searchResults");

  if (!overlay || !trigger || !input || !results) return;

  const normalize = (str) =>
    str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, " ").trim();

  const label = (key, fallback) => {
    const dict = typeof TRANSLATIONS !== "undefined" ? TRANSLATIONS[document.documentElement.lang] : null;
    return (dict && dict[key]) || fallback;
  };

  function buildIndex() {
    const items = [];

    // Serviços (cada bloco com h3)
    document.querySelectorAll("main .service-text").forEach((block) => {
      const heading = block.querySelector("h3");
      if (!heading) return;
      const section = block.closest("section[id]");
      const desc = block.querySelector(".section-text");
      const bullets = Array.from(block.querySelectorAll(".benefits-list li")).map((li) => li.textContent);

      items.push({
        group: "services",
        title: heading.textContent.trim(),
        snippet: desc ? desc.textContent.trim() : bullets.join(" · "),
        haystack: normalize([heading.textContent, desc ? desc.textContent : "", bullets.join(" ")].join(" ")),
        action: () => scrollToSection(section)
      });
    });

    // Secções (texto próprio, excluindo o que já está indexado como serviço)
    document.querySelectorAll("main section[id]").forEach((section) => {
      const heading = section.querySelector("h2");
      if (!heading) return;
      const own = Array.from(section.querySelectorAll(".section-text")).filter(
        (el) => !el.closest(".service-text")
      );
      const ownText = own.map((el) => el.textContent).join(" ");

      items.push({
        group: "sections",
        title: heading.textContent.trim(),
        snippet: ownText.trim(),
        haystack: normalize(heading.textContent + " " + ownText),
        action: () => scrollToSection(section)
      });
    });

    // Galeria
    document.querySelectorAll("#galleryTrack .carousel-figure").forEach((figure) => {
      const caption = figure.querySelector(".gallery-caption");
      const image = figure.querySelector(".gallery-item");
      if (!caption || !image) return;

      items.push({
        group: "gallery",
        title: caption.textContent.trim(),
        snippet: "",
        thumb: image.getAttribute("src"),
        haystack: normalize(caption.textContent + " " + (image.getAttribute("alt") || "")),
        action: () => openGalleryImage(figure, image)
      });
    });

    return items;
  }

  function scrollToSection(section) {
    closeSearch();
    if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function openGalleryImage(figure, image) {
    closeSearch();
    const track = document.getElementById("galleryTrack");
    if (track) track.scrollLeft = figure.offsetLeft;
    // reaproveita o lightbox já ligado às imagens da galeria
    image.click();
  }

  /* Destaca o termo pesquisado sem usar innerHTML */
  function highlight(text, term) {
    const fragment = document.createDocumentFragment();
    if (!term) {
      fragment.appendChild(document.createTextNode(text));
      return fragment;
    }
    const haystack = normalize(text);
    const needle = normalize(term);
    let from = 0;
    let at = haystack.indexOf(needle);

    while (at !== -1 && needle) {
      fragment.appendChild(document.createTextNode(text.slice(from, at)));
      const mark = document.createElement("mark");
      mark.textContent = text.slice(at, at + needle.length);
      fragment.appendChild(mark);
      from = at + needle.length;
      at = haystack.indexOf(needle, from);
    }
    fragment.appendChild(document.createTextNode(text.slice(from)));
    return fragment;
  }

  let activeItems = [];

  function render(term) {
    results.innerHTML = "";
    activeItems = [];

    const query = normalize(term);

    if (!query) {
      const hint = document.createElement("p");
      hint.className = "search-hint";
      hint.textContent = label("search.hint", "Pesquise por serviços, secções ou fotos.");
      results.appendChild(hint);
      return;
    }

    const matches = buildIndex().filter((item) => item.haystack.includes(query));

    if (!matches.length) {
      const empty = document.createElement("p");
      empty.className = "search-hint";
      empty.textContent = label("search.empty", "Sem resultados para") + ' "' + term.trim() + '"';
      results.appendChild(empty);
      return;
    }

    const groups = [
      ["services", label("search.groupServices", "Serviços")],
      ["sections", label("search.groupSections", "Secções")],
      ["gallery", label("search.groupGallery", "Galeria")]
    ];

    groups.forEach(([key, groupTitle]) => {
      const groupItems = matches.filter((item) => item.group === key);
      if (!groupItems.length) return;

      const title = document.createElement("p");
      title.className = "search-group";
      title.textContent = groupTitle;
      results.appendChild(title);

      groupItems.forEach((item) => {
        const row = document.createElement("button");
        row.type = "button";
        row.className = "search-result";

        if (item.thumb) {
          const img = document.createElement("img");
          img.className = "search-thumb";
          img.src = item.thumb;
          img.alt = "";
          row.appendChild(img);
        }

        const text = document.createElement("span");
        text.className = "search-result-text";

        const rowTitle = document.createElement("span");
        rowTitle.className = "search-result-title";
        rowTitle.appendChild(highlight(item.title, term));
        text.appendChild(rowTitle);

        if (item.snippet) {
          const snippet = document.createElement("span");
          snippet.className = "search-result-snippet";
          const short = item.snippet.length > 120 ? item.snippet.slice(0, 120) + "…" : item.snippet;
          snippet.appendChild(highlight(short, term));
          text.appendChild(snippet);
        }

        row.appendChild(text);
        row.addEventListener("click", item.action);
        results.appendChild(row);
        activeItems.push(item);
      });
    });
  }

  if (window.A11yDialog) window.A11yDialog.trap(overlay);

  function openSearch() {
    if (window.A11yDialog) window.A11yDialog.remember();
    overlay.classList.add("is-open");
    document.body.style.overflow = "hidden";
    input.value = "";
    render("");
    setTimeout(() => input.focus(), 50);
  }

  function closeSearch() {
    overlay.classList.remove("is-open");
    document.body.style.overflow = "";
    if (window.A11yDialog) window.A11yDialog.restore();
  }

  trigger.addEventListener("click", openSearch);
  if (closeBtn) closeBtn.addEventListener("click", closeSearch);

  input.addEventListener("input", () => render(input.value));

  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && activeItems.length) {
      event.preventDefault();
      activeItems[0].action();
    }
  });

  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) closeSearch();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && overlay.classList.contains("is-open")) closeSearch();
  });
})();
