document.getElementById('toggleMenu').onclick = function () { 
	document.getElementById('mainMenu').classList.toggle('open'); 
	this.classList.toggle('open'); 
	document.getElementById('header').classList.toggle('open');  
} 

document.getElementById('seacrh').onclick = function () { 
	document.getElementById('seacrhBlock').classList.toggle('open'); 
} 

window.onload = function() {
	 //setTimeout(function(){ 
		var preloader = document.getElementById('preloader');
		if(!preloader.classList.contains('out')) {
			preloader.classList.add('out');
		}
	 //}, 1000);
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

$('.article-items').slick({ 
	infinite: true, 
	slidesToShow: 3,
	slidesToScroll: 3,
	prevArrow: '<i class="slick-prev icon-chevron-left"></i>',
	nextArrow: '<i class="slick-next icon-chevron-right"></i>',
	responsive: [
		{
     		breakpoint: 768,
     		settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
     		}
 		}
	]
}); 


$(window).load(function(){
    var $container = $('.portfolio-items .row');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
 
    $('.portfolio-filter li a').click(function(){
        $('.portfolio-filter li a.current').removeClass('current');
        $(this).addClass('current');
 
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    }); 
});


  $( function() {
    $( "#dialog" ).dialog();
  } );