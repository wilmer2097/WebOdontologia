
$(".carousel").owlCarousel({
    loop: true,
    margin: 25,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    nav: true,
    navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 3,
        },
    }
})


window.addEventListener('load', function() {
    var preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
    });

// $(document).ready(function() {
//     var preloader = $('#preloader');
  
//     // Mostrar el preloader
//     preloader.show();
  
//     // Ocultar el preloader después de 5 segundos (4000 milisegundos)
//     setTimeout(function() {
//       preloader.hide();
//     }, 500);
//   });