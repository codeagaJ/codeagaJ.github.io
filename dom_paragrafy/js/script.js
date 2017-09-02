$(function() {
$('#button').click(function() {
//$('p:last').hide('slow');
$('p:last').show('slow');
$('#button').after($('p:last'));
   
    
//    var pnew = document.createElement('p');
//    var text = document.createTextNode('To jest paragraf nr 1');
//    var btn = document.getElementById('button');
//    
//    pnew.appendChild(text);
//    btn.appendChild(pnew);
//    btn.after(pnew);
// 
    /*var btn = document.getElementById('button');
    var plast = document.getElementsByTagName('p')[4];
    $('p:last').show('slow');
    btn.after(plast);
    */

    
});
   
});

$(function() {
    $('#button1').click(function() {
//        $('p:first').hide('slow');
        $('p:first').show('slow');
//        $('#button').after($('p:first'));
//       $('p:first').after($('p:last'));
        $('#button').after
        
       
    });    
});

/*$(function() {

$('#button').click(function() {
      
var paragrafall = $('p'); 

for(var i =0; i< paragrafall.length; i++) {
   $('p:last').hide('slow');
    

    var pnew = document.createElement('p');
    var text = document.createTextNode('To jest nowy paragraf');
    var btn = document.getElementById('button');

    pnew.appendChild(text);
    btn.appendChild(pnew);
    btn.after(pnew);

};
    
});  
    
});*/