<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $nombre = $_POST["nombre"];
  $email = $_POST["email"];
  
  include "conexion.php";

// Llamar al procedimiento almacenado
  $sql = "CALL InsertarCliente('$nombre', '$email')";

  if ($conn->query($sql) === TRUE) {
    $respuesta = "¡Gracias por suscribirte, $nombre! Tu dirección de correo electrónico es $email.";
  } else {
    $respuesta = "Error al suscribirse: " . $conn->error;
  }

  $conn->close();

  echo $respuesta;
}
?>