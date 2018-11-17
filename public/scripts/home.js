function toggleMore() {
  setTimeout(function(){
    let dots = document.getElementById("ellipsis");
    let moreText = document.getElementById("more");
    let btnText = document.getElementById("read");

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }, 300);
}

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

// Ripple

;(function (window, $) {
  
  $(function() {
    
    
    $('.ripple').on('click', function (event) {
      event.preventDefault();
      
      var $div = $('<div/>'),
          btnOffset = $(this).offset(),
          xPos = event.pageX - btnOffset.left,
          yPos = event.pageY - btnOffset.top;
      

      
      $div.addClass('ripple-effect');
      var $ripple = $(".ripple-effect");
      
      $ripple.css("height", $(this).height());
      $ripple.css("width", $(this).height());
      $div
        .css({
          top: yPos - ($ripple.height()/2),
          left: xPos - ($ripple.width()/2),
          background: $(this).data("ripple-color")
        }) 
        .appendTo($(this));

      window.setTimeout(function(){
        $div.remove();
      }, 2000);
    });
    
  });
  
})(window, jQuery);