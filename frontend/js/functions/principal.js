let principal = () => {
  let ms = "";
  let usuario = JSON.parse(localStorage.getItem("datos")).usuario;
  if (usuario == "paciente") {
    ms +=
      '<div class="navbar"><div class="col-2 no-effect"><input type="image" id="logo-principal" src="../img/logo3.png" alt="Logo app"></div>' +
      '<div class="col-8 no-effect"><h1 class="title-principal-app">Mi Salud Renal</h1></div>' +
      '<div class="col-2 no-effect"><input type="image" class="logout" src="../img/log-out-white.png" onclick="logout()" alt="Cerrar sesión"></div></div>';
  }
  else {
    ms += `<nav id="nav" class=" navbar-expand-lg navbar-light">
        <div class="row">
            <div class="col-1 sinlogomovil" style="padding: 0,0,0,0;">
                <a href="pacientes.html" class="devolverse"><img src="../img/devolverseColor.png" alt="Ir atrás" id="icono"></a>
            </div>
            <div class="col-2 sinlogomovil2" style="padding: 0,0,0,0;">
                <a href="pacientes.html" class="devolverse"><img src="../img/devolverseColor.png" alt="Ir atrás" id="icono"></a>
            </div> 
            <div class="col-1 sinlogomovil">
                <div class="logo"><img src="../img/logo3.png" alt="Logo app"></div>
            </div>
            <div class="col-8">
              <div class="title">
                <h1 class="d-none d-md-block d-sm-block">Mi Salud Renal</h1>
                <h4 class="d-block d-sm-none d-md-none">Mi Salud Renal</h4>
              </div>
            </div>       
            <div class="col-2" style="padding: 0,0,0,0; text-align: right;">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" style="padding-right: 0px; text-align: right;" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto align-items-center ">
                  <li class="nav-item active">
                    <a id="text" class="nav-link" href="pacientes.html">Pacientes<span class="sr-only"></span></a>
                  </li>
                  ${usuario == 'administrador' ? '<li class="nav-item active"><a id="text" class="nav-link" href="administrador.html">Profesionales<span class="sr-only"></span></a></li>' : ''}
                  
                  <div class="d-flex align-items-center">
                  <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path fill-rule="evenodd"
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />'+
                  </svg></li>
                  <li class="nav-item ml-1 active">
                    
                      <button class="btn btn dropdown-toggle" type="button" id="nombreUsuario" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                      </button>
                      <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#nuevacontrasenia">Cambiar 
                          Contraseña</a>
                        <a class="dropdown-item" href="login.html" onclick="logout()">Cerrar sesión</a>
                      </div>
                    </li></div>
                </ul>
              </div>
  
            </div>
        </div>    
        
          
            
  
      </nav>`;
  }
  document.getElementById("banner").innerHTML = ms;


  let msg = "";

  if (usuario == "medico" || usuario == "administrador") {
    msg +=
      '<br>' +
      '<div class="dataPaciente">' +
      '<h2 id="paciente">Paciente: ' + localStorage.getItem("nombrePaciente") + '<h2>' +
      '<h4 id="documento">Documento: ' + localStorage.getItem("cedulaPaciente") + '<h4>' +
      '</div>';
  }

  msg +=
    '<br>' +
    '<div>' +
    '<div class="row">' +
    '<div class="col-md-6 col-12 my-sm-2 d-flex flex-column align-items-center">' +
    '<div class="grid-item"><a class="estiloEnlace" href="perfil.html">' +
    '<div id="container">' +
    '<img src="../img/perfil.png" width="160px" height="160px" alt="Perfil del paciente">' +
    '</div>';
  if (usuario == "paciente") {
    msg += '<div class="grid-item-content" class="col-md-6 col-12  text-center" id="textcontainer">' +
      '<h5><b>Mi Perfil</b></h5>' +
      '</div>' +
      '<div class="description" class="col-md-6 col-12 text-center" >' +
      '<p class="msg-secciones">En esta sección podrá visualizar su información personal y médica<p>';
  }
  else {
    msg += '<div class="grid-item-content" class="col-md-6 col-12  text-center" id="textcontainer">' +
      '<h5><b>Información del paciente</b></h5>' +
      '</div>' +
      '<div class="description" class="col-md-6 col-12 text-center" >' +
      '<p>En esta sección podrá ver la información personal y médica del paciente<p>';
  }
  msg += '</div>' +
    '</a></div>' +

    '</div>' +
    '<div class="col-md-6 col-12 my-sm-2 d-flex flex-column align-items-center">' +
    '<div class="grid-item">';
  if (usuario == "paciente")
    msg += '<a class="estiloEnlace" href="prescripciones.html"><div id="container"><img src="../img/prescripcion.png" width="230px" height="230px"  alt="Prescripciones del paciente">'
  else msg += '<a class="estiloEnlace" href="prescripcionesM.html"><div id="container"><img src="../img/prescripcion.png" width="230px" height="230px"  alt="">'
  msg += '</div>' +
    '<div class="grid-item-content" class="col-md-6 col-12 text-center"  id="textcontainer">' +
    '<h5><b>Prescripciones</b></h5>' +
    '</div>' +
    '<div class="description" class="col-md-6 col-12 text-center" >';
  if (usuario == "paciente") {
    msg += '<p>En esta sección podrá ver la prescipción actual y agregar sus recambios<p>';
  }
  else {
    msg += '<p>En esta sección podrá ver la prescipción actual y los recambios realizados por el paciente<p>';
  }
  msg += '</div>' +
    '</div>' +
    '</a></div>' +
    '</div>' +


    '<div class="row center">' +
    '<div class="col-md-6 col-12 my-sm-2 d-flex flex-column align-items-center">' +
    '<div class="grid-item"><a class="estiloEnlace" href="medicamento.html">' +
    '<div id="container">' +
    '<img src="../img/medicamentos.png" width="230px" height="230px" alt="medicamentos del paciente">' +
    '</div>' +
    '<div class="grid-item-content" class="col-md-6 col-12  text-center" id="textcontainer">' +
    '<h5><b>Medicamentos</b></h5>' +
    '</div>' +
    '<div class="description" class="col-md-6 col-12 text-center" >';
  if (usuario == "paciente") {
    msg += '<p>En esta sección podrá ver, agregar o modificar los medicamentos<p>';
  }
  else {
    msg += '<p>En esta sección podrá ver los medicamentos administrados por el paciente<p>';
  }
  if (usuario == "paciente") {
    msg += '</div>' +
      '</a></div>' +
      '</div>' +
      '<div class="col-md-6 col-12 my-sm-2 d-flex flex-column align-items-center">' +
      '<div class="grid-item"><a class="estiloEnlace" href="recambiosguardados.html">' +
      '<div id="container">' +
      '<img src="../img/recambios.png" width="230px" height="230px" alt="Historial de recambios">' +
      '</div>' +
      '<div class="grid-item-content" class="col-md-6 col-12 text-center"  id="textcontainer" >' +
      '<h5><b>Historial</b></h5>' +
      '</div>' +
      '<div class="description" class="col-md-6 col-12 text-center" >' +
      '<p>En esta sección podrá ver el historial de recambios hechos de meses anteriores<p>' +
      '</div>' +
      '</div></a>' +
      '</div>' +
      '</div>';
  }




  document.getElementById("cont-principal").innerHTML = msg;
}



let NavBarEditar = () => {
  let ms = "";
  let usuario = JSON.parse(localStorage.getItem("datos")).usuario;
  if (usuario == "paciente") {
    ms +=
      '<div class="navbar" id="bann"><div class="col-2"><a href="perfil.html" class="devolverse"><img src="../img/devolverseColor.png" alt="Ir atrás" id="icono"></a></div>' +
      '<div class="col-8"><h1 class="title-principal-app">Mi Salud Renal</h1></div>' +
      '<div class="col-2"></div></div>';
  }
  else {

    ms +=
      '<nav id="nav" class=" navbar-expand-lg navbar-light">' +
      '<div class="row">' +
      `<div class="col-1 no-effect"><a href="${localStorage.getItem('url')}"` + 'class="devolverse"><img src="../img/devolverseColor.png" alt="" id="icono"></a></div>' +
      '<div class="col-1">' +
      '<div class="logo"><img src="../img/logo3.png" alt="Logo app"></div>' +
      '</div>' +
      '<div class="col-8">' +
      '<div class="title">' +
      '<h1>Mi Salud Renal</h1>' +
      '</div>' +
      '</div>' +
      '<div class="col-2">' +
      '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"' +
      'aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">' +
      '<span class="navbar-toggler-icon"></span>' +
      '</button>' +
      '<div class="collapse navbar-collapse" id="navbarSupportedContent">' +
      '<ul class="navbar-nav mr-auto align-items-center ">' +
      '<li class="nav-item active">' +
      '<a id="text" class="nav-link" href="pacientes.html">Pacientes<span class="sr-only"></span></a>' +
      '</li>' +
      '<div class="d-flex align-items-center">' +
      '<li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"' +
      'class="bi bi-person-circle" viewBox="0 0 16 16">' +
      '<path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />' +
      '<path fill-rule="evenodd"' +
      'd="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />' +
      '</svg></li>' +
      '<li class="nav-item ml-1 active">' +

      '<button class="btn btn dropdown-toggle" type="button" id="nombreUsuario" data-toggle="dropdown"' +
      'aria-haspopup="true" aria-expanded="false">' +
      '</button>' +
      '<div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">' +
      '<a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#nuevacontrasenia">Cambiar ' +
      'Contraseña</a>' +
      '<a class="dropdown-item" href="login.html" onclick="logout()">Cerrar sesión</a>' +
      '</div>' +
      '</li></div>' +
      '</ul>' +
      '</div>' +
      '</nav>';
  }
  document.getElementById("banner").innerHTML = ms;
}

