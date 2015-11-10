/*!
 * Ripple
 * Created by Andy Tran (http://andytran.me)
 * Copyright 2015 Andy Tran.
 * Licensed under MIT (https://github.com/andyhqtran/UILibrary/blob/master/LICENSE)
 */

$(document).ready(function () {

  // Ripple
  $('[ripple]').on('click', function (e) {
    var rippleDiv = $('<div class="ripple" />'),
      rippleOffset = $(this).offset(),
      rippleY = e.pageY - rippleOffset.top,
      rippleX = e.pageX - rippleOffset.left,
      ripple = $('.ripple');

    rippleDiv.css({
      top: rippleY - (ripple.height() / 2),
      left: rippleX - (ripple.width() / 2),
      background: $(this).attr("ripple-color")
    }).appendTo($(this));

    window.setTimeout(function () {
      rippleDiv.remove();
    }, 1500);
  });

});