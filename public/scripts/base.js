$(window).on("load",function() {
	// Animate loader off screen
	$(".se-pre-con").fadeOut("slow");;
}); 

$("nav a").click(function(e)
{
	e.preventDefault();
	let anchor = $(this);
	let href = anchor.attr('href');
	$("body *").fadeOut(150, function(){
		$("body").css("background", "black");
		window.location.href = href;
	});
});

$(document).ready(function(){
	$('#nav-icon').click(function(){
		$(this).toggleClass('animate-icon');
		$('#overlay').fadeToggle();
	});
});
	$(document).ready(function(){
	$('#overlay').click(function(){
		$('#nav-icon').removeClass('animate-icon');
		$('#overlay').toggle();
	});
});