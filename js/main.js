/*jslint browser : true */
/*global $, jquery, console*/
$(function () {
    "use strict";
    /* fixed and color nav bar */
    $(window).scroll(function () {
        if ($(window).scrollTop() >= $(".navbar").height()) {
            if (!$(".navbar").hasClass("scrolled")) {
                $(".navbar").addClass("scrolled");
            }
        } else {
            $(".navbar").removeClass("scrolled");
        }
    });
    ///////////////////////////////////////////////////////////

    //deal with tabs 
     //deal with tabs 
     //deal with tabs 
    $(".tab-switch li").click(function () {
        $(this).siblings().removeClass("selected");
        $(this).addClass("selected");
        $(".tabs .tab-content > div").hide();
        $(".tabs img").hide();
        $("." + $(this).data("class")).fadeIn();
        
    });
    //////////
    //////////
    //click on scroll tot top 
    $(".scroll-to-top").click(function (event) {
        event.preventDefault();
        $("html, body").animate({

            scrollTop: 0

        }, 1000);

    });
    $(window).scroll(function () {

        if ($(window).scrollTop() >= 1000) {
            $(".scroll-to-top").fadeIn(500);
        } else {
            $(".scroll-to-top").fadeOut(500);
        }

    });

});
