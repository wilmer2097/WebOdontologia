const counters = document.querySelectorAll('.value');
const speed = 200;

function animateCounter() {
  counters.forEach(counter => {
    const rect = counter.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight && counter.getAttribute('data-visible') === 'false') {
      counter.setAttribute('data-visible', 'true');
      const value = +counter.getAttribute('akhi');
      const suffix = counter.getAttribute('suffix');
      const increment = Math.ceil(value / (speed));
      let data = 0;

      function updateCounter() {
        if (data < value) {
          data = Math.min(data + increment, value);
          counter.innerText = `${data}${suffix}`;
          requestAnimationFrame(updateCounter);
        } else {
          counter.innerHTML = `${value}${suffix}`;
        }
      }

      updateCounter();
    }
  });
}

window.addEventListener('scroll', animateCounter);
animateCounter();


// $(document).ready(function(){
//     $('.carousel').slick({
//       autoplay: true,
//       autoplaySpeed: 3000,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       infinite: true,
//       dots: false,
//       arrows: false,
//       pauseOnHover: false,
//       pauseOnFocus: false
//     });
//   });

// AOS.init();

$(document).ready(function() {
  var preloader = $('#preloader');

  // Mostrar el preloader
  preloader.show();

  // Ocultar el preloader después de 5 segundos (4000 milisegundos)
  setTimeout(function() {
    preloader.hide();
  }, 500);
});

