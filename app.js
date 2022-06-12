var btnTranslate=document.querySelector(".btn");

var txtInput=document.querySelector(".text-area");

var outputDiv=document.querySelector(".output-div");

var serverURL="https://api.funtranslations.com/translate/minion.json";
function getserverURL(text)
{
    return serverURL+"?"+"text="+text;
}

function clickEventHandler(){

    fetch(getserverURL(txtInput.value)).then(response => response.json()).then(json => outputDiv.innerText=json.contents.translated);
}

btnTranslate.addEventListener("click", clickEventHandler);