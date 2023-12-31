
let listarEps = async () => {
  const peticion = await fetch(localStorage.getItem("servidorAPI") + "paciente/ListEps", {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  });

  const selectEps = document.getElementById('selectEps');

  if (selectEps.length === 0) {
    const epss = await peticion.json();
    const optionSeleccionar = document.createElement('option');
    optionSeleccionar.textContent = "Seleccione...";
    optionSeleccionar.selected=true;
    optionSeleccionar.disabled=true;
    selectEps.appendChild(optionSeleccionar);
    epss.forEach(eps => {
      const option = document.createElement('option');

      option.value = eps.idEps;
      option.textContent = eps.nombre;
      selectEps.appendChild(option);
    });
  }

}

let validarPaciente = async () => {
  let documento = document.getElementById('documento').value;
  console.log(documento);

  const peticion = await fetch(servidorAPI + 'Medico/findAllPacientes', {
    method: 'GET',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  });

  const pacientes = await peticion.json();
  console.log(pacientes);

  for (const paciente of pacientes) {
    let decryptedCedula = CryptoJS.AES.decrypt(paciente.cedula, cajaNegra).toString(CryptoJS.enc.Utf8);
    const cedulaCodificado = decodeURIComponent(decryptedCedula);
    console.log(cedulaCodificado);
    console.log(decryptedCedula);
    if (documento === cedulaCodificado) {
      return true;
    }
  }

  return false;
}


let crearPaciente=async(event)=> {
  event.preventDefault();
  const btnGuardar=document.getElementById("guardarPaciente");
  btnGuardar.style.background="gray";
  btnGuardar.disabled=true;
  var  existe= await validarPaciente();
  console.log(existe);
      var nombre = document.getElementById('nombre').value;
      var documento = document.getElementById('documento').value;
      var fechaNacimiento = document.getElementById('fecha').value+'T02:45:05.101Z';
      var selectedOption = selectEps.options[selectEps.selectedIndex];
      var eps = selectedOption.value;
      var selectOptionDoc = selectTipo.options[selectTipo.selectedIndex];
      var tipoDocumento=selectOptionDoc.value;
      console.log(tipoDocumento);
      var estatura = document.getElementById('estatura').value;
      var tiposangre = document.getElementById('tiposangre').value;
      var rh = document.getElementById('selectRh').value;
      var direccion = document.getElementById('direccion').value;
      var telefono = document.getElementById('telefono').value;
      var ocupacion = document.getElementById('ocupacion').value;
      var peso = document.getElementById('peso').value;
      var pesoSeco = document.getElementById('pesoseco').value;
      var correo= document.getElementById('correo').value;
     var  documentoEncriptado = CryptoJS.AES.encrypt(documento, cajaNegra).toString();
     var telefonoEncriptado = CryptoJS.AES.encrypt(telefono, cajaNegra).toString();
     var nombreEncriptado = CryptoJS.AES.encrypt(nombre, cajaNegra).toString();
     var correo = CryptoJS.AES.encrypt(correo, cajaNegra).toString();
     var  tipoDocumentoEncriptado = CryptoJS.AES.encrypt(tipoDocumento, cajaNegra).toString();
     var diabetes = document.getElementById('diabetes').checked;
     var hipertension = document.getElementById('hipertension').checked;
     var fecha_registro = new Date();
//fecha_registro.setHours(fecha_registro.getHours() - 10);
      const pacienteInDto = {

       altura : estatura,
       cedula : documentoEncriptado,
       celular : telefonoEncriptado,
       contrasenia:documentoEncriptado,
       direccion : CryptoJS.AES.encrypt(direccion, cajaNegra).toString(),
       eps : parseInt(eps,10),
       fechaNacimiento : fechaNacimiento,
       nombre : nombreEncriptado,
       ocupacion : CryptoJS.AES.encrypt(ocupacion, cajaNegra).toString(),
       peso : peso,
       pesoSeco : pesoSeco,   
       rh : rh,
       tipoSangre : CryptoJS.AES.encrypt(tiposangre, cajaNegra).toString(),
       correo:correo,
       diabetes:diabetes,
       hipertension:hipertension,
       tipoDocumento:tipoDocumentoEncriptado,
       activo:true,
       fechaRegistro:fecha_registro

      }

if(existe==false){
      let decryptedCedula = CryptoJS.AES.decrypt(pacienteInDto.nombre, cajaNegra).toString(CryptoJS.enc.Utf8);
console.log(decryptedCedula);
let decryptedNombre = CryptoJS.AES.decrypt(pacienteInDto.cedula, cajaNegra).toString(CryptoJS.enc.Utf8);
console.log(decryptedNombre);

      fetch(servidorAPI+"paciente/crearPaciente", {
        method: 'POST',
        headers: {
          "Accept":"application/json",
      "Content-Type":"application/json"
        },
        body: JSON.stringify(
          pacienteInDto
        )
      })
      .then(response => {
        if (response.ok) {
            $('#successModal').modal('show');
          }
      })
    }
      else{
        $('#modal3').modal('show');
      }
 }

 let listarPacientes = async () => {
  try {
    const peticion = await fetch(servidorAPI + 'Medico/findAllPacientes', {
      method: 'GET',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    });

    if (peticion.ok) {
      if (peticion.status === 200 || peticion.status === 204) {
        const pacientes = await peticion.json();

        const pacientesDesencriptados = pacientes
        .filter(paciente => paciente.activo)
        .map(paciente => {
          let cedulaDesencriptada = CryptoJS.AES.decrypt(paciente.cedula, cajaNegra).toString(CryptoJS.enc.Utf8);
          let nombreDesencriptado = CryptoJS.AES.decrypt(paciente.nombre, cajaNegra).toString(CryptoJS.enc.Utf8);

          return {
            nombre: nombreDesencriptado,
            cedula: cedulaDesencriptada
          };
        });

        return pacientesDesencriptados;
      }
    } else {
      console.error("Error fetching patients:", peticion.status);
    }
  } catch (error) {
    console.error("Error fetching patients:", error);
  }
};


let listarPacientesInactivos = async () => {
  try {
    const peticion = await fetch(servidorAPI + 'Medico/findAllPacientes', {
      method: 'GET',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    });

    if (peticion.ok) {
      if (peticion.status === 200 || peticion.status === 204) {
        const pacientes = await peticion.json();

        // Map the patients array to decrypt each patient's cedula and nombre
        const pacientesDesencriptados = pacientes
        .filter(paciente => !paciente.activo)
        .map(paciente => {
          let cedulaDesencriptada = CryptoJS.AES.decrypt(paciente.cedula, cajaNegra).toString(CryptoJS.enc.Utf8);
          let nombreDesencriptado = CryptoJS.AES.decrypt(paciente.nombre, cajaNegra).toString(CryptoJS.enc.Utf8);

          return {
            nombre: nombreDesencriptado,
            cedula: cedulaDesencriptada
          };
        });

        return pacientesDesencriptados; // Return the array of patients
      }
    } else {
      console.error("Error fetching patients:", peticion.status);
    }
  } catch (error) {
    console.error("Error fetching patients:", error);
  }
};

let crearVisita = async (cedulaPaciente) => {
           
  console.log(cedulaPaciente);
  let ultCita=await ultimaCita(cedulaPaciente)
  let idCita=ultCita.idCita;
  console.log(idCita);
  var checkboxes = document.querySelectorAll("input[name='visita']:checked");
  var visitaEspecialistaDto = {
    cita: idCita
  };

  Array.from(checkboxes).forEach(function (checkbox) {
    visitaEspecialistaDto[checkbox.value] = true;
  });

  console.log(visitaEspecialistaDto);

  if (Object.keys(visitaEspecialistaDto).length > 0) {
    await fetch(localStorage.getItem("servidorAPI") + 'Medico/visitaEspecialista', {
      method: "POST",
      body: JSON.stringify(visitaEspecialistaDto),
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        console.log(response);
        if (response.ok) {
          $('#visita').modal('hide');
          $('#successModalVisitaAgg').modal('show');
          
        } else {
          $('#errorModal').modal('show');
        }
      })
      .catch(error => {
        console.error(error);
      });
  } else {
    alert("Selecciona al menos un checkbox para guardar.");
  }
};

let crearChequeoMensual = async (cedulaPaciente) => {

  let ultCita=await ultimaCita(cedulaPaciente)
  console.log(ultCita);
  let idCita=ultCita.idCita;
  var inputs = document.querySelectorAll("input[name='chequeo']");
  var chequeoMensualInDto = {
    cita: idCita 
  };

  Array.from(inputs).forEach(function (input) {
    if (input.value.trim() !== "") {
      chequeoMensualInDto[input.id] = input.value;
    }
  });

  console.log(chequeoMensualInDto);

  if (Object.keys(chequeoMensualInDto).length > 1) { 
    const response = await fetch(localStorage.getItem("servidorAPI") + 'Medico/chequeoMensual', {
      method: "POST",
      body: JSON.stringify(chequeoMensualInDto),
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    });

    try {
      if (response.ok) {
        $('#agregarChequeo').modal('hide');
        $('#successModalChequeoAgg').modal('show');
        
      } else {
        $('#errorModal').modal('show');
      }
    } catch (error) {
      console.error(error);
    }
  } else {
    alert("Completa al menos un campo de entrada para guardar.");
  }
};

let ultimaCita = async (cedulaPaciente) => {
  try {
    cedulaPac = await obtenerCedEncriptada(cedulaPaciente);
    console.log(cedulaPac);
    
    let paciente = {
      cedula: cedulaPac
    };
    
    let peticion = await fetch(localStorage.getItem("servidorAPI") + 'paciente/ultimaCita', {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(paciente)
    });
    if(peticion.status === 200){
    let ultimaCita = await peticion.json();   
    return ultimaCita;
  }
  else{

  }
  } catch (error) {
    console.error("Error en encontrar Ultima Cita:", error);
    return null; 
  }
};

let obtenerCedEncriptada=async(cedula)=>{
  console.log(cedula);
  const peticion= await fetch(localStorage.getItem("servidorAPI")+'Medico/findAllPacientes',{
    method:'GET',
    headers:{
      "Accept":"application/json",
      "Content-Type": "application/json"
    }
    });
      const pacientes=await peticion.json();
      console.log(pacientes);
      pacientes.forEach(paciente=>{
        let decryptedCedula = CryptoJS.AES.decrypt(paciente.cedula, cajaNegra).toString(CryptoJS.enc.Utf8);
        const cedulaCodificado = encodeURIComponent(decryptedCedula);
        console.log(cedula===cedulaCodificado);
        if(cedula===cedulaCodificado)
        cedulaEncriptada=paciente.cedula;
        
      })   
      return cedulaEncriptada;
}  
      
      

  
  
