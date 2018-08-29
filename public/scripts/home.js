$(function () {
    $(document).scroll(function () {
      let topbar = $("header");
      topbar.toggleClass('scrolled', $(this).scrollTop() > ($(window).height() - topbar.outerHeight()));
    });
  });
  $(function () {
    $(document).scroll(function () {
      let topbar = $("header");
      topbar.toggleClass('scrolled-half', $(this).scrollTop() > (topbar.outerHeight()));
    });
  });


/*  $("body").quietflow({
    theme : "bouncingBalls",
    specificColors : [
      "rgba(255, 10, 50, .5)",
      "rgba(10, 255, 50, .5)", 
      "rgba(10, 50, 255, .5)"
    ]
  })*/