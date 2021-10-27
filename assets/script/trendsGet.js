const request = new XMLHttpRequest();
let tgOutput = []

request.onload = function () {
	if (request.status >= 200 && request.status < 400) {
		//console.log(request.responseText);
		const response = request.responseText;
    	const json = JSON.parse(response);
		tgOutput.push(json)
	}
	else {
		console.log('err');
	}
}


request.onerror = function () {
	console.log('error')
}

let apiUrl = 'http://127.0.0.1:5000'
apiUrl = document.getElementById('apiUrlInput').value
request.open('GET', apiUrl+'/recommend', true)
request.send()

function getTrendSentence(type){
    let getArray = [{'sentence':'sentence01','keyword': 'kw01'},{'sentence':'sentence02','keyword': 'kw02'},{'sentence':'sentence03','keyword': 'kw03'}];
	//console.log(tgOutput);
	for(let i =0; i<tgOutput.length; i++){
		getArray = tgOutput[i]['value']
	}
	//console.log(getArray);
    if(type == '$MrTest') {
        getArray = ['$MrErrorNull'];
    }
    return getArray;
}
