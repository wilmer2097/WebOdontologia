// document.getElementById("form").addEventListener("submit", function(event) {
//     event.preventDefault(); // Evita que el formulario se envíe automáticamente
  
//     // Obtén los valores de los campos del formulario
//     var fromName = document.getElementById("from_name").value;
//     var email = document.getElementById("email_id").value;
//     var message = document.getElementById("message").value;
  
//     // Realiza las validaciones
//     if (fromName.trim() === "") {
//       alert("Por favor, ingresa tu nombre y apellidos");
//       return;
//     }
  
//     if (email.trim() === "") {
//       alert("Por favor, ingresa tu correo electrónico");
//       return;
//     }
  
//     if (!validateEmail(email)) {
//       alert("Por favor, ingresa un correo electrónico válido");
//       return;
//     }
  
//     if (message.trim() === "") {
//       alert("Por favor, ingresa un mensaje");
//       return;
//     }
  
//     // Si todas las validaciones pasan, puedes enviar el formulario aquí
//     const btn = document.getElementById('button');
//     btn.value = 'Enviando...';
  
//     const serviceID = 'default_service';
//     const templateID = 'template_1dmh4ty';
  
//     emailjs.sendForm(serviceID, templateID, this)
//       .then(() => {
//         btn.value = 'Enviar';
//         alert('¡Enviado!');
//       }, (err) => {
//         btn.value = 'Enviar';
//         alert(JSON.stringify(err));
//       });
//   });
  
//   // Función de validación de correo electrónico
//   function validateEmail(email) {
//     var re = /\S+@\S+\.\S+/;
//     return re.test(email);
//   }




// window.addEventListener('load', function() {
//     var preloader = document.getElementById('preloader');
//     preloader.style.display = 'none';
//   });

$(document).ready(function() {
    var preloader = $('#preloader');
  
    // Mostrar el preloader
    preloader.show();
  
    // Ocultar el preloader después de 5 segundos (4000 milisegundos)
    setTimeout(function() {
      preloader.hide();
    }, 500);
  });