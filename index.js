
let navbar = document.querySelector(".menuMobile");
let navList = document.querySelectorAll(".navList li a");
let xmark = document.querySelector(".xmark");
let bars = document.querySelector(".bars");



// Menu Mobile
bars.addEventListener("click", () => {
  navbar.style.cssText = `transform:scale(1)`;
  bars.style.cssText = `opacity:0`;
  xmark.style.cssText = `
    display:flex
    `;

});
xmark.addEventListener("click", () => {
  navbar.style.cssText = `transform:scale(0)`;
  bars.style.cssText = `opacity:1`;
  xmark.style.cssText = `display:none`;
});

navList.forEach(link => {

  link.addEventListener("click", () => {
    navbar.style.cssText = `transform:scale(0)`;
    bars.style.cssText = `opacity:1`;
    xmark.style.cssText = `display:none`;
  });

});


// Scroll Top And Header 
let icon__scroll = document.querySelector(".scroll");
let header = document.getElementById("header");
window.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("scroll", () => {
    document.documentElement.scrollTop >= 150 ? icon__scroll.style.cssText = `opacity:1;visibility: visible` : icon__scroll.style.cssText = `opacity:0;visibility: hidden`;
    document.documentElement.scrollTop > 0 ? header.classList.add("shadow") : header.classList.remove("shadow");
  });
  icon__scroll.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

});



// Slider 
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("contentHomePage");
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}



let slideIn = 1;
showSlide(slideIn);


function plusSlide(m) {
  showSlide(slideIn += m);
}


function currentSlide(m) {
  showSlide(slideIn = m);
}

function showSlide(m) {
  let ii;
  let slides = document.getElementsByClassName("card__says");

  if (m > slides.length) { slideIn = 1 }
  if (m < 1) { slideIn = slides.length }
  for (ii = 0; ii < slides.length; ii++) {
    slides[ii].style.display = "none";
  }
  slides[slideIn - 1].style.display = "flex";
}


// Scroll Reveal 
let scrollRev = ScrollReveal({
  distance: "30px",
  duration: 2000,
  reset: true,
})
scrollRev.reveal("#header");
scrollRev.reveal("#homePage,  .readMore, .contactUs, .arrow");
scrollRev.reveal("#about, .primary__title, .box__about, .box__content, .description__company, .image__right, .desc__left, .content__desc p");
scrollRev.reveal("#work, .content__work, .arrowSlideWork, .leftContentCard, .card__work");
scrollRev.reveal("#bestCompany");
scrollRev.reveal("#says, .allCardSays, .says__bottom, .says__bottom h1, .says__bottom a, .paragraph");
scrollRev.reveal("#footer, .top__footer, .contact__footer, .icon__p, .news__letter, .news__letter label, .news__letter input, .follow__us h1, .icon__resaux, .bottom__footer");
