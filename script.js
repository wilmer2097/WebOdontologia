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

window.addEventListener('load', function () {
  var preloader = document.getElementById('preloader');
  preloader.style.display = 'none';
});


var videoPlayer = document.getElementById('videoPlayer');

// Al abrir el modal, iniciar la reproducción del video
$('#mod').on('shown.bs.modal', function () {
  videoPlayer.play();
});

// Al cerrar el modal, detener la reproducción del video
$('#mod').on('hidden.bs.modal', function () {
  videoPlayer.pause();
});