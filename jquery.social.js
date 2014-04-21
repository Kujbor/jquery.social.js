/*
 * jquery.social.js - jQuery plugin for easy social buttons adding
 * Author Oleg Taranov aka Kujbor
 * Copyright (C) 2013: CubeComp Development
 */
define("jquery.social", ["jquery"], function($) {

    function Social() {

        this.options = {};

        this.setup = function(options) {
            this.options = options;
        };

        this.vkontakte = function() {

            var url = "http://vkontakte.ru/share.php?" +
                    "url=" + this.options.url +
                    "&title=" + this.options.title +
                    "&description=" + this.options.desc +
                    "&image=" + this.options.img +
                    "&noparse=true";

            this.popup(url);
        };

        this.facebook = function() {

            var url = "http://www.facebook.com/sharer.php?s=100" +
                    "&p[title]=" + this.options.title +
                    "&p[summary]=" + this.options.desc +
                    "&p[url]=" + this.options.url +
                    "&p[images][0]=" + this.options.img;

            this.popup(url);
        };

        this.moimir = function() {

            var url = "http://connect.mail.ru/share?" +
                    "url=" + this.options.url +
                    "&title=" + this.options.title +
                    "&description=" + this.options.desc +
                    "&imageurl=" + this.options.img;

            this.popup(url);
        };

        this.odnoklassniki = function() {

            var url = "http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1" +
                    "&st.comments=" + this.options.desc +
                    "&st._surl=" + this.options.url;

            this.popup(url);
        };

        this.twitter = function() {

            var url = "http://twitter.com/share?" +
                    "text=" + this.options.title +
                    "&url=" + this.options.url +
                    "&counturl=" + this.options.url;

            this.popup(url);
        };

        this.popup = function(url) {
            window.open(url, "", "toolbar=0,status=0,width=626,height=436");
        };
    }

    $.social = new Social();

    $("[data-social-network]").on("click", function() {
        $.social[$(this).attr("data-social-network")]();
    });
});
