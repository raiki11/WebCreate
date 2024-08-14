// JavaScript source code

var mouse;

window.onload = function () {
    ite();
}

function ite() {
    mouse = document.getElementById("moji");
    mouse.onclick = function () {
        mouse.innerHTML = "あんまりカチカチするなー！！";
    };
}