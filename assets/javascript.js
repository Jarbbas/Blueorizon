const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  showcase.classList.toggle('active');
})

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: 'left',
  distance: '60px',
  duration: 2000,
  delay: 200,
});

sr.reveal('.about, .home, .projects',{delay: 100}); 
sr.reveal('.about__img, .project__img, .map__img',{delay: 500}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 