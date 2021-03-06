let accordionItem = $('.accordion__item');
let accordionToggleItem = $('.accordion__item--toggle');
let accordionDefault = $('.accordion__item--default');
let menuItems = document.querySelectorAll('.main-menu__item');
let newsSubItems = document.querySelectorAll('.news__sub-item');
let newsArticles = document.querySelectorAll('.news__article-item');


// Show logo animation
function showLogo() {
    let logo = document.querySelector('.header__logo');
    logo.classList.remove('header__logo--hide');
}


// Open accordion
function toggleAccordion() {
    accordionItem.removeClass('active');
    accordionItem.addClass('hide');
    accordionItem.removeClass('accordion__item--active');
    $(this).toggleClass('active');
    $(this).addClass('accordion__item--active');
}

// Return accordion to default condition
function defaultAccordion() {
    accordionItem.removeClass('active');
    accordionItem.removeClass('hide');
    accordionItem.removeClass('accordion__item--active');
    $(this).addClass('accordion__item--active');
}

// TODO What is this function?
function aboutAccordion() {
    accordionItem.removeClass('active');
    accordionItem.addClass('hide');
    accordionItem.removeClass('accordion__item--active');
    $('.accordion__item--about').toggleClass('active');
    $('.accordion__item--about').addClass('accordion__item--active');
}

// Shows article on the news page
function showArticle() {
    for (let i = 0; i <= newsSubItems.length; i++) {
        $(newsSubItems[ i ]).on('click', () => {
            if (newsSubItems[ i ].dataset.news === newsArticles[ i ].dataset.news) {
                $('.news__article-item').removeClass('news__article-item--show');
                $(newsArticles[ i ]).addClass('news__article-item--show');
                $(newsSubItems).removeClass('news__sub-item--active');
                $(newsSubItems[ i ]).addClass('news__sub-item--active');
            }
        });

    }
}


// Call functions after loading page
$(window).on('load', () => {
    // Fadeout preloader bg
    $('.bg').fadeOut('slow');

    // Set scroll for blocks
    $('.scroll-pane').mCustomScrollbar();
    showLogo();

    // Set animation for left block on inner pages
    setTimeout(() => {
        $('.contacts .left__inner').addClass('left__inner--show');
    }, 600);

    // Set animation for right block on inner pages
    setTimeout(() => {
        $('.contacts .right').addClass('right--show');
    }, 1500);
});


// Vertical accordion
!(function(i) {
    let o; let n;
    i('.title_block').on('click', function() {
        o = i(this).parents('.accordion_item'), n = o.find('.info'),
        o.hasClass('active_block') ? (o.removeClass('active_block'),
        n.slideUp()) : (o.addClass('active_block'), n.stop(!0, !0).slideDown(),
        o.siblings('.active_block').removeClass('active_block').children(
            '.info').stop(!0, !0).slideUp());
    });
})(jQuery);

// Fix twitching hover menu
$(menuItems).each(function() {
    $(this).css('width', `${$(this).width() + 2 }px`);
});

accordionToggleItem.on('click', toggleAccordion);
accordionDefault.on('click', defaultAccordion);
$('.submenu__item--about').on('click', aboutAccordion);
showArticle();

$('.projects__select').click(() => {
    $('.projects__select').toggleClass('projects__select--active');
    $('.filter').slideToggle();
});

$('.filter__input').change(() => {
    if ($('.filter__input--app').prop('checked')) {
        $('.filter__block--app').css('display', 'block');
        $('.filter__block--com').css('display', 'none');
    } else {
        $('.filter__block--com').css('display', 'block');
        $('.filter__block--app').css('display', 'none');
    }
});

let range = function range(wrap, min, max) {
    wrap.slider({
        'range': true,
        'min': 0,
        'max': 50000000,
        'values': [ 12345, 24567809 ],
        'slide': function slide(event, ui) {
            // Поле минимального значения
            min.val(ui.values[ 0 ]);
            // Поле максимального значения
            max.val(ui.values[ 1 ]);
        }
    });
    // Записываем значения ползунков в момент загрузки страницы
    // То есть значения по умолчанию
    min.val(wrap.slider('values', 0));
    max.val(wrap.slider('values', 1));

    min.change(function () {
        let val = $(this).val();
        wrap.slider('values', 0, val);
    });

    max.change(function () {
        let val = $(this).val();
        wrap.slider('values', 1, val);
    });
};

let priceRange = $('#slider_price');
let priceMin = $('#minCost');
let maxCost = $('#maxCost');

range(priceRange, priceMin, maxCost);
priceRange.draggable();

let sqRange = $('#sq');
let sqMin = $('#sqMin');
let sqMax = $('#sqMax');

range(sqRange, sqMin, sqMax);
sqRange.draggable();


$('.slider').slick({
    'slidesToShow': 1,
    'slidesToScroll': 1,
    'arrows': true,
    'fade': true,
    'asNavFor': '.slider-sub'
});
$('.slider-sub').slick({
    'slidesToShow': 7,
    'slidesToScroll': 1,
    'asNavFor': '.slider',
    'dots': false,
    'arrows': false,
    'centerMode': false,
    'focusOnSelect': true
});

$('.slider-sub li').css('height', $('.slider-sub li').width());

$('.slick-arrow').css('top', (-$('.slider-sub li').width() + 19) );
