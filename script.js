// Smooth Scroll for Navigation
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Quotes Slider
  const quotes = document.querySelectorAll('.quote-slider .quote');
  let index = 0;
  setInterval(() => {
    quotes[index].classList.remove('active');
    index = (index + 1) % quotes.length;
    quotes[index].classList.add('active');
  }, 4000);
  