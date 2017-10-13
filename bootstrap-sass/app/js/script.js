$(document).ready(function () {



    $(window).scroll(function () {
        navAddClass();
    });

    function navAddClass() {
        var navHeight = $('#main-nav').height();
            console.log(navHeight);

        var windoSrollPosition = $(window).scrollTop();
            console.log(windoSrollPosition);
        if (windoSrollPosition >= navHeight) {
            $('#main-nav').addClass('scrolled');
        } else {
            $('#main-nav').removeClass('scrolled');
        }
    }

});