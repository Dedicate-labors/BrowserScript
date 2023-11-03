// ==UserScript==
// @name         禁止色色
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  阻止浏览黄色小网站，用于戒撸，看小电影实在不好！！！
// @author       You
// @match        *://yandex.com/*
// @match        *://www.bad.news/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

// =================== 替换界面，创建一个全屏的纯青色页面 ===================
    // var bluePage = document.createElement("div");
    // bluePage.style.position = "fixed";
    // bluePage.style.top = "0";
    // bluePage.style.left = "0";
    // bluePage.style.width = "100%";
    // bluePage.style.height = "100%";
    // bluePage.style.background = "cyan";
    // bluePage.style.zIndex = "9999";

    // 将纯青色页面添加到文档中
    // document.body.appendChild(bluePage);

// =================== 重定向到其他界面 =====================
    // 想跳转的url
    // var redirectUrl = "https://jandan.net/top";
    var redirectUrl = "https://www.autopiano.cn/";
    // 重定向到纯青色页面
    window.location.replace(redirectUrl);

    // 使用setTimeout延迟显示提示框，确保页面修改生效
    setTimeout(function() {
        
        // 弹出提示框
        var message = "不允许色色啦！！！干点正经事";
        var confirmation = confirm(message);
        // 返回上一个页面，不管如何选择
        window.history.back();

    }, 1000); // 这里的延迟时间可以根据你的需要进行调整
})();
