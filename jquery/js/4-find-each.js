
$(function() {
    /*Wybieranie elementu z kolekcji za pomocą metody eq()*/
    
    $('body').find('p').eq(1).css('color', 'green');
    
//    Petla each dodająca do paragrafów kalse z kolejnym numerem
    $('p').each(function(){
        $(this).addClass('paragraf-' + index);
    });
    
});