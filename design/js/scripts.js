$(function () {
    var hovered = true;
    var windowSize = $(window).innerWidth();
    var iconeMenu = $('.menu nav ul li.desktopIcon i');

    if (windowSize > 768) {
        $('.menu').hover(() => {
            if (hovered) {
                $('.resto').css('display', 'inline-block');
                $('.resto').animate({ 'opacity': '1' }, 600, () => {
                    hovered = false;
                });
            } else {
                $('.resto').css('display', 'none');
                $('.resto').animate({ 'opacity': '0' }, () => {
                    hovered = true;
                });
            }
        });
        $('.menu li.desktopIcon').css('display', 'none');
    } else {
        $('.menu li.desktopIcon').click(() => {
            if (hovered) {
                $('.menu li.desktopIcon').css('display', 'block').css('margin-top', '15px');
                iconeMenu.css('font-size', '30px');
                $('.resto').css('display', 'inline-block');
                $('.resto').animate({ 'opacity': '1' }, 600, () => {
                    hovered = false;
                });
                iconeMenu.removeClass('fa-bars');
                iconeMenu.addClass('fa-xmark');


            } else {
                $('.menu li.desktopIcon').css('display', 'inline-block').css('margin-top', '0');
                iconeMenu.css('font-size', '20px');
                $('.resto').css('display', 'none');
                $('.resto').animate({ 'opacity': '0' }, () => {
                    hovered = true;
                });
                iconeMenu.removeClass('fa-xmark');
                iconeMenu.addClass('fa-bars');
            }
        });
    }



});