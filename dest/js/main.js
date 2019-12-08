"use strict";

function showLogo() {
  var logo = document.querySelector('.header__logo');
  logo.classList.remove('header__logo--hide');
}

$(window).on('load', function () {
  $('.bg').fadeOut('slow');
  $('.scroll-pane').mCustomScrollbar();
  showLogo();
  setTimeout(function () {
    // TODO uncomment before production
    $('.contacts .left__inner').addClass('left__inner--show');
  }, 600);
  setTimeout(function () {
    // TODO uncomment before production
    $('.contacts .right').addClass('right--show');
  }, 1500);
});
var accordionItem = $('.accordion__item');
var accordionToggleItem = $('.accordion__item--toggle');
var accordionDefault = $('.accordion__item--default'); // eslint-disable-next-line func-style

function toggleAccordion() {
  accordionItem.removeClass('active');
  accordionItem.addClass('hide');
  accordionItem.removeClass('accordion__item--active');
  $(this).toggleClass('active');
  $(this).addClass('accordion__item--active');
} // eslint-disable-next-line func-style


function defaultAccordion() {
  accordionItem.removeClass('active');
  accordionItem.removeClass('hide');
  accordionItem.removeClass('accordion__item--active');
  $(this).addClass('accordion__item--active');
}

function aboutAccordion() {
  accordionItem.removeClass('active');
  accordionItem.addClass('hide');
  accordionItem.removeClass('accordion__item--active');
  $('.accordion__item--about').toggleClass('active');
  $('.accordion__item--about').addClass('accordion__item--active');
}

accordionToggleItem.on('click', toggleAccordion);
accordionDefault.on('click', defaultAccordion);
$('.submenu__item--about').on('click', aboutAccordion); // eslint-disable-next-line no-unused-expressions

!function (i) {
  var o;
  var n;
  i('.title_block').on('click', function () {
    o = i(this).parents('.accordion_item'), n = o.find('.info'), o.hasClass('active_block') ? (o.removeClass('active_block'), n.slideUp()) : (o.addClass('active_block'), n.stop(!0, !0).slideDown(), o.siblings('.active_block').removeClass('active_block').children('.info').stop(!0, !0).slideUp());
  });
}(jQuery);
var menuItems = document.querySelectorAll('.main-menu__item'); // for (let i = 0; i <= menuItems.length; i++) {
//
//     const width = menuItems[ i ].offsetWidth;
//     menuItems[ i ].style.width = width + 2 + 'px';
// }

$(menuItems).each(function () {
  $(this).css('width', $(this).width() + 2 + 'px');
});
var newsSubItems = document.querySelectorAll('.news__sub-item');
var newsArticles = document.querySelectorAll('.news__article-item');

function showArticle() {
  var _loop = function _loop(i) {
    $(newsSubItems[i]).on('click', function () {
      if (newsSubItems[i].dataset.news === newsArticles[i].dataset.news) {
        $('.news__article-item').removeClass('news__article-item--show');
        $(newsArticles[i]).addClass('news__article-item--show');
        $(newsSubItems).removeClass('news__sub-item--active');
        $(newsSubItems[i]).addClass('news__sub-item--active');
      }
    });
  };

  for (var i = 0; i <= newsSubItems.length; i++) {
    _loop(i);
  }
}

showArticle();