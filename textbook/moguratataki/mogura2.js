// mogura.js
var tento1;
var tento2;
var tento3;
var hyoji;
var botan;
var tensu = 0;
var saiko = 0;
var gameover = false;
var lastspurt = false;

window.onload = function () {
    start();
}

function start() {
    tento1 = document.getElementById('gazo1');
    tento2 = document.getElementById('gazo2');
    tento3 = document.getElementById('gazo3');
    hyoji = document.getElementById('ten');
    botan = document.getElementById('start');
    tento1.onclick = function () {
        click(tento1); // 左のプログラムがクリックされたとき
    }
    tento2.onclick = function () {
        click(tento2); // 真ん中のプログラムがクリックされたとき
    }
    tento3.onclick = function () {
        click(tento3); // 右のプログラムがクリックされたとき
    }
    botan.onclick = function () {
        gameover = false;
        lastspurt = false;
        tensu = 0;
        hyoji.innerHTML = tensu;
        start();
    }
    var ransu3 = Math.random() * 3;
    setTimeout(kesu1, ransu3 * 1000); // 左のプログラムが消えるタイマー
    setTimeout(kesu2, ransu3 * 1000); // 真ん中のプログラムが消えるタイマー
    setTimeout(kesu3, ransu3 * 1000); // 右のプログラムが消えるタイマー
    setTimeout(stop, 60000); // ゲーム終了タイマー
    setTimeout(nokori10, 50000); // 残り10秒タイマー
}

function click(gazou) {
    if (gazou.src == "naki.png") {
        gazou.src = "naku.png"; // プログラムがクリックされたときの変化
    }
    setTimeout(function () {
        modosu(gazou);
    }, 1000); // クリックされたプログラムが元に戻るタイマー
    tensu = tensu + 1;
    hyoji.innerHTML = tensu;
}

function nokori10() {
    alert("あと、10秒だよ！");
    lastspurt = true;
}

function kesu(gazou) {
    gazou.style.visibility = "hidden"; // プログラムが見えなくなる
    var ransu = Math.random() * 3;
    if (lastspurt == true) {
        setTimeout(function () {
            dasu(gazou, 1); // ラストスパート時の最短タイマー
        }, ransu * 1000);
    } else {
        setTimeout(function () {
            dasu(gazou, 3); // 通常時の最長タイマー
        }, ransu * 1000);
    }
}

function kesu1() {
    kesu(tento1); // 左のプログラムを消す
}

function kesu2() {
    kesu(tento2); // 真ん中のプログラムを消す
}

function kesu3() {
    kesu(tento3); // 右のプログラムを消す
}

function dasu(gazou, timer) {
    if (gameover == false) {
        gazou.style.visibility = "visible"; // プログラムが表示される
        var ransu = Math.random() * timer;
        setTimeout(function () {
            kesu(gazou);
        }, ransu * 1000); // 次にプログラムが消えるタイマー
    }
}

function modosu(gazou) {
    gazou.src = "tento.png"; // プログラムが最初の状態に戻る
}

function stop() {
    alert("ゲームオーバー！");
    gameover = true;
    tento1.style.visibility = "hidden";
    tento2.style.visibility = "hidden";
    tento3.style.visibility = "hidden";
    if (tensu > saiko) {
        saiko = tensu;
        kiroku = document.getElementById('saiko');
        kiroku.innerHTML = saiko;
    }
}
