function _0x27f3(_0x5633af,_0x101112){const _0x50279e=_0x5027();return _0x27f3=function(_0x27f3c9,_0x123bc5){_0x27f3c9=_0x27f3c9-0xa1;let _0x128ccb=_0x50279e[_0x27f3c9];return _0x128ccb;},_0x27f3(_0x5633af,_0x101112);}function _0x5027(){const _0x4fe69e=['usuario','POST','500NbEKvS','71036iWiwQR','380YeZQaZ','AES','enc','getItem','error','json','medico','8325mdwmcQ','1750716NWCcAz','22128IZJHwZ','nombre','8428610xiifQM','textContent','cedula','152HUgfDm','20rQzKqE','application/json','11eWWmbJ','administrador','getElementById','9667utVhLj','toString','log','nombreUsuario','servidorAPI','13956696uZXIbV','decrypt','datos'];_0x5027=function(){return _0x4fe69e;};return _0x5027();}(function(_0x2f50b3,_0x282a68){const _0x5d5241=_0x27f3,_0x6193a8=_0x2f50b3();while(!![]){try{const _0x25d716=parseInt(_0x5d5241(0xc0))/0x1*(parseInt(_0x5d5241(0xb0))/0x2)+-parseInt(_0x5d5241(0xb8))/0x3*(-parseInt(_0x5d5241(0xb1))/0x4)+-parseInt(_0x5d5241(0xaf))/0x5*(parseInt(_0x5d5241(0xba))/0x6)+parseInt(_0x5d5241(0xa5))/0x7*(-parseInt(_0x5d5241(0xbf))/0x8)+parseInt(_0x5d5241(0xb9))/0x9+-parseInt(_0x5d5241(0xbc))/0xa*(-parseInt(_0x5d5241(0xa2))/0xb)+-parseInt(_0x5d5241(0xaa))/0xc;if(_0x25d716===_0x282a68)break;else _0x6193a8['push'](_0x6193a8['shift']());}catch(_0x7afffe){_0x6193a8['push'](_0x6193a8['shift']());}}}(_0x5027,0x6ea99));let nombreNavBar=async()=>{const _0xf14da8=_0x27f3;let _0x36996b=localStorage[_0xf14da8(0xb4)](_0xf14da8(0xac)),_0xa7844e=JSON['parse'](_0x36996b);console[_0xf14da8(0xa7)](_0xa7844e);let _0x319e34=_0xa7844e[_0xf14da8(0xad)],_0x282e74=decodeURIComponent(_0xa7844e[_0xf14da8(0xbe)]);const _0x42cf3c=decodeURIComponent(_0x282e74);console[_0xf14da8(0xa7)](_0x42cf3c);if(_0x319e34==_0xf14da8(0xb7)||_0x319e34==_0xf14da8(0xa3)){let _0x3a4de6={'cedula':_0x42cf3c};console[_0xf14da8(0xa7)](_0x3a4de6);try{const _0x122b44=await fetch(localStorage[_0xf14da8(0xb4)](_0xf14da8(0xa9))+'Usuario/cedula',{'method':_0xf14da8(0xae),'body':JSON['stringify'](_0x3a4de6),'headers':{'Accept':_0xf14da8(0xa1),'Content-Type':_0xf14da8(0xa1)}});if(_0x122b44['ok']){const _0x3803fe=await _0x122b44[_0xf14da8(0xb6)]();console[_0xf14da8(0xa7)](_0x3803fe);const _0x57a65f=_0x3803fe[_0xf14da8(0xbb)];nombreDecrypt=CryptoJS[_0xf14da8(0xb2)][_0xf14da8(0xab)](_0x57a65f,cajaNegra)[_0xf14da8(0xa6)](CryptoJS[_0xf14da8(0xb3)]['Utf8']),actualizarNombreEnNavbar(nombreDecrypt);}}catch(_0x8f3001){console[_0xf14da8(0xb5)](_0x8f3001);}}};function actualizarNombreEnNavbar(_0x4dbebe){const _0x1c53aa=_0x27f3;document[_0x1c53aa(0xa4)](_0x1c53aa(0xa8))[_0x1c53aa(0xbd)]=_0x4dbebe;}