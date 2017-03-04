$(document).ready(function () {
	setInterval('cycleImages()', 5000);
	menuTopOnScroll();
});

$headerDefaultPos = $('.header').position().top;

function cycleImages () {

	var $active = $('.image-wrapper .active');
	var $next = ($active.next().length > 0) ? $active.next() : $('.image-wrapper .slides:first');
	$next.css('z-index',2);
	$active.fadeOut(1500,function(){
	  $active.css('z-index',1).show().removeClass('active');
      $next.css('z-index',3).addClass('active');
    });
}

function menuTopOnScroll () {

	$(window).scroll(function () {

		if ($(window).scrollTop() > $('.header').position().top) {
			$('.header').addClass('onTop');
		}

		if ($(window).scrollTop() < $headerDefaultPos) {
			$('.header').removeClass('onTop');
		}

	});

}

