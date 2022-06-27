document.getElementById("callCordova").addEventListener("click", callCordova);

function callCordova() {
    cordova.exec(success,null,"WICIPlugin","coolMethod",["Hello, world from plugin"]);
} 

function success(result){
    alert(result);        
}