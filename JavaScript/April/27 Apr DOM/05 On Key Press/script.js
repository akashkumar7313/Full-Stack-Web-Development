let inputBox = document.getElementById('input-box');
let display = document.getElementById('display');

inputBox.addEventListener("keypress", function (e){
    display.innerText = "You have Pressed " + e.key;
})