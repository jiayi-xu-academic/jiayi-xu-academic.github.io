const nav = document.querySelector(".site-nav");

const updateNavShadow = () => {
  if (!nav) return;
  nav.classList.toggle("is-scrolled", window.scrollY > 8);
};

updateNavShadow();
window.addEventListener("scroll", updateNavShadow, { passive: true });
