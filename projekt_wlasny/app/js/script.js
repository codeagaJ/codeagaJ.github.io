


$(window).scroll(function() {
    navAddClass();
});

function navAddClass() {
    var navHeight = $('#main-nav').height();
    
    var windoSrollPosition =$(window).scrollTop();
    
    if(windoSrollPosition >= navHeight) {
        $('#main-nav').addClass('scrolled');
    }else {
        $('#main-nav').removeClass('scrolled');
    }
}


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

$(document).ready(function() {
   $('#btn-section').click(function() {
     $('#show').toggle(2000);  
   });
    
});


$(document).ready(function() {
    $("#image1-show").delay(2000).fadeIn(500);
    $("#image2-show").delay(3000).fadeIn(500);
    $("#image3-show").delay(4000).fadeIn(500);
    $("#image4-show").delay(5000).fadeIn(500);
    $('.paragraph-show').delay(6000).fadeIn(500);
    
});


                


