$(function() {
    
    
    $('h2').click(function(){
        $(this).hide(3000);
    });
  /*Efekt hide i show*/
    $('p').hide(3000).show(3000);
    
    /*Efekt fade outi fadein*/
    $('h1').fadeOut(3000).fadeIn(3000);
    
    /**/
    $('h2').slideUp(3000).slideDown(3000);
    
   function animacja() {
       console.log('zakończono poerwszą animacje');
       
       $('h3').animate({'font-size': '1em','margin-left': '0'},2000);
   } 
    
    $('h3').animate({
        'font-size': '3em',
        'margin-left': '100px'
    },2000,animacja);
});