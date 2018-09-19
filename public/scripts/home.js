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

// If the browser is mobile
if(!( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )) {
$(function(){
    skrollr.init({
    forceHeight: false
  });
});
}
