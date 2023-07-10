const counters = document.querySelectorAll('.value');
const speed = 200;

function animateCounter() {
  counters.forEach(counter => {
    const rect = counter.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight && counter.getAttribute('data-visible') !== 'true') {
      counter.setAttribute('data-visible', 'true');
      const value = +counter.getAttribute('akhi');
      const suffix = counter.getAttribute('suffix');
      const prefix = counter.getAttribute('data-prefix');
      const increment = Math.ceil(value / speed);
      let data = 0;

      function updateCounter() {
        if (data < value) {
          data = Math.min(data + increment, value);
          counter.textContent = `${prefix ? prefix : ''}${data}${suffix}`;
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = `${prefix ? prefix : ''}${value}${suffix}`;
        }
      }

      updateCounter();
    }
  });
}

function handlePreloader() {
  var preloader = document.getElementById('preloader');
  preloader.style.display = 'none';
}

window.addEventListener('scroll', animateCounter);
window.addEventListener('load', handlePreloader);



// $(document).ready(function() {
//   var videoPlayer = document.getElementById("play");
//   var videoPlayer2 = document.getElementById("play2");

//   $("#mod").on("hidden.bs.modal", function () {
//     videoPlayer.pause();
//     console.log("hola1231321");
//   });

//   $("#mod").on("shown.bs.modal", function () {
//     openFullscreen(videoPlayer);
//     videoPlayer.autoplay = true;
//     videoPlayer.load();
//   });

//   $("#mod2").on("hidden.bs.modal", function () {
//     videoPlayer2.pause();
//   });

//   $("#mod2").on("shown.bs.modal", function () {
//     openFullscreen(videoPlayer2);
//   });

//   function openFullscreen(video) {
//     if (video.requestFullscreen) {
//       video.requestFullscreen();
//     } else if (video.webkitRequestFullscreen) { /* Safari */
//       video.webkitRequestFullscreen();
//     } else if (video.msRequestFullscreen) { /* IE11 */
//       video.msRequestFullscreen();
//     }
//   }
// });
