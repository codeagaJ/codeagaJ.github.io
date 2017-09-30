

$(function() {
  $('#button').click(function() {
    $('div').animate({'left': '100px', 'width': '100px', 'height': '100px'},3000,
    function() {
      $('div').addClass('blue');
        $('h2').animate({'fontSize': '1em'},5000,
        function() {
        $('h2').text('Animacja zakończona')
      });
    });
  });
});







