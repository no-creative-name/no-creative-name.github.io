$(document).ready(function () {
	setInterval('cycleImages()', 5000);
	menuTopOnScroll();
	videoFitter();
	hideSocialOnBottom();
});

$headerDefaultPos = $('.header').position().top;

function cycleImages () {

	var $active = $('.image-wrapper .active');
	var $next = ($active.next().length > 0) ? $active.next() : $('.image-wrapper .slides:first');
	$next.css('z-index',2);
	$active.fadeOut(1500,function () {

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

function hideSocialOnBottom () {

	$(window).scroll(function () {

		if (isElementInViewport('social-media-container-bottom')) {

			$('#social-media-container-top').fadeOut('fast');

		}

		else {

			$('#social-media-container-top').fadeIn('fast');

		}
	});

}

function videoFitter () {

	$(window).resize(function () {

		$vidWidth = $('#video-wrapper iframe').width();
		$('#video-wrapper iframe').height($vidWidth/(16/9));

	});
}

function isElementInViewport(el) {
	
	var element = document.getElementById(el);
	var rect = element.getBoundingClientRect();
	var html = document.documentElement;

	return (
	    rect.top >= 0 &&
	    rect.left >= 0 &&
	    rect.bottom <= (window.innerHeight || html.clientHeight) &&
	    rect.right <= (window.innerWidth || html.clientWidth)
	);

}

