
//$(document).ready(function() {
//    
//});
//
//$(window).scroll(function() {
//    navAddClass();
//});
//
//function navAddClass() {
//    var navHeight = $('#nav').height();
//    console.log(navHeight);
//    
//    var windoSrollPosition =$(window).scrollTop();
//    console.log(windoSrollPosition);
//    if(windoSrollPosition >= navHeight) {
//        $('#nav').addClass('scrolled');
//    }else {
//        $('#nav').removeClass('scrolled');
//    }
//}



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
$(document).ready(function() {
    $( '#carousel-example-generic' ).carousel({
        interval:2000,
        pause: 'hover',
        wrap: false
    });
})

$(document).ready(function() {
   $('.down').click(function() {
     $('#show').slideDown(2000);  
   });
    $('.up').click(function() {
       $('#show').slideUp(2000); 
    });
});