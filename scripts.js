let slideIndex = 1;
showSlides(slideIndex);//show first slide by default

function plusSlides(n) {
  showSlides((slideIndex += n)); //plus or minus 1 to slideIndex
}


function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  console.log(slideIndex)
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {// reset to first slide
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) { //set all slides to display: none
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");// change class name from "active" to "" (remove "active")
  }
  slides[slideIndex - 1].style.display = "block";// change display
  dots[slideIndex - 1].className += " active";
}



function toggleSidebar() {
    var sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('open');
    var btnContent = document.getElementById('btn-content');
    if (sidebar.classList.contains('open')) {
        btnContent.textContent = '✕'; // Change to X when sidebar is open
    } else {
        btnContent.textContent = '☰'; // Change back to ☰ when sidebar is closed
    }
}



