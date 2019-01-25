window.onload = function() {
	// setTimeout(function(){
		var preloader = document.getElementById('preloader');
		if(!preloader.classList.contains('out')) {
			preloader.classList.add('out');
		}
	// }, 1000);
};	

$('.head-slider').slick({
	dots: true,
	infinite: true,
	speed: 500,
	fade: true,
	cssEase: 'linear',
	prevArrow: '<i class="slick-prev icon-chevron-left"></i>',
	nextArrow: '<i class="slick-next icon-chevron-right"></i>',
	responsive: [
		{
     		breakpoint: 768,
     		settings: {
				arrows: false
	     		}
 		}
	]
});