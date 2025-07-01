// ——— Mobile Menu Toggle ———
const navToggle = document.querySelector('.nav__toggle');
const navMenu = document.querySelector('.nav_menu');
navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});
// ——— Theme (Dark/Light) Toggle ———

const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});
// Animate on load
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.fade-in, .fade-up').forEach(el => {
    el.style.animationPlayState = 'running';
  });
});


// ——— Scroll-Reveal (fade-in & fade-up) ———
// Gather everything with fade-in OR fade-up
const animEls = document.querySelectorAll('.fade-in, .fade-up');
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    const el = entry.target;

    // Fade-in: resume CSS animation
    if (el.classList.contains('fade-in')) {
      el.style.animationPlayState = 'running';
    }
    // Fade-up: add 'in-view' to trigger CSS transition
    if (el.classList.contains('fade-up')) {
      el.classList.add('in-view');
    }

    obs.unobserve(el);
  });
}, { threshold: 0.2 });

// Initialize observation
animEls.forEach(el => {
  if (el.classList.contains('fade-in')) {
    // pause CSS animation until in view
    el.style.animationPlayState = 'paused';
  }
  observer.observe(el);
});
