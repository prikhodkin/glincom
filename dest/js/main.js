"use strict";

$(window).on('load', function () {
  $('#preloader').delay(2500).fadeOut('slow'); // setTimeout(() => { // TODO uncomment before production
  //     $('.wallpaper').addClass('wallpaper--out');
  // }, 4500);
});
var accordionItem = $('.accordion__item');
var accordionToggleItem = $('.accordion__item--toggle');
var accordionDefault = $('.accordion__item--default');

function toggleAccordion() {
  accordionItem.removeClass('active');
  accordionItem.addClass('hide');
  accordionItem.removeClass('accordion__item--active');
  $(this).toggleClass('active');
  $(this).addClass('accordion__item--active');
}

function defaultAccordion() {
  accordionItem.removeClass('active');
  accordionItem.removeClass('hide');
  accordionItem.removeClass('accordion__item--active');
  $(this).addClass('accordion__item--active');
}

accordionToggleItem.on('click', toggleAccordion);
accordionDefault.on('click', defaultAccordion);

(function ($) {
  $(window).on("load", function () {
    $(".scroll-pane").mCustomScrollbar({});
  });
})(jQuery);