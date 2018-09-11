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
