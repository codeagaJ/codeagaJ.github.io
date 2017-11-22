$(window).scroll(function() {
    navAddClass();
});

function navAddClass() {
    var navHeight = $('#main-nav').height();
    console.log(navHeight);
    
    var windoSrollPosition =$(window).scrollTop();
    console.log(windoSrollPosition);
    if(windoSrollPosition >= navHeight) {
        $('#main-nav').addClass('scrolled');
    }else {
        $('#main-nav').removeClass('scrolled');
    }
}


$(document).ready(function() {
    $( '#carousel-example-generic').carousel({
        interval:2000,
        pause: 'hover',
        wrap: false
    });
})


$(document).ready(function() {
   $('#btn-section').click(function() {
     $('#show').toggle(2000);  
   });
    
});

