const request = new XMLHttpRequest();
request.onload = function () {
	if (request.status >= 200 && request.status < 400) {
		console.log(request.responseText);
		const response = request.responseText;
    	const json = JSON.parse(response);
	}
	else {
		console.log('err');
	}
}


request.onerror = function () {
	console.log('error')
}

function convert()
request.open('post', 'http://127.0.0.1:5000/?oSentence=我現在沒空欸，你能自己搭車嗎?', true)
request.send()