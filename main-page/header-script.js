document.addEventListener("DOMContentLoaded", () => {
  renderNav();

  const menuBtn = document.getElementById("menu-toggle");
  const mainNav = document.getElementById("main-nav");
  const linksEl = document.getElementById("nav-links");

  if (!menuBtn || !mainNav || !linksEl) return;

  menuBtn.addEventListener("click", () => {
    mainNav.classList.toggle("active");
    menuBtn.textContent = mainNav.classList.contains("active") ? "✕" : "☰";
  });

  // ✅ Event delegation: works even though links are dynamic
  linksEl.addEventListener("click", (e) => {
    const clickedLink = e.target.closest(".nav-item");
    if (!clickedLink) return;

    if (window.innerWidth <= 768) {
      mainNav.classList.remove("active");
      menuBtn.textContent = "☰";
    }
  });

  // Optional: reset menu state if you resize back to desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      mainNav.classList.remove("active");
      menuBtn.textContent = "☰";
    }
  });
});
