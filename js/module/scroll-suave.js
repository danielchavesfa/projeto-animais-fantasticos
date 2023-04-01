export default function scrollSuave() {
  const linksInternos = document.querySelectorAll('.js [data-top="menu"] a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const linkId = event.target.getAttribute('href');
    const section = document.querySelector(linkId);

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  if (linksInternos.length) {
    linksInternos.forEach((link) => {
      link.addEventListener('click', scrollToSection);
    });
  }
}
