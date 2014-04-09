var navHeight = $('.navbar-collapse').height();
var flag = 0;

$(window).resize(function () {
        if (window.innerWidth > 768) {
            $('body').animate({ 'padding-top': "0px" }, 300);
            $('.navbar-collapse').removeClass('in').addClass('collapse');
        };
});
    
$(window).trigger('resize');

$('.navbar-collapse').on('show.bs.collapse', function () {
    flag = 1;
    if ($(this).height() != 0) {
        navHeight = $(this).height();
    }

    $('body').animate({
        'padding-top': parseInt($("body").css("padding-top")) + navHeight
    }, 300);
});

$('.navbar-collapse').on('hide.bs.collapse', function () {
    flag = 0;
    navHeight = $(this).height();

    $('body').animate({
        'padding-top': parseInt($("body").css("padding-top")) - navHeight
    }, 300);
});