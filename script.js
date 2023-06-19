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