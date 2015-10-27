/*!
 * Tabs v1.0
 * Created by Andy Tran (http://andytran.me)
 * Copyright 2015 Andy Tran.
 * Licensed under MIT (https://github.com/andyhqtran/UILibrary/blob/master/LICENSE)
 */

$(document).ready(function () {

  // Tabs
  $('.tabs-header a').on('click', function (e) {
    e.preventDefault();

    var tabId = $(this).attr('tab-id');

    // Remove Active State
    $('.tabs-header a').stop().parent().removeClass('active');

    // Add Active State
    $(this).stop().parent().addClass('active');

    // Remove Active Class
    $('.tab').stop().fadeOut(300, function () {
      $(this).removeClass('active');
    }).hide();

    // Add Active Class
    $('.tab[tab-id="' + tabId + '"]').stop().fadeIn(300, function () {
      $(this).addClass('active');
    }).show();
  });

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