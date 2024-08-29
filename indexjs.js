window.onload = function() {
  slideIndex = 1; // กำหนด slideIndex เป็น 1
  showSlides(slideIndex);
  autoSlide();
};

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
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

function autoSlide() {
  plusSlides(1); // เปลี่ยนสไลด์ถัดไป
  setTimeout(autoSlide, 3000); // เปลี่ยนสไลด์ทุกๆ 3 วินาที (3000 มิลลิวินาที)
}
