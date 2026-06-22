// Circuit path animation
const circuitPaths = document.querySelectorAll('.cp');
circuitPaths.forEach((path, i) => {
  const len = path.getTotalLength();
  path.style.strokeDasharray = len;
  path.style.strokeDashoffset = len;
  path.style.animation = `drawCircuit 2.2s ease-out ${0.08 + i * 0.16}s forwards`;
});

// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const navLinks  = document.getElementById('nav-links');

navToggle?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
  navToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
});

navLinks?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
    navToggle?.setAttribute('aria-label', 'Abrir menu');
  });
});

// Nav background on scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    nav.style.background = 'rgba(42, 20, 64, 0.96)';
  } else {
    nav.style.background = 'rgba(42, 20, 64, 0.82)';
  }
}, { passive: true });

// Intersection Observer — fade-in sections
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.portfolio-card, .service-card, .stat, .about-text').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});
