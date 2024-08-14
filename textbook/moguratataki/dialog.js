// JavaScript source code

var tentokun;

window.onload = function () {
    start();
}

function start() {
    tentokun = document.getElementById("gazo");

    tentokun.onclick = function () {
        alert("たたかれた");

    };
}
