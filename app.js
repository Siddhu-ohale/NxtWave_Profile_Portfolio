// Mobile menu functionality
const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_items = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobile_menu.classList.toggle('active');
});

// Close mobile menu when clicking on menu items
menu_items.forEach(item => {
  item.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mobile_menu.classList.remove('active');
  });
});

// Change header background on scroll
document.addEventListener('scroll', () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 250) {
    header.style.backgroundColor = '#29323c';
    header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
  } else {
    header.style.backgroundColor = 'transparent';
    header.style.boxShadow = 'none';
  }
});

// Resume download functionality
document.getElementById('downloadResume').addEventListener('click', function(e) {
  e.preventDefault();
  
  // Create a virtual anchor element to trigger download
  const link = document.createElement('a');
  link.href = 'Profile (1).pdf'; // Your resume file path
  link.download = 'Siddharth_Ohale_Resume.pdf'; // Suggested filename for download
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  // Optional: Add download confirmation
  console.log('Resume download initiated');
});

// Smooth scrolling for anchor links
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

// Add loading animation
window.addEventListener('load', function() {
  document.body.classList.add('loaded');
});

// Add intersection observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
    }
  });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.service-item, .project-item, .skill-category, .contact-item').forEach(el => {
  observer.observe(el);
});