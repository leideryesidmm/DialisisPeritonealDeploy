let servidorAPI = "/misaludrenalbackend/";
let cajaNegra="clave_secreta"
function isAuthenticated() {
  return localStorage.getItem("authenticated") === "true";
}

let login = async (event) => {
  let esAdmin=false;
  event.preventDefault();
  document.getElementById("log-in").disabled=true;
  const peticion3 = await fetch(servidorAPI + 'Usuario/findAdmin', {
    method: 'GET',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  })
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  if(peticion3.status!=204){
  const administradores = await peticion3.json();
  console.log(administradores);
  administradores.forEach(administrador => {
    if (username === CryptoJS.AES.decrypt(administrador.cedula,"clave_secreta").toString(CryptoJS.enc.Utf8) && password === CryptoJS.AES.decrypt(administrador.contrasenia,"clave_secreta").toString(CryptoJS.enc.Utf8) && administrador.tipoUsuario==="admin") {
      localStorage.setItem("authenticated", "true");
      const cedula = encodeURIComponent(administrador.cedula)
      let usuario="administrador"
      datos={
      cedula:cedula, usuario:usuario
      }
      const data = JSON.stringify(datos);
      localStorage.setItem("datos", data);
      localStorage.setItem("servidorAPI", servidorAPI);
      location.href="administrador.html";
      esAdmin=true;
      return;
    }
  });
  if(esAdmin==true){
    return;
  }
  }
  let decryptedCedula = null;
  let contrasenia = null;
  console.log(servidorAPI + 'Medico/findAllPacientes');
  const peticion = await fetch(servidorAPI + 'Medico/findAllPacientes', {
    method: 'GET',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  });

  const pacientes = await peticion.json();
  console.log(pacientes);

  const peticion2 = await fetch(servidorAPI + 'Medico/findAll', {
    method: 'GET',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  })
  const medicos = await peticion2.json();
  console.log(medicos);
let pacienteEncontrado=false;
let medicoEncontrado=false;
  pacientes.forEach(async paciente => {
    if(paciente.activo==true){
    decryptedCedula = CryptoJS.AES.decrypt(paciente.cedula, cajaNegra).toString(CryptoJS.enc.Utf8);
    console.log(decryptedCedula);
    contrasenia = CryptoJS.AES.decrypt(paciente.contrasenia, cajaNegra).toString(CryptoJS.enc.Utf8);
    console.log(contrasenia);
    console.log(username === decryptedCedula && password === contrasenia);
    if (username === decryptedCedula && password === contrasenia) {
      
      localStorage.setItem("authenticated", "true");
      const cedula = encodeURIComponent(paciente.cedula)
      let usuario="paciente"
      datos={
      cedula:cedula, usuario:usuario
      }
      const data = JSON.stringify(datos);
      localStorage.setItem("datos", data);
      localStorage.setItem("servidorAPI", servidorAPI);
      console.log(localStorage.setItem("datos", data))
      let cambiado=paciente.cambioContrasenia;
      localStorage.setItem("cambiado", cambiado);
      console.log(cambiado);
      if(!cambiado){
        location.href="cambiarContrasenia.html"
        pacienteEncontrado=true;
      return cambiado;
      }
      else{
      location.href = "principal.html";
      pacienteEncontrado=true;
      return cambiado;
      }
    }}
  });
    if(!pacienteEncontrado){
      medicos.forEach(medico => {
        if(medico.activo==true){
      decryptedCedula = CryptoJS.AES.decrypt(medico.cedula, cajaNegra).toString(CryptoJS.enc.Utf8);
      console.log(decryptedCedula);
      contrasenia = CryptoJS.AES.decrypt(medico.contrasenia, cajaNegra).toString(CryptoJS.enc.Utf8);
      console.log(contrasenia);
      if (username === decryptedCedula && password === contrasenia) {
        localStorage.setItem("authenticated", "true");
        const cedulaMedico = encodeURIComponent(medico.cedula)
        let usuario="medico"
        datos={
        cedula:cedulaMedico, usuario:usuario
        }
        const data = JSON.stringify(datos);
        localStorage.setItem("datos", data);
        console.log(data)
        localStorage.setItem("servidorAPI", servidorAPI);
        location.href = "pacientes.html";
        medicoEncontrado=true;
        return username;
      }
    }
    })
    }
    if(!pacienteEncontrado && !medicoEncontrado){
      $('#errorDatosModal').modal('show');
      document.getElementById("log-in").disabled=false;
    }
}
      
// Función para manejar el cierre de sesión
let logout = () => {
  localStorage.removeItem("authenticated")
  localStorage.removeItem("servidorAPI");
  localStorage.removeItem("datos");
  localStorage.removeItem("cedulaPaciente");
  localStorage.removeItem("url");
  localStorage.removeItem("documento");
  localStorage.removeItem("cedulaPacienteEditar");
  localStorage.clear();
  location.href = "login.html";
  
}

let onload = async () => {
  let pathname = window.location.pathname
  
  if (isAuthenticated()) {
    let data = localStorage.getItem("datos");
  let dato=JSON.parse(data);
  console.log(data);
      let usuario = dato.usuario;
    if (pathname.includes("login.html") || pathname.includes("index.html") ) {
      if(usuario=="medico"){
        location.href="pacientes.html";
      }
      else{
        if(usuario=="administrador"){
          location.href="administrador.html"
        }else{
          if(localStorage.getItem("cambiado")=="true"){
            location.href = "principal.html";}
          else{
            location.href="cambiarContrasenia.html"
          }
        }
        
      }
    }
  } else {
    console.log("noAuthenticated")
    if (!pathname.includes("login.html")) {
      location.href = "login.html";
    }

  }
}

function passwordVisibility() {
  var passwordInput = document.getElementById("password");
  var icon = document.querySelector(".toggle-password");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
} else {
    passwordInput.type = "password";
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
}
}
