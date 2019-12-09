let wallpaperList = document.querySelector('.wallpaper__list');
let menuItems = wallpaperList.querySelectorAll('li');
let time = 500;

function showMenuItem (item, delay, view) {
  $(item).on('click', function () {
    $('.wallpaper').fadeOut('slow');
  });
  setTimeout(() => {
    $(item).addClass(view);
  }, delay);
}

$(window).on('load', () => {

  setTimeout(() => {
    $('.wallpaper').fadeOut('slow');
  }, 20000);

  setTimeout(() => {
    window.location.replace('about.html');
  }, 20500);

  setTimeout(() => {
    $('.wallpaper__inner').addClass('wallpaper__logo-finish');

  }, 6000);

  setTimeout(() => {
    $('.wallpaper__hide').addClass('wallpaper__hide--show');
  }, 7000);

  setTimeout(() => {
    for (let i = 0; i <= menuItems.length; i++) {
      showMenuItem(menuItems[ i ], time, 'show');
      time += 500;
    }
  }, 8000);

});
