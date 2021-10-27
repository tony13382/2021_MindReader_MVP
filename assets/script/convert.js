//document.getElementById('ans_div').innerHTML = outputInfo;
const requestCon = new XMLHttpRequest();
requestCon.onload = function () {
    if (requestCon.status >= 200 && requestCon.status < 400) {
        //console.log(request.responseText);
        const response = requestCon.responseText;
        const json = JSON.parse(response);
        //console.log(json)
        printData(getConvertData(json).value)
    }
    else {
        console.log('err');
    }
}



requestCon.onerror = function () {
    console.log('error')
}

function mrConvertSentence(word) {
    let strings = word; 
    if (strings.replace(/(^s*)|(s*$)/g, "").length ==0) 
    { 
        document.getElementById("ans_div").innerHTML = '<div class="align-items-center"><div class="d-flex row pt-2 justify-content-center"><img src="assets/images/error.gif" style="max-width: 200px;"></div><p class="text-center font-weight-bolder">你輸入的資訊可能有誤，請確認一下</p></div>';
    }
    else {
        let apiUrl = 'http://127.0.0.1:5000'
        apiUrl = document.getElementById('apiUrlInput').value
        let out = apiUrl + '/?oSentence=' + word
        requestCon.open('post', out, true)
        requestCon.send()
    }
}
function getConvertData(json) {
    //console.log({'func':'convert','value':outputInfo});
    return {'func':'convert','value':json}
}

function MR_convertWord(inputString,mode) {
    let outputValue = ['$MR NeedWait']
    mrConvertSentence(inputString)
}

function showValue() {
    outputValue = getConvertData().value
    console.log(inputString + " -CV-> " + outputValue);
    return outputValue;
}