// JavaScript source code
class App {
    //コンストラクタ
    constructor() {
        this.eventHandlers = []; //イベントハンドラー管理用
        this.intervals = [];    //インターバル管理用

        //ページがロードが完了したとき。タイトル画面を描画する関数を実行する
        window.addEventListener('load', () => {
            this.title();
        });
    }


    /////////////////////////////////////////////////////

    //[1]を[01]にしてくれる関数
    twoDigit(num) {
        return num < 10 ? `0${num}` : num.toString();
    }

    
    /////////////////////////////////////////////////////

    //タイトル
    title() {
        //全てのイベントハンドラーを解除（この関数の前に実行された関数でリスナーされたイベントのハンドラーはすべて不要なため）
       if (this.eventHandlers.length) {
            for (let i = 0; i < this.eventHandlers.length; i++) {
                if (this.eventHandlers[i]) document.removeEventListener(this.eventHandlers[i].typeName, this.eventHandlers[i].callback);
            }
            this.eventHandlers = [];
        }

        //UIを構築し描画
        let TitleElement = `<div class="title"><h1>タイピングゲーム</h1><button onclick="app.playTypingGame();">ゲーム開始</button></div>`;
        let containerElement = `<div class="container">${TitleElement}</div>`;
        let mainElement = `<main>${containerElement}</main>`;


        document.querySelector('body').innerHTML = mainElement;

        return true;
    }

    //タイピングゲームを準備（Enterキーが押されたらゲームの初期化とか開始を行う）
    playTypingGame() {
        //タイピングゲームのデータがない場合、出題データファイルをフェッチして自分をコールバックする
        if (!this.TypingGame_data) {
            this.TypingGame_data = {
                questionContents: [
                    {
                        "string": "吾輩は猫である",
                        "characters": [
                            {
                                "text": "吾",
                                "hiragana": "わが",
                                "katakana": "ワガ",
                                "romaji": "waga"
                            },
                            {
                                "text": "輩",
                                "hiragana": "はい",
                                "katakana": "ハイ",
                                "romaji": "hai"
                            },
                            {
                                "text": "は",
                                "hiragana": "は",
                                "katakana": "ハ",
                                "romaji": "ha"
                            },
                            {
                                "text": "猫",
                                "hiragana": "ねこ",
                                "katakana": "ネコ",
                                "romaji": "neko"
                            },
                            {
                                "text": "で",
                                "hiragana": "で",
                                "katakana": "デ",
                                "romaji": "de"
                            },
                            {
                                "text": "あ",
                                "hiragana": "あ",
                                "katakana": "ア",
                                "romaji": "a"
                            },
                            {
                                "text": "る",
                                "hiragana": "る",
                                "katakana": "ル",
                                "romaji": "ru"
                            }
                        ]
                    },
                    {
                        "string": "雨ニモマケズ風ニモマケズ",
                        "characters": [
                            {
                                "text": "雨",
                                "hiragana": "あめ",
                                "katakana": "アメ",
                                "romaji": "ame"
                            },
                            {
                                "text": "ニ",
                                "hiragana": "に",
                                "katakana": "ニ",
                                "romaji": "ni"
                            },
                            {
                                "text": "モ",
                                "hiragana": "も",
                                "katakana": "モ",
                                "romaji": "mo"
                            },
                            {
                                "text": "マ",
                                "hiragana": "ま",
                                "katakana": "マ",
                                "romaji": "ma"
                            },
                            {
                                "text": "ケ",
                                "hiragana": "け",
                                "katakana": "ケ",
                                "romaji": "ke"
                            },
                            {
                                "text": "ズ",
                                "hiragana": "ず",
                                "katakana": "ズ",
                                "romaji": "zu"
                            },
                            {
                                "text": "風",
                                "hiragana": "かぜ",
                                "katakana": "カゼ",
                                "romaji": "kaze"
                            },
                            {
                                "text": "ニ",
                                "hiragana": "に",
                                "katakana": "ニ",
                                "romaji": "ni"
                            },
                            {
                                "text": "モ",
                                "hiragana": "も",
                                "katakana": "モ",
                                "romaji": "mo"
                            },
                            {
                                "text": "マ",
                                "hiragana": "ま",
                                "katakana": "マ",
                                "romaji": "ma"
                            },
                            {
                                "text": "ケ",
                                "hiragana": "け",
                                "katakana": "ケ",
                                "romaji": "ke"
                            },
                            {
                                "text": "ズ",
                                "hiragana": "ず",
                                "katakana": "ズ",
                                "romaji": "zu"
                            }
                        ]
                    },
                    {
                        "string": "こんにちは、世界！",
                        "characters": [
                            {
                                "text": "こ",
                                "hiragana": "こ",
                                "katakana": "",
                                "romaji": "ko"
                            },
                            {
                                "text": "ん",
                                "hiragana": "ん",
                                "katakana": "",
                                "romaji": "nn"
                            },
                            {
                                "text": "に",
                                "hiragana": "に",
                                "katakana": "",
                                "romaji": "ni"
                            },
                            {
                                "text": "ち",
                                "hiragana": "ち",
                                "katakana": "",
                                "romaji": "ti"
                            },
                            {
                                "text": "は",
                                "hiragana": "は",
                                "katakana": "ハ",
                                "romaji": "ha"
                            },
                            {
                                "text": "、",
                                "hiragana": "、",
                                "katakana": "",
                                "romaji": ","
                            },
                            {
                                "text": "世",
                                "hiragana": "せ",
                                "katakana": "",
                                "romaji": "se"
                            },
                            {
                                "text": "界",
                                "hiragana": "かい",
                                "katakana": "",
                                "romaji": "kai"
                            },
                            {
                                "text": "！",
                                "hiragana": "！",
                                "katakana": "！",
                                "romaji": "!"
                            }
                        ]
                    },
                    {
                        "string": "早起きは三文の徳",
                        "characters": [
                            {
                                "text": "早",
                                "hiragana": "はや",
                                "katakana": "ハヤ",
                                "romaji": "haya"
                            },
                            {
                                "text": "起",
                                "hiragana": "お",
                                "katakana": "オ",
                                "romaji": "o"
                            },
                            {
                                "text": "き",
                                "hiragana": "き",
                                "katakana": "キ",
                                "romaji": "ki"
                            },
                            {
                                "text": "は",
                                "hiragana": "は",
                                "katakana": "ハ",
                                "romaji": "ha"
                            },
                            {
                                "text": "三",
                                "hiragana": "さん",
                                "katakana": "サン",
                                "romaji": "sann"
                            },
                            {
                                "text": "文",
                                "hiragana": "もん",
                                "katakana": "モン",
                                "romaji": "monn"
                            },
                            {
                                "text": "の",
                                "hiragana": "の",
                                "katakana": "ノ",
                                "romaji": "no"
                            },
                            {
                                "text": "徳",
                                "hiragana": "とく",
                                "katakana": "トク",
                                "romaji": "toku"
                            }
                        ]
                    },
                    {
                        "string": "こんにちは、今日はいい天気ですね",
                        "characters": [
                            {
                                "text": "こ",
                                "hiragana": "こ",
                                "katakana": "",
                                "romaji": "ko"
                            },
                            {
                                "text": "ん",
                                "hiragana": "ん",
                                "katakana": "",
                                "romaji": "nn"
                            },
                            {
                                "text": "に",
                                "hiragana": "に",
                                "katakana": "",
                                "romaji": "ni"
                            },
                            {
                                "text": "ち",
                                "hiragana": "ち",
                                "katakana": "",
                                "romaji": "ti"
                            },
                            {
                                "text": "は",
                                "hiragana": "は",
                                "katakana": "",
                                "romaji": "ha"
                            },
                            {
                                "text": "、",
                                "hiragana": "、",
                                "katakana": "",
                                "romaji": ","
                            },
                            {
                                "text": "今日",
                                "hiragana": "きょう",
                                "katakana": "",
                                "romaji": "kyou"
                            },
                            {
                                "text": "は",
                                "hiragana": "は",
                                "katakana": "",
                                "romaji": "ha"
                            },
                            {
                                "text": "良",
                                "hiragana": "い",
                                "katakana": "",
                                "romaji": "i"
                            },
                            {
                                "text": "い",
                                "hiragana": "い",
                                "katakana": "",
                                "romaji": "i"
                            },
                            {
                                "text": "天",
                                "hiragana": "てん",
                                "katakana": "",
                                "romaji": "tenn"
                            },
                            {
                                "text": "気",
                                "hiragana": "き",
                                "katakana": "",
                                "romaji": "ki"
                            },
                            {
                                "text": "で",
                                "hiragana": "で",
                                "katakana": "",
                                "romaji": "de"
                            },
                            {
                                "text": "す",
                                "hiragana": "す",
                                "katakana": "",
                                "romaji": "su"
                            },
                            {
                                "text": "ね",
                                "hiragana": "ね",
                                "katakana": "",
                                "romaji": "ne"
                            }
                        ]
                    }

                ]
            };
            return this.playTypingGame();
        }
        //UIを構築し描画
        let TypingGameElement = `<div class="TypingGame"><div class="time">00:00.00</div><h2></h2><p>Enterキーを押すとゲームが始まります。</p><button onclick="app.title();">やめる</button></div>`;
        let containerElement = `<div class="container">${TypingGameElement}</div>`;
        let mainElement = `<main>${containerElement}</main>`;

        document.querySelector('body').innerHTML = mainElement;

        //キー入力インベントリスナーを追加（Enterキーが押されたらゲームを開始する）
        let eventHandler = {
            typeName: 'keydown',
            callback: event => {
                if (event.key === 'Enter') {
                    this.TypingGame_data.time = [0, 0, 0];//クリアタイム（00:00.00）

                    this.TypingGame_data.TypingCount = 0;  //総タイプ数
                    this.TypingGame_data.missCount = 0;     //誤タイプ数
                    this.TypingGame_data.clearCount = 0;    //正タイプ数

                    this.TypingGame_data.currentQuestionIndex = 0;  //現在の問題のインデックス(.questionContentsに対応)
                    this.TypingGame_data.mustEnteredKeys = [];      //現在の問題で入力しなければならないキー状態の状態が入る変数

                    this.startTypingGame(); //Enterキー押下でゲーム開始
                }
            }
        };

        this.eventHandlers[0] = eventHandler;
        document.addEventListener(eventHandler.typeName, eventHandler.callback);

        return true;
    }

    //タイピングゲーム開始（タイム、入力の判定などゲーム進行を行う）
    startTypingGame() {
        if (this.eventHandlers.length) {
            for (let i = 0; i < this.eventHandlers.length; i++) {
                document.removeEventListener(this.eventHandlers[i].typeName, this.eventHandlers[i].callback);
            }
            this.eventHandlers = [];
        }

        //問題認識関数定義（問題から入力しなければならないキーを生成しグローバル変数へ保存）
        let generateMustEnteredKeys = () => {
            if (!this.TypingGame_data.questionContents) return false;

            let questionContent = this.TypingGame_data.questionContents[this.TypingGame_data.currentQuestionIndex].characters;
            if (!questionContent) return false;

            this.TypingGame_data.mustEnteredKeys = [];

            for (let i = 0; i < questionContent.length; i++) {
                let romajiArray = questionContent[i].romaji.split('');    //文字列を一文字ずつ分割

                for (let j = 0; j < romajiArray.length; j++) {
                    this.TypingGame_data.mustEnteredKeys.push({ character: romajiArray[j], state: 'not-entered' });//配列の末尾に要素を追加
                }
            }
        }

        //問題表示関数定義（問題の文字列と入力済みの文字列を比較し、その結果に応じた問題の表示を行う。グローバル変数の書き込みは無し）
        let renderingQuestion = () => {
            if (!this.TypingGame_data.questionContents) return false;

            let questionContent = this.TypingGame_data.questionContents[this.TypingGame_data.currentQuestionIndex].characters;
            if (!questionContent) return false;

            let textString = '';  //表示する問題文（例：　吾輩は猫である）
            let romajiString = '';//表示するローマ文字列（例： wagahaihanekodearu）

            let checked_mustEnteredKeys_index = 0;   //チェック済み問題キー配列のインデックス

            for (let i = 0; i < questionContent.length; i++) {
                let romajiArray = questionContent[i].romaji.split('');  //'waga' -> ['w', 'a', 'g', 'a']

                let stateA = '';    //ローマ字の各文字の状態（未入力、ミス、正解）
                let stateB = '';    //ローマ字全体の状態（未入力、ミス、正解）

                let option_begin = '';  //クラス開始タグ
                let option_end = '';    //クラス終了タグ

                //ローマ字を一文字ずつ判定
                for (let j = 0; j < romajiArray.length; j++) {
                    //ユーザーの入力に応じた結果を取得
                    if (romajiArray[j] == this.TypingGame_data.mustEnteredKeys[checked_mustEnteredKeys_index].character) {
                        stateA = this.TypingGame_data.mustEnteredKeys[checked_mustEnteredKeys_index].state;
                        if (stateB !== 'miss') stateB = stateA;
                        checked_mustEnteredKeys_index++;
                    };

                    //結果に応じてスタイル（クラス）を設定し、出力
                    option_begin = stateA == 'not-entered' ? `<span class="opacity05">` : option_begin;
                    option_end   = stateA == 'not-entered' ? `</span>` : option_end;
                    option_begin = stateA == 'miss' ? `<span class="colorRed">` : option_begin;
                    option_end   = stateA == 'miss' ? `</span>` : option_end;

                    romajiString += option_begin + romajiArray[j] + option_end;

                }
                //結果に応じてスタイル（クラス）を設定し、出力
                option_begin = stateB == 'not-entered' ? `<span class="opacity05">` : option_begin;
                option_end   = stateB == 'not-entered' ? `</span>` : option_end;
                option_begin = stateB == 'miss' ? `<span class="colorRed">` : option_begin;
                option_end   = stateB == 'miss' ? `</span>` : option_end;

                textString += option_begin + questionContent[i].text + option_end;

            }


            document.querySelector('.TypingGame h2').innerHTML = textString;
            document.querySelector('.TypingGame p').innerHTML = romajiString;
        };

        //ゲーム開始時のみ、問題生成関数と問題l描画関数を実行
        if (!this.TypingGame_data.mustEnteredKeys.length) {
            generateMustEnteredKeys();
            renderingQuestion();
        }

        //キー入力インベントリスナーを追加（ユーザーの入力から問題の結果判定を行う）
        let eventHandler = {
            typeName: 'keydown',
            callback: event => {
                if (event.key === 'Escape') return this.endTypingGame();    //Escapeキー押下時ゲームを終了させる

                if (event.key === 'Shift') return;//Shiftキーは無視する

                let i;
                //ユーザーが入力した文字列から、結果が未入力・ミスの状態の文字を見つける
                for (i = 0; i < this.TypingGame_data.mustEnteredKeys.length; i++) {
                    if (this.TypingGame_data.mustEnteredKeys[i].state != 'entered') {
                        break;
                    }
                }
                //上のループで見つけた文字と入力された文字が一致した場合、入力済みの状態を保存
                //一致しなかった場合はミスの状態を保存する
                //一致したとき、問題の文字列の最後の文字の判定だった場合、かつ問題が最後だった場合はゲーム終了のグローバル関数を返し、その場合は
                if (event.key == this.TypingGame_data.mustEnteredKeys[i].character) {
                    this.TypingGame_data.mustEnteredKeys[i].state = 'entered';
                    if (i >= (this.TypingGame_data.mustEnteredKeys.length - 1)) {
                        if (this.TypingGame_data.currentQuestionIndex >= (this.TypingGame_data.questionContents.length - 1)) {
                            this.TypingGame_data.currentQuestionIndex++;
                            return this.endTypingGame();
                        }
                        else {
                            this.TypingGame_data.currentQuestionIndex++;
                            generateMustEnteredKeys();
                        }
                    }
                    this.TypingGame_data.clearCount++;//正タイプ数をカウント
                } else {
                    this.TypingGame_data.mustEnteredKeys[i].state = 'miss';

                    this.TypingGame_data.missCount++;   //誤タイプ数をカウント
                }

                this.TypingGame_data.TypingCount++;//総タイプをカウント

                renderingQuestion();
            }
        };
        this.eventHandlers[1] = eventHandler;
        document.addEventListener(eventHandler.typeName, eventHandler.callback);

        //タイム更新と表示のインターバルを登録
        if (true) {
            //分の更新
            this.intervals.push(setInterval(() => {
                this.TypingGame_data.time[0]++;//min
            }, 60 * 1000));

            //秒の更新
            this.intervals.push(setInterval(() => {
                this.TypingGame_data.time[1]++;//sec
                if (this.TypingGame_data.time[1] >= 60) this.TypingGame_data.time[1] = 0;
            }, 1000));

            //コンマ秒の更新と描画
            this.intervals.push(setInterval(() => {
                this.TypingGame_data.time[2]++;//sec point (00:00.XX)
                if (this.TypingGame_data.time[2] >= 100) this.TypingGame_data.time[2] = 0;

                document.querySelector('.TypingGame .time').innerHTML = `${ this.twoDigit(this.TypingGame_data.time[0]) }:${ this.twoDigit(this.TypingGame_data.time[1]) }:${ this.twoDigit(this.TypingGame_data.time[2]) }`;
            },10));
        }

        //UIを更新
        document.querySelector('.TypingGame button').setAttribute('onclick', 'app.endTypingGame();');
        document.querySelector('.TypingGame button').innerHTML = '終わる(Escapeキーでも終了できます)';

        return true;
    }

    //タイピングゲームの終了（ゲームの結果を表示する）
    endTypingGame(){
        //全てのイベントハンドラーを解除(この関数の前に実行された関数でリスナーされたイベントのハンドラーは不要なため)
        if (this.eventHandlers.length) {
            for (let i = 0; i < this.eventHandlers.length; i++) {
                if (this.eventHandlers[i]) document.removeEventListener(this.eventHandlers[i].typeName, this.eventHandlers[i].callback);
            }

            this.eventHandlers = [];
        }

        //タイマーのインターバルを解除

        if (this.intervals.length) {
            for (let i = 0; i < this.intervals.length; i++) {
                clearInterval(this.intervals[i]);
            }

            this.intervals = [];
        }

        //UIを更新
        document.querySelector('.TypingGame h2').innerHTML = `クリア数: ${ this.TypingGame_data.currentQuestionIndex } /${this.TypingGame_data.questionContents.length}`;
        document.querySelector('.TypingGame p').innerHTML = `総タイプ: ${this.TypingGame_data.TypingCount} <br>誤タイプ数: ${this.TypingGame_data.missCount}<br>正タイプ数:${this.TypingGame_data.clearCount}`;

        document.querySelector('.TypingGame button').setAttribute('onclick', `app.title();`);
        document.querySelector('.TypingGame button').innerHTML = `タイトルへ`;

        return true;
    }
    
}

const app = new App();  //Appのインスタンス生成
