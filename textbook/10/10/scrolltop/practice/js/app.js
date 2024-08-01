$(function () {
    //上に戻るボタン
    let topBtn = $('#scrollTop');
    topBtn.hide();

    //ある程度スクロールされたら、上に戻るボタンを表示する
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            topBtn.fadeIn(); //フェードインで表示
        } else {
            topBtn.fadeOut(); //フェードアウトで非表示
        }
    });

    //クリックで上に戻る
    topBtn.click(function (event) {
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0
        }, 500);
    });
});


