/*
 * Example of jQuery.Social plugin setup
 * Author Oleg Taranov aka Kujbor
 * Copyright (C) 2013: CubeComp Development
 */
define("example", ["jquery.social"], function() {

    $.social.setup({
        title: encodeURIComponent("CubeComp - курсы веб-программирования в Москве"),
        url: encodeURIComponent("http://cubecomp.ru/"),
        img: encodeURIComponent("http://cubecomp.ru/static/cubecomp/img/courses-comp.png"),
        desc: encodeURIComponent("Курсы веб-программирования в Москве по минимальным ценам. Обучение веб-программированию и созданию сайтов.")
    });
});
