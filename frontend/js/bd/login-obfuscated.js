const _0x3101ec=_0x3d16;function _0x5006(){const _0x1b00b4=['value','cambiarContrasenia.html','classList','administrador','querySelector','31078WMtHfI','servidorAPI','administrador.html','clear','cambiado','includes','noAuthenticated','#errorDatosModal','password','true','datos','json','log-in','decrypt','.toggle-password','Medico/findAllPacientes','cedulaPacienteEditar','pathname','type','clave_secreta','contrasenia','location','removeItem','getItem','login.html','1150782RIAaoL','Utf8','admin','toString','preventDefault','GET','tipoUsuario','1075800CMePDO','enc','511838nbNHgj','Usuario/findAdmin','href','cedula','activo','fa-eye-slash','setItem','getElementById','index.html','usuario','remove','medico','Medico/findAll','add','disabled','authenticated','/misaludrenalbackend/','1288HBMdxO','forEach','documento','810AZXCCC','status','log','application/json','paciente','stringify','AES','fa-eye','username','principal.html','243424vYtccr','2726696oXnbAK'];_0x5006=function(){return _0x1b00b4;};return _0x5006();}(function(_0x323e54,_0x4aab4){const _0x57623c=_0x3d16,_0x8c764=_0x323e54();while(!![]){try{const _0x45a11e=-parseInt(_0x57623c(0x216))/0x1+-parseInt(_0x57623c(0x1f1))/0x2+parseInt(_0x57623c(0x1e8))/0x3+parseInt(_0x57623c(0x202))/0x4*(-parseInt(_0x57623c(0x205))/0x5)+-parseInt(_0x57623c(0x1ef))/0x6+parseInt(_0x57623c(0x210))/0x7+-parseInt(_0x57623c(0x20f))/0x8;if(_0x45a11e===_0x4aab4)break;else _0x8c764['push'](_0x8c764['shift']());}catch(_0x51b598){_0x8c764['push'](_0x8c764['shift']());}}}(_0x5006,0x36be9));let servidorAPI=_0x3101ec(0x201),cajaNegra='clave_secreta';function isAuthenticated(){const _0xda94d0=_0x3101ec;return localStorage[_0xda94d0(0x1e6)](_0xda94d0(0x200))===_0xda94d0(0x21f);}function _0x3d16(_0x22b6cb,_0x1f455c){const _0x5006d8=_0x5006();return _0x3d16=function(_0x3d1696,_0x4fe07b){_0x3d1696=_0x3d1696-0x1e6;let _0x3e1eed=_0x5006d8[_0x3d1696];return _0x3e1eed;},_0x3d16(_0x22b6cb,_0x1f455c);}let login=async _0x235bb2=>{const _0xd761a7=_0x3101ec;let _0x36da62=![];_0x235bb2[_0xd761a7(0x1ec)](),document[_0xd761a7(0x1f8)](_0xd761a7(0x222))['disabled']=!![];const _0x2394e4=await fetch(servidorAPI+_0xd761a7(0x1f2),{'method':'GET','headers':{'Accept':_0xd761a7(0x208),'Content-Type':_0xd761a7(0x208)}}),_0x225ff4=document[_0xd761a7(0x1f8)](_0xd761a7(0x20d))[_0xd761a7(0x211)],_0xaf8b58=document[_0xd761a7(0x1f8)](_0xd761a7(0x21e))[_0xd761a7(0x211)];if(_0x2394e4[_0xd761a7(0x206)]!=0xcc){const _0x1c0687=await _0x2394e4[_0xd761a7(0x221)]();console[_0xd761a7(0x207)](_0x1c0687),_0x1c0687['forEach'](_0x1738b7=>{const _0x54327f=_0xd761a7;if(_0x225ff4===CryptoJS[_0x54327f(0x20b)][_0x54327f(0x223)](_0x1738b7[_0x54327f(0x1f4)],'clave_secreta')['toString'](CryptoJS[_0x54327f(0x1f0)][_0x54327f(0x1e9)])&&_0xaf8b58===CryptoJS[_0x54327f(0x20b)][_0x54327f(0x223)](_0x1738b7[_0x54327f(0x22a)],_0x54327f(0x229))['toString'](CryptoJS['enc'][_0x54327f(0x1e9)])&&_0x1738b7[_0x54327f(0x1ee)]===_0x54327f(0x1ea)){localStorage[_0x54327f(0x1f7)]('authenticated',_0x54327f(0x21f));const _0x46e522=encodeURIComponent(_0x1738b7[_0x54327f(0x1f4)]);let _0x3c60ca=_0x54327f(0x214);datos={'cedula':_0x46e522,'usuario':_0x3c60ca};const _0x526317=JSON[_0x54327f(0x20a)](datos);localStorage[_0x54327f(0x1f7)](_0x54327f(0x220),_0x526317),localStorage['setItem'](_0x54327f(0x217),servidorAPI),location[_0x54327f(0x1f3)]=_0x54327f(0x218),_0x36da62=!![];return;}});if(_0x36da62==!![])return;}let _0xe2238f=null,_0xeba6bd=null;console[_0xd761a7(0x207)](servidorAPI+_0xd761a7(0x225));const _0x3739d1=await fetch(servidorAPI+_0xd761a7(0x225),{'method':_0xd761a7(0x1ed),'headers':{'Accept':_0xd761a7(0x208),'Content-Type':_0xd761a7(0x208)}}),_0x43e872=await _0x3739d1[_0xd761a7(0x221)]();console[_0xd761a7(0x207)](_0x43e872);const _0x3b48f9=await fetch(servidorAPI+_0xd761a7(0x1fd),{'method':'GET','headers':{'Accept':_0xd761a7(0x208),'Content-Type':_0xd761a7(0x208)}}),_0x1776bc=await _0x3b48f9[_0xd761a7(0x221)]();console[_0xd761a7(0x207)](_0x1776bc);let _0x4a7caf=![],_0x6b5446=![];_0x43e872[_0xd761a7(0x203)](async _0x198843=>{const _0x31f2c1=_0xd761a7;if(_0x198843['activo']==!![]){_0xe2238f=CryptoJS['AES'][_0x31f2c1(0x223)](_0x198843[_0x31f2c1(0x1f4)],cajaNegra)[_0x31f2c1(0x1eb)](CryptoJS[_0x31f2c1(0x1f0)][_0x31f2c1(0x1e9)]),console[_0x31f2c1(0x207)](_0xe2238f),_0xeba6bd=CryptoJS[_0x31f2c1(0x20b)]['decrypt'](_0x198843[_0x31f2c1(0x22a)],cajaNegra)[_0x31f2c1(0x1eb)](CryptoJS[_0x31f2c1(0x1f0)]['Utf8']),console['log'](_0xeba6bd),console[_0x31f2c1(0x207)](_0x225ff4===_0xe2238f&&_0xaf8b58===_0xeba6bd);if(_0x225ff4===_0xe2238f&&_0xaf8b58===_0xeba6bd){localStorage[_0x31f2c1(0x1f7)](_0x31f2c1(0x200),_0x31f2c1(0x21f));const _0x20dc7f=encodeURIComponent(_0x198843[_0x31f2c1(0x1f4)]);let _0x266ca1=_0x31f2c1(0x209);datos={'cedula':_0x20dc7f,'usuario':_0x266ca1};const _0x50b346=JSON[_0x31f2c1(0x20a)](datos);localStorage['setItem'](_0x31f2c1(0x220),_0x50b346),localStorage[_0x31f2c1(0x1f7)](_0x31f2c1(0x217),servidorAPI),console['log'](localStorage[_0x31f2c1(0x1f7)](_0x31f2c1(0x220),_0x50b346));let _0x2745=_0x198843['cambioContrasenia'];return localStorage[_0x31f2c1(0x1f7)](_0x31f2c1(0x21a),_0x2745),console['log'](_0x2745),!_0x2745?(location[_0x31f2c1(0x1f3)]=_0x31f2c1(0x212),_0x4a7caf=!![],_0x2745):(location[_0x31f2c1(0x1f3)]='principal.html',_0x4a7caf=!![],_0x2745);}}}),!_0x4a7caf&&_0x1776bc[_0xd761a7(0x203)](_0x70a81e=>{const _0x459cfd=_0xd761a7;if(_0x70a81e[_0x459cfd(0x1f5)]==!![]){_0xe2238f=CryptoJS[_0x459cfd(0x20b)][_0x459cfd(0x223)](_0x70a81e[_0x459cfd(0x1f4)],cajaNegra)[_0x459cfd(0x1eb)](CryptoJS['enc'][_0x459cfd(0x1e9)]),console[_0x459cfd(0x207)](_0xe2238f),_0xeba6bd=CryptoJS['AES']['decrypt'](_0x70a81e[_0x459cfd(0x22a)],cajaNegra)['toString'](CryptoJS[_0x459cfd(0x1f0)][_0x459cfd(0x1e9)]),console['log'](_0xeba6bd);if(_0x225ff4===_0xe2238f&&_0xaf8b58===_0xeba6bd){localStorage[_0x459cfd(0x1f7)]('authenticated','true');const _0x539681=encodeURIComponent(_0x70a81e[_0x459cfd(0x1f4)]);let _0x55d745=_0x459cfd(0x1fc);datos={'cedula':_0x539681,'usuario':_0x55d745};const _0x369a72=JSON[_0x459cfd(0x20a)](datos);return localStorage[_0x459cfd(0x1f7)](_0x459cfd(0x220),_0x369a72),console['log'](_0x369a72),localStorage[_0x459cfd(0x1f7)](_0x459cfd(0x217),servidorAPI),location[_0x459cfd(0x1f3)]='pacientes.html',_0x6b5446=!![],_0x225ff4;}}}),!_0x4a7caf&&!_0x6b5446&&($(_0xd761a7(0x21d))['modal']('show'),document['getElementById']('log-in')[_0xd761a7(0x1ff)]=![]);},logout=()=>{const _0x4ee4c5=_0x3101ec;localStorage['removeItem'](_0x4ee4c5(0x200)),localStorage[_0x4ee4c5(0x22c)](_0x4ee4c5(0x217)),localStorage[_0x4ee4c5(0x22c)](_0x4ee4c5(0x220)),localStorage[_0x4ee4c5(0x22c)]('cedulaPaciente'),localStorage[_0x4ee4c5(0x22c)]('url'),localStorage[_0x4ee4c5(0x22c)](_0x4ee4c5(0x204)),localStorage[_0x4ee4c5(0x22c)](_0x4ee4c5(0x226)),localStorage[_0x4ee4c5(0x219)](),location['href']=_0x4ee4c5(0x1e7);},onload=async()=>{const _0x5899f7=_0x3101ec;let _0x2f126b=window[_0x5899f7(0x22b)][_0x5899f7(0x227)];if(isAuthenticated()){let _0x97ca81=localStorage[_0x5899f7(0x1e6)](_0x5899f7(0x220)),_0x80455e=JSON['parse'](_0x97ca81);console['log'](_0x97ca81);let _0x53b87c=_0x80455e[_0x5899f7(0x1fa)];(_0x2f126b[_0x5899f7(0x21b)]('login.html')||_0x2f126b[_0x5899f7(0x21b)](_0x5899f7(0x1f9)))&&(_0x53b87c==_0x5899f7(0x1fc)?location[_0x5899f7(0x1f3)]='pacientes.html':_0x53b87c==_0x5899f7(0x214)?location[_0x5899f7(0x1f3)]='administrador.html':localStorage['getItem'](_0x5899f7(0x21a))==_0x5899f7(0x21f)?location[_0x5899f7(0x1f3)]=_0x5899f7(0x20e):location[_0x5899f7(0x1f3)]='cambiarContrasenia.html');}else console[_0x5899f7(0x207)](_0x5899f7(0x21c)),!_0x2f126b['includes']('login.html')&&(location[_0x5899f7(0x1f3)]=_0x5899f7(0x1e7));};function passwordVisibility(){const _0x56d02b=_0x3101ec;var _0x1f3dd5=document[_0x56d02b(0x1f8)](_0x56d02b(0x21e)),_0x98d324=document[_0x56d02b(0x215)](_0x56d02b(0x224));_0x1f3dd5[_0x56d02b(0x228)]===_0x56d02b(0x21e)?(_0x1f3dd5[_0x56d02b(0x228)]='text',_0x98d324[_0x56d02b(0x213)][_0x56d02b(0x1fb)](_0x56d02b(0x20c)),_0x98d324['classList'][_0x56d02b(0x1fe)](_0x56d02b(0x1f6))):(_0x1f3dd5['type']=_0x56d02b(0x21e),_0x98d324[_0x56d02b(0x213)][_0x56d02b(0x1fb)](_0x56d02b(0x1f6)),_0x98d324['classList'][_0x56d02b(0x1fe)]('fa-eye'));}