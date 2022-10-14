export default function initSmoothScroll() {
  const onternalLinks = document.querySelectorAll('[data-navbar="soft"] a[href^="#"]');

  function scrollSection(event) {
    event.preventDefault();
    const href = this.getAttribute('href');
    const section = document.querySelector(href);
    
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  onternalLinks.forEach((link) => {
    link.addEventListener('click', scrollSection);
  });
};