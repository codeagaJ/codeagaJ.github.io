$(function() {
    /*Pobieranie tekstu*/
    
    var tekstParagrafuPierwszego = $('#paragraf').text();
    console.log(tekstParagrafuPierwszego);
    
 /*   Dodawanie tekstu*/
    $('.paragraf').text(tekstParagrafuPierwszego);
    
    /*Dodawanie HTML*/
    $('.paragranext').html('To jest<strong>paragraf</strong> z dodanym <br> HTML');
    
    /*Dodawanie treści na końcu selektor*/
    $('.paragranext').append('Treśc na końcu selektora');
    
    /*Dodanie treści za selektorem*/
    $('.paragranext').after('Treść za selektorem');
    
    /*usuwanie elementów i jego zawartości*/
    $('strong').remove();
    
    /*Uswanie tylko zawartości elementu*/
    $('.paragraf').empty();
    
    /*Dodawanie klasy*/
    $('h1').addClass('blue');
    
    /*Dodawanie atrybotu*/
    
    $('h1').attr('imie', 'Marcin');
    
    
});