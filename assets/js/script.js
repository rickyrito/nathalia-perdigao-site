document.getElementById("year").textContent = new Date().getFullYear();

const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", isOpen);
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

const galleryTrack = document.getElementById("galleryTrack");

if (galleryTrack) {
  const figures = galleryTrack.querySelectorAll(".carousel-figure");
  const items = galleryTrack.querySelectorAll(".carousel-item");
  const dotsContainer = document.getElementById("galleryDots");
  const prevBtn = document.getElementById("carouselPrev");
  const nextBtn = document.getElementById("carouselNext");

  figures.forEach((figure, i) => {
    const dot = document.createElement("button");
    dot.className = "carousel-dot";
    dot.setAttribute("aria-label", `Ir para imagem ${i + 1}`);
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
  const lightboxClose = document.getElementById("lightboxClose");
  const lightboxPrev = document.getElementById("lightboxPrev");
  const lightboxNext = document.getElementById("lightboxNext");

  let currentIndex = 0;

  const showImage = (index) => {
    currentIndex = Math.max(0, Math.min(index, items.length - 1));
    const item = items[currentIndex];
    const caption = figures[currentIndex].querySelector(".carousel-caption");
    lightboxImg.src = item.src;
    lightboxImg.alt = item.alt;
    lightboxCaption.textContent = caption ? caption.textContent : item.alt;
    lightboxPrev.disabled = currentIndex === 0;
    lightboxNext.disabled = currentIndex === items.length - 1;
  };

  const openLightbox = (index) => {
    showImage(index);
    lightbox.classList.add("is-open");
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    lightbox.classList.remove("is-open");
    document.body.style.overflow = "";
  };

  items.forEach((item, i) => {
    item.addEventListener("click", () => openLightbox(i));
  });

  lightboxClose.addEventListener("click", closeLightbox);
  lightboxPrev.addEventListener("click", () => showImage(currentIndex - 1));
  lightboxNext.addEventListener("click", () => showImage(currentIndex + 1));

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
