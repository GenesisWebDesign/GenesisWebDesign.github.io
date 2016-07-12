document.createElement("section");
$(document).ready(function() {
  $window = $(window);

  $('section[data-type="background"]').each(function() {
    var $scroll = $(this);

    $(window).scroll(function() {
      var yPos = -($window.scrollTop() / $scroll.data('speed'));
      var coords = '50% ' + yPos + 'px';
      $scroll.css({
        backgroundPosition: coords
      });
    });
  });
});
$('button').mouseover(function() {
  $('button').removeClass('hover');
  $(this).addClass('hover');
});
$('img').mouseover(function() {
 $('img').removeClass('hover');
  $(this).addClass('hover');
});
$('#link').mouseover(function() {
 $('#link').removeClass('hover');
  $(this).addClass('hover');
});