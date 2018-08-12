$(function () {
    $(document).scroll(function () {
      let $nav = $("header");
      $nav.toggleClass('scrolled', $(this).scrollTop() > ($(window).height() - $nav.height()));
    });
  });
  $(function () {
    $(document).scroll(function () {
      let $nav = $("header");
      $nav.toggleClass('scrolled-half', $(this).scrollTop() > ($nav.height()));
    });
  });

  $("body").quietflow({
    theme : "bouncingBalls",
    specificColors : [
      "rgba(255, 10, 50, .5)",
      "rgba(10, 255, 50, .5)", 
      "rgba(10, 50, 255, .5)"
    ]
  })