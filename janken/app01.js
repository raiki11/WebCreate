/************************************
 ジャンケンゲームを作る（関数なし）
*************************************/


function GetRandom(max) {
    return Math.floor(Math.random() * max);
}

//＜ジャンケンの手の番号を設定＞
//＜「const」で変数宣言することで、define的な定数の使い方をする＞
//GUという変数を宣言、1を格納する
const GU = 1;
//CHOKIという変数を宣言、2を格納する
const CHOKI = 2;
//PAという変数を宣言、3を格納する
const PA = 3;
//＜ジャンケンの入力ダイアログボックスを表示＞
let hum = prompt('半角数字で1～3の数字を入力してください。\n\n' + GU + ':グー\n' + CHOKI + ':チョキ\n' + PA + ':パー'); //1:グー、2:チョキ、3:パーと、対応する変数と組み合わせて表示する。\nは改行コードなので、文字として扱う
hum = parseInt(hum,10);     //入力文字を整数に変換（第2引数は「基数」を設定。基数は2進数・16進数の数字のところをさす。ここでは10進数を指定する）

//＜入力値のチェック＞
//if文を使う。自分の入力した手が定数値と一致しなかった（入力値が不適切な）場合
if (hum < 1 || hum > 3) {
    alert('入力値をうまく認識できませんでした。ブラウザを再読み込みすると、もう一度挑戦できます');  //アラートで再読み込みの文章を表示
}
//elseで、自分の入力した手が適切だった場合の処理を行う↓
else {
    //コンピュータの手を決める
    //変数「com」を宣言。Math.randomに最大数をかける→Math.floorで整数値を返す（小数点を出さないようにする）。+1で、1～3の整数を決める。値を直接「com」に代入する。
    var com = GetRandom(3) + 1;
}


//＜コンピュータの手の名前＞
//コンピュータの手を文字列として格納する変数「comHandName」を宣言。初期化のために0を代入
var comHandName = 0;
//switch文で、コンピュータの手を判定する
switch (com) {
    //GUならグーの文字列をcomHandNameに格納
    case 1:
        comHandName = 'グー';
        break;
    //CHOKIならチョキの文字列をcomHandNameに格納
    case 2:
        comHandName = 'チョキ';
        break;

    //PAならパーの文字列をcomHandNameに格納
    case 3:
        comHandName = 'パー';
        break;

}

   
//＜結果の判定＞
//結果（勝敗）を格納する変数「msgResult」を宣言。初期化のために0を代入
var msgResult = 0;
//if文での判定。人間とコンピュータの手が一緒なら…
if (com == hum) {
    msgResult = '結果は「あいこ」。';        //結果の変数にあいこの文字列を格納
}
//else if文で、自分の手がコンピュータに勝つパターンなら…
else if (hum == GU && com == CHOKI || hum == CHOKI && com == PA || hum == PA && com == GU) {
    msgResult = '勝ったぞ、やったね';        //結果の変数に勝ったという文字列を格納
}
//上記のどれでもなかったら…
else {
    msgResult = '負けた、ズコー';            //結果の変数に負けたという文字列を格納
}
    

//＜最終的な結果の表示＞
msgResult = msgResult + 'コンピュータの出した手は「' + comHandName + '」だったよ';  //msgResult変数に、msgResult+コンピュータの出した手をcomHandNameと組み合わせて格納する
alert(msgResult);   //アラートで、msgResultを表示させる