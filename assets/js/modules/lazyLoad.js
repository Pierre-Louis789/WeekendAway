// lazyLoad.js

document.addEventListener('DOMContentLoaded', () => {
  const lazyImages = document.querySelectorAll('img[data-src]');

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        obs.unobserve(img);
      }
    });
  }, {
    rootMargin: '0px 0px 200px 0px',
    threshold: 0.1
  });

  lazyImages.forEach(img => observer.observe(img));
});

const lazyImages = document.querySelectorAll("img[data-src]");

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.classList.add("fade-in");
      obs.unobserve(img);
    }
  });
});

lazyImages.forEach(img => observer.observe(img));
// This code initializes lazy loading for images with the "data-src" attribute.
// It uses IntersectionObserver to load images only when they are about to enter the viewport.
// The "fade-in" class can be used to add a transition effect when the image loads. 