(function(_0x13a8bd,_0x483ccd){const _0x28b26f=_0x2595,_0x33b119=_0x13a8bd();while(!![]){try{const _0x2ce455=parseInt(_0x28b26f(0x12f))/0x1*(parseInt(_0x28b26f(0x124))/0x2)+-parseInt(_0x28b26f(0x13c))/0x3*(parseInt(_0x28b26f(0xf5))/0x4)+-parseInt(_0x28b26f(0x122))/0x5+-parseInt(_0x28b26f(0xf1))/0x6*(-parseInt(_0x28b26f(0xfd))/0x7)+parseInt(_0x28b26f(0xfc))/0x8*(parseInt(_0x28b26f(0x108))/0x9)+parseInt(_0x28b26f(0xf2))/0xa*(parseInt(_0x28b26f(0xfb))/0xb)+-parseInt(_0x28b26f(0x136))/0xc*(parseInt(_0x28b26f(0x100))/0xd);if(_0x2ce455===_0x483ccd)break;else _0x33b119['push'](_0x33b119['shift']());}catch(_0x7f3ad6){_0x33b119['push'](_0x33b119['shift']());}}}(_0x18ed,0x3b34d));var cedulaEncriptada='';let obtenerCedulasUsuarios=async(_0x2211b2,_0x49971f)=>{const _0x508069=_0x2595;let _0x5ecb8d='';console[_0x508069(0x133)](_0x49971f);const _0x175d86=await fetch(localStorage['getItem'](_0x508069(0x10e))+'Usuario/findAllUsuarios',{'method':_0x508069(0x123),'headers':{'Accept':_0x508069(0x13d),'Content-Type':_0x508069(0x13d)}}),_0x5a8bd5=await _0x175d86[_0x508069(0x12c)]();return console[_0x508069(0x133)](_0x5a8bd5),_0x5a8bd5[_0x508069(0x125)](_0x54fa8f=>{const _0x419633=_0x508069;let _0xf3d2be=CryptoJS['AES'][_0x419633(0x129)](_0x54fa8f[_0x419633(0x110)],cajaNegra)[_0x419633(0x113)](CryptoJS[_0x419633(0x12d)]['Utf8']);console[_0x419633(0x133)](_0xf3d2be),_0x49971f===_0xf3d2be&&(console[_0x419633(0x133)](_0x419633(0x11a)),_0x2211b2==0x0&&(_0x5ecb8d=_0x54fa8f[_0x419633(0x110)]),_0x2211b2==0x1&&(_0x5ecb8d=_0x54fa8f[_0x419633(0x12b)]));}),console[_0x508069(0x133)](_0x5ecb8d),_0x5ecb8d;};function _0x18ed(){const _0x4cda51=['application/json','remove','174TIDiMh','20mKDiqj','PATCH','error','4fFNOMp','modal','editarAlergia','#contraseniaerronea','nombre','POST','1732423JvluIm','270664dXhnwK','8407GHZRdv','parse','datos','13AkmTuW','preventDefault','AES','add','nombreEditar','newcontrasenia','#errorModal','type','27zcQmZu','addEventListener','Utf8','#eliminaralergia','disabeld','querySelector','servidorAPI','true','cedula','text','alergia','toString','catch','paciente/alergia/listByPaciente','#contraseniacambiada','encrypt','reload','stringify','ENTRO','getElementById','paciente/alergia/editar/','fa-eye','background','hide','fa-eye-slash','contraseniaanterior','2223480YoNwXB','GET','588802pEiziZ','forEach','paciente/alergia/inactivar','Error\x20al\x20cambiar\x20la\x20contraseña','#agregaralergia','decrypt','idAlergia','contrasenia','json','enc','show','1iQKrKf','medico','getItem','#btnAceptar','log','usuario','push','19332HHVUir','clave_secreta','value','classList','paciente/alergia/crear','then','170697AFzTCy'];_0x18ed=function(){return _0x4cda51;};return _0x18ed();}function _0x2595(_0x6c834c,_0x4534a7){const _0x18edd1=_0x18ed();return _0x2595=function(_0x2595fa,_0x45dfb7){_0x2595fa=_0x2595fa-0xf0;let _0x86f459=_0x18edd1[_0x2595fa];return _0x86f459;},_0x2595(_0x6c834c,_0x4534a7);}function passwordVisibilityActual(_0x4fc7b8,_0xfaa990){const _0x1ea1b0=_0x2595;var _0x791288=document[_0x1ea1b0(0x11b)](_0x4fc7b8),_0x2004d2=document[_0x1ea1b0(0x10d)]('.'+_0xfaa990);_0x791288[_0x1ea1b0(0x107)]==='password'?(_0x791288[_0x1ea1b0(0x107)]=_0x1ea1b0(0x111),_0x2004d2[_0x1ea1b0(0x139)][_0x1ea1b0(0xf0)](_0x1ea1b0(0x11d)),_0x2004d2[_0x1ea1b0(0x139)][_0x1ea1b0(0x103)](_0x1ea1b0(0x120))):(_0x791288[_0x1ea1b0(0x107)]='password',_0x2004d2[_0x1ea1b0(0x139)][_0x1ea1b0(0xf0)](_0x1ea1b0(0x120)),_0x2004d2[_0x1ea1b0(0x139)][_0x1ea1b0(0x103)](_0x1ea1b0(0x11d)));}let cambioContrasenia=async _0xdbae6=>{const _0x51800e=_0x2595;_0xdbae6[_0x51800e(0x101)]();let _0x107b48=localStorage['getItem']('datos'),_0x1d595e=JSON[_0x51800e(0xfe)](_0x107b48);console['log'](_0x107b48);let _0x7861a1=decodeURIComponent(_0x1d595e[_0x51800e(0x110)]);console[_0x51800e(0x133)](_0x7861a1);let _0x32cc46='',_0xe83bec='',_0x164332=CryptoJS['AES'][_0x51800e(0x129)](_0x7861a1,cajaNegra)[_0x51800e(0x113)](CryptoJS['enc'][_0x51800e(0x10a)]);_0x32cc46=await obtenerCedulasUsuarios(0x0,_0x164332),console[_0x51800e(0x133)](_0x164332),_0xe83bec=await obtenerCedulasUsuarios(0x1,_0x164332),console[_0x51800e(0x133)](_0xe83bec);let _0x2563a5=CryptoJS[_0x51800e(0x102)]['decrypt'](_0xe83bec,cajaNegra)[_0x51800e(0x113)](CryptoJS[_0x51800e(0x12d)][_0x51800e(0x10a)]);console[_0x51800e(0x133)](_0x2563a5);const _0xdad4ee=document['getElementById'](_0x51800e(0x121))[_0x51800e(0x138)],_0x9fcdea=document[_0x51800e(0x11b)](_0x51800e(0x105))[_0x51800e(0x138)];console[_0x51800e(0x133)](_0x9fcdea);if(_0xdad4ee===_0x2563a5){const _0x2b11ab=CryptoJS[_0x51800e(0x102)]['encrypt'](_0x9fcdea,cajaNegra)['toString']();let _0x3cb2ae={'cedula':_0x32cc46,'contrasenia':_0x2b11ab};console[_0x51800e(0x133)](_0x3cb2ae);const _0x2624f3=await fetch(localStorage['getItem'](_0x51800e(0x10e))+'Usuario/cambiarContrasenia',{'method':'PATCH','headers':{'Accept':_0x51800e(0x13d),'Content-Type':_0x51800e(0x13d)},'body':JSON['stringify'](_0x3cb2ae)})['then'](_0x421240=>{const _0x588727=_0x51800e;_0x421240['ok']?($(_0x588727(0x116))[_0x588727(0xf6)]('show'),document['getElementById']('contraseniaanterior')[_0x588727(0x138)]='',document[_0x588727(0x11b)]('newcontrasenia')['value']='',$('#nuevacontrasenia')[_0x588727(0xf6)](_0x588727(0x11f))):alert(_0x588727(0x127));})[_0x51800e(0x114)](_0x73ad6d=>{const _0x5640fb=_0x51800e;console[_0x5640fb(0xf4)]('Error:',_0x73ad6d),alert(_0x5640fb(0x127));});}else $(_0x51800e(0xf8))[_0x51800e(0xf6)](_0x51800e(0x12e)),document[_0x51800e(0x11b)]('contraseniaanterior')[_0x51800e(0x138)]='',document[_0x51800e(0x11b)](_0x51800e(0x105))[_0x51800e(0x138)]='',$(_0x51800e(0x132))['click'](function(){const _0x5a1438=_0x51800e;$(_0x5a1438(0xf8))[_0x5a1438(0xf6)]('hide');});},crearAlergia=async()=>{const _0x3b2ce4=_0x2595;document[_0x3b2ce4(0x11b)]('guardarAlergia')[_0x3b2ce4(0x109)]('click',async function(_0x2dc3a0){const _0x16a7a8=_0x3b2ce4;_0x2dc3a0[_0x16a7a8(0x101)]();const _0xd585a8=document['getElementById']('guardarAlergia');_0xd585a8['style'][_0x16a7a8(0x11e)]='gray',_0xd585a8[_0x16a7a8(0x10c)]=_0x16a7a8(0x10f);let _0x319f00=localStorage[_0x16a7a8(0x131)]('datos'),_0x4a8ce3=JSON['parse'](_0x319f00);console[_0x16a7a8(0x133)](_0x319f00);let _0x23ad9b=_0x4a8ce3[_0x16a7a8(0x134)];console[_0x16a7a8(0x133)](_0x23ad9b);let _0x26816a=_0x4a8ce3[_0x16a7a8(0x110)],_0x40ffa6=_0x23ad9b=_0x16a7a8(0x130)?await obtenerCedulasUsuarios(0x0,CryptoJS['AES']['decrypt'](decodeURIComponent(localStorage['getItem']('cedulaPaciente')),'clave_secreta')[_0x16a7a8(0x113)](CryptoJS[_0x16a7a8(0x12d)]['Utf8'])):_0x26816a,_0x4b750c=document[_0x16a7a8(0x11b)]('nombreCrear')['value'],_0x1a1ad9=CryptoJS[_0x16a7a8(0x102)][_0x16a7a8(0x117)](_0x4b750c,cajaNegra)[_0x16a7a8(0x113)](),_0x501bb0={'nombre':_0x1a1ad9},_0x55f587={'cedula':_0x40ffa6},_0x44b9ef={'alergiaInDto':_0x501bb0,'pacienteInDto':_0x55f587};fetch(localStorage[_0x16a7a8(0x131)](_0x16a7a8(0x10e))+_0x16a7a8(0x13a),{'method':_0x16a7a8(0xfa),'body':JSON[_0x16a7a8(0x119)](_0x44b9ef),'headers':{'Accept':_0x16a7a8(0x13d),'Content-Type':_0x16a7a8(0x13d)}})[_0x16a7a8(0x13b)](_0x352691=>{const _0x488d89=_0x16a7a8;console[_0x488d89(0x133)](_0x352691),_0x352691['ok']?($(_0x488d89(0x128))['modal'](_0x488d89(0x11f)),location['reload']()):$('#errorModal')[_0x488d89(0xf6)](_0x488d89(0x12e));})['catch'](_0x49ca15=>{const _0x1fa65e=_0x16a7a8;console[_0x1fa65e(0xf4)](_0x49ca15);});});},listarAlergias=async()=>{const _0x240a8e=_0x2595;let _0x299b08=localStorage[_0x240a8e(0x131)](_0x240a8e(0xff)),_0x312d1b=JSON[_0x240a8e(0xfe)](_0x299b08);console[_0x240a8e(0x133)](_0x299b08);let _0x15421c=_0x312d1b[_0x240a8e(0x134)],_0x55d8b1=decodeURIComponent(_0x312d1b[_0x240a8e(0x110)]);console['log'](_0x55d8b1),console[_0x240a8e(0x133)](_0x15421c);let _0x1524df='';_0x15421c=='medico'?(_0x1524df=await obtenerCedulasUsuarios(0x0,CryptoJS[_0x240a8e(0x102)][_0x240a8e(0x129)](decodeURIComponent(localStorage[_0x240a8e(0x131)]('cedulaPaciente')),_0x240a8e(0x137))[_0x240a8e(0x113)](CryptoJS[_0x240a8e(0x12d)]['Utf8'])),console[_0x240a8e(0x133)](_0x1524df)):_0x1524df=_0x55d8b1;console[_0x240a8e(0x133)](_0x1524df),pacienteInDto={'cedula':_0x1524df};const _0x487e47=await fetch(localStorage['getItem'](_0x240a8e(0x10e))+_0x240a8e(0x115),{'method':_0x240a8e(0xfa),'headers':{'Accept':_0x240a8e(0x13d),'Content-Type':_0x240a8e(0x13d)},'body':JSON[_0x240a8e(0x119)](pacienteInDto)}),_0x584437=await _0x487e47['json']();console['log'](_0x584437);let _0x49b351=[];return _0x584437[_0x240a8e(0x125)](_0x2963bc=>{const _0x5b69d9=_0x240a8e;let _0x55c497=CryptoJS['AES']['decrypt'](_0x2963bc[_0x5b69d9(0x112)][_0x5b69d9(0xf9)],cajaNegra)[_0x5b69d9(0x113)](CryptoJS[_0x5b69d9(0x12d)]['Utf8']),_0x1a7c7e={'idAlergia':_0x2963bc[_0x5b69d9(0x112)][_0x5b69d9(0x12a)],'nombre':_0x55c497};_0x49b351[_0x5b69d9(0x135)](_0x1a7c7e);}),_0x49b351;},editarAlergia=async _0x38b287=>{const _0x3c0dbd=_0x2595;nombreInput=document[_0x3c0dbd(0x11b)](_0x3c0dbd(0x104)+_0x38b287)[_0x3c0dbd(0x138)],console[_0x3c0dbd(0x133)](nombreInput);const _0x16692c=document['getElementById'](_0x3c0dbd(0xf7));_0x16692c['style'][_0x3c0dbd(0x11e)]='gray',_0x16692c[_0x3c0dbd(0x10c)]=_0x3c0dbd(0x10f);let _0x3cd404=CryptoJS[_0x3c0dbd(0x102)][_0x3c0dbd(0x117)](nombreInput,cajaNegra)['toString']();fetch(localStorage[_0x3c0dbd(0x131)](_0x3c0dbd(0x10e))+_0x3c0dbd(0x11c)+_0x38b287,{'method':'PATCH','body':JSON[_0x3c0dbd(0x119)]({'nombre':_0x3cd404}),'headers':{'Accept':_0x3c0dbd(0x13d),'Content-Type':_0x3c0dbd(0x13d)}})[_0x3c0dbd(0x13b)](_0x114050=>{const _0x51d1ab=_0x3c0dbd;console[_0x51d1ab(0x133)](_0x114050),_0x114050['ok']?($('#editaralergia'+_0x38b287)['modal'](_0x51d1ab(0x11f)),location[_0x51d1ab(0x118)]()):$(_0x51d1ab(0x106))[_0x51d1ab(0xf6)](_0x51d1ab(0x12e));})[_0x3c0dbd(0x114)](_0x55b6d3=>{console['error'](_0x55b6d3);});},inhabilitarAlergia=async _0x46aeac=>{const _0x165ce5=_0x2595;let _0x2a13ab=localStorage[_0x165ce5(0x131)](_0x165ce5(0xff)),_0x315449=JSON[_0x165ce5(0xfe)](_0x2a13ab);console[_0x165ce5(0x133)](_0x2a13ab);let _0x454480=_0x315449[_0x165ce5(0x134)],_0x50f7a6=decodeURIComponent(_0x315449[_0x165ce5(0x110)]);console['log'](_0x50f7a6),console[_0x165ce5(0x133)](_0x454480);let _0x5dcb6c='';_0x454480=='medico'?(_0x5dcb6c=await obtenerCedulasUsuarios(0x0,CryptoJS[_0x165ce5(0x102)][_0x165ce5(0x129)](decodeURIComponent(localStorage[_0x165ce5(0x131)]('cedulaPaciente')),_0x165ce5(0x137))[_0x165ce5(0x113)](CryptoJS['enc']['Utf8'])),console[_0x165ce5(0x133)](_0x5dcb6c)):_0x5dcb6c=_0x50f7a6;let _0x1bcdbf={'cedula':_0x5dcb6c},_0x15c5b2={'alergiaInDto':{'idAlergia':_0x46aeac},'pacienteInDto':_0x1bcdbf};fetch(localStorage[_0x165ce5(0x131)]('servidorAPI')+_0x165ce5(0x126),{'method':_0x165ce5(0xf3),'headers':{'Accept':_0x165ce5(0x13d),'Content-Type':_0x165ce5(0x13d)},'body':JSON[_0x165ce5(0x119)](_0x15c5b2)})[_0x165ce5(0x13b)](_0x1b5391=>{const _0x6d53e=_0x165ce5;console[_0x6d53e(0x133)](_0x1b5391),_0x1b5391['ok']&&($(_0x6d53e(0x10b)+_0x46aeac)[_0x6d53e(0xf6)](_0x6d53e(0x11f)),location[_0x6d53e(0x118)]());})[_0x165ce5(0x114)](_0x4cd579=>{const _0x4aa92a=_0x165ce5;console[_0x4aa92a(0xf4)](_0x4cd579);});};