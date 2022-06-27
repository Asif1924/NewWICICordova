document.getElementById("callCordova").addEventListener("click", callCordova);
document.getElementById("vibrate").addEventListener("click", vibrate);
document.getElementById("deviceInfo").addEventListener("click", getDeviceInfo);

function callCordova() {
    cordova.exec(success,null,"WICIPlugin","coolMethod",["Hello, world from plugin"]);
} 

function vibrate() {
    navigator.vibrate([10000]);
} 

function getDeviceInfo() {
    alert("device.serial=" + device.serial + "\ndevice.model=" + device.model);
} 


function success(result){
    alert(result);        
}