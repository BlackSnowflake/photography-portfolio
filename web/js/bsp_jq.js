	
//var $ = jQuery.noConflict();
$(document).ready(function(){
	
$('.fade').fadeIn(1000, 'swing');

/*
$('#expand').click(function(){	
		$('html, body').animate({
			scrollTop: $(".rows").offset().top
		}, 
		800);			
}); 

$('.btn_up').click(function(){
	$('html, body').animate({
			scrollTop: $(".main").offset().top
		}, 900);
});
*/	
$('.expander').click(function(){
	$(this).fadeOut(400, 'swing', function(){
		$('.contracter').fadeIn(500, 'swing');
	});
	$('.content').addClass('content_dwn');
	$('.header').addClass('hd');
	
});
	
$('.contracter').click(function(){
	$(this).fadeOut(400, 'swing', function(){
		$('.expander').fadeIn(500, 'swing');
	});
	$('.content').removeClass('content_dwn');
	$('.header').removeClass('hd');
	
});
	
	
	
$('#expand').click(function(){	
	$(this).toggleClass('box_coll');
	$('.content').toggleClass('content_dwn');
	$('.header').toggleClass('hd');
	
});
		
    var resizeTimer; // Set resizeTimer to empty so it resets on page load
	
	var bg_images = ['flower-bg.jpg', 'star-bg.jpg', 'sunset-bg.jpg', 'venice-steps-bg.jpg', 'winter-sunrise-bg.jpg'];
 	
	$('.main').css({'background-image': 'url(images/page-bg/' + bg_images[Math.floor(Math.random() * bg_images.length)] + ')'});

	
    function onResize() {			 
    }

    // On resize, run the function and reset the timeout
    // 250 is the delay in milliseconds. Change as you see fit.
    $(window).resize(function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(onResize, 250);
    });

    onResize();

/*
$('.slider_expand_arrow').click(function(){
	$('.row').css({top:'0'});
});
	
$('#mn_left').click(function(){
	//$('.menu_left').fadeIn('fast');
	$('.menu_left').toggleClass('swing-out-left-bck  swing-in-left-fwd');
});	

$('#mn_right').click(function(){
	//$('.menu_right').fadeOut('slow');
	$('.menu_right').toggleClass('swing-out-right-bck swing-in-right-fwd');
});
*/


}); // end ready
	
// JavaScript Document