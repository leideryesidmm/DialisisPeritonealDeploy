let NavBarRecambios = () => {
  let ms = "";
  let usuario = JSON.parse(localStorage.getItem("datos")).usuario;
  if (usuario == "paciente") {
      ms +=          
      '<div class="navbar" id="bann" style="padding:0"><div class="col-2"><a href="principal.html" class="devolverse"><img src="../img/devolverseColor.png" alt="Ir atrás" id="icono"></a></div>'+
      '<div class="col-8"><h1 class="title-principal-app">Mis Recambios</h1></div>'+
      '<div class="col-2"></div></div>';
  }
  else {
      ms +=
      '<nav id="nav" class=" navbar-expand-lg navbar-light">'+
      '<div class="row">'+
      '<div class="col-1 no-effect"><a href="principal.html" class="devolverse"><img src="../img/devolverseColor.png" alt="Ir atrás" id="icono"></a></div>'+  
      '<div class="col-1">'+
          '<div class="logo"><img src="../img/logo3.png" alt="Logo app"></div>'+
        '</div>'+
        '<div class="col-8">'+
          '<div class="title">'+
            '<h1>Historial de Recambios</h1>'+
          '</div>'+
        '</div>'+
        '<div class="col-2">'+
          '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"'+
            'aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">'+
            '<span class="navbar-toggler-icon"></span>'+
          '</button>'+
          '<div class="collapse navbar-collapse" id="navbarSupportedContent">'+
            '<ul class="navbar-nav mr-auto align-items-center ">'+
              '<li class="nav-item active">'+
                '<a id="text" class="nav-link" href="pacientes.html">Pacientes<span class="sr-only"></span></a>'+
              '</li>'+
              '<div class="d-flex align-items-center">'+
              '<li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"'+
                'class="bi bi-person-circle" viewBox="0 0 16 16">'+
                '<path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />'+
                '<path fill-rule="evenodd"'+
                  'd="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />'+
              '</svg></li>'+
              '<li class="nav-item ml-1 active">'+
                
                  '<button class="btn btn dropdown-toggle" type="button" id="nombreUsuario" data-toggle="dropdown"'+
                    'aria-haspopup="true" aria-expanded="false">'+
                  '</button>'+
                  '<div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">'+
                    '<a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#nuevacontrasenia">Cambiar '+
                      'Contraseña</a>'+
                    '<a class="dropdown-item" href="login.html" onclick="logout()">Cerrar sesión</a>'+
                  '</div>'+
                '</li></div>'+
            '</ul>'+
          '</div>'+
    '</nav>';
  }
  document.getElementById("banner").innerHTML = ms;
}

let listRecambios = async (recambios) => {
    recambios = await recambios;
    await obtenerClave();
  await obtenerIv();
    let msg = "";
    let cont = 1;

    let data = localStorage.getItem("datos");
  let dato=JSON.parse(data);
      let usuario = dato.usuario;


    recambios.forEach((recambio) => {
      fecha=recambio.fecha.split("T");
      msg +='<div class="accordion-item">'
      +'<h2 class="accordion-header" id="flush-heading'+cont+'">'
      +'    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"'
      +'        data-bs-target="#collapseOne'+cont+'" aria-expanded="false" aria-controls="collapseOne'+cont+'" id="nombre">'
      +'        Recambio '+fecha[0]
      +'    </button>'
      +'</h2>'
      +'<div id="collapseOne'+cont+'" class="accordion-collapse collapse" aria-labelledby="headingOne'+cont+'"'
      +'    data-bs-parent="#accordionExample">'
      +'    <div class="accordion-body">'
      +'        <div class="horaDren">'
      +'            <p><strong>Hora drenaje:</strong></p>'
      +'            <p class="hora" id="hora">'
      +'                '+fecha[1]
      +'            </p>'
      +'        </div>'
      +'        <div class="concentr">'
      +'            <p><strong>Concentración:</strong></p>'
      +'            <p class="concentracion" id="concentracion">'
      +'                '+decodeURIComponent(CryptoJS.AES.decrypt(recambio.concentracion,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8))+' %'
      +'            </p>'
      +'        </div>'
      +'        <div class="vol">'
      +'            <p><strong>Volumen:</strong></p>'
      +'            <p class="volumen" id="volumen">'
      +'               2.000 ml'
      +'            </p>'
      +'        </div>'
      +'        <div class="drenaj">'
      +'            <p><strong>Drenaje:</strong></p>'
      +'            <p class="drenaje" id="drenaje">'
      +'            '+decodeURIComponent(CryptoJS.AES.decrypt(recambio.drenajeDialisis,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8))
      +'            ml</p>'
      +'        </div>'
      +'        <div class="balan">'
      +'            <p><strong>Balance:</strong></p>'
      +'            <p class="balance" id="balance">'
      +                `${(parseInt(decodeURIComponent(CryptoJS.AES.decrypt(recambio.drenajeDialisis,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8)),10)-2000)<=0?0:(parseInt(decodeURIComponent(CryptoJS.AES.decrypt(recambio.drenajeDialisis,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8)),10)-2000)}`
      +'            </p>'
      +'        </div>'
      +'        <div class="liquid">'
      +'            <p><strong>Características del líquido:</strong></p>'
      +'            <p class="liquido" id="liquido">'
      +'                '+decodeURIComponent(CryptoJS.AES.decrypt(recambio.caracteristicaLiquido,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8))

      +'            </p>'
      +'        </div>'
      +'        <div class="orif">'
      +'            <p><strong>Estado del orificio:</strong></p>'
      +'            <p class="orificio" id="orificio">'
      +'                '+decodeURIComponent(CryptoJS.AES.decrypt(recambio.orificioSalida,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8))
      +'            </p>'
      +'        </div>';
          if(usuario=="paciente"){
              msg+='<div class="btn-editar-container">'
      +'            <a href="editarRecambio.html" data-toggle="tooltip" data-placement="bottom" title="Editar Recambio" class="btn-editar"><img src="../img/editaraler.png" alt="Editar recambio"></a>'
      +'            <div>'
      +'                <a href="" class="btn-inhabilitar" data-bs-toggle="modal"'
      +'                    data-bs-target="#eliminarrecambio"><img src="../img/inhabilitar.png" alt="Eliminar recambio"'
      +'                        id="inhabilitar-rec"></a>'
      +'            </div>'
      +'        </div>';
              }
              msg+='</div>'
      +'    <div class="accordion-item" id="acordeon1">'
      +'        <h2 class="accordion-header" id="headingTwo">'
      +'        </h2>'
      +'    </div>'
      +'</div>'
      +'</div>';
      cont++;
    });
    document.getElementById("accordionExample").innerHTML = msg;
  
    let ms="";
    if(usuario=="paciente"){
      ms+='<div class="row">'+
      '<div class="col-10"></div>'+
      '<div class="col-2">'+
          '<a href="agregarrecambio.html"><img src="../img/nuevo.png" alt="Agregar recambio" id="icono"></a>'+
      '</div>'+
  '</div>';
  document.getElementById("agregar").innerHTML=ms;
    }
  }

  let mostrarRecambios=async(recambiosHechos)=>{
    await obtenerClave();
  await obtenerIv();
    recambiosHechos=await recambiosHechos;
    let promedio=0;
    prescripcion=JSON.parse(localStorage.getItem("selectPrescripcion"));
    let fechas=[];
    if(recambiosHechos.length==0){
      let msg="";
      msg+="<h2>El paciente no se ha realizado ningún recambio</h2>";
      document.getElementById("recambios").innerHTML=msg;
      return;
    }
    document.getElementById("card-header").innerHTML= `<h6>Promedio de ultrafiltrado por día: </h6><button id="exportarBoton" data-toggle="tooltip" data-placement="bottom" title="Exportar Excel"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
    <path fill="#169154" d="M29,6H15.744C14.781,6,14,6.781,14,7.744v7.259h15V6z"></path><path fill="#18482a" d="M14,33.054v7.202C14,41.219,14.781,42,15.743,42H29v-8.946H14z"></path><path fill="#0c8045" d="M14 15.003H29V24.005000000000003H14z"></path><path fill="#17472a" d="M14 24.005H29V33.055H14z"></path><g><path fill="#29c27f" d="M42.256,6H29v9.003h15V7.744C44,6.781,43.219,6,42.256,6z"></path><path fill="#27663f" d="M29,33.054V42h13.257C43.219,42,44,41.219,44,40.257v-7.202H29z"></path><path fill="#19ac65" d="M29 15.003H44V24.005000000000003H29z"></path><path fill="#129652" d="M29 24.005H44V33.055H29z"></path></g><path fill="#0c7238" d="M22.319,34H5.681C4.753,34,4,33.247,4,32.319V15.681C4,14.753,4.753,14,5.681,14h16.638 C23.247,14,24,14.753,24,15.681v16.638C24,33.247,23.247,34,22.319,34z"></path><path fill="#fff" d="M9.807 19L12.193 19 14.129 22.754 16.175 19 18.404 19 15.333 24 18.474 29 16.123 29 14.013 25.07 11.912 29 9.526 29 12.719 23.982z"></path>
    </svg></button>`;

    if(new Date(recambiosHechos[0].recambio.prescripcionDia.cita.fechaFin)>new Date()){
      fechas=obtenerFechas(new Date(recambiosHechos[0].recambio.prescripcionDia.cita.fecha), new Date(),recambiosHechos,prescripcion)
    }else{
      fechas=obtenerFechas(new Date(recambiosHechos[0].recambio.prescripcionDia.cita.fecha), new Date(recambiosHechos[0].recambio.prescripcionDia.cita.fechaFin),recambiosHechos,prescripcion)
    }
      let msg=`<table class="table" id="tableRecambios" name="tableRecambios" style="border:2px solid">
      <thead>
        <th id="fechasD" style="border:2px solid">Fecha</th>
        <th id="fechasD" style="border:2px solid">Hora</th>
        <th id="fechasD" style="border:2px solid">Concentración</th>
        <th id="fechasD" style="border:2px solid">Líquido Entrante</th>
        <th id="fechasD" style="border:2px solid">Drenaje</th>
        <th id="fechasD" style="border:2px solid">Balance</th>
        <th id="fechasD" style="border:2px solid">Total Ultrafiltrado</th>
      </thead>
      <tbody>
      `
      let cont=0;
      fechas.forEach(fecha => {
        let ultrafiltrado=0;
        let ciclo=0;
        if(fecha.prescripOriginal==undefined||fecha.prescripOriginal==null){
        }else{
        msg+=`
        <tr style="border-top:2px solid">
          <td id="fechasD" style="border:2px solid;background-color:#B2EAF2" rowspan="${fecha.prescripOriginal.recambios.length}">
          <b>${fecha.date}</b>
          </td>
        `
        fecha.prescripOriginal.recambios.forEach(recambiod => {
                    
          if(fecha.recambios.length>0){
            let hecho=false;
            fecha.recambios.forEach(recam=>{
              if(ciclo==0)
                ultrafiltrado+=decodeURIComponent(CryptoJS.AES.decrypt(recam.drenajeDialisis,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8))-decodeURIComponent(CryptoJS.AES.decrypt(recam.liquidoEntrante,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
          })
            fecha.recambios.forEach(recam=>{
              if(recam.recambio.idRecambio==recambiod.idRecambio){
                hecho=true;

                msg+=`
              <td style="border:1px solid;background-color:#53DA44">${new Date(recam.fechaReal).toLocaleTimeString().substring(0,new Date(recam.fechaReal).toLocaleTimeString().length-3)}</td>

              <td style="border:1px solid;background-color:#53DA44">${decodeURIComponent(CryptoJS.AES.decrypt(recam.recambio.concentracion,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8))} %</td>

              <td style="border:1px solid;background-color:#53DA44">${decodeURIComponent(CryptoJS.AES.decrypt(recam.liquidoEntrante,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8))} ml</td>

              <td style="border:1px solid;background-color:#53DA44">${decodeURIComponent(CryptoJS.AES.decrypt(recam.drenajeDialisis,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8))} ml</td>
              
              <td style="border:1px solid;background-color:#53DA44">${(parseInt(decodeURIComponent(CryptoJS.AES.decrypt(recam.drenajeDialisis,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8)),10)-decodeURIComponent(CryptoJS.AES.decrypt(recam.liquidoEntrante,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8)))} ml</td>
              `
              }
              
            })
              if(hecho==false){
                msg+=`
                <td style="border:1px solid;" colspan="5"><h5 id="sinHacer"><i>Sin registro.</i></h5></td>
                `
              }
          }else{
            msg+=`
                <td style="border:1px solid;" colspan="5"><h5 id="sinHacer"><i>Sin registro.</i></h5></td>
                `
          }
         
        
        if(ciclo==0)msg+=`<td rowspan="${fecha.prescripOriginal.recambios.length}" style="border:2px solid">${ultrafiltrado} ml</td>
        `
        
        ciclo++;
        msg+="</tr>"
        });}
       cont++
      promedio+=ultrafiltrado;
      }); 
      promedio=promedio/fechas.length;
      document.getElementById("card-header").innerHTML= `<div><b><label class="mt-2">Promedio de ultrafiltrado por día: ${Math.round(promedio)} ml</label><b><button id="exportarBoton" data-toggle="tooltip" data-placement="bottom" title="Exportar Excel"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
      <path fill="#169154" d="M29,6H15.744C14.781,6,14,6.781,14,7.744v7.259h15V6z"></path><path fill="#18482a" d="M14,33.054v7.202C14,41.219,14.781,42,15.743,42H29v-8.946H14z"></path><path fill="#0c8045" d="M14 15.003H29V24.005000000000003H14z"></path><path fill="#17472a" d="M14 24.005H29V33.055H14z"></path><g><path fill="#29c27f" d="M42.256,6H29v9.003h15V7.744C44,6.781,43.219,6,42.256,6z"></path><path fill="#27663f" d="M29,33.054V42h13.257C43.219,42,44,41.219,44,40.257v-7.202H29z"></path><path fill="#19ac65" d="M29 15.003H44V24.005000000000003H29z"></path><path fill="#129652" d="M29 24.005H44V33.055H29z"></path></g><path fill="#0c7238" d="M22.319,34H5.681C4.753,34,4,33.247,4,32.319V15.681C4,14.753,4.753,14,5.681,14h16.638 C23.247,14,24,14.753,24,15.681v16.638C24,33.247,23.247,34,22.319,34z"></path><path fill="#fff" d="M9.807 19L12.193 19 14.129 22.754 16.175 19 18.404 19 15.333 24 18.474 29 16.123 29 14.013 25.07 11.912 29 9.526 29 12.719 23.982z"></path>
      </svg></button></div>`;
      msg+=`</tbody>
      </table>`;
      document.getElementById("recambios").innerHTML=msg;
      exportarTabla();
      var tableData = [
        {
            fecha: "2023-08-26",
            hora: "2023-08-26T03:24:00",
            concentracion: 2.5,
            liquidoEntrante: 2000,
            drenaje: 2300,
            balance: 300,
            totalUltrafiltrado: 300
        },
        // Agrega más filas de datos según sea necesario
    ];
    // Configura Tabulator
    

  }
function obtenerFechas(fechaIni,fechaFin,recambios,prescripcion){
  var datesArray = [];
  var currentDate = new Date(fechaIni);
  var days = ["domingo","lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];

  while (currentDate <= fechaFin) {
    var dateObj = {
      date: currentDate.toISOString().slice(0, 10), 
      dayOfWeek: days[currentDate.getDay()] 
    };
    
    prescripcion.unionPrescripcionDiasRecambios.forEach(prescripcionDia => {
      if(prescripcionDia.prescripcionDia[days[currentDate.getDay()]]==true){
        dateObj.prescripOriginal=prescripcionDia;
      }
    });
    let recamb=[];
    recambios.forEach(recambio => {
      let fecha_real=new Date(recambio.fechaReal)
      fecha_real.setHours(0,0,0,0)
      currentDate.setHours(0,0,0,0)
      if(currentDate.getTime()===fecha_real.getTime()){
        recamb.push(recambio)
      }
    });
    dateObj.recambios=recamb;



    datesArray.push(dateObj);

    currentDate.setDate(currentDate.getDate() + 1);
  }
  return datesArray;
}

function exportarTabla() {
  const table = document.getElementById('tableRecambios');
  const exportButton = document.getElementById('exportarBoton');

  exportButton.addEventListener('click', () => {
    const wb = XLSX.utils.table_to_book(table, { sheet: 'Recambios' });

    

    // Verificar si la hoja de cálculo contiene celdas
    if (wb.Sheets && wb.Sheets['Recambios']) {
      // Obtener el rango de celdas
      const range = XLSX.utils.decode_range(wb.Sheets['Recambios']['!ref']);

      // Aplicar el estilo a todas las celdas
      for (let R = range.s.r; R <= range.e.r; ++R) {
        for (let C = range.s.c; C <= range.e.c; ++C) {
          const cell_address = { r: R, c: C };
          const cell = wb.Sheets['Recambios'][XLSX.utils.encode_cell(cell_address)];
        }
      }

      XLSX.writeFile(wb, `${localStorage.getItem("nombrePaciente")}.xlsx`);
    } else {
    }
  });
}
