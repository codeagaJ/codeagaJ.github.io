

$(function() {

    $('#button').click(function() {
        $('div').animate({'left': '100px', 'width': '100px', 'height': '100px'},3000,
        function(){
        $('div').addClass('blue');
        $('div').text('Animation end');
//        $('h2').text('end');
        
        
                            
        });
         
    });    
});

/*$(function() {
    $( "#button" ).click(function() {
  $( "div" ).animate({ left: "100px",width: '100px',height: '100px' }, 3000, 
  function() {
    $("div").addClass("blue");
    $( "div").after( "<div>Animation complete.</div>" );
  });
});
})*/



/*$(function() {
    $('#button').click(function() {
        $('div').animate({left: 100px, width: '100px', height: '100px'},3000),
        
        $('div').hover(
        function () {
            $(this).css({ backgroundColor: 'red' }); 
        },
        function () {
            $(this).css({ backgroundColor: 'blue' });
        }
    );
    
    });
});*/


