(function(_0x28117c,_0x2a462a){const _0x34f3c3=_0xde6e,_0x24ed19=_0x28117c();while(!![]){try{const _0x19f2d0=-parseInt(_0x34f3c3(0xe0))/0x1*(-parseInt(_0x34f3c3(0xdf))/0x2)+parseInt(_0x34f3c3(0xce))/0x3*(parseInt(_0x34f3c3(0xcc))/0x4)+parseInt(_0x34f3c3(0xca))/0x5+-parseInt(_0x34f3c3(0xd3))/0x6+parseInt(_0x34f3c3(0xcd))/0x7+parseInt(_0x34f3c3(0xc8))/0x8+parseInt(_0x34f3c3(0xc4))/0x9*(-parseInt(_0x34f3c3(0xc3))/0xa);if(_0x19f2d0===_0x2a462a)break;else _0x24ed19['push'](_0x24ed19['shift']());}catch(_0x161a88){_0x24ed19['push'](_0x24ed19['shift']());}}}(_0x34a4,0x2ecfc));function _0x34a4(){const _0x58c32f=['error','application/json','enc','administrador','cedula','token','46152MDDtng','3eMMqHe','nombre','usuario','120TkjNrl','158787QbIrUv','Usuario/cedula','json','Utf8','158024CgrBxA','AES','959895jjwLGh','getItem','556nGDsNG','376754BGiUtT','3306TnSaiC','datos','pad','servidorAPI','mode','507024OEWmoi','textContent','parse','stringify','nombreUsuario','getElementById'];_0x34a4=function(){return _0x58c32f;};return _0x34a4();}let nombreNavBar=async()=>{const _0x19c475=_0xde6e;await obtenerClave(),await obtenerIv();let _0x4e3d9b=localStorage[_0x19c475(0xcb)](_0x19c475(0xcf)),_0xf89df8=JSON[_0x19c475(0xd5)](_0x4e3d9b),_0x20cbe6=_0xf89df8[_0x19c475(0xc2)],_0xc483af=_0xf89df8[_0x19c475(0xdd)],_0x3c6607=_0xf89df8['contrasenia'];const _0x2413f7=_0xc483af;if(_0x20cbe6=='medico'||_0x20cbe6==_0x19c475(0xdc)){let _0x1477f5={'cedula':_0x2413f7,'contrasenia':_0x3c6607};try{const _0x56dcb9=await fetch(localStorage[_0x19c475(0xcb)](_0x19c475(0xd1))+_0x19c475(0xc5),{'method':'POST','body':JSON[_0x19c475(0xd6)](_0x1477f5),'headers':{'Accept':_0x19c475(0xda),'Content-Type':_0x19c475(0xda),'Authorization':_0xf89df8[_0x19c475(0xde)]}});if(_0x56dcb9['ok']){const _0x1c99db=await _0x56dcb9[_0x19c475(0xc6)]();let _0x5039e7=decodeURIComponent(CryptoJS[_0x19c475(0xc9)]['decrypt'](_0x1c99db[_0x19c475(0xc1)],CryptoJS[_0x19c475(0xdb)]['Utf8']['parse'](cajaNegra2),{'iv':CryptoJS['enc'][_0x19c475(0xc7)][_0x19c475(0xd5)](iv),'mode':CryptoJS[_0x19c475(0xd2)]['CBC'],'padding':CryptoJS[_0x19c475(0xd0)]['Pkcs7']})['toString'](CryptoJS[_0x19c475(0xdb)][_0x19c475(0xc7)]));actualizarNombreEnNavbar(_0x5039e7);}}catch(_0x1b8b02){console[_0x19c475(0xd9)](_0x1b8b02);}}};function _0xde6e(_0x1449d4,_0x1f4972){const _0x34a45f=_0x34a4();return _0xde6e=function(_0xde6e34,_0x3e2859){_0xde6e34=_0xde6e34-0xc1;let _0x3cfdac=_0x34a45f[_0xde6e34];return _0x3cfdac;},_0xde6e(_0x1449d4,_0x1f4972);}function actualizarNombreEnNavbar(_0x28ee31){const _0x50af29=_0xde6e;document[_0x50af29(0xd8)](_0x50af29(0xd7))[_0x50af29(0xd4)]=_0x28ee31;}