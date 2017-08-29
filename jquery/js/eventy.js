$(function() {
   /*pojedyncze zdarzenie na paragrafie*/ 
    
    $('p').click(function(){
      $(this).css('color', 'orange');  
    });
    
    /*grupa zdarzeń na nagłówku*/
    $('h1').on({
        'mouseover': function(){
            $(this).css('color', 'red');
        },
        'mouseleave': function() {
            $(this).css('color', 'inherit');
        }
        
    });
});