// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  const isDarkMode = body.classList.contains('dark');
  darkModeToggle.textContent = isDarkMode ? '☀️' : '🌙';
  localStorage.setItem('darkMode', isDarkMode);
});

// Check for saved dark mode preference

const savedDarkMode = localStorage.getItem('darkMode');
if (savedDarkMode === 'true') {
  body.classList.add('dark');
  darkModeToggle.textContent = '☀️';
}
// Typing Effect
document.addEventListener('DOMContentLoaded', () => {
    const typedText = document.getElementById('typed-text');
    const cursor = document.querySelector('.cursor');
    const text = "PrtUsr"; // Text to be typed out
    let index = 0;
  
    function type() {
      if (index < text.length) {
        typedText.textContent += text.charAt(index);
        index++;
        setTimeout(type, 100); // Typing speed (100ms per character)
      } else {
        // Reset the text and start typing again
        setTimeout(() => {
          typedText.textContent = ''; // Clear the text
          index = 0; // Reset the index
          type(); // Restart the typing effect
        }, 2000); // Delay before restarting (1 second)
      }
    }
  
    // Start the typing effect
    type();
  });

  // Scroll Reveal for All Elements
document.addEventListener('DOMContentLoaded', () => {
    const scrollRevealElements = document.querySelectorAll('.scroll-reveal');
  
    const revealElements = () => {
      scrollRevealElements.forEach((element, index) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;
  
        // Add reveal class when element is in view
        if (elementTop < windowHeight - 100 && elementBottom > 0) {
          // Add a slight delay for staggered animations
          setTimeout(() => {
            element.classList.add('reveal');
          }, index * 150); // Adjust delay as needed (e.g., 150ms per element)
        } else {
          element.classList.remove('reveal');
        }
      });
    };
  
    // Initial check
    revealElements();
  
    // Check on scroll
    window.addEventListener('scroll', revealElements);
  });

  // Scroll Reveal for Projects Section
document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');
  
    const revealProjects = () => {
      projectCards.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top;
        const cardBottom = card.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;
  
        // Add reveal class when the card is in view
        if (cardTop < windowHeight && cardBottom > 0) {
          card.classList.add('reveal');
        } else {
          // Remove reveal class when the card is out of view
          card.classList.remove('reveal');
        }
      });
    };
  
    // Initial check on page load
    revealProjects();
  
    // Check on scroll
    window.addEventListener('scroll', revealProjects);
  });