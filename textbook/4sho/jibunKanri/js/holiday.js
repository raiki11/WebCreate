// JavaScript source code
//祝日・休日の判定
function checkHoliday(year, month, day) {
    let dayOfWeek = new Date(year, month - 1, day).getDay();//曜日
    let numOfWeek = Math.floor((day - 1) / 7) + 1;  //何曜日の曜日か

    //月ごとに確認
    switch (month) {
        // 1月　1日　：元旦
        // 1月第2曜日：成人の日
        case 1:
            if (day == 1) return true;
            if (dayOfWeek == 1 && numOfWeek == 2) return true;
            break;

        // 2月11日: 建国記念日
        // 2月23日: 天皇誕生日※2020年以降
        case 2:
            if (day == 11) return true;
            if (year >= 2020 && day == 23) return true;
            break;

        // 3月21日頃 春分の日
        case 3:
            if (day == Math.floor(20.8431 + 0.242194 * (year - 1980)) - Math.floor((year - 1980) / 4)) return true;
            break;

        // 4月29日 昭和の日
        case 4:
            if (day == 29) return true;
            break;

        // 5月1日 :新天皇即位の日 2019 年の特例
        // 5月3日 :憲法記念日
        // 5月4日 :みどりの日
        // 5月5日 :こどもの日
        case 5:
            if (year == 2019 && day == 1) return true;
            if (day == 3) return true;
            if (day == 4) return true;
            if (day == 5) return true;
            break;

            // 7月第3月曜: 海の日 ※2020年を除く
            // 7月23日   : 海の日 ※2020年の特例
            // 7月24日   : スポーツの日 ※ 2020年の特例
        case 7: 
            if (year != 2020 && dayOfWeek == 1 && numOfWeek == 3) return true;
            if (year == 2020 && day == 23) return true;
            if (year == 2020 && day == 24) return true;
            break;
        // 8月10日 :山の日 ※2020年の特例
        // 8月11日 :山の日 ※2016年以降,2020年を除く
            if (year == 2020 && day == 10) return true;
            if (year != 2020 && year >= 2016 && day == 11) return true;
            break; 

        // 9月第3月曜 : 敬老の日
        // 9月23日頃  :秋分の日
        case 9:
            if (dayOfWeek == 1 && numOfWeek == 3) return true;
            if (day == Math.floor(23.2488 + 0.242194 * (year - 1980)) - Math.floor((year - 1980) / 4)) return true;
            break;

        //10月第2月曜: 体育の日 ※2020年を除く
        // 10月22日  : 即位礼正殿の儀 ※2019年の特例
        case 10:
            if (year != 2020 && dayOfWeek == 1 && numOfWeek == 2) return true;
            if (year == 2019 && day == 22) return true;
            break;

            //11月3日  :勤労感謝の日
            //11月23日 :文化の日
        case 11:
            if (day == 3) return true;
            if (day == 23) return true;
            break;

        //12月23日天皇誕生日 ※2018年まで
        case 12:
            if (year <= 2018 && day == 23) return true;
            break;
    }
    return false;
}

// 振替休日判定
function checkFurikae(year, month, day) {
    let dayOfWeek = new Date(year, month - 1, day).getDay(); // 曜日
    let furikaeFlag = false;
    // 月曜
    if (dayOfWeek == 1) {
        furikaeFlag = checkHoliday(year, month, day - 1);
    }
    // 火曜
    if (dayOfWeek == 2 && furikaeFlag != true) {
        furikaeFlag = checkHoliday(year, month, day - 1)
            && checkHoliday(year, month, day - 2);
    }
    // 水曜
    if (dayOfWeek == 3 && furikaeFlag != true) {
        furikaeFlag = checkHoliday(year, month, day - 1)
            && checkHoliday(year, month, day - 2)
            && checkHoliday(year, month, day - 3);
    }

    // 祝日と祝日に挟まれているかどうか(国民の祝日)
    if ((dayOfWeek != 0 && dayOfWeek != 6) && furikaeFlag != true) {
        let prevDate = new Date(year, month - 1, day);
        let nextDate = new Date(year, month - 1, day);
        prevDate.setDate(prevDate.getDate() - 1); //前日
        nextDate.setDate(nextDate.getDate() + 1); //翌日

        furikaeFlag = checkHoliday(prevDate.getFullYear()
                                  ,prevDate.getMonth() + 1
                                  ,prevDate.getDate())
                   && checkHoliday(nextDate.getFullYear() 
                                  ,nextDate.getMonth() + 1
                                  ,nextDate.getDate());
    }
    return furikaeFlag;
}

