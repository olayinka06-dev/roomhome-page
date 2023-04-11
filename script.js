var tG = document.querySelector('.toggle');
tG.addEventListener('click', () => {

  var mobile = document.querySelector('.mobile-nav');
  mobile.classList.toggle('mobile-toggler');

    var first = document.querySelector('.first-line');
    var second = document.querySelector('.second-line');
    var third = document.querySelector('.third-line');

    first.classList.toggle('firstr');
    third.classList.toggle('thirdr');
    second.classList.toggle('secondr');

    document.querySelector(".toggle").classList.toggle("toggle-sub")

});


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides");
    var infos = document.getElementsByClassName("second");

    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length};

    if (n > infos.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = infos.length};
    
    // hide all slides
    Array.from(slides).forEach(slide => slide.style.display = "none");

    Array.from(infos).forEach(info => info.style.display = "none");
    
    // display current slide and add "active" class to current dot
    slides[slideIndex-1].style.display = "block";  
    infos[slideIndex-1].style.display = "block";  
}