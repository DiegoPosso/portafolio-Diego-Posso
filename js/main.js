// infinito de el carousel
document.addEventListener("DOMContentLoaded", function() {
    var carousel = document.querySelector("#carouselHobbiesCaptions");
    var carouselInstance = new bootstrap.Carousel(carousel, {
      interval: 3000, // Intervalo en milisegundos para cambiar de imagen (3 segundos en este ejemplo)
      wrap: true // Permitir que el carrusel se repita al llegar al final
    });
  });

// funcion mover carrousel de my work
function moveToSelected(element) {
    if (element === "next") {
      var selected = $(".selected").next();
    } else if (element === "prev") {
      var selected = $(".selected").prev();
    } else {
      var selected = element;
    }
  
    var next = $(selected).next();
    var prev = $(selected).prev();
    var prevSecond = $(prev).prev();
    var nextSecond = $(next).next();
  
    $(selected).removeClass().addClass("selected");
  
    $(prev).removeClass().addClass("prev");
    $(next).removeClass().addClass("next");
  
    $(nextSecond).removeClass().addClass("nextRightSecond");
    $(prevSecond).removeClass().addClass("prevLeftSecond");
  
    $(nextSecond).nextAll().removeClass().addClass("hideRight");
    $(prevSecond).prevAll().removeClass().addClass("hideLeft");
  }
  
  // Eventos teclado
  $(document).keydown(function(e) {
      switch(e.which) {
          case 37: // left
          moveToSelected("prev");
          break;
  
          case 39: // right
          moveToSelected("next");
          break;
  
          default: return;
      }
      e.preventDefault();
  });
  
  $('#carousel-mywork div').click(function() {
    moveToSelected($(this));
  });
  
  $('#my-work #prev').click(function() {
    moveToSelected("prev");
  });
  
  $('#my-work #next').click(function() {
    moveToSelected("next");
  });

//   
