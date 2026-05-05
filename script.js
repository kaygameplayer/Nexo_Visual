// Navbar scroll effect
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 80) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Portfolio filter
const filters = document.querySelectorAll('.filter');
const projects = document.querySelectorAll('.project');

filters.forEach(filter => {
  filter.addEventListener('click', function() {
    // Remove active class from all filters
    filters.forEach(f => f.classList.remove('active'));
    // Add active class to clicked filter
    this.classList.add('active');

    const filterValue = this.getAttribute('data-filter');

    projects.forEach(project => {
      if (filterValue === 'all' || project.getAttribute('data-category') === filterValue) {
        project.style.display = 'block';
      } else {
        project.style.display = 'none';
      }
    });
  });
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Fechar menu ao clicar em um link
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', function() {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  });
});

// Fechar menu ao clicar fora
document.addEventListener('click', function(event) {
  const isClickInsideNav = navLinks.contains(event.target);
  const isClickOnHamburger = hamburger.contains(event.target);
  
  if (!isClickInsideNav && !isClickOnHamburger && navLinks.classList.contains('active')) {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  }
});