// Select elements
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links li a');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('nav-active');
  // Animate hamburger lines
  hamburger.classList.toggle('toggle');
});

// Close mobile menu when a link is clicked
navLinksItems.forEach(link => {
  link.addEventListener('click', () => {
    // Remove nav-active only if it's open (mobile)
    if (navLinks.classList.contains('nav-active')) {
      navLinks.classList.remove('nav-active');
      hamburger.classList.remove('toggle'); // reset hamburger animation
    }
  });
});
