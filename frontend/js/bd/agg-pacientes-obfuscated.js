(function(_0x5aa326,_0xb35513){var _0x4472f7=_0x4f6f,_0x3482d4=_0x5aa326();while(!![]){try{var _0x500283=-parseInt(_0x4472f7(0x166))/0x1*(parseInt(_0x4472f7(0x16c))/0x2)+parseInt(_0x4472f7(0x161))/0x3*(parseInt(_0x4472f7(0x146))/0x4)+parseInt(_0x4472f7(0x173))/0x5*(-parseInt(_0x4472f7(0x11f))/0x6)+-parseInt(_0x4472f7(0x139))/0x7*(parseInt(_0x4472f7(0x152))/0x8)+parseInt(_0x4472f7(0x15a))/0x9+parseInt(_0x4472f7(0x163))/0xa*(-parseInt(_0x4472f7(0x143))/0xb)+parseInt(_0x4472f7(0x14d))/0xc;if(_0x500283===_0xb35513)break;else _0x3482d4['push'](_0x3482d4['shift']());}catch(_0x8eae0){_0x3482d4['push'](_0x3482d4['shift']());}}}(_0x1699,0x85f3c));function _0x4f6f(_0x2d6588,_0x556a78){var _0x1699e1=_0x1699();return _0x4f6f=function(_0x4f6fc1,_0x1e694f){_0x4f6fc1=_0x4f6fc1-0x11f;var _0x533198=_0x1699e1[_0x4f6fc1];return _0x533198;},_0x4f6f(_0x2d6588,_0x556a78);}function _0x1699(){var _0x3fa0a8=['50766SNTTKi','paciente/crearPaciente','3286830pDpwer','toString','show','250642LumJCf','AES','servidorAPI','POST','application/json','idEps','4YkNcIM','input[name=\x27visita\x27]:checked','peso','direccion','T02:45:05.101Z','#successModalVisitaAgg','appendChild','5245ltbWRE','1752RkBvOk','Error\x20fetching\x20patients:','options','Error\x20en\x20encontrar\x20Ultima\x20Cita:','map','checked','nombre','Utf8','fecha','createElement','#errorModal','documento','hipertension','length','#successModalChequeoAgg','log','stringify','preventDefault','Seleccione...','encrypt','guardarPaciente','disabled','modal','from','correo','cedula','14zvfvtv','Completa\x20al\x20menos\x20un\x20campo\x20de\x20entrada\x20para\x20guardar.','#modal3','forEach','ocupacion','Medico/findAllPacientes','filter','activo','status','hide','11owzVsy','keys','input[name=\x27chequeo\x27]','60iGDgDK','gray','background','error','#successModal','getItem','enc','18758508bVlUgt','paciente/ListEps','option','telefono','selectEps','1931624SkBXyy','decrypt','getElementById','value','selectedIndex','json','GET','tiposangre','3157290UOONRi','#agregarChequeo','Medico/chequeoMensual','selected','then','trim','diabetes'];_0x1699=function(){return _0x3fa0a8;};return _0x1699();}let listarEps=async()=>{var _0x3bf5d2=_0x4f6f;const _0x573fb6=await fetch(localStorage['getItem'](_0x3bf5d2(0x168))+_0x3bf5d2(0x14e),{'method':_0x3bf5d2(0x158),'headers':{'Accept':_0x3bf5d2(0x16a),'Content-Type':_0x3bf5d2(0x16a)}}),_0x85e475=document[_0x3bf5d2(0x154)](_0x3bf5d2(0x151));if(_0x85e475[_0x3bf5d2(0x12c)]===0x0){const _0xaccefc=await _0x573fb6[_0x3bf5d2(0x157)](),_0x348f4b=document[_0x3bf5d2(0x128)]('option');_0x348f4b['textContent']=_0x3bf5d2(0x131),_0x348f4b[_0x3bf5d2(0x15d)]=!![],_0x348f4b[_0x3bf5d2(0x134)]=!![],_0x85e475[_0x3bf5d2(0x172)](_0x348f4b),_0xaccefc['forEach'](_0x4515a1=>{var _0x3a2835=_0x3bf5d2;const _0x56db0f=document[_0x3a2835(0x128)](_0x3a2835(0x14f));_0x56db0f['value']=_0x4515a1[_0x3a2835(0x16b)],_0x56db0f['textContent']=_0x4515a1[_0x3a2835(0x125)],_0x85e475[_0x3a2835(0x172)](_0x56db0f);});}},validarPaciente=async()=>{var _0x3d11e9=_0x4f6f;let _0x2baccd=document[_0x3d11e9(0x154)](_0x3d11e9(0x12a))[_0x3d11e9(0x155)];console[_0x3d11e9(0x12e)](_0x2baccd);const _0x41f95a=await fetch(servidorAPI+_0x3d11e9(0x13e),{'method':_0x3d11e9(0x158),'headers':{'Accept':_0x3d11e9(0x16a),'Content-Type':_0x3d11e9(0x16a)}}),_0x38ce82=await _0x41f95a[_0x3d11e9(0x157)]();console['log'](_0x38ce82);for(const _0x19954c of _0x38ce82){let _0x1aa759=CryptoJS[_0x3d11e9(0x167)]['decrypt'](_0x19954c['cedula'],cajaNegra)[_0x3d11e9(0x164)](CryptoJS['enc'][_0x3d11e9(0x126)]);const _0x1c4ae7=decodeURIComponent(_0x1aa759);console[_0x3d11e9(0x12e)](_0x1c4ae7),console[_0x3d11e9(0x12e)](_0x1aa759);if(_0x2baccd===_0x1c4ae7)return!![];}return![];},crearPaciente=async _0x233f3b=>{var _0xcca6ca=_0x4f6f;_0x233f3b[_0xcca6ca(0x130)]();const _0x4ccdd6=document[_0xcca6ca(0x154)](_0xcca6ca(0x133));_0x4ccdd6['style'][_0xcca6ca(0x148)]=_0xcca6ca(0x147),_0x4ccdd6[_0xcca6ca(0x134)]=!![];var _0x244107=await validarPaciente();console[_0xcca6ca(0x12e)](_0x244107);var _0x299bb1=document[_0xcca6ca(0x154)](_0xcca6ca(0x125))[_0xcca6ca(0x155)],_0x2c4c3b=document[_0xcca6ca(0x154)](_0xcca6ca(0x12a))[_0xcca6ca(0x155)],_0x4cfd46=document[_0xcca6ca(0x154)](_0xcca6ca(0x127))[_0xcca6ca(0x155)]+_0xcca6ca(0x170),_0x3d7f4c=selectEps[_0xcca6ca(0x121)][selectEps['selectedIndex']],_0x2e9ae5=_0x3d7f4c['value'],_0x5d05f6=selectTipo[_0xcca6ca(0x121)][selectTipo[_0xcca6ca(0x156)]],_0x2cf1d3=_0x5d05f6[_0xcca6ca(0x155)];console[_0xcca6ca(0x12e)](_0x2cf1d3);var _0x329247=document[_0xcca6ca(0x154)]('estatura')[_0xcca6ca(0x155)],_0x48dead=document[_0xcca6ca(0x154)](_0xcca6ca(0x159))[_0xcca6ca(0x155)],_0x2f218d=document[_0xcca6ca(0x154)]('selectRh')['value'],_0x39785c=document[_0xcca6ca(0x154)](_0xcca6ca(0x16f))[_0xcca6ca(0x155)],_0x28ddc3=document[_0xcca6ca(0x154)](_0xcca6ca(0x150))[_0xcca6ca(0x155)],_0x1f2da8=document[_0xcca6ca(0x154)](_0xcca6ca(0x13d))[_0xcca6ca(0x155)],_0x4bf0d0=document[_0xcca6ca(0x154)](_0xcca6ca(0x16e))[_0xcca6ca(0x155)],_0x59f74e=document[_0xcca6ca(0x154)]('pesoseco')['value'],_0x55bc10=document[_0xcca6ca(0x154)](_0xcca6ca(0x137))['value'],_0x274096=CryptoJS[_0xcca6ca(0x167)][_0xcca6ca(0x132)](_0x2c4c3b,cajaNegra)['toString'](),_0x797a25=CryptoJS['AES'][_0xcca6ca(0x132)](_0x28ddc3,cajaNegra)['toString'](),_0x59e0d8=CryptoJS[_0xcca6ca(0x167)][_0xcca6ca(0x132)](_0x299bb1,cajaNegra)[_0xcca6ca(0x164)](),_0x55bc10=CryptoJS['AES'][_0xcca6ca(0x132)](_0x55bc10,cajaNegra)['toString'](),_0x20eaad=CryptoJS[_0xcca6ca(0x167)][_0xcca6ca(0x132)](_0x2cf1d3,cajaNegra)[_0xcca6ca(0x164)](),_0x401557=document[_0xcca6ca(0x154)](_0xcca6ca(0x160))[_0xcca6ca(0x124)],_0x10f6b9=document[_0xcca6ca(0x154)](_0xcca6ca(0x12b))[_0xcca6ca(0x124)],_0x1b7a73=new Date();const _0x487115={'altura':_0x329247,'cedula':_0x274096,'celular':_0x797a25,'contrasenia':_0x274096,'direccion':CryptoJS[_0xcca6ca(0x167)][_0xcca6ca(0x132)](_0x39785c,cajaNegra)[_0xcca6ca(0x164)](),'eps':parseInt(_0x2e9ae5,0xa),'fechaNacimiento':_0x4cfd46,'nombre':_0x59e0d8,'ocupacion':CryptoJS[_0xcca6ca(0x167)][_0xcca6ca(0x132)](_0x1f2da8,cajaNegra)['toString'](),'peso':_0x4bf0d0,'pesoSeco':_0x59f74e,'rh':_0x2f218d,'tipoSangre':CryptoJS['AES']['encrypt'](_0x48dead,cajaNegra)[_0xcca6ca(0x164)](),'correo':_0x55bc10,'diabetes':_0x401557,'hipertension':_0x10f6b9,'tipoDocumento':_0x20eaad,'activo':!![],'fechaRegistro':_0x1b7a73};if(_0x244107==![]){let _0x20a0da=CryptoJS['AES'][_0xcca6ca(0x153)](_0x487115['nombre'],cajaNegra)[_0xcca6ca(0x164)](CryptoJS[_0xcca6ca(0x14c)][_0xcca6ca(0x126)]);console['log'](_0x20a0da);let _0x4d423c=CryptoJS[_0xcca6ca(0x167)]['decrypt'](_0x487115['cedula'],cajaNegra)[_0xcca6ca(0x164)](CryptoJS[_0xcca6ca(0x14c)][_0xcca6ca(0x126)]);console[_0xcca6ca(0x12e)](_0x4d423c),fetch(servidorAPI+_0xcca6ca(0x162),{'method':'POST','headers':{'Accept':_0xcca6ca(0x16a),'Content-Type':'application/json'},'body':JSON[_0xcca6ca(0x12f)](_0x487115)})[_0xcca6ca(0x15e)](_0x567052=>{var _0x1e5492=_0xcca6ca;_0x567052['ok']&&$(_0x1e5492(0x14a))[_0x1e5492(0x135)]('show');});}else $(_0xcca6ca(0x13b))[_0xcca6ca(0x135)](_0xcca6ca(0x165));},listarPacientes=async()=>{var _0x571632=_0x4f6f;try{const _0x151439=await fetch(servidorAPI+_0x571632(0x13e),{'method':_0x571632(0x158),'headers':{'Accept':_0x571632(0x16a),'Content-Type':_0x571632(0x16a)}});if(_0x151439['ok']){if(_0x151439[_0x571632(0x141)]===0xc8||_0x151439[_0x571632(0x141)]===0xcc){const _0x1f8fa5=await _0x151439['json'](),_0x4b3e69=_0x1f8fa5[_0x571632(0x13f)](_0x25e206=>_0x25e206[_0x571632(0x140)])[_0x571632(0x123)](_0x483d11=>{var _0x3d0208=_0x571632;let _0x11cc71=CryptoJS[_0x3d0208(0x167)]['decrypt'](_0x483d11[_0x3d0208(0x138)],cajaNegra)['toString'](CryptoJS[_0x3d0208(0x14c)][_0x3d0208(0x126)]),_0x472283=CryptoJS[_0x3d0208(0x167)][_0x3d0208(0x153)](_0x483d11['nombre'],cajaNegra)[_0x3d0208(0x164)](CryptoJS[_0x3d0208(0x14c)]['Utf8']);return{'nombre':_0x472283,'cedula':_0x11cc71};});return _0x4b3e69;}}else console['error'](_0x571632(0x120),_0x151439['status']);}catch(_0x3753e8){console[_0x571632(0x149)](_0x571632(0x120),_0x3753e8);}},listarPacientesInactivos=async()=>{var _0x962d3d=_0x4f6f;try{const _0xf5614d=await fetch(servidorAPI+_0x962d3d(0x13e),{'method':_0x962d3d(0x158),'headers':{'Accept':_0x962d3d(0x16a),'Content-Type':_0x962d3d(0x16a)}});if(_0xf5614d['ok']){if(_0xf5614d['status']===0xc8||_0xf5614d[_0x962d3d(0x141)]===0xcc){const _0x307de7=await _0xf5614d[_0x962d3d(0x157)](),_0x40ea41=_0x307de7[_0x962d3d(0x13f)](_0x382f6a=>!_0x382f6a[_0x962d3d(0x140)])['map'](_0x3825b7=>{var _0x28d8c1=_0x962d3d;let _0x5aba83=CryptoJS['AES'][_0x28d8c1(0x153)](_0x3825b7[_0x28d8c1(0x138)],cajaNegra)['toString'](CryptoJS[_0x28d8c1(0x14c)][_0x28d8c1(0x126)]),_0x5aefc7=CryptoJS[_0x28d8c1(0x167)][_0x28d8c1(0x153)](_0x3825b7['nombre'],cajaNegra)[_0x28d8c1(0x164)](CryptoJS[_0x28d8c1(0x14c)]['Utf8']);return{'nombre':_0x5aefc7,'cedula':_0x5aba83};});return _0x40ea41;}}else console['error'](_0x962d3d(0x120),_0xf5614d[_0x962d3d(0x141)]);}catch(_0x26e983){console['error'](_0x962d3d(0x120),_0x26e983);}},crearVisita=async _0x19ab50=>{var _0x28feae=_0x4f6f;console[_0x28feae(0x12e)](_0x19ab50);let _0x21222e=await ultimaCita(_0x19ab50),_0x4348a3=_0x21222e['idCita'];console[_0x28feae(0x12e)](_0x4348a3);var _0x59cd90=document['querySelectorAll'](_0x28feae(0x16d)),_0x1386c7={'cita':_0x4348a3};Array[_0x28feae(0x136)](_0x59cd90)[_0x28feae(0x13c)](function(_0x4a6d36){_0x1386c7[_0x4a6d36['value']]=!![];}),console['log'](_0x1386c7),Object[_0x28feae(0x144)](_0x1386c7)[_0x28feae(0x12c)]>0x0?await fetch(localStorage['getItem']('servidorAPI')+'Medico/visitaEspecialista',{'method':_0x28feae(0x169),'body':JSON[_0x28feae(0x12f)](_0x1386c7),'headers':{'Accept':_0x28feae(0x16a),'Content-Type':_0x28feae(0x16a)}})[_0x28feae(0x15e)](_0x4f2dbd=>{var _0xea1d36=_0x28feae;console[_0xea1d36(0x12e)](_0x4f2dbd),_0x4f2dbd['ok']?($('#visita')[_0xea1d36(0x135)](_0xea1d36(0x142)),$(_0xea1d36(0x171))[_0xea1d36(0x135)](_0xea1d36(0x165))):$(_0xea1d36(0x129))[_0xea1d36(0x135)](_0xea1d36(0x165));})['catch'](_0x4cca5f=>{console['error'](_0x4cca5f);}):alert('Selecciona\x20al\x20menos\x20un\x20checkbox\x20para\x20guardar.');},crearChequeoMensual=async _0xfdd9d4=>{var _0x153053=_0x4f6f;let _0x4cc4ee=await ultimaCita(_0xfdd9d4);console['log'](_0x4cc4ee);let _0x4090a6=_0x4cc4ee['idCita'];var _0x4cab6b=document['querySelectorAll'](_0x153053(0x145)),_0x3f86b4={'cita':_0x4090a6};Array[_0x153053(0x136)](_0x4cab6b)['forEach'](function(_0x11bba9){var _0x435c8c=_0x153053;_0x11bba9['value'][_0x435c8c(0x15f)]()!==''&&(_0x3f86b4[_0x11bba9['id']]=_0x11bba9[_0x435c8c(0x155)]);}),console['log'](_0x3f86b4);if(Object[_0x153053(0x144)](_0x3f86b4)[_0x153053(0x12c)]>0x1){const _0xc779d1=await fetch(localStorage[_0x153053(0x14b)](_0x153053(0x168))+_0x153053(0x15c),{'method':_0x153053(0x169),'body':JSON[_0x153053(0x12f)](_0x3f86b4),'headers':{'Accept':_0x153053(0x16a),'Content-Type':'application/json'}});try{_0xc779d1['ok']?($(_0x153053(0x15b))[_0x153053(0x135)](_0x153053(0x142)),$(_0x153053(0x12d))['modal'](_0x153053(0x165))):$(_0x153053(0x129))[_0x153053(0x135)]('show');}catch(_0x9de522){console[_0x153053(0x149)](_0x9de522);}}else alert(_0x153053(0x13a));},ultimaCita=async _0x135740=>{var _0x1823d2=_0x4f6f;try{cedulaPac=await obtenerCedEncriptada(_0x135740),console['log'](cedulaPac);let _0x57bbd4={'cedula':cedulaPac},_0x25f16e=await fetch(localStorage[_0x1823d2(0x14b)]('servidorAPI')+'paciente/ultimaCita',{'method':_0x1823d2(0x169),'headers':{'Accept':'application/json','Content-Type':_0x1823d2(0x16a)},'body':JSON[_0x1823d2(0x12f)](_0x57bbd4)});if(_0x25f16e[_0x1823d2(0x141)]===0xc8){let _0x53f507=await _0x25f16e[_0x1823d2(0x157)]();return _0x53f507;}else{}}catch(_0x364376){return console['error'](_0x1823d2(0x122),_0x364376),null;}},obtenerCedEncriptada=async _0x4e0b93=>{var _0x419cc5=_0x4f6f;console[_0x419cc5(0x12e)](_0x4e0b93);const _0x31406d=await fetch(localStorage[_0x419cc5(0x14b)](_0x419cc5(0x168))+_0x419cc5(0x13e),{'method':_0x419cc5(0x158),'headers':{'Accept':_0x419cc5(0x16a),'Content-Type':_0x419cc5(0x16a)}}),_0x48f5ed=await _0x31406d['json']();return console[_0x419cc5(0x12e)](_0x48f5ed),_0x48f5ed[_0x419cc5(0x13c)](_0x133698=>{var _0x4fcb2b=_0x419cc5;let _0x6a472e=CryptoJS[_0x4fcb2b(0x167)][_0x4fcb2b(0x153)](_0x133698[_0x4fcb2b(0x138)],cajaNegra)[_0x4fcb2b(0x164)](CryptoJS[_0x4fcb2b(0x14c)]['Utf8']);const _0x458363=encodeURIComponent(_0x6a472e);console[_0x4fcb2b(0x12e)](_0x4e0b93===_0x458363);if(_0x4e0b93===_0x458363)cedulaEncriptada=_0x133698[_0x4fcb2b(0x138)];}),cedulaEncriptada;};