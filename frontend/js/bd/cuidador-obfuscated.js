function _0x28d6(){const _0xacd21a=['name','231EloHBW','catch','Medico/findAllPacientes','value','options','add','length','encrypt','submit','15732012DDsbkt','agregarCuidador','filter','actCuid','paciente/cuidador/crear','3mLMmuE','3424904jOxBaN','stringify','El\x20cuidador\x20ya\x20está\x20registrado,\x20si\x20no\x20está\x20como\x20su\x20cuidador\x20actual\x20debe\x20cambiarlo\x20en\x20el\x20apartado\x20de\x20cuidador','idParentesco','460374YLbtld','POST','PATCH','set','show','descripcion','/paciente/cuidador/listCuidadorPacienteByPaciente','selectedParentesco','#successModal','75PIJXSr','decrypt','paciente/cuidador/ReactivarCuidadorAntiguoSinActivo','parse','paciente/cuidador/findCuidadorActivo','datos','nombre','paciente/ListParentesco','GET','cedulaCuidador','enc','json','direccion','inhabilitar','medico','cedula','telf','background','telefono','servidorAPI','avisoMensaje','textContent','activo','gray','modal','style','paciente/cuidador/reactivarCuidador','parentesco','guardarCuidador','paciente/cuidador/actualizar','disabled','Utf8','idCuidadorPaciente','985221lbmwja','selectedIndex','18jaeUTL','cuidador','nuevo','usuario','then','error','option','cedulaPaciente','appendChild','map','grayscale(1)','getItem','forEach','3283784zLPVgE','application/json','cedula_cuidador','getElementById','2JjfFwn','from','1696364eRixjV','AES','preventDefault','paciente/cuidador/inhabilitarCuidadorActivo','log','clave_secreta','status','createElement','toString','344950ePVlOE','address'];_0x28d6=function(){return _0xacd21a;};return _0x28d6();}function _0x24be(_0x3e0e69,_0x3e3ea1){const _0x28d61e=_0x28d6();return _0x24be=function(_0x24be9b,_0x8b2253){_0x24be9b=_0x24be9b-0x1df;let _0x400588=_0x28d61e[_0x24be9b];return _0x400588;},_0x24be(_0x3e0e69,_0x3e3ea1);}(function(_0x3fcfe7,_0x15f9c4){const _0x24674a=_0x24be,_0x2bf2d1=_0x3fcfe7();while(!![]){try{const _0x20e7c9=parseInt(_0x24674a(0x20c))/0x1*(-parseInt(_0x24674a(0x21f))/0x2)+-parseInt(_0x24674a(0x23b))/0x3*(parseInt(_0x24674a(0x221))/0x4)+-parseInt(_0x24674a(0x1eb))/0x5*(parseInt(_0x24674a(0x1e2))/0x6)+parseInt(_0x24674a(0x23c))/0x7+-parseInt(_0x24674a(0x21b))/0x8*(-parseInt(_0x24674a(0x20e))/0x9)+-parseInt(_0x24674a(0x22a))/0xa*(-parseInt(_0x24674a(0x22d))/0xb)+parseInt(_0x24674a(0x236))/0xc;if(_0x20e7c9===_0x15f9c4)break;else _0x2bf2d1['push'](_0x2bf2d1['shift']());}catch(_0x2ee760){_0x2bf2d1['push'](_0x2bf2d1['shift']());}}}(_0x28d6,0xbfbd7));var cedulaEncriptada='';let obtenerCedulaEncriptada=async _0x4e28b7=>{const _0x15eaae=_0x24be,_0x44d78a=await fetch(localStorage[_0x15eaae(0x219)](_0x15eaae(0x1fe))+_0x15eaae(0x22f),{'method':_0x15eaae(0x1f3),'headers':{'Accept':_0x15eaae(0x21c),'Content-Type':_0x15eaae(0x21c)}}),_0x390097=await _0x44d78a[_0x15eaae(0x1f6)]();return console[_0x15eaae(0x225)](_0x390097),_0x390097['forEach'](_0x5d1931=>{const _0xf760ea=_0x15eaae;let _0x69ff33=CryptoJS['AES'][_0xf760ea(0x1ec)](_0x5d1931['cedula'],cajaNegra)[_0xf760ea(0x229)](CryptoJS['enc'][_0xf760ea(0x20a)]);const _0x17296e=encodeURIComponent(_0x69ff33);console[_0xf760ea(0x225)](_0x69ff33);if(_0x4e28b7===_0x17296e)cedulaEncriptada=_0x5d1931['cedula'];}),cedulaEncriptada;},crearCuidador=async()=>{const _0x4827d9=_0x24be;document[_0x4827d9(0x21e)](_0x4827d9(0x237))['addEventListener'](_0x4827d9(0x235),async function(_0x4084ef){const _0x58313d=_0x4827d9;_0x4084ef[_0x58313d(0x223)]();var _0xd083b7=document[_0x58313d(0x21e)](_0x58313d(0x207));_0xd083b7[_0x58313d(0x204)][_0x58313d(0x1fc)]='gray',_0xd083b7['disabled']=!![];let _0x417c2c=localStorage[_0x58313d(0x219)](_0x58313d(0x1f0)),_0x55f658=JSON[_0x58313d(0x1ee)](_0x417c2c),_0x8b1a04=decodeURIComponent(_0x55f658[_0x58313d(0x1fa)]),_0xbc313=await cuidadorPorPaciente();console[_0x58313d(0x225)](_0xbc313);var _0x74cccc=document[_0x58313d(0x21e)](_0x58313d(0x21d))[_0x58313d(0x230)],_0x4e3438=document['getElementById'](_0x58313d(0x1f1))[_0x58313d(0x230)],_0x5c085a=selectedParentesco['options'][selectedParentesco['selectedIndex']],_0x4f65fc=_0x5c085a['value'],_0x319d82=document['getElementById'](_0x58313d(0x1f7))[_0x58313d(0x230)],_0xdef4d=document[_0x58313d(0x21e)](_0x58313d(0x1fd))['value'];if(_0xbc313['includes'](_0x74cccc)){var _0x4b607f=document['getElementById'](_0x58313d(0x1ff));_0x4b607f['innerText']=_0x58313d(0x1e0),$('#avisoModal')[_0x58313d(0x203)](_0x58313d(0x1e6));}else{var _0x25f659=CryptoJS[_0x58313d(0x222)][_0x58313d(0x234)](_0x74cccc,cajaNegra)[_0x58313d(0x229)](),_0x312fd6=CryptoJS['AES'][_0x58313d(0x234)](_0x4e3438,cajaNegra)[_0x58313d(0x229)](),_0x94d6f2=CryptoJS['AES'][_0x58313d(0x234)](_0x319d82,cajaNegra)[_0x58313d(0x229)](),_0x5cd6f6=CryptoJS['AES'][_0x58313d(0x234)](_0xdef4d,cajaNegra)[_0x58313d(0x229)]();let _0x163479={'cedulaCuidador':_0x25f659,'nombre':_0x312fd6,'parentesco':parseInt(_0x4f65fc,0xa),'direccion':_0x94d6f2,'telefono':_0x5cd6f6},_0x44af87={'cedula':_0x8b1a04},_0x2008fb={'cuidadorInDto':_0x163479,'pacienteInDto':_0x44af87};console[_0x58313d(0x225)](_0x163479),console[_0x58313d(0x225)](_0x44af87),fetch(localStorage[_0x58313d(0x219)]('servidorAPI')+_0x58313d(0x23a),{'method':_0x58313d(0x1e3),'headers':{'Accept':_0x58313d(0x21c),'Content-Type':'application/json'},'body':JSON[_0x58313d(0x1df)](_0x2008fb)})[_0x58313d(0x212)](_0x13cfe0=>{const _0x168e3e=_0x58313d;_0x13cfe0[_0x168e3e(0x227)]===0xc8&&$(_0x168e3e(0x1ea))['modal'](_0x168e3e(0x1e6));})[_0x58313d(0x22e)](_0x526228=>{console['error'](_0x526228);});}});},cuidadorPorPaciente=async()=>{const _0x550e7f=_0x24be;let _0x3e0f5d=localStorage['getItem']('datos'),_0x121a74=JSON[_0x550e7f(0x1ee)](_0x3e0f5d);console[_0x550e7f(0x225)](_0x3e0f5d);let _0x567f36=_0x121a74['usuario'],_0x436518=decodeURIComponent(_0x121a74[_0x550e7f(0x1fa)]);console[_0x550e7f(0x225)](_0x436518),console[_0x550e7f(0x225)](_0x567f36);let _0x532de7='';_0x567f36==_0x550e7f(0x1f9)?(_0x532de7=await obtenerCedulaEncriptada(0x0,CryptoJS[_0x550e7f(0x222)][_0x550e7f(0x1ec)](decodeURIComponent(localStorage[_0x550e7f(0x219)](_0x550e7f(0x215))),'clave_secreta')[_0x550e7f(0x229)](CryptoJS[_0x550e7f(0x1f5)][_0x550e7f(0x20a)])),console['log'](_0x532de7)):_0x532de7=_0x436518;console[_0x550e7f(0x225)](_0x532de7);const _0x572611=await fetch(localStorage[_0x550e7f(0x219)](_0x550e7f(0x1fe))+_0x550e7f(0x1e8),{'method':'POST','headers':{'Accept':'application/json','Content-Type':_0x550e7f(0x21c)},'body':JSON[_0x550e7f(0x1df)]({'cedula':_0x532de7})}),_0x121cd0=await _0x572611[_0x550e7f(0x1f6)]();console[_0x550e7f(0x225)](_0x121cd0);let _0x143696=[];return _0x121cd0[_0x550e7f(0x21a)](_0x4acb00=>{const _0x50f281=_0x550e7f;let _0x899ad=CryptoJS['AES']['decrypt'](_0x4acb00[_0x50f281(0x20f)]['cedulaCuidador'],cajaNegra)['toString'](CryptoJS[_0x50f281(0x1f5)][_0x50f281(0x20a)]);_0x143696['push'](_0x899ad);}),_0x143696;},cuidadoresAntiguos=async()=>{const _0x448473=_0x24be,_0xe8df92=new Set();let _0x1af4b3=localStorage[_0x448473(0x219)](_0x448473(0x1f0)),_0xcd69ac=JSON[_0x448473(0x1ee)](_0x1af4b3);console[_0x448473(0x225)](_0x1af4b3);let _0x331bc0=_0xcd69ac[_0x448473(0x211)],_0x561130=decodeURIComponent(_0xcd69ac[_0x448473(0x1fa)]);console[_0x448473(0x225)](_0x561130),console[_0x448473(0x225)](_0x331bc0);let _0x241a62='';_0x331bc0==_0x448473(0x1f9)?(_0x241a62=await obtenerCedulaEncriptada(0x0,CryptoJS[_0x448473(0x222)]['decrypt'](decodeURIComponent(localStorage[_0x448473(0x219)](_0x448473(0x215))),_0x448473(0x226))[_0x448473(0x229)](CryptoJS[_0x448473(0x1f5)][_0x448473(0x20a)])),console[_0x448473(0x225)](_0x241a62)):_0x241a62=_0x561130;const _0x4ac2d1=await fetch(localStorage['getItem'](_0x448473(0x1fe))+'/paciente/cuidador/listCuidadorPacienteByPaciente',{'method':_0x448473(0x1e3),'headers':{'Accept':'application/json','Content-Type':'application/json'},'body':JSON[_0x448473(0x1df)]({'cedula':_0x241a62})});if(_0x4ac2d1[_0x448473(0x227)]===0xcc)return null;else{const _0x2091e4=await _0x4ac2d1[_0x448473(0x1f6)](),_0x3daada=await fetch(localStorage[_0x448473(0x219)](_0x448473(0x1fe))+_0x448473(0x1ef),{'method':_0x448473(0x1e3),'headers':{'Accept':_0x448473(0x21c),'Content-Type':_0x448473(0x21c)},'body':JSON[_0x448473(0x1df)]({'cedula':_0x241a62})});if(_0x3daada[_0x448473(0x227)]===0xcc)_0x2091e4[_0x448473(0x21a)](_0x42f31a=>{const _0x53ce61=_0x448473;let _0x32b5a0=CryptoJS[_0x53ce61(0x222)]['decrypt'](_0x42f31a[_0x53ce61(0x20f)][_0x53ce61(0x1f4)],cajaNegra)[_0x53ce61(0x229)](CryptoJS[_0x53ce61(0x1f5)][_0x53ce61(0x20a)]),_0x35dece=CryptoJS[_0x53ce61(0x222)][_0x53ce61(0x1ec)](_0x42f31a[_0x53ce61(0x20f)][_0x53ce61(0x1f1)],cajaNegra)[_0x53ce61(0x229)](CryptoJS['enc'][_0x53ce61(0x20a)]),_0x31717a=CryptoJS[_0x53ce61(0x222)][_0x53ce61(0x1ec)](_0x42f31a[_0x53ce61(0x20f)][_0x53ce61(0x1f7)],cajaNegra)[_0x53ce61(0x229)](CryptoJS['enc'][_0x53ce61(0x20a)]),_0x2b4692=CryptoJS[_0x53ce61(0x222)][_0x53ce61(0x1ec)](_0x42f31a[_0x53ce61(0x20f)][_0x53ce61(0x1fd)],cajaNegra)[_0x53ce61(0x229)](CryptoJS[_0x53ce61(0x1f5)][_0x53ce61(0x20a)]),_0x5dc18f=_0x42f31a[_0x53ce61(0x201)];const _0xf5c9ed={'cedulaCuidador':_0x32b5a0,'nombre':_0x35dece,'direccion':_0x31717a,'telefono':_0x2b4692,'activo':_0x5dc18f};_0xe8df92[_0x53ce61(0x232)](JSON[_0x53ce61(0x1df)](_0xf5c9ed));});else{const _0x10b93d=await _0x3daada['json']();let _0x4f0fc6=CryptoJS[_0x448473(0x222)][_0x448473(0x1ec)](_0x10b93d[_0x448473(0x20f)]['cedulaCuidador'],cajaNegra)['toString'](CryptoJS['enc'][_0x448473(0x20a)]);_0x2091e4['forEach'](_0x48e349=>{const _0x38628f=_0x448473;let _0x457604=CryptoJS[_0x38628f(0x222)]['decrypt'](_0x48e349[_0x38628f(0x20f)][_0x38628f(0x1f4)],cajaNegra)[_0x38628f(0x229)](CryptoJS[_0x38628f(0x1f5)][_0x38628f(0x20a)]);if(_0x457604!==_0x4f0fc6){let _0x10a9a7=CryptoJS[_0x38628f(0x222)][_0x38628f(0x1ec)](_0x48e349[_0x38628f(0x20f)]['cedulaCuidador'],cajaNegra)[_0x38628f(0x229)](CryptoJS[_0x38628f(0x1f5)]['Utf8']),_0x72cd=CryptoJS[_0x38628f(0x222)][_0x38628f(0x1ec)](_0x48e349[_0x38628f(0x20f)]['nombre'],cajaNegra)[_0x38628f(0x229)](CryptoJS['enc']['Utf8']),_0x15f4d0=CryptoJS[_0x38628f(0x222)][_0x38628f(0x1ec)](_0x48e349[_0x38628f(0x20f)][_0x38628f(0x1f7)],cajaNegra)['toString'](CryptoJS[_0x38628f(0x1f5)][_0x38628f(0x20a)]),_0x15ad46=CryptoJS[_0x38628f(0x222)][_0x38628f(0x1ec)](_0x48e349['cuidador'][_0x38628f(0x1fd)],cajaNegra)[_0x38628f(0x229)](CryptoJS[_0x38628f(0x1f5)][_0x38628f(0x20a)]),_0x1337b3=_0x48e349[_0x38628f(0x201)];const _0x32a58b={'cedulaCuidador':_0x10a9a7,'nombre':_0x72cd,'direccion':_0x15f4d0,'telefono':_0x15ad46,'activo':_0x1337b3};_0xe8df92[_0x38628f(0x232)](JSON[_0x38628f(0x1df)](_0x32a58b));}});}const _0x5cade5=Array[_0x448473(0x220)](_0xe8df92)[_0x448473(0x217)](_0x3bcad1=>JSON[_0x448473(0x1ee)](_0x3bcad1));return _0x5cade5;}},listaParentesco=async()=>{const _0x4aeeac=_0x24be,_0x51827b=await fetch(localStorage[_0x4aeeac(0x219)](_0x4aeeac(0x1fe))+_0x4aeeac(0x1f2),{'method':_0x4aeeac(0x1f3),'headers':{'Accept':'application/json','Content-Type':_0x4aeeac(0x21c)}}),_0x1d014f=document[_0x4aeeac(0x21e)](_0x4aeeac(0x1e9));if(_0x1d014f[_0x4aeeac(0x233)]===0x0){const _0x2741b8=await _0x51827b[_0x4aeeac(0x1f6)](),_0x4021fa=document[_0x4aeeac(0x228)](_0x4aeeac(0x214));_0x4021fa[_0x4aeeac(0x200)]='Seleccione...',_0x1d014f[_0x4aeeac(0x216)](_0x4021fa),_0x2741b8[_0x4aeeac(0x21a)](_0x53910d=>{const _0x904a56=_0x4aeeac,_0x1425fd=document[_0x904a56(0x228)](_0x904a56(0x214));_0x1425fd['value']=_0x53910d[_0x904a56(0x1e1)],_0x1425fd[_0x904a56(0x200)]=_0x53910d['descripcion'],_0x1d014f[_0x904a56(0x216)](_0x1425fd);});}},listarParentesco=async()=>{const _0x25d316=_0x24be,_0x44b9b2=await fetch(localStorage[_0x25d316(0x219)]('servidorAPI')+_0x25d316(0x1f2),{'method':_0x25d316(0x1f3),'headers':{'Accept':_0x25d316(0x21c),'Content-Type':_0x25d316(0x21c)}}),_0x4b7326=document[_0x25d316(0x21e)]('selectedParentesco');if(_0x4b7326[_0x25d316(0x233)]===0x0){const _0x409091=await _0x44b9b2['json'](),_0x3e55db=document['createElement'](_0x25d316(0x214));_0x3e55db['textContent']='Seleccione...',_0x4b7326[_0x25d316(0x216)](_0x3e55db),_0x409091[_0x25d316(0x21a)](_0xf14992=>{const _0x2fc5b6=_0x25d316,_0x3ac918=document[_0x2fc5b6(0x228)](_0x2fc5b6(0x214));_0x3ac918[_0x2fc5b6(0x230)]=_0xf14992['idParentesco'],_0x3ac918[_0x2fc5b6(0x200)]=_0xf14992['descripcion'],_0x4b7326['appendChild'](_0x3ac918);});}encontrarCuidador();},cuidadorActivo=async()=>{const _0x3017aa=_0x24be;let _0x30beef=localStorage[_0x3017aa(0x219)](_0x3017aa(0x1f0)),_0x5a64e8=JSON[_0x3017aa(0x1ee)](_0x30beef);console['log'](_0x30beef);let _0x401bde=_0x5a64e8[_0x3017aa(0x211)],_0x4c87f3=decodeURIComponent(_0x5a64e8[_0x3017aa(0x1fa)]);console[_0x3017aa(0x225)](_0x4c87f3),console['log'](_0x401bde);let _0x117d2='';_0x401bde==_0x3017aa(0x1f9)?(_0x117d2=await obtenerCedulaEncriptada(0x0,CryptoJS[_0x3017aa(0x222)][_0x3017aa(0x1ec)](decodeURIComponent(localStorage['getItem'](_0x3017aa(0x215))),_0x3017aa(0x226))[_0x3017aa(0x229)](CryptoJS[_0x3017aa(0x1f5)][_0x3017aa(0x20a)])),console[_0x3017aa(0x225)](_0x117d2)):_0x117d2=_0x4c87f3;const _0x56e7da=await fetch(localStorage[_0x3017aa(0x219)](_0x3017aa(0x1fe))+_0x3017aa(0x1ef),{'method':_0x3017aa(0x1e3),'headers':{'Accept':_0x3017aa(0x21c),'Content-Type':_0x3017aa(0x21c)},'body':JSON[_0x3017aa(0x1df)]({'cedula':_0x117d2})});let _0x4d09d7={};if(_0x56e7da[_0x3017aa(0x227)]===0xcc)return null;else{const _0x43e0c5=await _0x56e7da[_0x3017aa(0x1f6)]();console['log'](_0x43e0c5);var _0x302d28=CryptoJS[_0x3017aa(0x222)][_0x3017aa(0x1ec)](_0x43e0c5[_0x3017aa(0x20f)][_0x3017aa(0x1f4)],cajaNegra)['toString'](CryptoJS[_0x3017aa(0x1f5)][_0x3017aa(0x20a)]),_0x470c82=CryptoJS['AES']['decrypt'](_0x43e0c5[_0x3017aa(0x20f)]['nombre'],cajaNegra)[_0x3017aa(0x229)](CryptoJS['enc'][_0x3017aa(0x20a)]),_0x5670e8=CryptoJS[_0x3017aa(0x222)][_0x3017aa(0x1ec)](_0x43e0c5[_0x3017aa(0x20f)][_0x3017aa(0x1f7)],cajaNegra)[_0x3017aa(0x229)](CryptoJS[_0x3017aa(0x1f5)][_0x3017aa(0x20a)]),_0x1ce87d=CryptoJS[_0x3017aa(0x222)][_0x3017aa(0x1ec)](_0x43e0c5[_0x3017aa(0x20f)]['telefono'],cajaNegra)['toString'](CryptoJS[_0x3017aa(0x1f5)][_0x3017aa(0x20a)]),_0x46d54e=_0x43e0c5[_0x3017aa(0x20f)][_0x3017aa(0x206)][_0x3017aa(0x1e7)];_0x4d09d7[_0x3017aa(0x1fa)]=_0x302d28,_0x4d09d7[_0x3017aa(0x1f1)]=_0x470c82,_0x4d09d7['direccion']=_0x5670e8,_0x4d09d7[_0x3017aa(0x1fd)]=_0x1ce87d,_0x4d09d7[_0x3017aa(0x206)]=_0x46d54e;}return _0x4d09d7;},encontrarCuidador=async()=>{const _0x4731cc=_0x24be;let _0x582491=localStorage[_0x4731cc(0x219)](_0x4731cc(0x1f0)),_0x32afeb=JSON[_0x4731cc(0x1ee)](_0x582491);console[_0x4731cc(0x225)](_0x582491);let _0x154ccb=_0x32afeb[_0x4731cc(0x211)],_0x53c1c8=decodeURIComponent(_0x32afeb['cedula']);console['log'](_0x53c1c8),console['log'](_0x154ccb);let _0x50f18b='';_0x154ccb==_0x4731cc(0x1f9)?(_0x50f18b=await obtenerCedulaEncriptada(0x0,CryptoJS['AES']['decrypt'](decodeURIComponent(localStorage[_0x4731cc(0x219)](_0x4731cc(0x215))),_0x4731cc(0x226))[_0x4731cc(0x229)](CryptoJS[_0x4731cc(0x1f5)]['Utf8'])),console[_0x4731cc(0x225)](_0x50f18b)):_0x50f18b=_0x53c1c8;const _0x2c5f4f=await fetch(localStorage[_0x4731cc(0x219)]('servidorAPI')+_0x4731cc(0x1ef),{'method':_0x4731cc(0x1e3),'headers':{'Accept':_0x4731cc(0x21c),'Content-Type':_0x4731cc(0x21c)},'body':JSON[_0x4731cc(0x1df)]({'cedula':_0x50f18b})}),_0x197b65=await _0x2c5f4f['json']();var _0x3afee1=CryptoJS[_0x4731cc(0x222)]['decrypt'](_0x197b65[_0x4731cc(0x20f)][_0x4731cc(0x1f4)],cajaNegra)[_0x4731cc(0x229)](CryptoJS[_0x4731cc(0x1f5)][_0x4731cc(0x20a)]),_0x24c41b=CryptoJS[_0x4731cc(0x222)][_0x4731cc(0x1ec)](_0x197b65['cuidador'][_0x4731cc(0x1f1)],cajaNegra)['toString'](CryptoJS['enc'][_0x4731cc(0x20a)]),_0x22ac85=CryptoJS[_0x4731cc(0x222)][_0x4731cc(0x1ec)](_0x197b65[_0x4731cc(0x20f)][_0x4731cc(0x1f7)],cajaNegra)[_0x4731cc(0x229)](CryptoJS['enc'][_0x4731cc(0x20a)]),_0x2d9db9=CryptoJS[_0x4731cc(0x222)][_0x4731cc(0x1ec)](_0x197b65[_0x4731cc(0x20f)][_0x4731cc(0x1fd)],cajaNegra)[_0x4731cc(0x229)](CryptoJS['enc'][_0x4731cc(0x20a)]);document[_0x4731cc(0x21e)](_0x4731cc(0x1f4))['value']=_0x3afee1,document[_0x4731cc(0x21e)](_0x4731cc(0x22c))[_0x4731cc(0x230)]=_0x24c41b,document[_0x4731cc(0x21e)](_0x4731cc(0x1fb))[_0x4731cc(0x230)]=_0x2d9db9,document[_0x4731cc(0x21e)](_0x4731cc(0x22b))['value']=_0x22ac85;const _0x111d75=document[_0x4731cc(0x21e)](_0x4731cc(0x1e9)),_0x210a1b=_0x197b65[_0x4731cc(0x20f)]['parentesco'][_0x4731cc(0x1e7)];return Array[_0x4731cc(0x220)](_0x111d75[_0x4731cc(0x231)])[_0x4731cc(0x21a)]((_0x3824f3,_0x49c657)=>{const _0x290bb0=_0x4731cc;_0x3824f3[_0x290bb0(0x200)]===_0x210a1b&&(_0x111d75[_0x290bb0(0x20d)]=_0x49c657);}),_0x197b65;},actualizarCuidador=async()=>{const _0x20be04=_0x24be;var _0x1fd6dc=document['getElementById'](_0x20be04(0x239));_0x1fd6dc[_0x20be04(0x204)][_0x20be04(0x1fc)]=_0x20be04(0x202),_0x1fd6dc['disabled']=!![];let _0x4d4233=localStorage['getItem'](_0x20be04(0x1f0)),_0x590e8f=JSON[_0x20be04(0x1ee)](_0x4d4233);console['log'](_0x4d4233);let _0x3d69f3=_0x590e8f[_0x20be04(0x211)],_0x45d3dd=decodeURIComponent(_0x590e8f[_0x20be04(0x1fa)]);console[_0x20be04(0x225)](_0x45d3dd),console[_0x20be04(0x225)](_0x3d69f3);let _0x46011e='';_0x3d69f3==_0x20be04(0x1f9)?(_0x46011e=await obtenerCedulaEncriptada(0x0,CryptoJS['AES'][_0x20be04(0x1ec)](decodeURIComponent(localStorage[_0x20be04(0x219)]('cedulaPaciente')),_0x20be04(0x226))['toString'](CryptoJS[_0x20be04(0x1f5)][_0x20be04(0x20a)])),console[_0x20be04(0x225)](_0x46011e)):_0x46011e=_0x45d3dd;const _0x3d794f=await fetch(localStorage[_0x20be04(0x219)]('servidorAPI')+_0x20be04(0x1ef),{'method':_0x20be04(0x1e3),'headers':{'Accept':_0x20be04(0x21c),'Content-Type':_0x20be04(0x21c)},'body':JSON['stringify']({'cedula':_0x46011e})});let _0x3c7265={};const _0x561d85=await _0x3d794f[_0x20be04(0x1f6)](),_0x4921bc=_0x561d85[_0x20be04(0x20f)][_0x20be04(0x1f4)];let _0x24224d=document[_0x20be04(0x21e)](_0x20be04(0x22b))[_0x20be04(0x230)],_0x308266=document[_0x20be04(0x21e)](_0x20be04(0x22c))[_0x20be04(0x230)],_0x52af8a=document[_0x20be04(0x21e)]('selectedParentesco')[_0x20be04(0x230)],_0xb916a3=document[_0x20be04(0x21e)]('telf')[_0x20be04(0x230)];console[_0x20be04(0x225)](_0x24224d,_0x308266,_0x52af8a,_0xb916a3);let _0x699461={'direccion':CryptoJS['AES'][_0x20be04(0x234)](_0x24224d,cajaNegra)[_0x20be04(0x229)](),'nombre':CryptoJS[_0x20be04(0x222)][_0x20be04(0x234)](_0x308266,cajaNegra)[_0x20be04(0x229)](),'parentesco':parseInt(_0x52af8a,0xa),'telefono':CryptoJS[_0x20be04(0x222)][_0x20be04(0x234)](_0xb916a3,cajaNegra)['toString'](),'cedulaCuidador':_0x4921bc};fetch(localStorage[_0x20be04(0x219)](_0x20be04(0x1fe))+_0x20be04(0x208),{'method':_0x20be04(0x1e4),'body':JSON['stringify'](_0x699461),'headers':{'Accept':_0x20be04(0x21c),'Content-Type':'application/json'}})[_0x20be04(0x212)](_0x329a72=>{const _0x5c1b22=_0x20be04;if(_0x329a72['ok'])(_0x329a72[_0x5c1b22(0x227)]===0xc8||_0x329a72[_0x5c1b22(0x227)]===0xcc)&&$('#successModal')[_0x5c1b22(0x203)](_0x5c1b22(0x1e6));else{}})['catch'](_0x4920b7=>{const _0xf749c5=_0x20be04;console[_0xf749c5(0x213)](_0x4920b7);});},cuidAntiguos=async()=>{const _0x4d93df=_0x24be;let _0x57f200=localStorage[_0x4d93df(0x219)]('datos'),_0x33d4e1=JSON['parse'](_0x57f200);console[_0x4d93df(0x225)](_0x57f200);let _0x1eed85=_0x33d4e1[_0x4d93df(0x211)],_0x216041=decodeURIComponent(_0x33d4e1[_0x4d93df(0x1fa)]);console['log'](_0x216041),console[_0x4d93df(0x225)](_0x1eed85);let _0x3feba9='';_0x1eed85=='medico'?(_0x3feba9=await obtenerCedulaEncriptada(0x0,CryptoJS[_0x4d93df(0x222)]['decrypt'](decodeURIComponent(localStorage[_0x4d93df(0x219)](_0x4d93df(0x215))),_0x4d93df(0x226))[_0x4d93df(0x229)](CryptoJS[_0x4d93df(0x1f5)][_0x4d93df(0x20a)])),console[_0x4d93df(0x225)](_0x3feba9)):_0x3feba9=_0x216041;const _0x4511f7=await fetch(localStorage[_0x4d93df(0x219)](_0x4d93df(0x1fe))+_0x4d93df(0x1e8),{'method':'POST','headers':{'Accept':_0x4d93df(0x21c),'Content-Type':_0x4d93df(0x21c)},'body':JSON[_0x4d93df(0x1df)]({'cedula':_0x3feba9})});if(_0x4511f7[_0x4d93df(0x227)]===0xcc)return null;else{const _0x27b975=await _0x4511f7[_0x4d93df(0x1f6)](),_0x57d39b=await cuidadoresAntiguos(),_0x3ba0c3=new Map();if(_0x57d39b[_0x4d93df(0x233)]>0x0)_0x27b975[_0x4d93df(0x21a)](_0x4f1c0a=>{const _0x263600=_0x4d93df;if(_0x4f1c0a[_0x263600(0x201)]===![]){const _0x5bd167=_0x4f1c0a[_0x263600(0x20f)][_0x263600(0x1f4)],_0x29d2db={'cedulaCuidador':_0x5bd167,'nombre':_0x4f1c0a[_0x263600(0x20f)]['nombre'],'direccion':_0x4f1c0a[_0x263600(0x20f)][_0x263600(0x1f7)],'telefono':_0x4f1c0a[_0x263600(0x20f)]['telefono'],'activo':_0x4f1c0a[_0x263600(0x201)],'idCuidadorPaciente':_0x4f1c0a['idCuidadorPaciente']};_0x3ba0c3[_0x263600(0x1e5)](_0x5bd167,_0x29d2db);}});else return 0x0;return Array['from'](_0x3ba0c3['values']());}},reactivarCuidador=async(_0xef767b,_0x404b90)=>{const _0x523c72=_0x24be,_0x269b9a=document[_0x523c72(0x21e)]('reactivarCuidador'+_0x404b90);_0x269b9a[_0x523c72(0x204)][_0x523c72(0x238)]=_0x523c72(0x218),_0x269b9a[_0x523c72(0x209)]=!![];let _0x5cd5a6=localStorage[_0x523c72(0x219)](_0x523c72(0x1f0)),_0x113785=JSON['parse'](_0x5cd5a6);console[_0x523c72(0x225)](_0x5cd5a6);let _0x1ff953=_0x113785[_0x523c72(0x211)],_0x14305d=decodeURIComponent(_0x113785[_0x523c72(0x1fa)]);console[_0x523c72(0x225)](_0x14305d),console[_0x523c72(0x225)](_0x1ff953);let _0x23854e='';_0x1ff953=='medico'?(_0x23854e=await obtenerCedulaEncriptada(0x0,CryptoJS[_0x523c72(0x222)][_0x523c72(0x1ec)](decodeURIComponent(localStorage['getItem']('cedulaPaciente')),_0x523c72(0x226))[_0x523c72(0x229)](CryptoJS[_0x523c72(0x1f5)][_0x523c72(0x20a)])),console[_0x523c72(0x225)](_0x23854e)):_0x23854e=_0x14305d;let _0x2a1351=await cuidAntiguos();_0x2a1351['forEach'](_0x11dc45=>{const _0x54f17d=_0x523c72;let _0x20f10f=CryptoJS[_0x54f17d(0x222)][_0x54f17d(0x1ec)](_0x11dc45['cedulaCuidador'],cajaNegra)['toString'](CryptoJS[_0x54f17d(0x1f5)]['Utf8']),_0x55a183=parseInt(_0x20f10f,0xa);if(_0x55a183==_0xef767b){let _0x27edb9={'cedula':_0x23854e},_0x40f005={'cedulaCuidador':_0x11dc45[_0x54f17d(0x1f4)]},_0x3a036c={'pacienteInDto':_0x27edb9,'cuidadorInDto':_0x40f005};fetch(localStorage[_0x54f17d(0x219)](_0x54f17d(0x1fe))+_0x54f17d(0x205),{'method':_0x54f17d(0x1e4),'body':JSON[_0x54f17d(0x1df)](_0x3a036c),'headers':{'Accept':_0x54f17d(0x21c),'Content-Type':'application/json'}})[_0x54f17d(0x212)](_0x5731e7=>{const _0x5c0e1a=_0x54f17d;_0x5731e7['ok']?(_0x5731e7[_0x5c0e1a(0x227)]===0xc8||_0x5731e7['status']===0xcc)&&$('#successModalReactivar')[_0x5c0e1a(0x203)]('show'):fetch(localStorage[_0x5c0e1a(0x219)](_0x5c0e1a(0x1fe))+_0x5c0e1a(0x1ed),{'method':_0x5c0e1a(0x1e4),'body':JSON['stringify'](_0x40f005),'headers':{'Accept':'application/json','Content-Type':_0x5c0e1a(0x21c)}});})['catch'](_0x1db528=>{const _0x48a8e7=_0x54f17d;console[_0x48a8e7(0x213)](_0x1db528);});}});},inhabilitarCuidador=async()=>{const _0x59f01=_0x24be;var _0x4772c3=document[_0x59f01(0x21e)](_0x59f01(0x1f8));_0x4772c3[_0x59f01(0x204)]['background']='gray',_0x4772c3[_0x59f01(0x209)]=!![];if(document[_0x59f01(0x21e)]('cambiar')!=null){var _0x31237f=document['getElementById']('cambiar');_0x31237f[_0x59f01(0x204)][_0x59f01(0x1fc)]='gray',_0x31237f['disabled']=!![];}var _0x3fbe2b=document[_0x59f01(0x21e)](_0x59f01(0x210));_0x3fbe2b[_0x59f01(0x204)][_0x59f01(0x1fc)]=_0x59f01(0x202),_0x3fbe2b[_0x59f01(0x209)]=!![];let _0x28c808=localStorage[_0x59f01(0x219)](_0x59f01(0x1f0)),_0x1f7c8c=JSON[_0x59f01(0x1ee)](_0x28c808);console[_0x59f01(0x225)](_0x28c808);let _0x41224b=_0x1f7c8c[_0x59f01(0x211)],_0xfb912f=decodeURIComponent(_0x1f7c8c[_0x59f01(0x1fa)]);console[_0x59f01(0x225)](_0xfb912f),console[_0x59f01(0x225)](_0x41224b);let _0x133155='';_0x41224b==_0x59f01(0x1f9)?(_0x133155=await obtenerCedulaEncriptada(0x0,CryptoJS['AES'][_0x59f01(0x1ec)](decodeURIComponent(localStorage[_0x59f01(0x219)](_0x59f01(0x215))),_0x59f01(0x226))['toString'](CryptoJS[_0x59f01(0x1f5)][_0x59f01(0x20a)])),console[_0x59f01(0x225)](_0x133155)):_0x133155=_0xfb912f;const _0x1ba0bb=await fetch(localStorage[_0x59f01(0x219)](_0x59f01(0x1fe))+_0x59f01(0x1ef),{'method':'POST','headers':{'Accept':_0x59f01(0x21c),'Content-Type':_0x59f01(0x21c)},'body':JSON[_0x59f01(0x1df)]({'cedula':_0x133155})}),_0x7f436c=await _0x1ba0bb[_0x59f01(0x1f6)]();console[_0x59f01(0x225)](_0x7f436c);let _0x449535=CryptoJS['AES'][_0x59f01(0x1ec)](_0x7f436c[_0x59f01(0x20f)][_0x59f01(0x1f4)],cajaNegra)[_0x59f01(0x229)](CryptoJS[_0x59f01(0x1f5)][_0x59f01(0x20a)]),_0x1741ce={'cedulaCuidador':_0x449535,'idCuidadorPaciente':_0x7f436c[_0x59f01(0x20b)]},_0x2f37ec={'cedula':_0x133155},_0x31cc37={'cuidadorInDto':_0x1741ce,'pacienteInDto':_0x2f37ec};await fetch(localStorage[_0x59f01(0x219)]('servidorAPI')+_0x59f01(0x224),{'method':'PATCH','body':JSON[_0x59f01(0x1df)](_0x31cc37),'headers':{'Accept':_0x59f01(0x21c),'Content-Type':'application/json'}})[_0x59f01(0x212)](_0x1530df=>{const _0x1a37f8=_0x59f01;_0x1530df['ok']&&((_0x1530df[_0x1a37f8(0x227)]===0xc8||_0x1530df[_0x1a37f8(0x227)]===0xcc)&&$('#successModal')['modal']('show'));});};