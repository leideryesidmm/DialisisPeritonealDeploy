(function(_0x4da837,_0x4c9541){const _0xe678c0=_0x4e5f,_0x210eef=_0x4da837();while(!![]){try{const _0x14a7cc=-parseInt(_0xe678c0(0x15d))/0x1+-parseInt(_0xe678c0(0x12d))/0x2*(-parseInt(_0xe678c0(0x150))/0x3)+parseInt(_0xe678c0(0x129))/0x4*(parseInt(_0xe678c0(0x141))/0x5)+parseInt(_0xe678c0(0x154))/0x6*(-parseInt(_0xe678c0(0x118))/0x7)+-parseInt(_0xe678c0(0x12f))/0x8*(parseInt(_0xe678c0(0x123))/0x9)+-parseInt(_0xe678c0(0x110))/0xa*(-parseInt(_0xe678c0(0x111))/0xb)+-parseInt(_0xe678c0(0x103))/0xc;if(_0x14a7cc===_0x4c9541)break;else _0x210eef['push'](_0x210eef['shift']());}catch(_0xdf81aa){_0x210eef['push'](_0x210eef['shift']());}}}(_0x4c4f,0x354a9));var cedulaEncriptada='';let obtenerCedulaEncriptada=async _0x582601=>{const _0x33c8a8=_0x4e5f,_0x263fd0=await fetch(localStorage[_0x33c8a8(0x14c)](_0x33c8a8(0x132))+'Medico/findAllPacientes',{'method':_0x33c8a8(0x142),'headers':{'Accept':_0x33c8a8(0x114),'Content-Type':_0x33c8a8(0x114)}}),_0x5664d0=await _0x263fd0[_0x33c8a8(0x10d)]();return console[_0x33c8a8(0x119)](_0x5664d0),_0x5664d0['forEach'](_0x2204cb=>{const _0x1ac43e=_0x33c8a8;let _0x3eef06=CryptoJS[_0x1ac43e(0x14b)][_0x1ac43e(0x11e)](_0x2204cb[_0x1ac43e(0x117)],cajaNegra)[_0x1ac43e(0x149)](CryptoJS[_0x1ac43e(0x134)]['Utf8']);const _0x573da7=encodeURIComponent(_0x3eef06);console[_0x1ac43e(0x119)](_0x3eef06);if(_0x582601===_0x573da7)cedulaEncriptada=_0x2204cb['cedula'];}),cedulaEncriptada;},crearCuidador=async()=>{const _0x57c4bc=_0x4e5f;document['getElementById']('agregarCuidador')[_0x57c4bc(0x146)](_0x57c4bc(0x128),async function(_0x471ab5){const _0x5ad30e=_0x57c4bc;_0x471ab5[_0x5ad30e(0x143)]();var _0x1dc5f6=document[_0x5ad30e(0x108)]('guardarCuidador');_0x1dc5f6[_0x5ad30e(0x153)][_0x5ad30e(0x156)]=_0x5ad30e(0x125),_0x1dc5f6[_0x5ad30e(0x145)]=!![];let _0x31a821=localStorage[_0x5ad30e(0x14c)](_0x5ad30e(0x12a)),_0x44021d=JSON[_0x5ad30e(0x13a)](_0x31a821),_0x45404b=decodeURIComponent(_0x44021d[_0x5ad30e(0x117)]),_0x438e1c=await cuidadorPorPaciente();console[_0x5ad30e(0x119)](_0x438e1c);var _0xea845f=document[_0x5ad30e(0x108)](_0x5ad30e(0x107))[_0x5ad30e(0x11a)],_0x58ba9d=document[_0x5ad30e(0x108)](_0x5ad30e(0x12e))['value'],_0x3b7904=selectedParentesco[_0x5ad30e(0x122)][selectedParentesco[_0x5ad30e(0x11c)]],_0x42bbcf=_0x3b7904['value'],_0x2c2e92=document[_0x5ad30e(0x108)]('direccion')['value'],_0x1bcbfc=document[_0x5ad30e(0x108)](_0x5ad30e(0x115))[_0x5ad30e(0x11a)];if(_0x438e1c[_0x5ad30e(0x113)](_0xea845f)){var _0xfa2a3a=document['getElementById']('avisoMensaje');_0xfa2a3a[_0x5ad30e(0x13c)]='El\x20cuidador\x20ya\x20está\x20registrado,\x20si\x20no\x20está\x20como\x20su\x20cuidador\x20actual\x20debe\x20cambiarlo\x20en\x20el\x20apartado\x20de\x20cuidador',$(_0x5ad30e(0x15b))[_0x5ad30e(0x109)](_0x5ad30e(0x112));}else{var _0x4b81d4=CryptoJS[_0x5ad30e(0x14b)]['encrypt'](_0xea845f,cajaNegra)[_0x5ad30e(0x149)](),_0x305b1c=CryptoJS[_0x5ad30e(0x14b)][_0x5ad30e(0x13b)](_0x58ba9d,cajaNegra)[_0x5ad30e(0x149)](),_0x59848c=CryptoJS[_0x5ad30e(0x14b)][_0x5ad30e(0x13b)](_0x2c2e92,cajaNegra)[_0x5ad30e(0x149)](),_0x3456b4=CryptoJS['AES'][_0x5ad30e(0x13b)](_0x1bcbfc,cajaNegra)[_0x5ad30e(0x149)]();let _0x522dc1={'cedulaCuidador':_0x4b81d4,'nombre':_0x305b1c,'parentesco':parseInt(_0x42bbcf,0xa),'direccion':_0x59848c,'telefono':_0x3456b4},_0x54a767={'cedula':_0x45404b},_0x14afef={'cuidadorInDto':_0x522dc1,'pacienteInDto':_0x54a767};console[_0x5ad30e(0x119)](_0x522dc1),console[_0x5ad30e(0x119)](_0x54a767),fetch(localStorage['getItem'](_0x5ad30e(0x132))+_0x5ad30e(0x116),{'method':_0x5ad30e(0x131),'headers':{'Accept':_0x5ad30e(0x114),'Content-Type':'application/json'},'body':JSON[_0x5ad30e(0x104)](_0x14afef)})[_0x5ad30e(0x121)](_0x12b11c=>{const _0x9b6288=_0x5ad30e;_0x12b11c[_0x9b6288(0x15e)]===0xc8&&$(_0x9b6288(0x136))[_0x9b6288(0x109)](_0x9b6288(0x112));})['catch'](_0x3df6d6=>{const _0x5a8091=_0x5ad30e;console[_0x5a8091(0x105)](_0x3df6d6);});}});},cuidadorPorPaciente=async()=>{const _0x3e27c3=_0x4e5f;let _0x405e21=localStorage[_0x3e27c3(0x14c)](_0x3e27c3(0x12a)),_0x1f42ee=JSON[_0x3e27c3(0x13a)](_0x405e21);console[_0x3e27c3(0x119)](_0x405e21);let _0x2213dc=_0x1f42ee[_0x3e27c3(0x130)],_0x44b54b=decodeURIComponent(_0x1f42ee[_0x3e27c3(0x117)]);console[_0x3e27c3(0x119)](_0x44b54b),console[_0x3e27c3(0x119)](_0x2213dc);let _0xed6c11='';_0x2213dc=='medico'?(_0xed6c11=await obtenerCedulaEncriptada(0x0,CryptoJS[_0x3e27c3(0x14b)][_0x3e27c3(0x11e)](decodeURIComponent(localStorage['getItem'](_0x3e27c3(0x151))),_0x3e27c3(0x10b))[_0x3e27c3(0x149)](CryptoJS[_0x3e27c3(0x134)][_0x3e27c3(0x124)])),console[_0x3e27c3(0x119)](_0xed6c11)):_0xed6c11=_0x44b54b;console[_0x3e27c3(0x119)](_0xed6c11);const _0x5706ab=await fetch(localStorage[_0x3e27c3(0x14c)](_0x3e27c3(0x132))+_0x3e27c3(0x102),{'method':_0x3e27c3(0x131),'headers':{'Accept':_0x3e27c3(0x114),'Content-Type':_0x3e27c3(0x114)},'body':JSON['stringify']({'cedula':_0xed6c11})}),_0x2d63f9=await _0x5706ab[_0x3e27c3(0x10d)]();console['log'](_0x2d63f9);let _0x4412ef=[];return _0x2d63f9[_0x3e27c3(0x155)](_0x59fc5b=>{const _0x225220=_0x3e27c3;let _0x116abf=CryptoJS[_0x225220(0x14b)][_0x225220(0x11e)](_0x59fc5b['cuidador']['cedulaCuidador'],cajaNegra)['toString'](CryptoJS[_0x225220(0x134)][_0x225220(0x124)]);_0x4412ef[_0x225220(0x11b)](_0x116abf);}),_0x4412ef;},cuidadoresAntiguos=async()=>{const _0x338db3=_0x4e5f,_0x2e8c12=new Set();let _0x5b56ab=localStorage['getItem']('datos'),_0xcc963f=JSON[_0x338db3(0x13a)](_0x5b56ab);console[_0x338db3(0x119)](_0x5b56ab);let _0x288782=_0xcc963f[_0x338db3(0x130)],_0x3f9de2=decodeURIComponent(_0xcc963f['cedula']);console[_0x338db3(0x119)](_0x3f9de2),console[_0x338db3(0x119)](_0x288782);let _0x52724d='';_0x288782==_0x338db3(0x159)?(_0x52724d=await obtenerCedulaEncriptada(0x0,CryptoJS[_0x338db3(0x14b)][_0x338db3(0x11e)](decodeURIComponent(localStorage['getItem'](_0x338db3(0x151))),'clave_secreta')['toString'](CryptoJS[_0x338db3(0x134)][_0x338db3(0x124)])),console[_0x338db3(0x119)](_0x52724d)):_0x52724d=_0x3f9de2;const _0x463d86=await fetch(localStorage[_0x338db3(0x14c)](_0x338db3(0x132))+_0x338db3(0x102),{'method':_0x338db3(0x131),'headers':{'Accept':_0x338db3(0x114),'Content-Type':_0x338db3(0x114)},'body':JSON['stringify']({'cedula':_0x52724d})});if(_0x463d86['status']===0xcc)return null;else{const _0x303c5c=await _0x463d86[_0x338db3(0x10d)](),_0x38b2a8=await fetch(localStorage[_0x338db3(0x14c)]('servidorAPI')+_0x338db3(0x12c),{'method':_0x338db3(0x131),'headers':{'Accept':_0x338db3(0x114),'Content-Type':_0x338db3(0x114)},'body':JSON[_0x338db3(0x104)]({'cedula':_0x52724d})});if(_0x38b2a8[_0x338db3(0x15e)]===0xcc)_0x303c5c[_0x338db3(0x155)](_0x19da7b=>{const _0x12ad0f=_0x338db3;let _0x3da39d=CryptoJS[_0x12ad0f(0x14b)]['decrypt'](_0x19da7b[_0x12ad0f(0x15a)][_0x12ad0f(0x144)],cajaNegra)['toString'](CryptoJS['enc']['Utf8']),_0x2f5a8c=CryptoJS['AES']['decrypt'](_0x19da7b[_0x12ad0f(0x15a)][_0x12ad0f(0x12e)],cajaNegra)[_0x12ad0f(0x149)](CryptoJS[_0x12ad0f(0x134)][_0x12ad0f(0x124)]),_0x1984dd=CryptoJS[_0x12ad0f(0x14b)][_0x12ad0f(0x11e)](_0x19da7b[_0x12ad0f(0x15a)][_0x12ad0f(0x14a)],cajaNegra)[_0x12ad0f(0x149)](CryptoJS[_0x12ad0f(0x134)][_0x12ad0f(0x124)]),_0x4d48a9=CryptoJS[_0x12ad0f(0x14b)][_0x12ad0f(0x11e)](_0x19da7b[_0x12ad0f(0x15a)][_0x12ad0f(0x115)],cajaNegra)[_0x12ad0f(0x149)](CryptoJS[_0x12ad0f(0x134)][_0x12ad0f(0x124)]),_0x41db9d=_0x19da7b[_0x12ad0f(0x152)];const _0x334ade={'cedulaCuidador':_0x3da39d,'nombre':_0x2f5a8c,'direccion':_0x1984dd,'telefono':_0x4d48a9,'activo':_0x41db9d};_0x2e8c12['add'](JSON['stringify'](_0x334ade));});else{const _0x167dae=await _0x38b2a8[_0x338db3(0x10d)]();let _0x13e6dd=CryptoJS[_0x338db3(0x14b)][_0x338db3(0x11e)](_0x167dae['cuidador']['cedulaCuidador'],cajaNegra)[_0x338db3(0x149)](CryptoJS[_0x338db3(0x134)][_0x338db3(0x124)]);_0x303c5c[_0x338db3(0x155)](_0x12b38f=>{const _0x5303a8=_0x338db3;let _0xcb5206=CryptoJS['AES'][_0x5303a8(0x11e)](_0x12b38f[_0x5303a8(0x15a)][_0x5303a8(0x144)],cajaNegra)[_0x5303a8(0x149)](CryptoJS[_0x5303a8(0x134)][_0x5303a8(0x124)]);if(_0xcb5206!==_0x13e6dd){let _0x2a3280=CryptoJS[_0x5303a8(0x14b)][_0x5303a8(0x11e)](_0x12b38f[_0x5303a8(0x15a)][_0x5303a8(0x144)],cajaNegra)[_0x5303a8(0x149)](CryptoJS['enc'][_0x5303a8(0x124)]),_0x357689=CryptoJS['AES'][_0x5303a8(0x11e)](_0x12b38f[_0x5303a8(0x15a)][_0x5303a8(0x12e)],cajaNegra)[_0x5303a8(0x149)](CryptoJS[_0x5303a8(0x134)][_0x5303a8(0x124)]),_0x4b053f=CryptoJS[_0x5303a8(0x14b)][_0x5303a8(0x11e)](_0x12b38f[_0x5303a8(0x15a)]['direccion'],cajaNegra)['toString'](CryptoJS[_0x5303a8(0x134)][_0x5303a8(0x124)]),_0x46d815=CryptoJS[_0x5303a8(0x14b)]['decrypt'](_0x12b38f[_0x5303a8(0x15a)][_0x5303a8(0x115)],cajaNegra)[_0x5303a8(0x149)](CryptoJS[_0x5303a8(0x134)]['Utf8']),_0x40008d=_0x12b38f[_0x5303a8(0x152)];const _0x40cf29={'cedulaCuidador':_0x2a3280,'nombre':_0x357689,'direccion':_0x4b053f,'telefono':_0x46d815,'activo':_0x40008d};_0x2e8c12[_0x5303a8(0x158)](JSON[_0x5303a8(0x104)](_0x40cf29));}});}const _0x483e81=Array[_0x338db3(0x13f)](_0x2e8c12)[_0x338db3(0x11d)](_0x2e221a=>JSON[_0x338db3(0x13a)](_0x2e221a));return _0x483e81;}},listaParentesco=async()=>{const _0x54db54=_0x4e5f,_0x45fe5e=await fetch(localStorage[_0x54db54(0x14c)](_0x54db54(0x132))+_0x54db54(0x10c),{'method':_0x54db54(0x142),'headers':{'Accept':'application/json','Content-Type':'application/json'}}),_0x5377ea=document[_0x54db54(0x108)]('selectedParentesco');if(_0x5377ea[_0x54db54(0x13d)]===0x0){const _0x35c9ec=await _0x45fe5e[_0x54db54(0x10d)](),_0x4bcc96=document[_0x54db54(0x157)]('option');_0x4bcc96[_0x54db54(0x14e)]=_0x54db54(0x148),_0x5377ea[_0x54db54(0x11f)](_0x4bcc96),_0x35c9ec[_0x54db54(0x155)](_0x507ea7=>{const _0x173d0d=_0x54db54,_0x1be5b0=document[_0x173d0d(0x157)](_0x173d0d(0x140));_0x1be5b0['value']=_0x507ea7['idParentesco'],_0x1be5b0['textContent']=_0x507ea7[_0x173d0d(0x10a)],_0x5377ea[_0x173d0d(0x11f)](_0x1be5b0);});}},listarParentesco=async()=>{const _0xaf86fa=_0x4e5f,_0x4c35c7=await fetch(localStorage[_0xaf86fa(0x14c)](_0xaf86fa(0x132))+'paciente/ListParentesco',{'method':_0xaf86fa(0x142),'headers':{'Accept':_0xaf86fa(0x114),'Content-Type':'application/json'}}),_0x6b20e0=document[_0xaf86fa(0x108)]('selectedParentesco');if(_0x6b20e0[_0xaf86fa(0x13d)]===0x0){const _0x61d51c=await _0x4c35c7['json'](),_0x4c1a69=document[_0xaf86fa(0x157)]('option');_0x4c1a69['textContent']=_0xaf86fa(0x148),_0x6b20e0['appendChild'](_0x4c1a69),_0x61d51c[_0xaf86fa(0x155)](_0x12d76b=>{const _0x559f95=_0xaf86fa,_0x42fff2=document[_0x559f95(0x157)](_0x559f95(0x140));_0x42fff2[_0x559f95(0x11a)]=_0x12d76b[_0x559f95(0x127)],_0x42fff2['textContent']=_0x12d76b[_0x559f95(0x10a)],_0x6b20e0['appendChild'](_0x42fff2);});}encontrarCuidador();},cuidadorActivo=async()=>{const _0x5ee333=_0x4e5f;let _0x56a998=localStorage[_0x5ee333(0x14c)]('datos'),_0x5066d2=JSON['parse'](_0x56a998);console[_0x5ee333(0x119)](_0x56a998);let _0x3c98b9=_0x5066d2['usuario'],_0x6dfe44=decodeURIComponent(_0x5066d2[_0x5ee333(0x117)]);console[_0x5ee333(0x119)](_0x6dfe44),console[_0x5ee333(0x119)](_0x3c98b9);let _0x1751dc='';_0x3c98b9=='medico'?(_0x1751dc=await obtenerCedulaEncriptada(0x0,CryptoJS['AES'][_0x5ee333(0x11e)](decodeURIComponent(localStorage[_0x5ee333(0x14c)](_0x5ee333(0x151))),_0x5ee333(0x10b))[_0x5ee333(0x149)](CryptoJS[_0x5ee333(0x134)][_0x5ee333(0x124)])),console[_0x5ee333(0x119)](_0x1751dc)):_0x1751dc=_0x6dfe44;const _0x502418=await fetch(localStorage[_0x5ee333(0x14c)]('servidorAPI')+_0x5ee333(0x12c),{'method':'POST','headers':{'Accept':_0x5ee333(0x114),'Content-Type':_0x5ee333(0x114)},'body':JSON[_0x5ee333(0x104)]({'cedula':_0x1751dc})});let _0x2d9a01={};if(_0x502418[_0x5ee333(0x15e)]===0xcc)return null;else{const _0x5b0a2d=await _0x502418['json']();console['log'](_0x5b0a2d);var _0x566080=CryptoJS[_0x5ee333(0x14b)][_0x5ee333(0x11e)](_0x5b0a2d[_0x5ee333(0x15a)]['cedulaCuidador'],cajaNegra)['toString'](CryptoJS[_0x5ee333(0x134)][_0x5ee333(0x124)]),_0x5aa19b=CryptoJS['AES'][_0x5ee333(0x11e)](_0x5b0a2d[_0x5ee333(0x15a)][_0x5ee333(0x12e)],cajaNegra)[_0x5ee333(0x149)](CryptoJS[_0x5ee333(0x134)][_0x5ee333(0x124)]),_0x5d9d91=CryptoJS[_0x5ee333(0x14b)][_0x5ee333(0x11e)](_0x5b0a2d['cuidador'][_0x5ee333(0x14a)],cajaNegra)[_0x5ee333(0x149)](CryptoJS['enc']['Utf8']),_0x4a5ab1=CryptoJS['AES'][_0x5ee333(0x11e)](_0x5b0a2d[_0x5ee333(0x15a)][_0x5ee333(0x115)],cajaNegra)[_0x5ee333(0x149)](CryptoJS['enc'][_0x5ee333(0x124)]),_0x3b2ff9=_0x5b0a2d[_0x5ee333(0x15a)][_0x5ee333(0x135)][_0x5ee333(0x10a)];_0x2d9a01[_0x5ee333(0x117)]=_0x566080,_0x2d9a01[_0x5ee333(0x12e)]=_0x5aa19b,_0x2d9a01[_0x5ee333(0x14a)]=_0x5d9d91,_0x2d9a01['telefono']=_0x4a5ab1,_0x2d9a01[_0x5ee333(0x135)]=_0x3b2ff9;}return _0x2d9a01;},encontrarCuidador=async()=>{const _0x4b13c4=_0x4e5f;let _0x4b858a=localStorage[_0x4b13c4(0x14c)](_0x4b13c4(0x12a)),_0x5f5293=JSON[_0x4b13c4(0x13a)](_0x4b858a);console[_0x4b13c4(0x119)](_0x4b858a);let _0x16dc35=_0x5f5293['usuario'],_0x270d35=decodeURIComponent(_0x5f5293[_0x4b13c4(0x117)]);console['log'](_0x270d35),console[_0x4b13c4(0x119)](_0x16dc35);let _0x24a5c3='';_0x16dc35=='medico'?(_0x24a5c3=await obtenerCedulaEncriptada(0x0,CryptoJS[_0x4b13c4(0x14b)][_0x4b13c4(0x11e)](decodeURIComponent(localStorage[_0x4b13c4(0x14c)](_0x4b13c4(0x151))),_0x4b13c4(0x10b))[_0x4b13c4(0x149)](CryptoJS['enc']['Utf8'])),console[_0x4b13c4(0x119)](_0x24a5c3)):_0x24a5c3=_0x270d35;const _0x41c944=await fetch(localStorage[_0x4b13c4(0x14c)](_0x4b13c4(0x132))+_0x4b13c4(0x12c),{'method':_0x4b13c4(0x131),'headers':{'Accept':'application/json','Content-Type':_0x4b13c4(0x114)},'body':JSON['stringify']({'cedula':_0x24a5c3})}),_0x268389=await _0x41c944['json']();var _0x194b27=CryptoJS[_0x4b13c4(0x14b)][_0x4b13c4(0x11e)](_0x268389[_0x4b13c4(0x15a)][_0x4b13c4(0x144)],cajaNegra)[_0x4b13c4(0x149)](CryptoJS[_0x4b13c4(0x134)][_0x4b13c4(0x124)]),_0xe91ff9=CryptoJS[_0x4b13c4(0x14b)][_0x4b13c4(0x11e)](_0x268389[_0x4b13c4(0x15a)][_0x4b13c4(0x12e)],cajaNegra)['toString'](CryptoJS[_0x4b13c4(0x134)][_0x4b13c4(0x124)]),_0x2bcd44=CryptoJS[_0x4b13c4(0x14b)][_0x4b13c4(0x11e)](_0x268389[_0x4b13c4(0x15a)][_0x4b13c4(0x14a)],cajaNegra)[_0x4b13c4(0x149)](CryptoJS[_0x4b13c4(0x134)][_0x4b13c4(0x124)]),_0x4ee618=CryptoJS[_0x4b13c4(0x14b)][_0x4b13c4(0x11e)](_0x268389[_0x4b13c4(0x15a)][_0x4b13c4(0x115)],cajaNegra)[_0x4b13c4(0x149)](CryptoJS[_0x4b13c4(0x134)][_0x4b13c4(0x124)]);document[_0x4b13c4(0x108)](_0x4b13c4(0x144))[_0x4b13c4(0x11a)]=_0x194b27,document[_0x4b13c4(0x108)](_0x4b13c4(0x15c))['value']=_0xe91ff9,document[_0x4b13c4(0x108)]('telf')[_0x4b13c4(0x11a)]=_0x4ee618,document[_0x4b13c4(0x108)](_0x4b13c4(0x139))[_0x4b13c4(0x11a)]=_0x2bcd44;const _0x150520=document['getElementById']('selectedParentesco'),_0x5485da=_0x268389['cuidador'][_0x4b13c4(0x135)][_0x4b13c4(0x10a)];return Array['from'](_0x150520[_0x4b13c4(0x122)])[_0x4b13c4(0x155)]((_0x745796,_0x552366)=>{const _0x480927=_0x4b13c4;_0x745796[_0x480927(0x14e)]===_0x5485da&&(_0x150520[_0x480927(0x11c)]=_0x552366);}),_0x268389;},actualizarCuidador=async()=>{const _0xc01efe=_0x4e5f;var _0x3d4f3e=document[_0xc01efe(0x108)](_0xc01efe(0x12b));_0x3d4f3e['style'][_0xc01efe(0x156)]=_0xc01efe(0x125),_0x3d4f3e[_0xc01efe(0x145)]=!![];let _0xe3b380=localStorage[_0xc01efe(0x14c)](_0xc01efe(0x12a)),_0x38e571=JSON['parse'](_0xe3b380);console[_0xc01efe(0x119)](_0xe3b380);let _0x461248=_0x38e571[_0xc01efe(0x130)],_0x3f02e9=decodeURIComponent(_0x38e571[_0xc01efe(0x117)]);console[_0xc01efe(0x119)](_0x3f02e9),console[_0xc01efe(0x119)](_0x461248);let _0x539a99='';_0x461248==_0xc01efe(0x159)?(_0x539a99=await obtenerCedulaEncriptada(0x0,CryptoJS[_0xc01efe(0x14b)][_0xc01efe(0x11e)](decodeURIComponent(localStorage[_0xc01efe(0x14c)](_0xc01efe(0x151))),_0xc01efe(0x10b))['toString'](CryptoJS['enc'][_0xc01efe(0x124)])),console['log'](_0x539a99)):_0x539a99=_0x3f02e9;const _0x141524=await fetch(localStorage['getItem'](_0xc01efe(0x132))+_0xc01efe(0x12c),{'method':_0xc01efe(0x131),'headers':{'Accept':_0xc01efe(0x114),'Content-Type':_0xc01efe(0x114)},'body':JSON[_0xc01efe(0x104)]({'cedula':_0x539a99})});let _0x5ea7a3={};const _0x3b7957=await _0x141524[_0xc01efe(0x10d)](),_0x433fae=_0x3b7957[_0xc01efe(0x15a)][_0xc01efe(0x144)];let _0x1711d6=document[_0xc01efe(0x108)](_0xc01efe(0x139))['value'],_0x4afdb5=document['getElementById'](_0xc01efe(0x15c))[_0xc01efe(0x11a)],_0xcf876f=document['getElementById'](_0xc01efe(0x133))[_0xc01efe(0x11a)],_0x210c2d=document['getElementById']('telf')[_0xc01efe(0x11a)];console['log'](_0x1711d6,_0x4afdb5,_0xcf876f,_0x210c2d);let _0x552d5f={'direccion':CryptoJS['AES'][_0xc01efe(0x13b)](_0x1711d6,cajaNegra)[_0xc01efe(0x149)](),'nombre':CryptoJS['AES'][_0xc01efe(0x13b)](_0x4afdb5,cajaNegra)['toString'](),'parentesco':parseInt(_0xcf876f,0xa),'telefono':CryptoJS[_0xc01efe(0x14b)][_0xc01efe(0x13b)](_0x210c2d,cajaNegra)[_0xc01efe(0x149)](),'cedulaCuidador':_0x433fae};fetch(localStorage[_0xc01efe(0x14c)]('servidorAPI')+'paciente/cuidador/actualizar',{'method':'PATCH','body':JSON[_0xc01efe(0x104)](_0x552d5f),'headers':{'Accept':_0xc01efe(0x114),'Content-Type':'application/json'}})['then'](_0x36b017=>{const _0x24c211=_0xc01efe;if(_0x36b017['ok'])(_0x36b017['status']===0xc8||_0x36b017[_0x24c211(0x15e)]===0xcc)&&$(_0x24c211(0x136))['modal'](_0x24c211(0x112));else{}})[_0xc01efe(0x120)](_0x50cdb3=>{const _0x51f405=_0xc01efe;console[_0x51f405(0x105)](_0x50cdb3);});},cuidAntiguos=async()=>{const _0x57af19=_0x4e5f;let _0x310126=localStorage['getItem'](_0x57af19(0x12a)),_0x37a78f=JSON[_0x57af19(0x13a)](_0x310126);console[_0x57af19(0x119)](_0x310126);let _0x1e6f2d=_0x37a78f['usuario'],_0xd46769=decodeURIComponent(_0x37a78f[_0x57af19(0x117)]);console[_0x57af19(0x119)](_0xd46769),console['log'](_0x1e6f2d);let _0x5ece92='';_0x1e6f2d==_0x57af19(0x159)?(_0x5ece92=await obtenerCedulaEncriptada(0x0,CryptoJS['AES'][_0x57af19(0x11e)](decodeURIComponent(localStorage[_0x57af19(0x14c)]('cedulaPaciente')),_0x57af19(0x10b))['toString'](CryptoJS[_0x57af19(0x134)][_0x57af19(0x124)])),console[_0x57af19(0x119)](_0x5ece92)):_0x5ece92=_0xd46769;const _0x1c88a8=await fetch(localStorage[_0x57af19(0x14c)](_0x57af19(0x132))+_0x57af19(0x102),{'method':_0x57af19(0x131),'headers':{'Accept':_0x57af19(0x114),'Content-Type':'application/json'},'body':JSON[_0x57af19(0x104)]({'cedula':_0x5ece92})});if(_0x1c88a8[_0x57af19(0x15e)]===0xcc)return null;else{const _0x1cd2fc=await _0x1c88a8[_0x57af19(0x10d)](),_0x5e411d=await cuidadoresAntiguos(),_0x570e2d=new Map();if(_0x5e411d['length']>0x0)_0x1cd2fc[_0x57af19(0x155)](_0x24c29b=>{const _0x181074=_0x57af19;if(_0x24c29b['activo']===![]){const _0x506857=_0x24c29b['cuidador']['cedulaCuidador'],_0x35c324={'cedulaCuidador':_0x506857,'nombre':_0x24c29b[_0x181074(0x15a)]['nombre'],'direccion':_0x24c29b['cuidador']['direccion'],'telefono':_0x24c29b['cuidador'][_0x181074(0x115)],'activo':_0x24c29b[_0x181074(0x152)],'idCuidadorPaciente':_0x24c29b[_0x181074(0x10f)]};_0x570e2d['set'](_0x506857,_0x35c324);}});else return 0x0;return Array[_0x57af19(0x13f)](_0x570e2d[_0x57af19(0x137)]());}},reactivarCuidador=async(_0x140840,_0xd045b)=>{const _0x20695b=_0x4e5f,_0x5884bf=document['getElementById'](_0x20695b(0x106)+_0xd045b);_0x5884bf[_0x20695b(0x153)][_0x20695b(0x147)]=_0x20695b(0x13e),_0x5884bf[_0x20695b(0x145)]=!![];let _0x2daa00=localStorage[_0x20695b(0x14c)](_0x20695b(0x12a)),_0x9980c=JSON[_0x20695b(0x13a)](_0x2daa00);console[_0x20695b(0x119)](_0x2daa00);let _0x249b62=_0x9980c['usuario'],_0x1ad5ff=decodeURIComponent(_0x9980c['cedula']);console[_0x20695b(0x119)](_0x1ad5ff),console[_0x20695b(0x119)](_0x249b62);let _0x59bb86='';_0x249b62==_0x20695b(0x159)?(_0x59bb86=await obtenerCedulaEncriptada(0x0,CryptoJS['AES']['decrypt'](decodeURIComponent(localStorage[_0x20695b(0x14c)](_0x20695b(0x151))),'clave_secreta')[_0x20695b(0x149)](CryptoJS[_0x20695b(0x134)][_0x20695b(0x124)])),console[_0x20695b(0x119)](_0x59bb86)):_0x59bb86=_0x1ad5ff;let _0x502ded=await cuidAntiguos();_0x502ded[_0x20695b(0x155)](_0x2f1272=>{const _0x1102f2=_0x20695b;let _0x1e251d=CryptoJS[_0x1102f2(0x14b)][_0x1102f2(0x11e)](_0x2f1272['cedulaCuidador'],cajaNegra)[_0x1102f2(0x149)](CryptoJS[_0x1102f2(0x134)]['Utf8']),_0x37c397=parseInt(_0x1e251d,0xa);if(_0x37c397==_0x140840){let _0x5c265d={'cedula':_0x59bb86},_0x4205fa={'cedulaCuidador':_0x2f1272[_0x1102f2(0x144)]},_0x270783={'pacienteInDto':_0x5c265d,'cuidadorInDto':_0x4205fa};fetch(localStorage[_0x1102f2(0x14c)](_0x1102f2(0x132))+_0x1102f2(0x14d),{'method':'PATCH','body':JSON['stringify'](_0x270783),'headers':{'Accept':_0x1102f2(0x114),'Content-Type':_0x1102f2(0x114)}})['then'](_0x1d642a=>{const _0x58ea49=_0x1102f2;_0x1d642a['ok']?(_0x1d642a[_0x58ea49(0x15e)]===0xc8||_0x1d642a['status']===0xcc)&&$('#successModalReactivar')[_0x58ea49(0x109)](_0x58ea49(0x112)):fetch(localStorage['getItem'](_0x58ea49(0x132))+'paciente/cuidador/ReactivarCuidadorAntiguoSinActivo',{'method':'PATCH','body':JSON['stringify'](_0x4205fa),'headers':{'Accept':'application/json','Content-Type':_0x58ea49(0x114)}});})[_0x1102f2(0x120)](_0x261c7b=>{console['error'](_0x261c7b);});}});},inhabilitarCuidador=async()=>{const _0x2366e7=_0x4e5f;var _0x2ce6f3=document[_0x2366e7(0x108)](_0x2366e7(0x101));_0x2ce6f3[_0x2366e7(0x153)][_0x2366e7(0x156)]=_0x2366e7(0x125),_0x2ce6f3[_0x2366e7(0x145)]=!![];if(document[_0x2366e7(0x108)]('cambiar')!=null){var _0x4f0098=document['getElementById'](_0x2366e7(0x10e));_0x4f0098[_0x2366e7(0x153)][_0x2366e7(0x156)]=_0x2366e7(0x125),_0x4f0098[_0x2366e7(0x145)]=!![];}var _0x29c23c=document[_0x2366e7(0x108)](_0x2366e7(0x126));_0x29c23c[_0x2366e7(0x153)][_0x2366e7(0x156)]=_0x2366e7(0x125),_0x29c23c['disabled']=!![];let _0x40ad79=localStorage[_0x2366e7(0x14c)](_0x2366e7(0x12a)),_0x543fe8=JSON['parse'](_0x40ad79);console[_0x2366e7(0x119)](_0x40ad79);let _0xf06005=_0x543fe8[_0x2366e7(0x130)],_0x311b28=decodeURIComponent(_0x543fe8[_0x2366e7(0x117)]);console['log'](_0x311b28),console[_0x2366e7(0x119)](_0xf06005);let _0x5eb4e4='';_0xf06005==_0x2366e7(0x159)?(_0x5eb4e4=await obtenerCedulaEncriptada(0x0,CryptoJS[_0x2366e7(0x14b)]['decrypt'](decodeURIComponent(localStorage['getItem'](_0x2366e7(0x151))),_0x2366e7(0x10b))[_0x2366e7(0x149)](CryptoJS[_0x2366e7(0x134)]['Utf8'])),console['log'](_0x5eb4e4)):_0x5eb4e4=_0x311b28;const _0x2f3bc1=await fetch(localStorage[_0x2366e7(0x14c)](_0x2366e7(0x132))+_0x2366e7(0x12c),{'method':_0x2366e7(0x131),'headers':{'Accept':_0x2366e7(0x114),'Content-Type':_0x2366e7(0x114)},'body':JSON[_0x2366e7(0x104)]({'cedula':_0x5eb4e4})}),_0x10310b=await _0x2f3bc1['json']();console['log'](_0x10310b);let _0x4d7cf7=CryptoJS[_0x2366e7(0x14b)][_0x2366e7(0x11e)](_0x10310b['cuidador'][_0x2366e7(0x144)],cajaNegra)[_0x2366e7(0x149)](CryptoJS['enc']['Utf8']),_0x2da1f1={'cedulaCuidador':_0x4d7cf7,'idCuidadorPaciente':_0x10310b[_0x2366e7(0x10f)]},_0x39d25f={'cedula':_0x5eb4e4},_0x266bce={'cuidadorInDto':_0x2da1f1,'pacienteInDto':_0x39d25f};await fetch(localStorage[_0x2366e7(0x14c)](_0x2366e7(0x132))+_0x2366e7(0x138),{'method':_0x2366e7(0x14f),'body':JSON['stringify'](_0x266bce),'headers':{'Accept':_0x2366e7(0x114),'Content-Type':_0x2366e7(0x114)}})['then'](_0x454721=>{const _0x251263=_0x2366e7;_0x454721['ok']&&((_0x454721['status']===0xc8||_0x454721[_0x251263(0x15e)]===0xcc)&&$(_0x251263(0x136))[_0x251263(0x109)](_0x251263(0x112)));});};function _0x4e5f(_0x2e5428,_0x3978e0){const _0x4c4fcf=_0x4c4f();return _0x4e5f=function(_0x4e5f56,_0x2dce40){_0x4e5f56=_0x4e5f56-0x101;let _0x4b652c=_0x4c4fcf[_0x4e5f56];return _0x4b652c;},_0x4e5f(_0x2e5428,_0x3978e0);}function _0x4c4f(){const _0x31806d=['add','medico','cuidador','#avisoModal','name','144639oeEOZZ','status','inhabilitar','/paciente/cuidador/listCuidadorPacienteByPaciente','3446040SIGwDA','stringify','error','reactivarCuidador','cedula_cuidador','getElementById','modal','descripcion','clave_secreta','paciente/ListParentesco','json','cambiar','idCuidadorPaciente','471280YyrjAy','88OjEOGV','show','includes','application/json','telefono','paciente/cuidador/crear','cedula','749PVTeGX','log','value','push','selectedIndex','map','decrypt','appendChild','catch','then','options','17541rptsjl','Utf8','gray','nuevo','idParentesco','submit','72032HhmoBB','datos','actCuid','paciente/cuidador/findCuidadorActivo','2ZsCEOR','nombre','16amIUkj','usuario','POST','servidorAPI','selectedParentesco','enc','parentesco','#successModal','values','paciente/cuidador/inhabilitarCuidadorActivo','address','parse','encrypt','innerText','length','grayscale(1)','from','option','40dTryps','GET','preventDefault','cedulaCuidador','disabled','addEventListener','filter','Seleccione...','toString','direccion','AES','getItem','paciente/cuidador/reactivarCuidador','textContent','PATCH','1182903zLzRqi','cedulaPaciente','activo','style','14658gWuAgY','forEach','background','createElement'];_0x4c4f=function(){return _0x31806d;};return _0x4c4f();}