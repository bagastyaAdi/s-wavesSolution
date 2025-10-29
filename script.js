document.addEventListener('DOMContentLoaded', function () {
  const heroElements = document.querySelectorAll('.hero-animated, .belgian-box');
  const drinkElements = document.querySelectorAll('.minuman-animated');

  const observerOptions1 = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
  };

  const observer1 = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions1);

  heroElements.forEach(el => observer1.observe(el));

  const observerOptions2 = {
    threshold: 0.1
  };

  const observer2 = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions2);

  drinkElements.forEach(el => observer2.observe(el));
});

fetch("navbar.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("navbar-container").innerHTML = data;
      });
      
    document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menuBtn");
  const closeMenu = document.getElementById("closeMenu");
  const navOverlay = document.getElementById("navOverlay");

  menuBtn.addEventListener("click", () => {
    navOverlay.style.height = "100%"; // buka penuh
  });

  closeMenu.addEventListener("click", () => {
    navOverlay.style.height = "0%"; // tutup
  });

  // Tutup menu saat klik link
  document.querySelectorAll(".overlay-menu a").forEach(link => {
    link.addEventListener("click", () => {
      navOverlay.style.height = "0%";
    });
  });
});

