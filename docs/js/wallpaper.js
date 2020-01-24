"use strict";

var wallpaperList = document.querySelector('.wallpaper__list');
var menuItems = wallpaperList.querySelectorAll('li');
var time = 500;

function showMenuItem(item, delay, view) {
  $(item).on('click', function () {
    $('.wallpaper').fadeOut('slow');
  });
  setTimeout(function () {
    $(item).addClass(view);
  }, delay);
}

$(window).on('load', function () {
  setTimeout(function () {
    $('.wallpaper').fadeOut('slow');
  }, 7000);
  setTimeout(function () {
    window.location.replace('about.html');
  }, 7500);
  setTimeout(function () {
    $('.wallpaper__inner').addClass('wallpaper__logo-finish');
  }, 1000);
  setTimeout(function () {
    $('.wallpaper__hide').addClass('wallpaper__hide--show');
  }, 1500);
  setTimeout(function () {
    for (var i = 0; i <= menuItems.length; i++) {
      showMenuItem(menuItems[i], time, 'show');
      time += 500;
    }
  }, 2000);
});