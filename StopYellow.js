// ==UserScript==
// @name         禁止色色
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  阻止浏览黄色小网站，用于戒撸，看小电影实在不好！！！
// @author       You
// @match        *://yandex.com/*
// @match        *://bad.news/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

// =================== 替换界面，创建一个全屏的纯青色页面 ===================
    var bluePage = document.createElement("div");
    bluePage.style.position = "fixed";
    bluePage.style.top = "0";
    bluePage.style.left = "0";
    bluePage.style.width = "100%";
    bluePage.style.height = "100%";
    bluePage.style.background = "cyan";
    bluePage.style.zIndex = "9999";

    // 将纯青色页面添加到文档中
    document.body.appendChild(bluePage);

    let title = document.createElement("h1");
    title.style.textAlign = "center";
    title.innerHTML = "将进酒";
    bluePage.appendChild(title);

    let p = document.createElement("p");
    p.style.textAlign = "center";
    p.style.marginTop = "5em";
    p.style.marginBottom = "15em";
    p.innerHTML = "君不见黄河之水天上来，奔流到海不复回。" +
        "<br>君不见高堂明镜悲白发，朝如青丝暮成雪。"+
        "<br>人生得意须尽欢，莫使金樽空对月。"+
        "<br>天生我材必有用，千金散尽还复来。"+
        "<br>烹羊宰牛且为乐，会须一饮三百杯。"+
        "<br>岑夫子，丹丘生，将进酒，杯莫停。"+
        "<br>与君歌一曲，请君为我倾耳听。"+
        "<br>钟鼓馔玉不足贵，但愿长醉不愿醒。"+
        "<br>古来圣贤皆寂寞，惟有饮者留其名。"+
        "<br>陈王昔时宴平乐，斗酒十千恣欢谑。"+
        "<br>主人何为言少钱，径须沽取对君酌。"+
        "<br>五花马、千金裘，呼儿将出换美酒，与尔同销万古愁。"
    p.style.fontSize = "20px";
    bluePage.appendChild(p)

// =================== 重定向到其他界面 =====================
    // 想跳转的url
    // var redirectUrl = "https://jandan.net/top";
    // var redirectUrl = "https://www.autopiano.cn/";
    // 重定向到纯青色页面
    // window.location.replace(redirectUrl);

    // 使用setTimeout延迟显示提示框，确保页面修改生效
    setTimeout(function() {

        // 弹出提示框
        var message = "不允许色色啦！！！干点正经事";
        var confirmation = confirm(message);
        // 返回上一个页面，不管如何选择
        window.location.href = "https://jandan.net/top";

    }, 1000); // 这里的延迟时间可以根据你的需要进行调整
})();
