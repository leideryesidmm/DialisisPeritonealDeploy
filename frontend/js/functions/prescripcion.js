let NavBarPrescripcion = () => {
  let ms = "";
  let usuario = JSON.parse(localStorage.getItem("datos")).usuario;
  if (usuario == "paciente") {
    ms +=
    '<div class="navbar" id="bann" style="padding:0"><div class="col-2"><a href="principal.html" class="devolverse"><img src="../img/devolverseColor.png" alt="Ir atrás" id="icono"></a></div>'+
    '<div class="col-8"><h1 class="title-principal-app">Prescripciones</h1></div>'+
    '<div class="col-2"></div></div>';
  }
  else {
    ms += `<nav id="nav" class=" navbar-expand-lg navbar-light">
        <div class="row">
            <div class="col-1 sinlogomovil" style="padding: 0,0,0,0;">
                <a href="principal.html" class="devolverse"><img src="../img/devolverseColor.png" alt="Ir atrás" id="icono"></a>
            </div>
            <div class="col-2 sinlogomovil2" style="padding: 0,0,0,0;">
                <a href="principal.html" class="devolverse"><img src="../img/devolverseColor.png" alt="Ir atrás" id="icono"></a>
            </div> 
            <div class="col-1 sinlogomovil">
                <div class="logo"><img src="../img/logo3.png" alt="Logo app"></div>
            </div>
            <div class="col-8">
              <div class="title">
                <h1 class="d-none d-md-block d-sm-block">Prescripciones</h1>
                <h4 class="d-block d-sm-none d-md-none">Prescripciones</h4>
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

}

let agregarPrescripcion = async () => {
  let ms = "";

  ms += '<div class="form-container">' +
      '<h2>Agregar Prescripción</h2>' +
      '<p id="campos">Selecciona la cantidad de prescripciones mensuales</p>'+
      '<form id="paciente-form" onsubmit="obtenerValoresDePrescripcion(event)">';
  ms +=
      '<div class="form-row">' +
      '<div class="form-column">' +
      '<select  id="selectCantidad" onchange="generarPrescripciones()"  required>'+
      '<option value="0">0</option>'+
              '<option value="1">1</option>'+
              '<option value="2">2</option>'+
              '<option value="3">3</option>'+
              '<option value="4">4</option>'+
              '<option value="5">5</option>'+
              '<option value="6">6</option>'+
              '<option value="7">7</option>'+
            '</select>'+
      '</div>' +
      
      '</div>'+
      '<div id="containerExtra"></div>'+
      '<div id="botones"></div>';
  document.getElementById("container").innerHTML = ms;
}
let checkboxesSeleccionados = {};

function generarPrescripciones(){
  var cantidad=document.getElementById("selectCantidad").value;
  let containerExtra = document.getElementById("containerExtra");
  containerExtra.innerHTML = "";
  let msg="";
  const diasSemana = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];
  
  if(cantidad>0){
  msg+=
  '<div class="form-row">'+
  '<div class="form-column">' +
  '<label for="orificio" id="data">Orificio:</label><label id="asq">*</label>' +
  '<br>' +
        '<select id="selectedOrificio" required>'+
          '<option value="">Seleccione...</option>'+
          '<option value="perfecto">Perfecto</option>'+
          '<option value="bueno">Bueno</option>'+
          '<option value="equivoco">Equívoco</option>'+
          '<option value="infección Aguda">Infección Aguda</option>'+
          '<option value="infección Crónica">Infección Crónica</option>'+
          '<option value="trauma">Trauma</option>'+
        '</select>'+
        
  '</div>'+
  '<div class="form-column">' +
      '<label id="data">Fecha Final de la prescripción:</label><label id="asq">*</label>';
      let fechaManana = new Date();
      fechaManana.setDate(fechaManana.getDate() + 1);
      msg += `<input type="date" class="fechaFin" id="fechaFin" min="${fechaManana.toISOString().split('T')[0]}" required>`+
      '</div>' +
      '</div>' +
  '<hr>';
  }
  for(var i=0;i<cantidad;i++){
      let idCantidad = i + 1;
      msg+=
      '</div>' +
      '<div class="form-row" >' +
      '<div class="form-column" id="">' +
      '<div class="nocheSeca">' +
      '<label for="nocheSeca" id="data2" data-toggle="tooltip" data-placement="bottom" title="El paciente no se introduce líquido durante la noche">Noche seca: &nbsp</label>' +
      '<input type="checkbox" id="nocheSeca'+idCantidad+'" name="nocheSeca">' +
      '</div>' +    
      '</div>' +             
      '<div class="form-column">' +
      '<label for="recambios" id="data">Cantidad de recambios diarios:<label id="asq">*</label></label>' +
      '<br>' +
      '<select  id="selectedCantidad' + idCantidad + '" required onchange="generarSelects(' + idCantidad + ' )" >'+
              '<option value="">Seleccione...</option>'+
              '<option value="1">1</option>'+
              '<option value="2">2</option>'+
              '<option value="3">3</option>'+
              '<option value="4">4</option>'+
              '<option value="5">5</option>'+
            '</select>'+
      '</div>' +        
      '</div>' +  
      '<div class="form-column" id="prescrip">' +
      '<div id="selectContainer' + idCantidad + '" class="margentop"></div>'+
      '</div>'+
      '</div>';
      
      msg+='<div class="form-row">' +
      '<div class="nocheSeca">' +
      '<label for="nocheSeca" id="data2">Lunes:&nbsp</label>' +
      '<input type="checkbox" id="lunes'+idCantidad+'" name="lunes'+idCantidad+'">&nbsp' +
      '<label for="nocheSeca" id="data2">Martes: &nbsp</label>' +
      '<input type="checkbox" id="martes'+idCantidad+'" name="martes'+idCantidad+'">&nbsp' +
      '<label for="nocheSeca" id="data2">Miercoles: &nbsp</label>' +
      '<input type="checkbox" id="miercoles'+idCantidad+'" name="miercoles'+idCantidad+'">&nbsp' +
      '<label for="nocheSeca" id="data2">Jueves: &nbsp</label>' +
      '<input type="checkbox" id="jueves'+idCantidad+'" name="jueves'+idCantidad+'">&nbsp' +
      '<label for="nocheSeca" id="data2">Viernes: &nbsp</label>' +
      '<input type="checkbox" id="viernes'+idCantidad+'" name="viernes'+idCantidad+'">&nbsp' +
      '<label for="nocheSeca" id="data2">Sábado: &nbsp</label>' +
      '<input type="checkbox" id="sabado'+idCantidad+'" name="sabado'+idCantidad+'">&nbsp' +
      '<label for="nocheSeca" id="data2">Domingo: &nbsp</label>&nbsp' +
      '<input type="checkbox" id="domingo'+idCantidad+'" name="domingo'+idCantidad+'">&nbsp' +
      '</div>' +              
      '</div>'+
      '<hr>'; 
      
    
  }
  
  containerExtra.innerHTML += msg;

  

  let ms="";
  if(cantidad>0){
  ms+=
  '<div class="buttons">' +
  '<div class="btn-save">' +
  '<a type="button" href="prescripcionesM.html" class="cancelar">Cancelar</a>' +
  '</div>' +
  '<div class="btn-save">' +
  '<button type="submit" data-toggle="modal" id="agregarPrescripcion" data-toggle="tooltip" data-placement="bottom" title="Agregar Prescripcion" class="guardarPac">Guardar</button>' +
  '</div>' +
  '</div>'+
  '</form>';
  }
  document.getElementById("botones").innerHTML = ms;  

  for (var i = 0; i < cantidad; i++) {
      let idCantidad = i + 1;
      
      diasSemana.forEach(dia => {
          const checkbox = document.getElementById(`${dia}${idCantidad}`);
          checkbox.addEventListener('change', function () {
            checkboxesSeleccionados[`${dia}`] = checkboxesSeleccionados[`${dia}`] || {};
            checkboxesSeleccionados[`${dia}`][idCantidad] = this.checked;
            habilitaDeshabilitaDias(dia, cantidad);
          });
        });
    }
  
}


function habilitaDeshabilitaDias(dia, cantidad) {
  const checkedCycles = [];

  for (let i = 1; i <= cantidad; i++) {
      const checkbox = document.getElementById(`${dia}${i}`);
      if (checkbox && checkbox.checked) {
          checkedCycles.push(i);
      }
  }
  for (let i = 1; i <= cantidad; i++) {
      const checkbox = document.getElementById(`${dia}${i}`);
  
      if (checkbox) {
          if (checkedCycles.length > 0 && checkedCycles.includes(i)) {
              checkbox.disabled = false;
          } else if (checkedCycles.length > 0 && !checkedCycles.includes(i)) {
              checkbox.disabled = true;
          } else {
              checkbox.disabled = false;
          }
      }
  }
}

function generarSelects(idCantidad) {
var select = document.getElementById("selectedCantidad" + idCantidad);

if (select.value !== "") {
  var cantidad = document.getElementById("selectedCantidad" + idCantidad).value;
  var container = document.getElementById("selectContainer" + idCantidad);
  container.innerHTML = ""; 

  var row = document.createElement("div");
  row.className = "row";

  for (var i = 0; i < cantidad; i++) {
      var idConcentracion = "concentracion" + (i + 1)+""+idCantidad; 

      var col = document.createElement("div");
      col.id = "selectsPrescripcion";
      col.className = "col-12 col-md-6 col-lg-4 col-xl-3"; 

      var selectContainer = document.createElement("div");
      selectContainer.className = "form-group";

      var label = document.createElement("label");
      label.className = "form-label";
      label.id = "data";
      label.for = idConcentracion;
      label.innerText = "Concentración " + (i + 1) + ":"; 
      var asquerisco = document.createElement("label");
  asquerisco.id="asq";
  asquerisco.innerText= " *";

      var select = document.createElement("select");
      select.id = idConcentracion;
      select.setAttribute("required", "true");

      var opciones = ["Seleccione...", "1.5%", "2.5%", "4.25%"];

      var rang = document.createElement("label");
      rang.id="data";
      rang.for="rangoH";

      var textRango = document.createElement("label");
      textRango.id="data";
      textRango.for="";
      textRango.innerText ="Rango de Horas:";
      
      var asquer = document.createElement("label");
      asquer.id="asq";
      asquer.innerText="*";

      var rangoH=document.createElement("input");
      rangoH.type="number";
      rangoH.min="1";
      rangoH.max="15";
      rangoH.className="rango";
      rangoH.id = "rango"+idConcentracion;
      rangoH.setAttribute("required", "true");

      for (var j = 0; j < opciones.length; j++) {
          var option = document.createElement("option");
          if(j==0){
            option.value = opciones[j];
            option.value="";
            select.appendChild(option);
          }
          else{
          option.value = opciones[j];
          option.text = opciones[j];
          select.appendChild(option);
          }
      }

      selectContainer.appendChild(label);
      selectContainer.appendChild(asquerisco);
      selectContainer.appendChild(select);
      selectContainer.appendChild(rang);
      selectContainer.appendChild(textRango);
      selectContainer.appendChild(asquer);
      selectContainer.appendChild(rangoH);
      

      col.appendChild(selectContainer);
      row.appendChild(col);
  }

  container.appendChild(row);
}
}

let cargar=async (prescripcion)=>{
  
  prescripcion=await prescripcion;
  document.getElementById("fechaP").innerText=prescripcion.cita.fecha.split("T")[0]
}
let mostrarPrescripcion2= async (prescripcion) => {
  await obtenerClave();
  await obtenerIv();
  localStorage.setItem('prescripcionActual', JSON.stringify(prescripcionDiaHoy(prescripcion)));
  prescripcion=await prescripcion;
  let msg="";
   
  if(prescripcion.unionPrescripcionDiasRecambios.length==1){
  
   msg+='<div id="prescontainer">'
  +'<div class="row">'
  +'<label for="cantidad">N° recambios: '+ prescripcion.unionPrescripcionDiasRecambios[0].recambios.length +'</label>'

  +'<label for="concentracion">Concentraciones: ';
  let msg2=""
  prescripcion.unionPrescripcionDiasRecambios[0].recambios.forEach(recambio => {
  msg+=decodeURIComponent(CryptoJS.AES.decrypt(recambio.concentracion,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8))+' - ';
  msg2+=decodeURIComponent(CryptoJS.AES.decrypt(recambio.intervaloTiempo,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8))+' - ';selectConcentracion
  });
  msg=msg.substring(0, msg.length - 3);
  msg2=msg2.substring(0, msg2.length - 3);
  msg+='</label>'
  +'<label for="intervaloTiempo">Intervalos de tiempo: '
  +msg2
  +'</label>'
  +'</div></div>';
  document.getElementById("prescri").innerHTML=msg;
  }
  if(prescripcion.unionPrescripcionDiasRecambios.length>1){
  let msg="";
  prescripcion.unionPrescripcionDiasRecambios.forEach((dias)=>{
      msg+='<div class="container">'
      +'<div class="row text-center">';
       msg += `<div class="col-2"><span class="badge ${dias.prescripcionDia.lunes ? 'bg-success' : 'bg-secondary'}">Lu</span></div>`
      + `<div class="col-2"><span class="badge ${dias.prescripcionDia.martes ? 'bg-success' : 'bg-secondary'}">Ma</span></div>`
      + `<div class="col-2"><span class="badge ${dias.prescripcionDia.miercoles ? 'bg-success' : 'bg-secondary'}">Mi</span></div>`
      + `<div class="col-2"><span class="badge ${dias.prescripcionDia.jueves ? 'bg-success' : 'bg-secondary'}">Ju</span></div>`
      + `<div class="col-2"><span class="badge ${dias.prescripcionDia.viernes ? 'bg-success' : 'bg-secondary'}">Vi</span></div>`
      + `<div class="col-2"><span class="badge ${dias.prescripcionDia.sabado ? 'bg-success' : 'bg-secondary'}">Sá</span></div>`
      + '</div> <br>'
      +'<table class="table table-bordered" id="prescripcionTable">'
      +'<thead>'
      +'  <tr>'
      +'    <th>Recambio</th>'
      +'    <th>Concentración</th>'
      +'    <th>Tiempo</th>'
      +'  </tr>'
      +'</thead>'
      +'<tbody id="seguimientoData">';
      let cont=1;
      dias.recambios.forEach(recambio => {
      msg+='  <tr>'
      +'    <td>'+cont+'</th>'
      +'    <td>'+decodeURIComponent(CryptoJS.AES.decrypt(recambio.concentracion,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8))+'</th>'
      +'    <td>'+decodeURIComponent(CryptoJS.AES.decrypt(recambio.intervaloTiempo,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8))+'</th>'
      +'  </tr>'
      });
      msg+='</tbody>'
      +'</table>'
      +'</div> <br>';
  
  })
  document.getElementById("prescri").innerHTML=msg;
  }
}
function formatearFecha(fecha) {
  var dia = fecha.getDate().toString().padStart(2, '0');
  var mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
  var año = fecha.getFullYear();

  return `${dia}-${mes}-${año}`;
}
function formatearFechaHora(fecha) {
  var horas = fecha.getHours();
  var minutos = fecha.getMinutes();
  var segundos = fecha.getSeconds();

  return `${horas}:${minutos}:${segundos}`;
}

let mostrarPrescripcion= async (prescripcion, fecha, recambios) => {
  await obtenerClave();
  await obtenerIv();
  recambios=await recambios;
  if(recambios==null){
      let msg="";
      msg+='<h3>No hay recambios prescritos para la fecha seleccionada</h3>';
      document.getElementById("recambios").innerHTML=msg;
      return;
  }
  localStorage.setItem("recambios",JSON.stringify(recambios));
  let prescripcionDiaHoy1=await prescripcionDiaFecha(prescripcion, fecha)
  localStorage.setItem('prescripcionActual', JSON.stringify(prescripcionDiaHoy1));
  prescripcion=await prescripcion;
  let fech=fecha.setHours(0,0,0,0)
  let fIni=new Date(prescripcion.cita.fecha).setHours(0,0,0,0);
  let fFin=new Date(prescripcion.cita.fechaFin).setHours(0,0,0,0);
  if(fIni>fecha||fecha>fFin){
    let msg="";
      msg+='<h3>La fecha seleccionada no está en la prescripción actual.</h3>';
      document.getElementById("recambios").innerHTML=msg;
      return;
  }
  let msg="";
  let accion="";
  let estado="";
  let hoy=new Date()
  let datos1=await datos();
  let cont=0;
  
  prescripcionDiaHoy1.recambios.forEach(recambio => {
    accion="";
    if(prescripcionDiaHoy1.recambios.length==2&&(cont==0||cont==2)){
      msg+='<div class=col-lg-1></div>'
    }
    if(prescripcionDiaHoy1.recambios.length==4&&(cont==0||cont==2)){
      msg+='<div class=col-lg-1></div>'
    }
    if(prescripcionDiaHoy1.recambios.length==3){
      msg+='<div class=col-lg-2></div>'
    }
      msg+=`<div class="col-lg-${prescripcionDiaHoy1.recambios.length==1?'12':prescripcionDiaHoy1.recambios.length==3?'8':'5'} card card-menor">`
      +'<div class="row">'
      +`    <div class="col-2 estado" style="`;
      if(recambios[cont]!=null){
        estado="H";
        
          msg+=`${parseInt(decodeURIComponent(CryptoJS.AES.decrypt(recambios[cont].drenajeDialisis,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8)))>=parseInt(decodeURIComponent(CryptoJS.AES.decrypt(recambios[cont].liquidoEntrante,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8)))&&decodeURIComponent(CryptoJS.AES.decrypt(recambios[cont].caracteristicaLiquido,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8))!="Turbio"?'background-color:rgb(11, 158, 11);">':'background-color:#f73c3c;">'}`;
          if(fecha.getFullYear() === hoy.getFullYear() &&
          fecha.getMonth() === hoy.getMonth() &&
          (fecha.getDate() === hoy.getDate()||fecha.getDate() === hoy.getDate()-1)){
              accion='<a type="button" data-toggle="tooltip" data-placement="bottom" title="Ver Recambio hecho" onclick="verRecambio('+cont+')"  style="background-color: rgba(0,0,0,0);;border: none;">'
              +'<svg class="icon-hover" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">'
              +'<path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>'
              +'<path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>'
              +'</svg></a>'
              +'<a style="color:black" data-toggle="tooltip" data-placement="bottom" title="Editar Recambio" href="editarRecambio.html?idRecambioHecho='+recambios[cont].idRecambioHecho+'">'
              +'<svg class="icon-hover"xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">'
              +'<path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>'
              +'</svg></a>';
          }
          else{
              if(fecha.getFullYear() < hoy.getFullYear() ||
              (fecha.getFullYear() === hoy.getFullYear() &&
                fecha.getMonth() < hoy.getMonth()) ||
              (fecha.getFullYear() === hoy.getFullYear() &&
                fecha.getMonth() === hoy.getMonth() &&
                fecha.getDate() < (hoy.getDate()-1))){
              accion='<button type="button" data-toggle="tooltip" data-placement="bottom" title="Ver Recambio Hecho" onclick="verRecambio('+cont+')" style="background-color: rgba(0,0,0,0);;border: none;">'
              +'<svg class="icon-hover" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">'
              +'<path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>'
              +'<path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>'
              +'</svg></button>';
          }
          }
      }else{
          if(fecha.getFullYear() === hoy.getFullYear() &&
          fecha.getMonth() === hoy.getMonth() &&
          fecha.getDate() === hoy.getDate()){
            estado="P";
              msg+='background-color:#e6b216;">';
              accion='<a style="color:black" data-toggle="tooltip" data-placement="bottom" title="Registrar Recambio Hecho" href="agregarrecambio.html?idRecambio='+recambio.idRecambio+'">'
                  +'<svg class="icon-hover" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">'
                  +'<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>'
                  +'<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>'
                  +'</svg></a>';
        }else{
          if(fecha.getFullYear() < hoy.getFullYear() ||
          (fecha.getFullYear() === hoy.getFullYear() &&
            fecha.getMonth() < hoy.getMonth()) ||
          (fecha.getFullYear() === hoy.getFullYear() &&
            fecha.getMonth() === hoy.getMonth() &&
            fecha.getDate() < (hoy.getDate()-1))){
              estado="SH"
              msg+='background-color:slategray;">';
          }else{
              if(fecha.getFullYear() === hoy.getFullYear() &&
              fecha.getMonth() === hoy.getMonth() &&
              fecha.getDate() === (hoy.getDate()-1)){
                  estado="P";
                  msg+='background-color:rgb(252, 130, 59);">';
                  accion='<a style="color:black" href="agregarrecambio.html?idRecambio='+recambio.idRecambio+'">'
                  +'<svg class="icon-hover" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">'
                  +'<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>'
                  +'<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>'
                  +'</svg></a>';
              } else{
                estado="F"
                  msg+='background-color:slategray;">';
              }
          }
        }
      }
      'background-color:#e6b216;">'
      
      
      msg+='        <div class="text-center">'
      +'            <h6 id="vertical">'
      +estado
      +'            </h6>'
      +'            <div class="tooltip-container"><a style="cursor:pointer" onclick="verinfo()">'+
      '<span class="tooltip-text" data-toggle="tooltip" data-placement="top" title="H: Hecho&#10;P: Pendiente&#10;SH: Sin hacer&#10;F: Futuro">'+
    '<svg class="icon-hover" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-question-circle" viewBox="0 0 16 16">'
      +'                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>'
      +'                <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>'
      +'              </svg></span></a></div>'
      +'        </div>'  
      +'        </div>'  
      msg+=datos1[cont];

      msg+= '   <div id="acciones" class="col-2  acciones">';
      msg+=accion;
      msg+='</div>'
          +'</div>'
          +'</div>'
  cont++;
}
  );
  
  
  msg+='</div>';
  document.getElementById("recambios").innerHTML=msg;
}

let verRecambio=async(idRecambio)=>{
try {
  await obtenerClave();
  await obtenerIv();
let recambio=JSON.parse(localStorage.getItem("recambios"))[idRecambio];
document.getElementById("inicio").innerText=recambio.horaIni.replace("T", " ");
document.getElementById("final").innerText=recambio.horaFin.replace("T", " ");
document.getElementById("liquidoEntrante").innerText=decodeURIComponent(CryptoJS.AES.decrypt(recambio.liquidoEntrante,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8))+" ml";
document.getElementById("drenaje").innerText=decodeURIComponent(CryptoJS.AES.decrypt(recambio.drenajeDialisis,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8))+" ml";
document.getElementById("concentracion").innerText=decodeURIComponent(CryptoJS.AES.decrypt(recambio.recambio.concentracion,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8))+" %";
document.getElementById("estadoOrificio").innerText=decodeURIComponent(CryptoJS.AES.decrypt(recambio.orificioSalida,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
document.getElementById("caracteristicaliquido").innerText=decodeURIComponent(CryptoJS.AES.decrypt(recambio.caracteristicaLiquido,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
let fecha=formatearFecha(new Date(localStorage.getItem("fecha_real")))
document.getElementById("successModalLabel").innerText="Recambio de la fecha: "+fecha;
$('#verRecambio').modal('show');
} catch (error) {
}
}

let prescripcionDiaFecha= async (prescripcion,fecha) =>{
  prescripcion=await prescripcion;
  let dias=["domingo","lunes","martes","miercoles","jueves","viernes","sabado"]
  let prescripcionDiaHoy1;
  prescripcion.unionPrescripcionDiasRecambios.forEach(prescripcionDia => {
      if(prescripcionDia.prescripcionDia[dias[fecha.getDay()]]==true){
          prescripcionDiaHoy1= prescripcionDia;
      }
  });
  return prescripcionDiaHoy1

}

let tablaRecambios=async(recambios)=>{
  await obtenerClave();
  await obtenerIv();
recambios=await recambios;
let msg='<table class="table table-bordered" id="recambioTable">'
+'<thead>'
+'  <tr>'
+'    <th>Inicio</th>'
+'    <th>Final</th>'
+'    <th>Concentración</th>'
+'    <th>Líquido Entrante</th>'
+'    <th>Drenaje</th>'
+'  </tr>'
+'</thead>'
+'<tbody id="seguimientoData">';
recambios.forEach(recambio => {
  msg+='  <tr>'
+`    <td style="font-size:70%">${formatearFecha(new Date(recambio.horaIni))} \n ${formatearFechaHora(new Date(recambio.horaIni))}</th>`
+`    <td style="font-size:70%">${formatearFecha(new Date(recambio.horaFin))} \n ${formatearFechaHora(new Date(recambio.horaFin))}</th>`
+'    <td style="font-size:90%">'+decodeURIComponent(CryptoJS.AES.decrypt(recambio.recambio.concentracion,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8))+' %</th>'
+'    <td style="font-size:90%">'+decodeURIComponent(CryptoJS.AES.decrypt(recambio.liquidoEntrante,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8))+' ml</th>'
+'    <td style="font-size:90%">'+decodeURIComponent(CryptoJS.AES.decrypt(recambio.drenajeDialisis,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8))+' ml</th>'
+'  </tr>';
});

msg+='</tbody>'
+'</table>';
document.getElementById("recamTable").innerHTML=msg;
new DataTable('#recambioTable', {
    language: {
        url: 'https://cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json',
    },
})
}

let tablaVisitas=async(visitas)=>{
document.getElementById("visitas").classList.add("active");
document.getElementById("chequeos").classList.remove("active");
  visitas=await visitas;
let msg="";

  msg='<div class="container scroll"><table class="table table-bordered" id="visitasTabla">'
  +'<thead>'
  +'  <tr>'
  +'    <th>Fecha</th>'
  +'    <th>Nefrología</th>'
  +'    <th>Enfermería</th>'
  +'    <th>Nutricionista</th>'
  +'    <th>Psicología</th>'
  +'    <th>Trabajo Social</th>'
  +'    <th>Auxiliar de Admisiones</th>'
  +'    <th>Farmacia</th>'
  +'    <th>Entrenamiento</th>'
  +'    <th>Reentrenamiento</th>'
  +'    <th>Visita domiciliaria</th>'
  +'  </tr>'
  +'</thead>'
  +'<tbody>';
  
  visitas.forEach(visita => {
  msg+=` <tr>
     <td style="font-size:90%">${visita.cita.fecha.split("T")[0]}</td>
     <td style="font-size:90%">${visita.nefrologia?"Si":"No"}</td>
     <td style="font-size:90%">${visita.enfermeria?"Si":"No"}</td>
     <td style="font-size:90%">${visita.nutricion?"Si":"No"}</td>
     <td style="font-size:90%">${visita.psicologia?"Si":"No"}</td>
     <td style="font-size:90%">${visita.trabajoSocial?"Si":"No"}</td>
     <td style="font-size:90%">${visita.auxiliarAdmisiones?"Si":"No"}</td>
     <td style="font-size:90%">${visita.farmacia?"Si":"No"}</td>
     <td style="font-size:90%">${visita.entrenamiento?"Si":"No"}</td>
     <td style="font-size:90%">${visita.reentrenamiento?"Si":"No"}</td>
     <td style="font-size:90%">${visita.visitaDomiciliaria?"Si":"No"}</td>
    </tr>`;
  
  
  });
  msg+='</tbody>'
  +'</table></div>';

  document.getElementById("visitaTable").innerHTML=msg;
  new DataTable('#visitasTabla', {
      language: {
          url: 'https://cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json',
      },
  })
}


let tablaChequeos = async (chequeos) => {
  chequeos = await chequeos;

  let msg = "";

  msg = '<div class="container scroll"><table class="table table-bordered" id="chequeosTabla">' +
      '<thead>' +
      '  <tr>' +
      '    <th>Fecha</th>' +
      '    <th>Peso</th>' +
      '    <th>Peso seco</th>' +
      '    <th>Tensión arterial</th>' +
      '    <th>Hemoglobina</th>' +
      '    <th>Colesterol Total</th>' +
      '    <th>Fósforo</th>' +
      '    <th>Glicemia</th>' +
      '    <th>Potasio</th>' +
      '    <th>Triglicéridos</th>' +
      '    <th>Nitrógeno Uréico</th>' +
      '    <th>LDH</th>' +
      '    <th>HDL</th>' +
      '    <th>Glucosa</th>' +
      '    <th>Creatinina</th>' +
      '    <th>KT/V</th>' +
      '  </tr>' +
      '</thead>' +
      '<tbody>';

  for (let chequeo of chequeos) {
      let cheq = await desencriptarDatosChequeo(chequeo);

      msg += ` <tr>
  <td style="font-size:90%">${cheq.cita.fecha.split("T")[0]}</td>
   <td style="font-size:90%">${cheq.peso} Kgs.</td>
   <td style="font-size:90%">${cheq.pesoSeco} Kgs.</td>
   <td style="font-size:90%">${cheq.tensionArterial} mmHg</td>
   <td style="font-size:90%">${cheq.hemoglobina} g/L</td>
   <td style="font-size:90%">${cheq.colesterolTotal} mg/dL</td>
   <td style="font-size:90%">${cheq.fosforo} mg/dL</td>
   <td style="font-size:90%">${cheq.glicemia} mg/dL</td>
   <td style="font-size:90%">${cheq.potasio} mmol/L</td>
   <td style="font-size:90%">${cheq.trigliceridos} mg/dL</td>
   <td style="font-size:90%">${cheq.nitrogenoUreico} mg/dL</td>
   <td style="font-size:90%">${cheq.ldh} U/L</td>
   <td style="font-size:90%">${cheq.hdl} mg/dL</td>
   <td style="font-size:90%">${cheq.glucosa} mg/dL</td>
   <td style="font-size:90%">${cheq.creatinina} mg/dL</td>
   <td style="font-size:90%">${cheq.ktv}</td>
  </tr>`;
  }

  msg += '</tbody>' +
      '</table></div>';
  document.getElementById("chequeos").classList.add("active");
  document.getElementById("visitas").classList.remove("active");
  document.getElementById("visitaTable").innerHTML = msg;
  new DataTable('#chequeosTabla', {
      language: {
          url: 'https://cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json',
      },
  });
};



let datos= async () => {
  let data=new Array();
  await obtenerClave();
  await obtenerIv();
  let cardinalidad=["Primer Recambio","Segundo Recambio", "Tercer Recambio", "Cuarto Recambio", "Quinto Recambio", "Sexto Recambio"];
  let cont=0;
  prescripcionDia=JSON.parse(localStorage.getItem('prescripcionActual'));
  let msg="";
  prescripcionDia.recambios.forEach(recambio => {
      msg='<div class="col-8">'
      +'        <div class="datos">'
      +'<h5>'+cardinalidad[cont]+'</h5>'
      +'        <h6>Concentración: '+decodeURIComponent(CryptoJS.AES.decrypt(recambio.concentracion,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8))+'%</h6>'
      +'        <h6>Tiempo: '+decodeURIComponent(CryptoJS.AES.decrypt(recambio.intervaloTiempo,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8))+'h</h6>'
      +'    </div>'
      +'</div>';
      data.push(msg);
        cont++;
  });
  return data;
}


let mostrarPrecripcionMedico=async (prescripcion) => {
  await obtenerClave();
  await obtenerIv();
document.getElementById("actual").classList.add("active");
document.getElementById("historico").classList.remove("active");
prescripcion=await prescripcion;
let data=localStorage.getItem("datos");
let dato=JSON.parse(data);
if(prescripcion===undefined||prescripcion.cita.finalizado===true){
  let msg='<h3>No hay prescripción activa a la fecha</h3><br>';
  if(dato.usuario==="medico"){
  msg+=
  '<a href="agregarPrescripcion.html" data-toggle="tooltip" data-placement="bottom" title="Agregar Prescripción" class="btn btn-primary">Nueva</a>';
  }
  document.getElementById("cardBody").innerHTML=msg;
  return;
}
let recambiosHechos=await finAllRecambiosHechos(prescripcion.cita.idCita);
localStorage.setItem("selectPrescripcion", JSON.stringify(prescripcion))
let msg="";
let ordinal=["Primer","Segundo", "Tercer", "Cuarto", "Quinto"];

msg+=`
<div class="dropdown">
<button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" id="btnChequeo">Seguimiento Mensual
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>
</button>
<ul class="dropdown-menu">
  <li><a class="dropdown-item" onclick="agregarVisita()">Agregar visita a especialistas</a></li>
  <li><a class="dropdown-item" onclick="mostrarVisita()">Ver información de visitas a especialista</a></li>
  <li><a class="dropdown-item" onclick="agregarChequeo()">Agregar chequeo mensual</a></li>
  <li><a class="dropdown-item" onclick="mostrarChequeo()">Ver información chequeo mensual</a></li>
  <li><a class="dropdown-item" href="historicoSeguimiento.html">Historial seguimiento mensual</a></li>
</ul>
</div>
<br>
<br>
<h4>Prescripción actual</h4><br>
              <div class="row">
                  <div class="col-sm-6">
                      <h6><b>Fecha inicial:</b> ${prescripcion.cita.fecha==undefined||prescripcion.cita.fecha==null?"Sin fecha de Inicio":formatDate(new Date(prescripcion.cita.fecha))} </h6>
                  </div>
                  <div class="col-sm-6">
                      <h6><b>Fecha final:</b> ${prescripcion.cita.fechaFin==undefined||prescripcion.cita.fechaFin==null?"Sin fecha de fin":formatDate(new Date(prescripcion.cita.fechaFin))} </h6>
                  </div>
                </div>
                <div id="prescripcionesDia">
                  `;


                  prescripcion.unionPrescripcionDiasRecambios.forEach(prescripcionDia => {
                    msg+=`<br><div class="row" style="margin:0 auto;">
                    <div class="col"><h6><b>Días:</b> ${obtenerDias(prescripcionDia.prescripcionDia)}</h6></div>
                    <div class="col-12 table-responsive">
                        <table class="table">
                            <thead>
                              <tr>
                                <th>Recambio</th>
                                <th>Concentración</th>
                                <th>Duración</th>
                              </tr>
                            </thead>
                            <tbody>`
                            let cont=0;
                  prescripcionDia.recambios.forEach(recambio => {
                    msg+=`<tr>
                    <td>${ordinal[cont]+" recambio"}</td>
                    <td>${decodeURIComponent(CryptoJS.AES.decrypt(recambio.concentracion,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8))} %</td>
                    <td>${decodeURIComponent(CryptoJS.AES.decrypt(recambio.intervaloTiempo,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8))} horas</td>
                    
                  </tr>`
                  cont++;
                  });
                              
                    msg+=        `
                            </tbody>
                          </table>
                    </div>
                    
                  </div>`
                  });

                  msg+=`
                </div>
                
  
                <div class="row" style="margin:0 auto;">
                <div class="text-end">
                ${recambiosHechos==null||recambiosHechos==undefined || recambiosHechos.length==0?'<a href="editarPrescripcion.html" data-toggle="tooltip" data-placement="top" title="Editar Prescripción Actual" class="btn btn-primary">Editar</a>':""}
                <a href="recambiosPaciente.html?idCita=${prescripcion.cita.idCita}" class="btn btn-primary" data-toggle="tooltip" data-placement="top" title="Ver recambios hechos de la prescripción actual">Recambios</a>
                <a href="" data-toggle="tooltip" data-placement="top" title="Finalizar Prescripción Actual" onclick="finalizar(${prescripcion.cita.idCita})" class="btn btn-primary">Finalizar</a>
                
                </div>
                </div>
`;
document.getElementById("cardBody").innerHTML=msg;
}

let mostrarHistoricoMedico=async (prescripciones) => {
  await obtenerClave();
  await obtenerIv();
prescripciones=await prescripciones;

localStorage.setItem("prescripcionesT",JSON.stringify(prescripciones));
let msg=`<div class='row' style="margin: 0 auto">
<table id="historialTable" style="margin: 0 auto" width="100%" >
<thead>
  <tr>
    <th>#</th>
    <th>Fecha inicio</th>
    <th>Fecha fin</th>
    <th>Orificio de Salida</th>
    <th>Acciones</th>
  </tr>
</thead>`
  let cont=1;
  msg+="<tbody>"
prescripciones.forEach(prescripcion => {
    msg+=`<tr>
      <td>${cont}</td>
      <td>${prescripcion.cita.fecha==undefined||prescripcion.cita.fecha==null?"Sin fecha de Inicio":formatDate(new Date(prescripcion.cita.fecha))}</td>
      <td>${prescripcion.cita.fechaFin==undefined||prescripcion.cita.fechaFin==null?"Sin fecha de fin":formatDate(new Date(prescripcion.cita.fechaFin))}</td>
      <td>${decodeURIComponent(CryptoJS.AES.decrypt(prescripcion.unionPrescripcionDiasRecambios[0].prescripcionDia.cita.orificioSalida, CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8))}</td>
      
      <td>
      <a class="icon-link" onclick="antigua(${prescripcion.cita.idCita})"> 
      <img data-toggle="tooltip" data-placement="top" title="Ver recambios hechos antiguos"src="../img/ver.png" class="ver" alt="Ver recambios"/>
      </a>
      </td>
    </tr>`
cont++});
msg+=`</tbody>
</table>
</div>
`;

document.getElementById("historico").classList.add("active");
document.getElementById("actual").classList.remove("active");
document.getElementById("cardBody").innerHTML=msg;
new DataTable('#historialTable', {
  "order": [[0, 'desc']],
  language: {
      url: 'https://cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json',
  },
})
}
function  antigua (idCita) {
let prescripciones=JSON.parse(localStorage.getItem("prescripcionesT"))

prescripciones.forEach(prescripcion => {
  
  if(prescripcion.cita.idCita==idCita)
  mostrarPrescripcionAntiguaMedico(prescripcion)
});

}
function volver() {
let prescripciones=JSON.parse(localStorage.getItem("prescripcionesT"))
mostrarHistoricoMedico(prescripciones)
}
let mostrarPrescripcionAntiguaMedico=async(prescripcion)=>{
  await obtenerClave();
  await obtenerIv();
localStorage.setItem("selectPrescripcion", JSON.stringify(prescripcion));
let ordinal=["Primer","Segundo", "Tercer", "Cuarto", "Quinto"];
let msg=`<div class="row" style="display:flex">
<div class="col-2"><a onclick="volver()" class="btn btn-primary" id="btnVolver">Volver</a></div>
<div class="col-8"><h4 style="text-align:center">Prescripción antigua</h4></div></div><br>
              <div class="row" style="margin:0 auto;">
                  <div class="col-sm-6">
                      <h6><b>Fecha inicial:</b> ${prescripcion.cita.fecha==undefined||prescripcion.cita.fecha==null?"Sin fecha de Inicio":formatDate(new Date(prescripcion.cita.fecha))} </h6>
                  </div>
                  <div class="col-sm-6">
                      <h6><b>Fecha final:</b> ${prescripcion.cita.fechaFin==undefined||prescripcion.cita.fechaFin==null?"Sin fecha de fin":formatDate(new Date(prescripcion.cita.fechaFin))} </h6>
                  </div>
                </div>
                <div id="prescripcionesDia">
                  `;


                  prescripcion.unionPrescripcionDiasRecambios.forEach(prescripcionDia => {
                  
                    msg+=`<br><div class="row" style="margin:0 auto;">
                    <div class="col"><h6><b>Dias:</b> ${obtenerDias(prescripcionDia.prescripcionDia)}</h6></div>
                    <div class="col-12 table-responsive">
                        <table class="table">
                            <thead>
                              <tr>
                                <th>Recambio</th>
                                <th>Concentración</th>
                                <th>Duración</th>
                              </tr>
                            </thead>
                            <tbody>`
                            let cont=0;
                  prescripcionDia.recambios.forEach(recambio => {
                    msg+=`<tr>
                    <td>${ordinal[cont]+" recambio"}</td>
                    <td>${decodeURIComponent(CryptoJS.AES.decrypt(recambio.concentracion,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8))} %</td>
                    <td>${decodeURIComponent(CryptoJS.AES.decrypt(recambio.intervaloTiempo,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8))} horas</td>
                  </tr>`
                  cont++;
                  });
                              
                    msg+=        `
                            </tbody>
                          </table>
                    </div>
                    
                  </div>`
                  });

                  msg+=`
                </div>
                
  
                <div class="row" style="margin:0 auto;">
                <div class="text-end">
                ${finAllRecambiosHechos(prescripcion.cita.idCita)==null||finAllRecambiosHechos(prescripcion.cita.idCita)==undefined?'<a href="editarPrescripcion.html" class="btn btn-primary">Finalizar</a>':""}
                <a href="recambiosPaciente.html?idCita=${prescripcion.cita.idCita}" class="btn btn-primary">Recambios</a>
                </div>
                </div>
`;
document.getElementById("cardBody").innerHTML=msg;
}


function obtenerDias(prescripcionDia) {
let dias2=["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"]
let diasP="";
let cont=0;
let cantidad=0;
let ultimo=0;
while(cont<dias2.length){
  if(prescripcionDia[dias2[cont]]){
    ultimo=cont;
    if(cont+1==dias2.length){
      if(cantidad==0){return dias2[cont]}
      if(diasP[diasP.length-1]=" ")diasP=diasP.substring(0,diasP.length-2)
      diasP+=" y "+dias2[cont];return diasP;
    }switch (dias2[cont]) {
      case "miercoles":
        diasP+="miércoles, "
        break;          
      case "sabado":
        diasP+="sábado, "
        break;      
      default:
        diasP+=dias2[cont]+", ";
    }
    
    
    cantidad++;
  }
  cont++
  if(cont==dias2.length){
    if(diasP[diasP.length-1]=" "){
      if(cantidad==1){return dias2[ultimo]}
      diasP=diasP.substring(0,diasP.length-(4+dias2[ultimo].length))
      switch (dias2[ultimo]) {
        case "miercoles":
          diasP+=" y "+"miércoles"
          break;          
        case "sabado":
          diasP+=" y "+"sábado"
          break;      
        default:
          diasP+=" y "+dias2[ultimo];
      }
    }
    
  }
};
return diasP;
}
function formatDate(date) {
var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear() % 100;

if (day < 10) {
  day = '0' + day;
}
if (month < 10) {
  month = '0' + month;
}

return `${day}/${month}/${year}`;
}

let mostrarRecambiosHechosMedico=async()=>{

}




let editarPrescripcion = async () => {
let datos = await datosEditarPrescripcion();
let prescripcionesHechas = datos.prescipcionDia.length;
let ms = "";

ms += '<div class="form-container">' +
    '<h2>Editar Prescripción</h2>' +
    '<p id="campos">Selecciona la cantidad de prescripciones mensuales</p>' +
    '<form id="paciente-form" onsubmit="obtenerDatosParaEditar(event)">';
ms +=
    '<p id="campos"><b>*</b> Campos requeridos</p>'+
    '<div class="form-row">' +
    '<div class="form-column">' +
    '<select  id="selectCantidad">' +
    '<option value="0">0</option>' +
    '<option value="1">1</option>' +
    '<option value="2">2</option>' +
    '<option value="3">3</option>' +
    '<option value="4">4</option>' +
    '<option value="5">5</option>' +
    '<option value="6">6</option>' +
    '<option value="7">7</option>' +
    '</select>' +
    '</div>' +
    '</div>' +
    '<div id="containerExtra"></div>' +
    '<div id="botones"></div>';
document.getElementById("container").innerHTML = ms;
let selectCantidad = document.getElementById("selectCantidad");
selectCantidad.value = prescripcionesHechas;

generarPrescripcionesLlenados();

selectCantidad.addEventListener("change", function() {
  const cantidadSeleccionada = parseInt(selectCantidad.value);
  if (cantidadSeleccionada !== 0) {
    generarPrescripcionesLlenados(cantidadSeleccionada);
  }
});
}


let checkboxsSeleccionados = {};
let rec=[];
let generarPrescripcionesLlenados=async()=>{
  await obtenerClave();
  await obtenerIv();
let datos = await datosEditarPrescripcion();
let orificio=decodeURIComponent(CryptoJS.AES.decrypt(datos.cita.orificioSalida,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
let fechaFin=datos.cita.fechaFin.split("T")[0];
let prescripcionesDia=datos.prescipcionDia;
let recambios=datos.recambios;
var cantidad=document.getElementById("selectCantidad").value;
let containerExtra = document.getElementById("containerExtra");
containerExtra.innerHTML = "";
let msg="";


if(cantidad>0){
msg+=
'<div class="form-row">'+
'<div class="form-column">' +
'<label for="orificio" id="data">Orificio:</label><label id="asq">*</label>' +
'<br>' +
      '<select id="selectedOrificio" required>'+
        '<option value="">Seleccione...</option>'+
        '<option value="perfecto">Perfecto</option>'+
        '<option value="bueno">Bueno</option>'+
        '<option value="equivoco">Equívoco</option>'+
        '<option value="infeccionAguda">Infección Aguda</option>'+
        '<option value="infeccionCronica">Infeccion Crónica</option>'+
        '<option value="trauma">Trauma</option>'+
      '</select>'+
      
'</div>'+
'<div class="form-column">' +
    '<label id="data">Fecha Final de la prescripción:</label><label id="asq">*</label>';
    let fechaManana = new Date();
    fechaManana.setDate(fechaManana.getDate() + 1);
    msg += `<input type="date" class="fechaFin" id="fechaFin" min="${fechaManana.toISOString().split('T')[0]}" required>`+
    '</div>' +
    '</div>' +
'<hr>';
}

for(var i=0;i<cantidad;i++){
  if(i<recambios.length){
  rec[i]=recambios[i].length;
  }
    let idCantidad = i + 1;
    msg+=
    '</div>' +
    '<div class="form-row" >' +
    '<div class="form-column" id="">' +
    '<div class="nocheSeca">' +
    '<label for="nocheSeca" id="data2" data-toggle="tooltip" data-placement="bottom" title="El paciente no se introduce líquido durante la noche">Noche seca: &nbsp</label>' +
    '<input type="checkbox" id="nocheSeca'+idCantidad+'" name="nocheSeca">' +
    '</div>' +    
    '</div>' +             
    '<div class="form-column">' +
    '<label for="recambios" id="data">Cantidad de Recambios diarios:<label id="asquerisco">*</label></label>' +
    '<br>' +
    '<select id="selectedCantidad' + idCantidad + '" required>'+
            '<option value="">0</option>'+
            '<option value="1">1</option>'+
            '<option value="2">2</option>'+
            '<option value="3">3</option>'+
            '<option value="4">4</option>'+
            '<option value="5">5</option>'+
          '</select>'+
    '</div>' +        
    '</div>' +  
    '<div class="form-column" id="prescrip">' +
    '<div id="selectContainer' + idCantidad + '" class="margentop"></div>'+
    '</div>'+
    '</div>';
  
      
    msg+='<div class="form-row">' +
    '<div class="nocheSeca">' +
    '<label for="nocheSeca" id="data2">Lunes:&nbsp</label>' +
    '<input type="checkbox" id="lunes'+idCantidad+'" name="lunes'+idCantidad+'">&nbsp' +
    '<label for="nocheSeca" id="data2">Martes: &nbsp</label>' +
    '<input type="checkbox" id="martes'+idCantidad+'" name="martes'+idCantidad+'">&nbsp' +
    '<label for="nocheSeca" id="data2">Miercoles: &nbsp</label>' +
    '<input type="checkbox" id="miercoles'+idCantidad+'" name="miercoles'+idCantidad+'">&nbsp' +
    '<label for="nocheSeca" id="data2">Jueves: &nbsp</label>' +
    '<input type="checkbox" id="jueves'+idCantidad+'" name="jueves'+idCantidad+'">&nbsp' +
    '<label for="nocheSeca" id="data2">Viernes: &nbsp</label>' +
    '<input type="checkbox" id="viernes'+idCantidad+'" name="viernes'+idCantidad+'">&nbsp' +
    '<label for="nocheSeca" id="data2">Sábado: &nbsp</label>' +
    '<input type="checkbox" id="sabado'+idCantidad+'" name="sabado'+idCantidad+'">&nbsp' +
    '<label for="nocheSeca" id="data2">Domingo: &nbsp</label>&nbsp' +
    '<input type="checkbox" id="domingo'+idCantidad+'" name="domingo'+idCantidad+'">&nbsp' +
    '</div>' +              
    '</div>'+
    '<hr>'; 
    
    
}

containerExtra.innerHTML += msg;

for(var i=0;i<cantidad;i++){
  let nocheSec = i < prescripcionesDia.length ? prescripcionesDia[i].nocheSeca : false;
    let idCantidad = i + 1;
let checkboxNocheSeca = document.getElementById("nocheSeca" + idCantidad);
checkboxNocheSeca.checked = nocheSec;
}


document.getElementById("fechaFin").value = fechaFin;
let selecorificio = document.getElementById("selectedOrificio");
selecorificio.value = orificio;


let ms="";
if(cantidad>0){
ms+=
'<div class="buttons">' +
'<div class="btn-save">' +
'<a type="button" href="prescripcionesM.html" class="cancelar">Cancelar</a>' +
'</div>' +
'<div class="btn-save">' +
'<button type="submit" data-toggle="modal" id="editarPrescripcion" data-toggle="tooltip" data-placement="bottom" title="Actualizar Prescripción" class="guardarPac">Actualizar</button>' +
'</div>' +
'</div>'+
'</form>';
}
document.getElementById("botones").innerHTML = ms;  

for (var i = 0; i < cantidad; i++) {
    let idCantidad = i + 1;
    
    
      if(i<recambios.length){
        document.querySelector("#selectedCantidad" + idCantidad).value = rec[i];
      }
     
  }

for(var i=0; i<cantidad;i++){
  let idCantidad=i+1;
  let selCantidad = document.getElementById("selectedCantidad"+idCantidad);
 
  if(i<recambios.length){
selCantidad.value = recambios[i].length;
  }

selCantidad.addEventListener("change", function() {
  const cantidadSeleccionada = parseInt(selCantidad.value);
 
  if (cantidadSeleccionada !== 0) {
    generarSelectsLlenados(idCantidad, document.getElementById("selectedCantidad" + idCantidad).value);    }
  
});

 
  generarSelectsLlenados(idCantidad, document.getElementById("selectedCantidad" + idCantidad).value);
 
}
}


let generarSelectsLlenados = async (idCantidad, cantidadSeleccionada) => {
  await obtenerClave();
  await obtenerIv();
var container = document.getElementById("selectContainer" + idCantidad);
container.innerHTML = "";

var row = document.createElement("div");
row.className = "row";

for (var i = 0; i < cantidadSeleccionada; i++) {
  var idConcentracion = "concentracion" + (i + 1)+""+idCantidad; 

  var col = document.createElement("div");
  col.id = "selectsPrescripcion";
  col.className = "col-12 col-md-6 col-lg-4 col-xl-3"; 
  
  var selectContainer = document.createElement("div");
  selectContainer.className = "form-group";

  var label = document.createElement("label");
  label.className = "form-label";
  label.id = "data";
  label.for = idConcentracion;
  label.innerText = "Concentración " + (i + 1) + ":"; 
  var asquerisco = document.createElement("label");
  asquerisco.id="asq";
  asquerisco.innerText= " *";

  var select = document.createElement("select");
  select.id = idConcentracion;
  select.setAttribute("required", "true");

  var opciones = ["Seleccione...", "1.5%", "2.5%", "4.25%"];

  var rang = document.createElement("label");
  rang.id="data";
  rang.for="rangoH";

  var textRango = document.createElement("label");
  textRango.id="data";
  textRango.for="";
  textRango.innerText ="Rango de Horas: " ;
  
  var asquer = document.createElement("label");
  asquer.id="asq";
  asquer.innerText= " *";

  var rangoH=document.createElement("input");
  rangoH.type="number";
      rangoH.min="1";
      rangoH.max="15";
  rangoH.className="rango";
  rangoH.id = "rango"+idConcentracion;
  rangoH.setAttribute("required", "true");

  for (var j = 0; j < opciones.length; j++) {
      var option = document.createElement("option");
      if(j==0){
        option.value = opciones[j];
        option.value="";
        select.appendChild(option);
      }
      else{
      option.value = opciones[j];
      option.text = opciones[j];
      select.appendChild(option);
      }
  }

  selectContainer.appendChild(label);
  selectContainer.appendChild(asquerisco);
  selectContainer.appendChild(select);
  selectContainer.appendChild(rang);
  selectContainer.appendChild(textRango);
  selectContainer.appendChild(asquer);
  selectContainer.appendChild(rangoH);
  

  col.appendChild(selectContainer);
  row.appendChild(col);
}
container.appendChild(row);

let datos = await datosEditarPrescripcion();
var cantidad=document.getElementById("selectCantidad").value;

let recambios=datos.recambios;
let prescipcionesDia=datos.prescipcionDia;

await new Promise((resolve) => setTimeout(resolve, 0));
for(var i=0;i<recambios.length;i++){
  let idCantidad = i+1;
  let recambio=recambios[i];
  let prescipcionDia=prescipcionesDia[i];
  for(var j=0;j<recambio.length;j++){
    document.getElementById("concentracion"+(j+1)+idCantidad).value=decodeURIComponent(CryptoJS.AES.decrypt(recambio[j].concentracion,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8))+"%";
    document.getElementById("rangoconcentracion"+(j+1)+idCantidad).value=decodeURIComponent(CryptoJS.AES.decrypt(recambio[j].intervaloTiempo,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
  }
  const diasSemana = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];
  diasSemana.forEach(dia => {
    const checkbox = document.getElementById(`${dia}${idCantidad}`);
    checkbox.checked = prescipcionDia[dia];
    habilitaDeshabilitDias(dia, cantidad);
    habilitarDeshabilitarDias(dia, cantidad); 
    
    checkbox.addEventListener('change', function () {
      checkboxsSeleccionados[`${dia}`] = checkboxsSeleccionados[`${dia}`] || {};
      checkboxsSeleccionados[`${dia}`][idCantidad] = this.checked;
      habilitaDeshabilitDias(dia, cantidad);
      habilitarDeshabilitarDias(dia, cantidad);
      

    });
  });
}

};
function habilitarDeshabilitarDias(dia, cantidad) {
const checkboxes = [];

for (let i = 1; i <= cantidad; i++) {
  const checkbox = document.getElementById(`${dia}${i}`);
  if (checkbox) {
    checkboxes.push(checkbox);
  }
}

const anyCheckboxChecked = checkboxes.some((checkbox) => checkbox.checked);

checkboxes.forEach((checkbox) => {
  if (checkbox.checked) {
    checkbox.disabled = false;
  } else {
    checkbox.disabled = anyCheckboxChecked; 
  }
});
}

function habilitaDeshabilitDias(dia, cantidad) {
const checkboxes = [];

for (let i = 1; i <= cantidad; i++) {
  const checkbox = document.getElementById(`${dia}${i}`);
  if (checkbox) {
    checkboxes.push(checkbox);
  }
}

checkboxes.forEach((checkbox, index) => {
  checkbox.addEventListener('change', () => {
    checkboxes.forEach((otherCheckbox, otherIndex) => {
      if (otherIndex !== index) {
        otherCheckbox.disabled = checkbox.checked;
      }
    });
  });
});
}

let desencriptarDatosChequeo=async(chequeo)=>{
  await obtenerClave();
  await obtenerIv();
  let colesterolTotal=decodeURIComponent(CryptoJS.AES.decrypt(chequeo.colesterolTotal,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
  let fosforo=decodeURIComponent(CryptoJS.AES.decrypt(chequeo.fosforo,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
  let glicemia=decodeURIComponent(CryptoJS.AES.decrypt(chequeo.glicemia,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
  let hdl=decodeURIComponent(CryptoJS.AES.decrypt(chequeo.hdl,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
  let hemoglobina=decodeURIComponent(CryptoJS.AES.decrypt(chequeo.hemoglobina,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
  let ldh=decodeURIComponent(CryptoJS.AES.decrypt(chequeo.ldh,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
  let nitrogenoUreico=decodeURIComponent(CryptoJS.AES.decrypt(chequeo.nitrogenoUreico,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
  let potasio=decodeURIComponent(CryptoJS.AES.decrypt(chequeo.potasio,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
  let tensionArterial=decodeURIComponent(CryptoJS.AES.decrypt(chequeo.tensionArterial,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
  let trigliceridos=decodeURIComponent(CryptoJS.AES.decrypt(chequeo.trigliceridos,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
  let peso=decodeURIComponent(CryptoJS.AES.decrypt(chequeo.peso,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
  let pesoSeco=decodeURIComponent(CryptoJS.AES.decrypt(chequeo.pesoSeco,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
  let glucosa=decodeURIComponent(CryptoJS.AES.decrypt(chequeo.glucosa,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
  let creatinina=decodeURIComponent(CryptoJS.AES.decrypt(chequeo.creatinina,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
  let ktv=decodeURIComponent(CryptoJS.AES.decrypt(chequeo.ktv,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
  let cita=chequeo.cita;
  let idChequeoMensual=chequeo.idChequeoMensual;

  let chequeoMensualInDto={
    colesterolTotal:colesterolTotal, fosforo:fosforo, glicemia:glicemia, hdl:hdl, hemoglobina:hemoglobina, ldh:ldh, nitrogenoUreico:nitrogenoUreico, potasio:potasio, tensionArterial:tensionArterial, trigliceridos:trigliceridos, peso:peso, pesoSeco:
    pesoSeco, glucosa:glucosa, creatinina, creatinina, ktv:ktv, cita:cita, idChequeoMensual:idChequeoMensual
  }

  return chequeoMensualInDto;
}

let mostrarChequeo=async()=>{
  await obtenerClave();
  await obtenerIv();
let chequeo=await obtenerUltimoChequeo();
if(chequeo==null){
  $('#errorModalChequeo').modal('show');
}
else{
let msg="";
chequeo=await desencriptarDatosChequeo(chequeo);
if(chequeo!=null){
let nombrePaciente=decodeURIComponent(CryptoJS.AES.decrypt(chequeo.cita.paciente.nombre,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
let cedulaPaciente=decodeURIComponent(CryptoJS.AES.decrypt(chequeo.cita.paciente.cedula,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));

msg +=
        `<div class="modal-dialog modal-lg">
        <div class="modal-content">
        <div class="modal-header">
        <h5 class="modal-title">Seguimiento Mensual</h5>
        <button type="button" class="close" aria-label="Close" onclick="cerrarChequeo()"><span aria-hidden="true" >&times;</span></button>
        </div>
        <div class="modal-body">
        <label class="cedulaPaciente" id="cedulaPaciente"><b>Cédula: </b>`+cedulaPaciente+`</label>&nbsp&nbsp&nbsp&nbsp&nbsp
        <label class="cedulaPaciente" id="cedulaPaciente"><b>Nombre: </b>`+nombrePaciente+`</label>
        <div class="">
        <div class="row">
        <div class="col-6 p-3">
        <div class="row mt-2 border p-2">
        <div class="centrar-label col-6"><label class="form-label" for="peso">Peso:</label></div>
        <div class="col-6"><input class="form-control" type="text" name="chequeo" id="peso" disabled value="`+chequeo.peso+` Kgs. "></input></div>
        </div>
        <div class="row mt-2 border p-2">
        <div class="centrar-label col-6"><label class="form-label" for="tensionArterial">Tensión Arterial:</label></div>
        <div class="col-6"><input class="form-control" type="text" name="chequeo" id="tensionArterial" disabled value="`+chequeo.tensionArterial+` mm Hg"></input></div>
        </div>
        <div class="row mt-2 border p-2">
        <div class="centrar-label col-6"><label class="form-label" for="colesterolTotal">Colesterol Total:</label></div>
        <div class="col-6"><input class="form-control" type="text" name="chequeo" id="colesterolTotal" disabled value="`+chequeo.colesterolTotal+` mg/dL"></input></div>
        </div>
        <div class="row mt-2 border p-2">
        <div class="centrar-label col-6"><label class="form-label" for="glicemia"> Glicemia:</label></div>
        <div class="col-6"><input class="form-control" type="text" name="chequeo" id="glicemia" disabled value="`+chequeo.glicemia+` mg/dL"></input></div>
        </div>
        <div class="row mt-2 border p-2">
        <div class="centrar-label col-6"><label class="form-label" for="triglicerios">Triglicerios:</label></div>
        <div class="col-6"><input class="form-control" type="text" name="chequeo" id="triglicerios" disabled value="`+chequeo.trigliceridos+` mg/dL"></input></div>
        </div>
        <div class="row mt-2 border p-2">
        <div class="centrar-label col-6"><label class="form-label" for="ldh">LDH:</label></div>
        <div class="col-6"><input class="form-control" type="text" name="chequeo" id="ldh" disabled value="`+chequeo.ldh+` U/L"></input></div>
        </div>
        <div class="row mt-2 border p-2">
        <div class="centrar-label col-6"><label class="form-label" for="glucosa">Glucosa:</label></div>
        <div class="col-6"><input class="form-control" type="text" name="chequeo" id="glucosa" disabled value="`+chequeo.glucosa+` mg/dL"></input></div>
        </div>
        <div class="row mt-2 border p-2">
        <div class="centrar-label col-6"><label class="form-label" for="ktv">KT/V:</label></div>
        <div class="col-6"><input class="form-control" type="number" name="chequeo" id="ktv" disabled value="`+chequeo.ktv+`"></input></div>
        </div>
        </div>
        <div class="col-6 p-3">
        <div class="row mt-2 border p-2">
        <div class="centrar-label col-6"><label class="form-label" for="peso_seco">Peso seco:</label></div>
        <div class="col-6"><input class="form-control" type="text" name="chequeo" id="peso_seco" disabled value="`+chequeo.pesoSeco+` Kgs. "></input></div>
        </div>
        <div class="row mt-2 border p-2">
        <div class="centrar-label col-6"><label class="form-label" for="hemoglobina"> Hemoglobina:</label></div>
        <div class="col-6"><input class="form-control" type="text" name="chequeo" id="hemoglobina" disabled value="`+chequeo.hemoglobina+` g/L"></input></div>
        </div>
        <div class="row mt-2 border p-2">
        <div class="centrar-label col-6"><label class="form-label" for="fosforo">Fósforo:</label></div>
        <div class="col-6"><input class="form-control" type="text" name="chequeo" id="fosforo" disabled value="`+chequeo.fosforo+` mg/dL"></input></div>
        </div>
        <div class="row mt-2 border p-2">
        <div class="centrar-label col-6"><label class="form-label" for="potasio">Potasio:</label></div>
        <div class="col-6"><input class="form-control" type="text" name="chequeo" id="potasio" disabled value="`+chequeo.potasio+` mmol/L"></input></div>
        </div>
        <div class="row mt-2 border p-2">
        <div class="centrar-label col-6"><label class="form-label" for="nitrogenoUreico">Nitrógeno Uréico:</label></div>
        <div class="col-6"><input class="form-control" type="text" name="chequeo" id="nitrogenoUreico" disabled value="`+chequeo.nitrogenoUreico+` mg/dL"></input></div>
        </div>
        <div class="row mt-2 border p-2">
        <div class="centrar-label col-6"><label class="form-label" for="hdl">HDL:</label></div>
        <div class="col-6"><input class="form-control" type="text" name="chequeo" id="hdl" disabled value="`+chequeo.hdl+` mg/dL"></input></div>
        </div>
        <div class="row mt-2 border p-2">
        <div class="centrar-label col-6"><label class="form-label" for="creatinina">Creatinina:</label></div>
        <div class="col-6"><input class="form-control" type="text" name="chequeo" id="creatinina" disabled value="`+chequeo.creatinina+` mg/dL"></input></div>
        </div>
        </div>
         </div>
        </div>
        </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-warning" onclick="editarChequeo()" data-toggle="tooltip" data-placement="bottom" title="Actualizar Chequeos Médicos"data-bs-dismiss="modal">Editar</button>
        <button type="submit" onclick="cerrarChequeo()" class="btn btn-secondary">Cerrar</button>
        </div>
        </div>
        </div>`;

        document.getElementById("mostrarChequeo").innerHTML=msg;
        $("#mostrarChequeo").modal("show");
}
}
}


let mostrarVisita=async()=>{
let msg="";
await obtenerClave();
  await obtenerIv();
let visita=await obtenerUltimaVisita();
if(visita==null){
  $('#errorModalVisita').modal('show');
}
else{
let nombrePaciente=decodeURIComponent(CryptoJS.AES.decrypt(visita.cita.paciente.nombre,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
let cedulaPaciente=decodeURIComponent(CryptoJS.AES.decrypt(visita.cita.paciente.cedula,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
let nefrologia=visita.nefrologia;
let enfermeria=visita.enfermeria;
let nutricion=visita.nutricion;
let psicologia=visita.psicologia;
let trabajoSocial=visita.trabajoSocial;
let auxiliarAdmisiones=visita.auxiliarAdmisiones;
let farmacia=visita.farmacia;
let entrenamiento=visita.entrenamiento;
let reentrenamiento=visita.reentrenamiento;
let visitadomiciliaria=visita.visitaDomiciliaria;
msg +=
        `<div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
        <h5 class="modal-title" >Visitas a Especialista</h5>
        <button type="button" class="close" aria-label="Close" onclick="cerrarVisita()"><span aria-hidden="true" >&times;</span></button>
        </div>
        <div class="modal-body">
        <label class="cedulaPaciente" id="cedulaPaciente"><b>Cédula: </b>` + cedulaPaciente + `</label><br>
        <label class="cedulaPaciente" id="cedulaPaciente"><b>Nombre: </b>` + nombrePaciente + `</label><br>
        <div class="especialistas"><br><form id="checkboxForm">
        <div class="row">
        <div class="col-6"><img src="../img/nefrologo.png" alt="Nefrología" width="50" height="55" />&nbsp
        ${nefrologia?
          `<input class="form-check-input" type="checkbox" name="visita" value="nefrologia" id="nefrologia" checked disabled>`:`<input class="form-check-input" type="checkbox" name="visita" value="nefrologia" id="nefrologia" disabled>`}
          <label class="form-check-label" for="flexCheckDefault">
            Nefrólogo
          </label>
        </div>
         <div class="col-6"><img src="../img/enfermera.png" alt="Enfermería" width="50" height="55" />&nbsp 
        ${enfermeria?
        `<input class="form-check-input" type="checkbox" name="visita" value="enfermeria" id="enfermeria" checked disabled>`:`<input class="form-check-input" type="checkbox" name="visita" value="enfermeria" id="enfermeria" disabled>`}
          <label class="form-check-label" for="flexCheckDefault">
            Enfermera
          </label>
        </div>
        </div><br>
        <div class="row">
        <div class="col-6"><img src="../img/nutricion.png" alt="Nutrición" width="50" height="55" />&nbsp
        ${nutricion?
        `<input class="form-check-input" type="checkbox" name="visita" value="nutricion" id="nutricion" checked disabled>`:`<input class="form-check-input" type="checkbox" name="visita" value="nutricion" id="nutricion" disabled>`}
          <label class="form-check-label" for="flexCheckDefault">
            Nutricionista
          </label>
        </div>
        <div class="col-6"><img src="../img/psicologo.png" alt="Psicología" width="50" height="55" />&nbsp
        ${psicologia?
          `<input class="form-check-input" type="checkbox" name="visita" value="psicologia" id="psicologia" checked disabled>`:`<input class="form-check-input" type="checkbox" name="visita" value="psicologia" id="psicologia" disabled>`}
          <label class="form-check-label" for="flexCheckDefault">
            Psicólogo
          </label>
        </div>
        </div><br>
        <div class="row">
        <div class="col-6"><img src="../img/asistencia.png" alt="Trabajo social" width="50" height="55" />&nbsp
        ${trabajoSocial?
          `<input class="form-check-input" type="checkbox" name="visita" value="trabajoSocial" id="trabajoSocial" checked disabled>`:`<input class="form-check-input" type="checkbox" name="visita" value="trabajoSocial" id="trabajoSocial" disabled>`}
          <label class="form-check-label" for="flexCheckDefault">
            Trabajador Social
          </label>
        </div>
        <div class="col-6"><img src="../img/admision.png" alt="Auxiliar de admisiones" width="50" height="55" />&nbsp
        ${auxiliarAdmisiones?
          `<input class="form-check-input" type="checkbox" name="visita" value="auxiliarAdmisiones" id="auxiliarAdmisiones" checked disabled>`:`<input class="form-check-input" type="checkbox" name="visita" value="auxiliarAdmisiones" id="auxiliarAdmisiones" disabled>`}
          <label class="form-check-label" for="flexCheckDefault">
            Aux. de Admisiones
          </label>
        </div>
        </div><br>
        <div class="row">
        <div class="col-6"><img src="../img/farmacia.png" alt="farmacia" width="50" height="55" />&nbsp
        ${farmacia?
          `<input class="form-check-input" type="checkbox" name="visita" value="farmacia" id="farmacia" checked disabled>`:`<input class="form-check-input" type="checkbox" name="visita" value="farmacia" id="farmacia" disabled>`}
          <label class="form-check-label" for="flexCheckDefault">
            Farmacia
          </label>
        </div>
        <div class="col-6"><img src="../img/entrenamiento.png" alt="entrenamiento" width="50" height="55" />&nbsp
        ${entrenamiento?
          `<input class="form-check-input" type="checkbox" name="visita" value="entrenamiento" id="entrenamiento" checked disabled>`:`<input class="form-check-input" type="checkbox" name="visita" value="entrenamiento" id="entrenamiento" disabled>`}
          <label class="form-check-label" for="flexCheckDefault">
            Entrenamiento
          </label>
        </div>
        </div><br>
        <div class="row">
        <div class="col-6"><img src="../img/reentrenamiento.png" alt="reentrenamiento" width="50" height="55" />&nbsp
        ${reentrenamiento?
          `<input class="form-check-input" type="checkbox" name="visita" value="reentrenamiento" id="reentrenamiento" checked disabled>`:`<input class="form-check-input" type="checkbox" name="visita" value="reentrenamiento" id="reentrenamiento" disabled>`}
          <label class="form-check-label" for="flexCheckDefault">
            Reentrenamiento
          </label>
        </div>
        <div class="col-6"><img src="../img/casa.png" alt="visitadomiciliaria" width="50" height="55" />&nbsp
        ${visitadomiciliaria?
          `<input class="form-check-input" type="checkbox" name="visita" value="visitadomiciliaria" id="visitadomiciliaria" checked disabled>`:`<input class="form-check-input" type="checkbox" name="visita" value="visitadomiciliaria" id="visitadomiciliaria" disabled>`}
          <label class="form-check-label" for="flexCheckDefault">
            Visita domiciliaria
          </label>
        </div>
        </div>
        </form>
        </div>
        </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-warning" onclick="editarVisita()" data-toggle="tooltip" data-placement="bottom" title="Actualizar Visita a Especialistas" data-bs-dismiss="modal">Editar</button>
        <button type="button" onclick="cerrarModalMostrarVisita()" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        
        </div>
        </div>
        </div>`;
        document.getElementById("mostrarVisitaEspecialista").innerHTML=msg;
        
        $("#mostrarVisitaEspecialista").modal("show");
}
}

let agregarVisita=async()=>{
let visita= await obtenerUltimaVisita();
await obtenerClave();
  await obtenerIv();
if(visita!=null){
$("#errorModalVisitaExistente").modal("show");
}
else{
let msg="";
let paciente= await encontrarPaciente();
if(paciente!=null){
let cedula=decodeURIComponent(CryptoJS.AES.decrypt(paciente[0].cedula,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
let nombre=decodeURIComponent(CryptoJS.AES.decrypt(paciente[0].nombre,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));

msg+='<div class="modal-dialog">' +
        '<div class="modal-content">' +
        '<div class="modal-header">' +
        '<h5 class="modal-title" >Agregar Visitas a Especialista</h5>' +
        '<button type="button" class="close" aria-label="Close" onclick="cerrarAgregarVisita()">'+
        '<span aria-hidden="true" >&times;</span></button>'+
        '</div>' +
        '<div class="modal-body">' +
        '<label class="cedulaPaciente" id="cedulaPaciente"><b>Cédula: </b>' + cedula + '</label><br>' +
        '<label class="cedulaPaciente" id="cedulaPaciente"><b>Nombre: </b>' + nombre + '</label><br>' +
        '<div class="especialistas"><br><form id="checkboxForm">' +
        '<div class="row">' +
        '<div class="col-6"><img src="../img/nefrologo.png" alt="Nefrolofía" width="50" height="55" />&nbsp<input class="form-check-input" type="checkbox" name="visita" value="nefrologia" id="nefrologia">' +
        '  <label class="form-check-label" for="nefrologia">' +
        '    Nefrólogo' +
        '  </label>' +
        '</div>' +
        '<div class="col-6"><img src="../img/enfermera.png" alt="Enfermería" width="50" height="55" />&nbsp<input class="form-check-input" type="checkbox" name="visita" value="enfermeria" id="enfermeria">' +
        '  <label class="form-check-label" for="enfermeria">' +
        '    Enfermera' +
        '  </label>' +
        '</div>' +
        '</div><br>' +
        '<div class="row">' +
        '<div class="col-6"><img src="../img/nutricion.png" alt="Nutrición" width="50" height="55" />&nbsp<input class="form-check-input" type="checkbox" name="visita" value="nutricion" id="nutricion">' +
        '  <label class="form-check-label" for="nutricion">' +
        '    Nutricionista' +
        '  </label>' +
        '</div>' +
        '<div class="col-6"><img src="../img/psicologo.png" alt="Psicología" width="50" height="55" />&nbsp<input class="form-check-input" type="checkbox" name="visita" value="psicologia" id="psicologia">' +
        '  <label class="form-check-label" for="psicologia">' +
        '    Psicólogo' +
        '  </label>' +
        '</div>' +
        '</div><br>' +
        '<div class="row">' +
        '<div class="col-6"><img src="../img/asistencia.png" alt="Trabajo social" width="50" height="55" />&nbsp<input class="form-check-input" type="checkbox" name="visita" value="trabajoSocial" id="trabajoSocial">' +
        '  <label class="form-check-label" for="trabajoSocial">' +
        '    Trabajador Social' +
        '  </label>' +
        '</div>' +
        '<div class="col-6"><img src="../img/admision.png" alt="Auxiliar de admisiones" width="50" height="55" />&nbsp<input class="form-check-input" type="checkbox" name="visita" value="auxiliarAdmisiones" id="auxiliarAdmisiones">' +
        '  <label class="form-check-label" for="auxiliarAdmisiones">' +
        '    Aux. de Admisiones' +
        '  </label>' +
        '</div>' +
        '</div><br>' +
        '<div class="row">' +
        '<div class="col-6"><img src="../img/farmacia.png" alt="farmacia" width="50" height="55" />&nbsp<input class="form-check-input" type="checkbox" name="visita" value="farmacia" id="farmacia">' +
        '  <label class="form-check-label" for="farmacia">' +
        '    Farmacia' +
        '  </label>' +
        '</div>' +
        '<div class="col-6"><img src="../img/entrenamiento.png" alt="entrenamiento" width="50" height="55" />&nbsp<input class="form-check-input" type="checkbox" name="visita" value="entrenamiento" id="entrenamiento">' +
        '  <label class="form-check-label" for="entrenamiento">' +
        '    Entrenamiento' +
        '  </label>' +
        '</div>' +
        '</div><br>'+

        '<div class="row">' +
        '<div class="col-6"><img src="../img/reentrenamiento.png" alt="reentrenamiento" width="50" height="55" />&nbsp<input class="form-check-input" type="checkbox" name="visita" value="reentrenamiento" id="reentrenamiento">' +
        '  <label class="form-check-label" for="reentrenamiento">' +
        '    Reentrenamiento' +
        '  </label>' +
        '</div>' +
        '<div class="col-6"><img src="../img/casa.png" alt="visitadomiciliaria" width="50" height="55" />&nbsp<input class="form-check-input" type="checkbox" name="visita" value="visitaDomiciliaria" id="visitaDomiciliaria">' +
        '  <label class="form-check-label" for="visitaDomiciliaria">' +
        '    Visita Domiciliaria' +
        '  </label>' +
        '</div>' +
        '</div>'+

        '</form>' +
        '</div>' +
        '</div>' +
        '<div class="modal-footer">' +
        '<button type="button" class="btn btn-secondary" href="prescripcionesM.html" data-bs-dismiss="modal">Cancelar</button>' +
        '<button type="submit" data-toggle="tooltip" data-placement="bottom" title="Agregar Visita Médica" id="guardarVisita" onclick="crearVisita('+cedula+')" class="btn btn-primary">Guardar</button>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>';
        document.getElementById("visita").innerHTML=msg;
        $("#visita").modal("show");
}
}
}

let agregarChequeo=async()=>{
let chequeo= await obtenerUltimoChequeo();
await obtenerClave();
  await obtenerIv();
if(chequeo!=null){
$("#errorModalChequeoExistente").modal("show");
}
else{
let msg="";
let paciente= await encontrarPaciente();
let cedula=decodeURIComponent(CryptoJS.AES.decrypt(paciente[0].cedula,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
let nombre=decodeURIComponent(CryptoJS.AES.decrypt(paciente[0].nombre,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
msg +=
'<div class="modal-dialog modal-lg">' +
'<div class="modal-content">' +
'<div class="modal-header">' +
'<h5 class="modal-title">Agregar Seguimiento Mensual</h5>' +
'<button type="button" class="close" aria-label="Close" onclick="cerrarAgregarChequeo()">'+
'<span aria-hidden="true" >&times;</span></button>' +
'</div>' +
'<div class="modal-body">' +
'<label class="cedulaPaciente" id="cedulaPaciente"><b>Cédula: </b>' + cedula + '</label>&nbsp&nbsp&nbsp&nbsp&nbsp' +
'<label class="cedulaPaciente" id="cedulaPaciente"><b>Nombre: </b>' + nombre + '</label><br>' +
'<div id="aviso" style="text-align:center">'+
'<p id="campos">Los campos no requieren de unidades de medida</p>'+
'</div>'+
'<div class="">' +
'<div class="row">' +
'<div class="col-6 p-3">' +
'<div class="row mt-2  border p-2">' +
'<div class="centrar-label col-6"><label class="form-label" for="Peso">Peso:</label></div>' +
'<div class="col-6"><input class="form-control" min="0" placeholder="peso en Kgs." type="number" name="chequeo" id="peso" /></div>' +
'</div>' +
'<div class="row mt-2 border p-2">' +
'<div class="centrar-label col-6"><label class="form-label" for="tensionArterial">Tensión Arterial:</label></div>' +
'<div class="col-6"><input class="form-control" placeholder="Tensión en mm Hg" type="text" name="chequeo" id="tensionArterial" /></div>' +
'</div>' +
'<div class="row mt-2 border p-2">' +
'<div class="centrar-label col-6"><label class="form-label" for="colesterolTotal">Colesterol Total:</label></div>' +
'<div class="col-6"><input class="form-control" min="0" type="number" name="chequeo" id="colesterolTotal" /></div>' +
'</div>' +
'<div class="row mt-2 border p-2">' +
'<div class="centrar-label col-6"><label class="form-label" for="glicemia"> Glicemia:</label></div>' +
'<div class="col-6"><input class="form-control" min="0" type="number" name="chequeo" id="glicemia" /></div>' +
'</div>' +
'<div class="row mt-2 border p-2">' +
'<div class="centrar-label col-6"><label class="form-label" for="trigliceridos">Trigliceridos:</label></div>' +
'<div class="col-6"><input class="form-control" min="0" placeholder="Trigliceridos en mg/dL" type="number" name="chequeo" id="trigliceridos" /></div>' +
'</div>' +
'<div class="row mt-2 border p-2">' +
'<div class="centrar-label col-6"><label class="form-label" for="ldh">LDH:</label></div>' +
'<div class="col-6"><input class="form-control" min="0" type="number" name="chequeo" id="ldh" /></div>' +
'</div>' +
'<div class="row mt-2 border p-2">' +
'<div class="centrar-label col-6"><label class="form-label" for="ldh">Glucosa:</label></div>' +
'<div class="col-6"><input class="form-control" min="0" type="number" name="chequeo" id="glucosa" /></div>' +
'</div>' +
'<div class="row mt-2 border p-2">' +
'<div class="centrar-label col-6"><label class="form-label" for="ktv">KT/V:</label></div>' +
'<div class="col-6"><input class="form-control" min="0" type="number" name="chequeo" id="ktv" /></div>' +
'</div>' +
'</div>' +
'<div class="col-6 p-3">' +
'<div class="row mt-2 border p-2">' +
'<div class="centrar-label col-6"><label class="form-label" for="pesoSeco">Peso seco:</label></div>' +
'<div class="col-6"><input class="form-control" min="0" type="number" name="chequeo" id="pesoSeco" /></div>' +
'</div>' +
'<div class="row mt-2 border p-2">' +
'<div class="centrar-label col-6"><label class="form-label" for="hemoglobina"> Hemoglobina:</label></div>' +
'<div class="col-6"><input class="form-control" min="0" type="number" name="chequeo" id="hemoglobina" /></div>' +
'</div>' +
'<div class="row mt-2 border p-2">' +
'<div class="centrar-label col-6"><label class="form-label" for="fosforo">Fósforo:</label></div>' +
'<div class="col-6"><input class="form-control" min="0" type="number" name="chequeo" id="fosforo" /></div>' +
'</div>' +
'<div class="row mt-2 border p-2">' +
'<div class="centrar-label col-6"><label class="form-label" for="potasio">Potasio:</label></div>' +
'<div class="col-6"><input class="form-control" min="0" type="number" name="chequeo" id="potasio" /></div>' +
'</div>' +
'<div class="row mt-2 border p-2">' +
'<div class="centrar-label col-6"><label class="form-label" for="nitrogenoUreico">Nitrógeno Uréico:</label></div>' +
'<div class="col-6"><input class="form-control" min="0" type="number" name="chequeo" id="nitrogenoUreico" /></div>' +
'</div>' +
'<div class="row mt-2 border p-2">' +
'<div class="centrar-label col-6"><label class="form-label" for="hdl">HDL:</label></div>' +
'<div class="col-6"><input class="form-control" min="0" type="number" name="chequeo" id="hdl" /></div>' +
'</div>' +
'<div class="row mt-2 border p-2">' +
'<div class="centrar-label col-6"><label class="form-label" for="hdl">Creatinina:</label></div>' +
'<div class="col-6"><input class="form-control" min="0" type="number" name="chequeo" id="creatinina" /></div>' +
'</div>' +

'</div>' +
' </div>' +
'</div>' +
'</div>' +

'</div'+
'<br>'+
'<div class="modal-footer">' +
'<button type="button" class="btn btn-secondary" href="prescripcionesM.html" data-bs-dismiss="modal">Cancelar</button>' +
'<button type="submit" data-toggle="tooltip" data-placement="bottom" title="Agregar Chequeo Médico" onclick="crearChequeoMensual(' + cedula + ')"" class="btn btn-primary">Guardar</button>' +
'</div>' +
'</div>' +
'</div>';
        document.getElementById("agregarChequeo").innerHTML=msg;
        $("#agregarChequeo").modal("show");
}
}

let editarChequeo=async()=>{
  await obtenerClave();
  await obtenerIv();
let msg="";
let ultimoChequeo=await obtenerUltimoChequeo();
let chequeo=desencriptarDatosChequeo(ultimoChequeo);

let nombrePaciente=decodeURIComponent(CryptoJS.AES.decrypt(chequeo.cita.paciente.nombre,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
let cedulaPaciente=decodeURIComponent(CryptoJS.AES.decrypt(chequeo.cita.paciente.cedula,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
msg +=
        `
        <div class="modal-dialog modal-lg">
        <div class="modal-content">
        <div class="modal-header">
        <h5 class="modal-title">Editar Seguimiento Mensual</h5>
        <button type="button" class="close" aria-label="Close" onclick="cerrarEditarChequeo()">
              <span aria-hidden="true" >&times;</span></button>
        </div>
        <div class="modal-body">
        <label class="cedulaPaciente" id="cedulaPaciente"><b>Cédula: </b>`+cedulaPaciente+`</label>&nbsp&nbsp&nbsp&nbsp&nbsp
        <label class="cedulaPaciente" id="cedulaPaciente"><b>Nombre: </b>`+nombrePaciente+`</label><br>
        <div id="aviso" style="text-align:center">
        '<p id="campos">Los campos no requieren de unidades de medida</p>
        </div>
        <input class="form-control" type="number" name="idChequeo" id="editarIdChequeo" value="`+chequeo.idChequeoMensual+ `" hidden>
        <input class="form-control" type="number" name="idCita" id="idCita" value="`+chequeo.cita.idCita+`" hidden>          
        <div class="">
        <div class="row">
        <div class="col-6 p-3">
        <div class="row border p-2">
        <div class="centrar-label col-6"><label class="form-label" for="peso">Peso:</label></div>
        <div class="col-6"><input class="form-control" min="0" type="number" name="chequeo" id="editarPeso" value="`+chequeo.peso+`"></input></div>
        </div>
        <div class="row border p-2">
        <div class="centrar-label col-6"><label class="form-label" for="tensionArterial">Tensión Arterial:</label></div>
        <div class="col-6"><input class="form-control" type="text" name="chequeo" id="editarTensionArterial" value="`+chequeo.tensionArterial+`"></input></div>
        </div>
        <div class="row mt-2 border p-2">
        <div class="centrar-label col-6"><label class="form-label" for="colesterolTotal">Colesterol Total</label></div>
        <div class="col-6"><input class="form-control" min="0" type="number" name="chequeo" id="editarColesterolTotal" value="`+chequeo.colesterolTotal+`"></input></div>
        </div>
        <div class="row mt-2 border p-2">
        <div class="centrar-label col-6"><label class="form-label" for="glicemia"> Glicemia</label></div>
        <div class="col-6"><input class="form-control" min="0" type="number" name="chequeo" id="editarGlicemia" value="`+chequeo.glicemia+`"></input></div>
        </div>
        <div class="row mt-2 border p-2">
        <div class="centrar-label col-6"><label class="form-label" for="triglicerios">Triglicerios:</label></div>
        <div class="col-6"><input class="form-control" min="0" type="number" name="chequeo" id="editarTrigliceridos" value="`+chequeo.trigliceridos+`"></input></div>
        </div>
        <div class="row mt-2 border p-2">
        <div class="centrar-label col-6"><label class="form-label" for="ldh">LDH:</label></div>
        <div class="col-6"><input class="form-control" min="0" type="number" name="chequeo" id="editarLdh" value="`+chequeo.ldh+`"></input></div>
        </div>
        <div class="row mt-2 border p-2">
        <div class="centrar-label col-6"><label class="form-label" for="glucosa">Glucosa:</label></div>
        <div class="col-6"><input class="form-control" min="0" type="number" name="chequeo" id="editarGlucosa" value="`+chequeo.glucosa+`"></input></div>
        </div>
        <div class="row mt-2 border p-2">
        <div class="centrar-label col-6"><label class="form-label" for="ktv">KT/V:</label></div>
        <div class="col-6"><input class="form-control" min="0" type="number" name="chequeo" id="editarKtv" value="`+chequeo.ktv+`"></input></div>
        </div>
        </div>
        <div class="col-6 p-3">
        <div class="row border p-2">
        <div class="centrar-label col-6"><label class="form-label" for="peso_seco"> Peso seco:</label></div>
        <div class="col-6"><input class="form-control" min="0" type="number" name="chequeo" id="editarPesoSeco" value="`+chequeo.pesoSeco+`"></input></div>
        </div>
        <div class="row border p-2">
        <div class="centrar-label col-6"><label class="form-label" for="hemoglobina"> Hemoglobina</label></div>
        <div class="col-6"><input class="form-control" min="0" type="number" name="chequeo" id="editarHemoglobina" value="`+chequeo.hemoglobina+`"></input></div>
        </div>
        <div class="row mt-2 border p-2">
        <div class="centrar-label col-6"><label class="form-label" for="fosforo">Fósforo:</label></div>
        <div class="col-6"><input class="form-control" min="0" type="number" name="chequeo" id="editarFosforo" value="`+chequeo.fosforo+`"></input></div>
        </div>
        <div class="row mt-2 border p-2">
        <div class="centrar-label col-6"><label class="form-label" for="potasio">Potasio:</label></div>
        <div class="col-6"><input class="form-control" min="0" type="number" name="chequeo" id="editarPotasio" value="`+chequeo.potasio+`"></input></div>
        </div>
        <div class="row mt-2 border p-2">
        <div class="centrar-label col-6"><label class="form-label" for="nitrogenoUreico">Nitrógeno Uréico:</label></div>
        <div class="col-6"><input class="form-control" min="0" type="number" name="chequeo" id="editarNitrogenoUreico" value="`+chequeo.nitrogenoUreico+`"></input></div>
        </div>
        <div class="row mt-2 border p-2">
        <div class="centrar-label col-6"><label class="form-label" for="hdl">HDL:</label></div>
        <div class="col-6"><input class="form-control" min="0" type="number" name="chequeo" id="editarHdl" value="`+chequeo.hdl+`"></input></div>
        </div>
        <div class="row mt-2 border p-2">
        <div class="centrar-label col-6"><label class="form-label" for="creatinina">Creatinina:</label></div>
        <div class="col-6"><input class="form-control" min="0" type="number" name="chequeo" id="editarCreatinina" value="`+chequeo.creatinina+`"></input></div>
        </div>
        </div>
         </div>
        </div>
        </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onclick="cerrarEditarChequeo()">Cancelar</button>
        <button type="submit" data-toggle="tooltip" data-placement="bottom" title="Actualizar Chequeo" onclick="actualizarChequeo()" class="btn btn-primary">Guardar</button>
        </div>
        </div>
        </div>`;

        document.getElementById("editarChequeo").innerHTML=msg;
        $("#editarChequeo").modal("show");
}


let editarVisita=async()=>{
let msg="";
await obtenerClave();
  await obtenerIv();
let visita=await obtenerUltimaVisita();
decodeURIComponent(CryptoJS.AES.decrypt(visita.cita.paciente.cedula,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8))
let nombrePaciente=decodeURIComponent(CryptoJS.AES.decrypt(visita.cita.paciente.nombre,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
let cedulaPaciente=decodeURIComponent(CryptoJS.AES.decrypt(visita.cita.paciente.cedula,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
let nefrologia=visita.nefrologia;
let enfermeria=visita.enfermeria;
let nutricion=visita.nutricion;
let psicologia=visita.psicologia;
let trabajoSocial=visita.trabajoSocial;
let auxiliarAdmisiones=visita.auxiliarAdmisiones;
let farmacia=visita.farmacia;
let entrenamiento=visita.entrenamiento;
let reentrenamiento=visita.reentrenamiento;
let visitadomiciliaria=visita.visitaDomiciliaria;
msg +=
        `<div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
        <h5 class="modal-title" >Editar Visitas a Especialista</h5>
        <button type="button" class="close" aria-label="Close" onclick="cerrarEditarVisita()"><span aria-hidden="true" >&times;</span></button>
        </div>
        <div class="modal-body">
        <label class="cedulaPaciente" id="cedulaPaciente"><b>Cédula: </b>` + cedulaPaciente + `</label><br>
        <label class="cedulaPaciente" id="cedulaPaciente"><b>Nombre: </b>` + nombrePaciente + `</label><br>
        <input class="form-control" type="number" name="idVisita" id="idVisita" value="`+visita.idVistaEspecialista + `" hidden>
        <input class="form-control" type="number" name="idCita" id="idCita" value="`+visita.cita.idCita+`" hidden>          
        <div class="especialistas"><br><form id="checkboxForm">
        <div class="row">
        <div class="col-6"><img src="../img/nefrologo.png" alt="Nefrología" width="50" height="55" />&nbsp
        ${nefrologia?
          `<input class="form-check-input" type="checkbox" name="visita" value="nefrologia" id="editarNefrologia" checked >`:`<input class="form-check-input" type="checkbox" name="visita" value="nefrologia" id="editarNefrologia" >`}
          <label class="form-check-label" for="editarNefrologia">
            Nefrólogo
          </label>
        </div>
         <div class="col-6"><img src="../img/enfermera.png" alt="Enfermería" width="50" height="55" />&nbsp 
        ${enfermeria?
        `<input class="form-check-input" type="checkbox" name="visita" value="enfermeria" id="editarEnfermeria" checked>`:`<input class="form-check-input" type="checkbox" name="visita" value="enfermeria" id="editarEnfermeria" >`}
          <label class="form-check-label" for="editarEnfermeria">
            Enfermera
          </label>
        </div>
        </div><br>
        <div class="row">
        <div class="col-6"><img src="../img/nutricion.png" alt="Nutrición" width="50" height="55" />&nbsp
        ${nutricion?
        `<input class="form-check-input" type="checkbox" name="visita" value="nutricion" id="editarNutricion" checked>`:`<input class="form-check-input" type="checkbox" name="visita" value="nutricion" id="editarNutricion" >`}
          <label class="form-check-label" for="editarNutricion">
            Nutricionista
          </label>
        </div>
        <div class="col-6"><img src="../img/psicologo.png" alt="Psicología" width="50" height="55" />&nbsp
        ${psicologia?
          `<input class="form-check-input" type="checkbox" name="visita" value="psicologia" id="editarPsicologia" checked>`:`<input class="form-check-input" type="checkbox" name="visita" value="psicologia" id="editarPsicologia">`}
          <label class="form-check-label" for="editarPsicologia">
            Psicólogo
          </label>
        </div>
        </div><br>
        <div class="row">
        <div class="col-6"><img src="../img/asistencia.png" alt="Trabajo social" width="50" height="55" />&nbsp
        ${trabajoSocial?
          `<input class="form-check-input" type="checkbox" name="visita" value="trabajoSocial" id="editarTrabajoSocial" checked>`:`<input class="form-check-input" type="checkbox" name="visita" value="trabajoSocial" id="editarTrabajoSocial">`}
          <label class="form-check-label" for="editarTrabajoSocial">
            Trabajador Social
          </label>
        </div>
        <div class="col-6"><img src="../img/admision.png" alt="Auxiliar de admisiones" width="50" height="55" />&nbsp
        ${auxiliarAdmisiones?
          `<input class="form-check-input" type="checkbox" name="visita" value="auxiliarAdmisiones" id="editarAuxiliarAdmisiones" checked>`:`<input class="form-check-input" type="checkbox" name="visita" value="auxiliarAdmisiones" id="editarAuxiliarAdmisiones">`}
          <label class="form-check-label" for="editarAuxiliarAdmisiones">
            Aux. de Admisiones
          </label>
        </div>
        </div><br>
        <div class="row">
        <div class="col-6"><img src="../img/farmacia.png" alt="farmacia" width="50" height="55" />&nbsp
        ${farmacia?
          `<input class="form-check-input" type="checkbox" name="visita" value="farmacia" id="editarFarmacia" checked >`:`<input class="form-check-input" type="checkbox" name="visita" value="farmacia" id="editarFarmacia">`}
          <label class="form-check-label" for="editarFarmacia">
            Farmacia
          </label>
        </div>
        <div class="col-6"><img src="../img/entrenamiento.png" alt="entrenamiento" width="50" height="55" />&nbsp
        ${entrenamiento?
          `<input class="form-check-input" type="checkbox" name="visita" value="entrenamiento" id="editarEntrenamiento" checked >`:`<input class="form-check-input" type="checkbox" name="visita" value="entrenamiento" id="editarEntrenamiento">`}
          <label class="form-check-label" for="editarEntrenamiento">
          Entrenamiento
          </label>
        </div>
        </div><br>
        <div class="row">
        <div class="col-6"><img src="../img/reentrenamiento.png" alt="reentrenamiento" width="50" height="55" />&nbsp
        ${reentrenamiento?
          `<input class="form-check-input" type="checkbox" name="visita" value="reentrenamiento" id="editarReentrenamiento" checked >`:`<input class="form-check-input" type="checkbox" name="visita" value="reentrenamiento" id="editarReentrenamiento">`}
          <label class="form-check-label" for="editarReentrenamiento">
          Reentrenamiento
          </label>
        </div>
        <div class="col-6"><img src="../img/casa.png" alt="visita domiciliaria" width="50" height="55" />&nbsp
        ${visitadomiciliaria?
          `<input class="form-check-input" type="checkbox" name="visita" value="visitaDomiciliaria" id="editarVisitaDomiciliaria" checked >`:`<input class="form-check-input" type="checkbox" name="visita" value="visitadomiciliaria" id="editarVisitaDomiciliaria">`}
          <label class="form-check-label" for="editarVisitaDomiciliaria">
          Visita Domiciliaria
          </label>
        </div>
        </div>
        </form>
        </div>
        </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
        <button type="submit"  id="guardarVisita" onclick="actualizarVisita()" data-toggle="tooltip" data-placement="bottom" title="Actualizar Visita" class="btn btn-primary">Guardar</button>
        </div>
        </div>
        </div>`;

        document.getElementById("editarVisita").innerHTML=msg;
        $("#editarVisita").modal("show");
}

function verinfo() {
$("#info").modal("show");
}
