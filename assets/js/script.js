document.getElementById("year").textContent = new Date().getFullYear();

const navCollapseEl = document.getElementById("navCollapse");

if (navCollapseEl && window.bootstrap) {
  const navCollapse = window.bootstrap.Collapse.getOrCreateInstance(navCollapseEl, { toggle: false });

  navCollapseEl.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => navCollapse.hide());
  });
}

const galleryTrack = document.getElementById("galleryTrack");

if (galleryTrack) {
  const figures = galleryTrack.querySelectorAll(".carousel-figure");
  const items = galleryTrack.querySelectorAll(".gallery-item");
  const dotsContainer = document.getElementById("galleryDots");
  const prevBtn = document.getElementById("carouselPrev");
  const nextBtn = document.getElementById("carouselNext");

  figures.forEach((figure, i) => {
    const dot = document.createElement("button");
    dot.className = "carousel-dot";
    dot.dataset.imageIndex = i + 1;
    dot.addEventListener("click", () => {
      figure.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
    });
    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll(".carousel-dot");

  const setActiveDot = () => {
    let closestIndex = 0;
    let closestDistance = Infinity;
    figures.forEach((figure, i) => {
      const distance = Math.abs(figure.offsetLeft - galleryTrack.scrollLeft);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = i;
      }
    });
    dots.forEach((dot, i) => dot.classList.toggle("is-active", i === closestIndex));
  };

  const updateCarouselButtons = () => {
    const maxScrollLeft = galleryTrack.scrollWidth - galleryTrack.clientWidth;
    prevBtn.disabled = galleryTrack.scrollLeft <= 4;
    nextBtn.disabled = galleryTrack.scrollLeft >= maxScrollLeft - 4;
  };

  galleryTrack.addEventListener("scroll", () => {
    window.requestAnimationFrame(() => {
      setActiveDot();
      updateCarouselButtons();
    });
  });

  prevBtn.addEventListener("click", () => {
    galleryTrack.scrollBy({ left: -galleryTrack.clientWidth * 0.8, behavior: "smooth" });
  });

  nextBtn.addEventListener("click", () => {
    galleryTrack.scrollBy({ left: galleryTrack.clientWidth * 0.8, behavior: "smooth" });
  });

  updateCarouselButtons();

  setActiveDot();

  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxCaption = document.getElementById("lightboxCaption");
  const lightboxCounter = document.getElementById("lightboxCounter");
  const lightboxClose = document.getElementById("lightboxClose");
  const lightboxPrev = document.getElementById("lightboxPrev");
  const lightboxNext = document.getElementById("lightboxNext");
  const lightboxThumbs = document.getElementById("lightboxThumbs");
  const lightboxCta = document.getElementById("lightboxCta");

  let currentIndex = 0;

  // tira de miniaturas, uma por foto da galeria
  items.forEach((item, i) => {
    const thumb = document.createElement("button");
    thumb.type = "button";
    thumb.className = "lightbox-thumb";
    thumb.dataset.imageIndex = i + 1;

    const img = document.createElement("img");
    img.src = item.src;
    img.alt = "";
    thumb.appendChild(img);

    thumb.addEventListener("click", () => showImage(i));
    lightboxThumbs.appendChild(thumb);
  });

  const thumbs = lightboxThumbs.querySelectorAll(".lightbox-thumb");

  // etiquetas geradas dinamicamente acompanham o idioma escolhido
  const labelDynamic = () => {
    const dict = typeof TRANSLATIONS !== "undefined" ? TRANSLATIONS[document.documentElement.lang] : null;
    const word = (dict && dict["aria.image"]) || "Imagem";
    thumbs.forEach((thumb) => thumb.setAttribute("aria-label", `${word} ${thumb.dataset.imageIndex}`));
    dots.forEach((dot) => dot.setAttribute("aria-label", `${word} ${dot.dataset.imageIndex}`));
  };
  labelDynamic();
  document.addEventListener("localechange", labelDynamic);

  const showImage = (index) => {
    currentIndex = Math.max(0, Math.min(index, items.length - 1));
    const item = items[currentIndex];
    const caption = figures[currentIndex].querySelector(".gallery-caption");

    lightboxImg.src = item.src;
    lightboxImg.alt = item.alt;
    lightboxCaption.textContent = caption ? caption.textContent : item.alt;
    lightboxCounter.textContent = `${currentIndex + 1} / ${items.length}`;

    thumbs.forEach((thumb, i) => thumb.classList.toggle("is-active", i === currentIndex));

    // mantém a miniatura ativa visível na tira
    const active = thumbs[currentIndex];
    if (active) {
      const left = active.offsetLeft;
      const right = left + active.offsetWidth;
      const viewLeft = lightboxThumbs.scrollLeft;
      const viewRight = viewLeft + lightboxThumbs.clientWidth;
      if (left < viewLeft) lightboxThumbs.scrollLeft = left - 12;
      else if (right > viewRight) lightboxThumbs.scrollLeft = right - lightboxThumbs.clientWidth + 12;
    }

    lightboxPrev.disabled = currentIndex === 0;
    lightboxNext.disabled = currentIndex === items.length - 1;
  };

  if (window.A11yDialog) window.A11yDialog.trap(lightbox);

  const openLightbox = (index) => {
    if (window.A11yDialog) window.A11yDialog.remember();
    showImage(index);
    lightbox.classList.add("is-open");
    document.body.style.overflow = "hidden";
    setTimeout(() => lightboxClose.focus(), 50);
  };

  const closeLightbox = () => {
    lightbox.classList.remove("is-open");
    document.body.style.overflow = "";
    if (window.A11yDialog) window.A11yDialog.restore();
  };

  items.forEach((item, i) => {
    item.addEventListener("click", () => openLightbox(i));
  });

  lightboxClose.addEventListener("click", closeLightbox);
  lightboxPrev.addEventListener("click", () => showImage(currentIndex - 1));
  lightboxNext.addEventListener("click", () => showImage(currentIndex + 1));

  // o botão de agendar fecha a lightbox antes de saltar para o contacto
  if (lightboxCta) lightboxCta.addEventListener("click", closeLightbox);

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (!lightbox.classList.contains("is-open")) return;

    if (event.key === "Escape") {
      closeLightbox();
    } else if (event.key === "ArrowLeft") {
      showImage(currentIndex - 1);
    } else if (event.key === "ArrowRight") {
      showImage(currentIndex + 1);
    }
  });
}
