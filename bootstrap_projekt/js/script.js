
$(document).ready(function() {
    
});

$(window).scroll(function() {
    navAddClass();
});

function navAddClass() {
    var navHeight = $('#nav').height();
    console.log(navHeight);
    
    var windoSrollPosition =$(window).scrollTop();
    console.log(windoSrollPosition);
    if(windoSrollPosition >= navHeight) {
        $('#nav').addClass('scrolled');
    }else {
        $('#nav').removeClass('scrolled');
    }
}



//$(document).ready(function() {
//   $('#nav').on({
//        'mouseover': function(){
//            $(this).addClass('scrolled');
//        },
//        'mouseleave': function() {
//            $(this).removeClass('scrolled');
//        }
//        
//    });
//});