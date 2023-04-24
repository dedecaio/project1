$(function () {
    $('.fa-bars').css('display', 'none');
    var open = true;

    var menuSize = '20%';
    var contentSize = '80%';
    var windowSize = $(window)[0].innerWidth;
    if (windowSize < 768) {
        $('.fa-bars').css('display', 'inline-block');
        $('.fa-xmark').css('display', 'none');

    }



    $('.logo i').click(function () {
        if (open) {

            $('.fa-xmark').css('display', 'block');
            $('.fa-bars').css('display', 'none');
            $('.first').css('display', 'block');
            $('section.main-content').animate({ width: contentSize }, function () {
                open = false;
            });
            $('.first').animate({ width: menuSize }, function () {
                open = false;
            });


        } else {
            $('.fa-xmark').css('display', 'none');
            $('.fa-bars').css('display', 'inline-block');
            $('.first').css('display', 'none');
            $('section.main-content').animate({ width: '100%' }, function () {
                open = true;
            });
            $('.first').animate({ width: '0' }, function () {
                open = true;
            });
            $('.logo i').animate(function () {
                $('.logo i').removeClass('fa-bars')
                $('.logo i').addClass('fa-xmark');
                open = false;
            });
        }


    });
});