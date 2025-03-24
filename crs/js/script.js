// Enhanced JavaScript for animations and smooth UX

// Scroll-triggered fade-in effect
const sections = document.querySelectorAll('.fade-in-section');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15
});

sections.forEach(section => {
  observer.observe(section);
});

// Smooth scroll for anchor links
const navLinks = document.querySelectorAll('a[href^="#"]');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Log site ready
console.log('✨ Pan Raissa premium site is fully loaded.');

// Mobile burger toggle
const burger = document.querySelector('.burger');
const nav = document.querySelector('.main-nav ul');

burger.addEventListener('click', () => {
  nav.classList.toggle('active');
});
