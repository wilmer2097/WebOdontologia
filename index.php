<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
  <link rel="stylesheet" href="style.css">
  <script src="https://kit.fontawesome.com/e4fff14509.js" crossorigin="anonymous"></script>
  <title>Inicio</title>
</head>

<body>
  <header class="header ">
    <nav class="navbar bg-body-tertiary  navbar-expand-lg fixed-top">
      <div class="container-fluid">
        <a class="logo navbar-brand ps-3" href="index.html">
          <img cclass="img-fluid" width="230" src="img/logo.png" alt="logo">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-center flex-grow-1 pe-3">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="index.html">Inicio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#nosotros">Sobre nosotros</a>
              </li>
              <li class="nav-item">
              <li class="nav-item">
                <a class="nav-link" href="#elegirnos">¿Por Qué Elegirnos?</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="especialidades.html">Especialidades</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="contacto.html">Contacto</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Dropdown
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li>
                    <hr class="dropdown-divider">
                  </li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>
            <a href="reservarCita.html" class="btn"><button class="btn btn-primary ">Reservar Cita</button></a>
          </div>
        </div>
      </div>
    </nav>

  </header>
  <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="4000">
        <img src="img/carrousel1.jpg" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="img/carrousel2.jpg" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="img/carrousel3.jpg" class="d-block w-100" alt="...">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <section id="nosotros">
    <div class="texto">
      <h3 class="p-4 text-white text-center">Tu salud dental en manos expertas</h3>
    </div>
    <div class="nosotros d-flex flex-column">
      <div class="titulo">
        <h2 class="fw-bold pb-5 text-center">Sobre Nosotros</h2>
      </div>
      <div class="d-flex flex-row py-5 justify-content-center">
        <img src="img/doc.svg" alt="perfil" class="img-fluid pe-5">
        <div class="col-12  col-md-6 px-5">
          <h2 class="mb-4 fw-semibold">ÑINGLE MANSILLA<br>GLORIA MARIA</h2>
          <h3 class="mb-3 fw-normal">Su ortodoncista de confianza</h3>
          <p class="descripcion fst-lighter text-start">"¡Hola! Soy Gloria María Ñingle Mansilla, una ortodoncista con más de 20 años de experiencia como odontóloga.
            Mi pasión por la odontología comenzó hace muchos años y he dedicado mi carrera a ayudar a mis pacientes a
            lograr sonrisas saludables y hermosas. Me especializo en la corrección de la alineación dental, y he ayudado a
            muchos pacientes a lograr una sonrisa más recta y uniforme. Mi enfoque es brindar una atención personalizada y
            adaptada a las necesidades de cada paciente. Me enorgullece ser parte de una profesión que puede tener un
            impacto tan positivo en la vida de las personas, y espero tener la oportunidad de trabajar con usted pronto".
          </p>
        </div>
      </div>
    </div>        
    <section>
      <div class="testimonios">
        <div class="titulo">
          <h2 class="text-center fw-bold text-white">¿Qué Opinan Nuestros Pacientes?</h2>
        </div>
        <div id="carouselOpiniones" class="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="card text-center">
                <div class="card-body d-flex align-items-center flex-row mb-2">
                  <div>
                    <p class="card-text text-white">Recomiendo encarecidamente a este dentista. Es muy profesional y
                      siempre se preocupa por mi bienestar. Me explicó todo el procedimiento con detalle y me dio
                      opciones para tomar una decisión informada</p>
                    <p class="card-text text-start text-black">- Paciente, 001</p>
                  </div>
                  <div>
                    <img class="rounded-circle" src="img/paciente1.png" alt="Foto del paciente 1">
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="card text-center">
                  <div class="card-body d-flex align-items-center flex-row mb-2">
                    <div>
                      <p class="card-text text-white">Recomiendo encarecidamente a este dentista. Es muy profesional y
                        siempre se preocupa por mi bienestar. Me explicó todo el procedimiento con detalle y me dio
                        opciones para tomar una decisión informada</p>
                      <p class="card-text text-start text-black">- Paciente, 002</p>
                    </div>
                    <div>
                      <img src="img/paciente2.png" class="rounded-circle" alt="Foto del paciente 1">
                    </div>
                  </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="card text-center">
                  <div class="card-body d-flex align-items-center flex-row mb-2">
                    <div>
                      <p class="card-text text-white">Recomiendo encarecidamente a este dentista. Es muy profesional y
                        siempre se preocupa por mi bienestar. Me explicó todo el procedimiento con detalle y me dio
                        opciones para tomar una decisión informada</p>
                      <p class="card-text text-start text-black">- Paciente, 003</p>
                    </div>
                    <div>
                      <img src="img/paciente3.png" class="rounded-circle" alt="Foto del paciente 1">
                    </div>
                </div>
              </div>
            </div>
    </section>
    <section id="elegirnos">
      <div class="elegirnos d-flex flex-row">
        <div>
          <img src="img/inicio1.svg" alt="">
        </div>
        <div class="d-flex flex-column">
          <div class="titulo">
            <h2 class="fw-bold pb-5 text-center">¿Por Qué Elegirnos?</h2>
          </div>
          <div class="px-5">
            <p class="descripcion fst-light text-center">"Si está buscando una odontóloga con experiencia, atención garantizada y un enfoque personalizado, ¡no
              busque más! Como la primera odontóloga de la zona, Gloria María Ñingle Mansilla ha estado ayudando a
              pacientes a lograr sonrisas saludables y hermosas durante más de 20 años. Su enfoque en la atención
              personalizada significa que se asegurará de comprender sus necesidades y objetivos únicos, y de trabajar con
              usted para crear un plan de tratamiento que se adapte a su estilo de vida y presupuesto. Además, su
              compromiso con la atención de calidad significa que ofrecemos una garantía en todos nuestros tratamientos.
              Entonces, si está buscando una odontóloga confiable, con experiencia y con garantía, no dude en programar
              una cita con Gloria María Ñingle Mansilla hoy mismo"</p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="estadisticas d-flex flex-row flex-wrap">
        <div class="atendidos text-white">
          <div class="value" akhi="1000">
            0
          </div>
          <H2>Pacientes Atendidos</H2>
        </div>
        <div class="felices text-white">
          <div class="value" akhi="100">0</div>
          <H2>Pacientes Felices</H2>
        </div>
        <div class="experiencia text-white">
          <div class="value" akhi="20">0</div>
          <H2>Años De Experiencia</H2>
        </div>
      </div>
    </section>
    <section class="detalles">
      <div class="d-flex flex-row">
        <div class="izquierda d-flex justify-content-center flex-column text-center">
          <img src="" alt="">
          <h2 class="text-white p-5">Horarios De Atención</h2>
          <h5 class="text-white p-5">Todos los días</h5>
          <a class="text-white p-5" href="#"><button class="btn btn-outline-dark">RESERVAR CITA</button></a>
        </div>
        <div class="derecha d-flex text-center justify-content-center flex-column">
          <img src="" alt="">
          <h2 class="p-5">Encuentranos En</h2>
          <h5 class="p-5">CALLE VALENCIA 102 DPTO. 203 URB LA MACARENA LA PERLA CALLAO, Lima, Peru</h3>
          <a class="p-5" href="#"><button class="btn btn-outline-dark">OBTENER DIRECCIÓN</button></a>
        </div>
      </div>
    </section>
    <section class="mapa">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2758.8311531084996!2d-77.11169407490324!3d-12.072615415524186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105cbdb9b09a86d%3A0x9718d1b31e1548ec!2sOdontolog%C3%ADa%20Est%C3%A9tica%20E%20Integral%20%C3%91ingle!5e0!3m2!1ses-419!2spe!4v1684524232091!5m2!1ses-419!2spe"
        width="100%" height="500" style="border:0;" allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
    </section>
    <footer>
      <img class="footerimg img-fluid" src="img/Footer.svg" alt="">
      <div class="d-flex flex-row-reverse align-items-center footer">
        <div class="datos p-2">
          <ul>
            <li class="text-white">
              <p>Horario de atención:</p>
              <p>Lunes a viernes de 9:30 am - 4:30 pm</p>
            </li>
            <li class="text-white">
              <p>Dirección:</p>
              <p>203 URB LA MACARENA LA PERLA CALLAO, Lima, Peru</p>
            </li>
            <li class="text-white">
              <p>Email:</p>
              <p>odontologianingle@gmail.com</p>
            </li>
            <li class="text-white">
              <p>Celular:</p>
              <p>+51 998 698 808</p>
            </li>
          </ul>
        </div>
        <div class="redes p-2">
          <ul>
            <li class="m-5">
              <a class="text-white" href="#">
                <i class="fa-brands fa-facebook-f fa-2xl" style="color: #ffffff;"></i>
              </a>
            </li>
            <li class="m-5">
              <a class="text-white" href="#">
                <i class="fa-brands fa-instagram fa-2xl" style="color: #ffffff;"></i>
              </a>
            </li>
            <li class="m-5">
              <a class="text-white" href="#">
                <i class="fa-brands fa-linkedin fa-2xl" style="color: #ffffff;"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
</body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
<script src="script.js"></script>
</html>