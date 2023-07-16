document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que se envíe el formulario por defecto

    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;

    // Función de validación de correo electrónico
    function validateEmail(email) {
      var re = /\S+@\S+\.\S+/;
      return re.test(email);
    }

    if (nombre.trim() === "") {
      Swal.fire("Error", "Por favor, ingresa tu nombre", "error");
      return;
    }

    if (email.trim() === "") {
      Swal.fire("Error", "Por favor, ingresa tu correo electrónico", "error");
      return;
    }

    if (!validateEmail(email)) {
      Swal.fire("Error", "Por favor, ingresa un correo electrónico válido", "error");
      return;
    }

    // Envía los datos mediante AJAX a suscripcion.php
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "Ajax/ajax.subscribe.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        Swal.fire("Éxito", xhr.responseText, "success").then(() => {
          // Redireccionar a otra página después de la suscripción exitosa
          window.location.href = "index.php";
        });
      }
    };
    xhr.send("nombre=" + encodeURIComponent(nombre) + "&email=" + encodeURIComponent(email));
  });