/*var slideIndex = 1;
showSlides(slideIndex, false); // Mostra la prima immagine di default

function plusSlides(n) {
  showSlides(slideIndex += n, false);
}

function currentSlide(n) {
  showSlides(slideIndex = n, false);
}

function showSlides(n, auto) {
  var i;
  var slides = document.getElementsByClassName("slide-image");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i <= slides.length-1; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i <= dots.length-1; i++) {
      dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += "active";
}
*/

let corrente = 0;
let dots = document.getElementsByClassName("dot");

//funzione per cambiare immagine tramite pallini in basso
function cambioDot(x, max){
  corrente=x;
  for (let i = 1; i < max + 1; i++) {
    if (i!=corrente){
        document.getElementById(i).style.display = "none";
        dots[i-1].className = dots[i-1].className.replace(" active", "");
    } else {
        document.getElementById(i).style.display = "block";
        dots[i-1].className += " active";
    }
}
}

//funzione per cambiare immagine se si premono freccia avanti/indietro
function cambioImg(x, max) {
    if ((corrente + x) > max)
        corrente = 1;
    else if ((corrente + x) < 1)
        corrente = max;
    else
        corrente += x;

    for (let i = 1; i < max + 1; i++) {
        if (i!=corrente){
            document.getElementById(i).style.display = "none";
            dots[i-1].className = dots[i-1].className.replace(" active", "");
        } else {
            document.getElementById(i).style.display = "block";
            dots[i-1].className += " active";
        }
    }
    //setTimeout(cambioImg(corrente+1,4), 5000);
}