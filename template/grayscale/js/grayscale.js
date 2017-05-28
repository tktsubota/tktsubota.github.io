/*!
 * Start Bootstrap - Grayscale v1.1.0 (http://startbootstrap.com/template-overviews/grayscale)
 * Copyright 2013-2016 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)
 */

// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

var page = $("html, body");

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $("a.page-scroll").bind("click", function(event) {
        var $anchor = $(this);
        page.stop().animate({
            scrollTop: $($anchor.attr("href")).offset().top
        }, 1500, "easeInOutExpo");
        page.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function() {
            page.stop();
        });
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$(".navbar-collapse ul li a").click(function() {
  if ($(this).attr("class") != "dropdown-toggle active" && $(this).attr("class") != "dropdown-toggle") {
    $(".navbar-toggle:visible").click();
  }
});
