// JavaScript source code]
//CSSに設定色　反映する関数
function changeBackColor() {
    //画面値の取得
    let r = document.getElementById('bgColorR').value;
    let g = document.getElementById('bgColorG').value;
    let b = document.getElementById('bgColorB').value;

    //CSSを変更
    let rgb = "rgb(" + r + "," + g + "," + b + ")";
    document.documentElement.style.setProperty('--main-bg-color', rgb);
}

//設定色を初期状態にリセットする関数
function resetBackColor() {
    //画面値を初期状態に
    document.getElementById('bgColorR').value = parseInt('ff', 16);
    document.getElementById('bgColorG').value = parseInt('57', 16);
    document.getElementById('bgColorB').value = parseInt('22', 16);

    changeBackColor();
}
