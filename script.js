$(document).ready(function () {
    $('#menu-open').click(function () {
        $('.nav-links').show();
        $('.nav-links').animate({
            width: '245px'
        });
    });
    $('#menu-close').click(function () {
        $('.nav-links').animate({
            width: '0'
        });
    });

    $('.nav-links li').click(function () {
        $('.nav-links li').removeClass('active');
        $(this).addClass('active');
    });


    function isMobile() {
        return window.innerWidth <= 640;
    }

    $('.nav-links li').click(function () {
        if (isMobile()) {
            $('.nav-links').hide();
        };
    });

    $('.meet-btn a').click(function () {
        $('.nav-links .about-active').addClass('active');
        $('.nav-links .home-active').removeClass('active');
    });

});

