let slideIndex = 1;


// Next/previous controls
function plusSlides(n) {
  mostraSlides(slideIndex += n);
}

// Thumbnail image controls
function slideAtual(n) {
  mostraSlides(slideIndex = n);
}

function mostraSlides(n) {
  let i;
  let slides = document.getElementsByClassName("meusSlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
