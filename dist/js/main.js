document.getElementById('toggleMenu').onclick = function () { 
	document.getElementById('mainMenu').classList.toggle('open'); 
	this.classList.toggle('open'); 
	document.getElementById('header').classList.toggle('open');  
} 

document.getElementById('seacrh').onclick = function () { 
	document.getElementById('seacrhBlock').classList.toggle('open'); 
} 

window.onload = function() { 
	var preloader = document.getElementById('preloader');
	if(!preloader.classList.contains('out')) {
		preloader.classList.add('out');
	} 
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
	var selector = "*";
    var $container = $('.portfolio-items .row'); 
    var $loadMore = $('#portfolioLoadMore');
    var items = $container.find('.iso-item');
    var filteredItems = filterItems();
    var itemsMax = 6;
    var activeItem = items.slice(0, 6);
    $('.iso-item').remove();
    $container.append(activeItem);

    function filterItems() {
    	return Array.from(items).reduce((a,b) => {
			if(selector === "*") {
				return a.concat(b);
			} else {
				return $(b).attr('data-filter') === selector ? a.concat(b) : a;
			}
		}, [])
    }

    function increaseMax() {
    	itemsMax +=3;
    }

    function removeLoadMore () {
    	$loadMore.remove();
    	return filteredItems.length;
    }

    function newItems() {
    	var finalIndex = itemsMax >= filteredItems.length ? removeLoadMore() : itemsMax;
    	return filteredItems.slice(itemsMax - 3, finalIndex);
    }

    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });

    $loadMore.click(() => {
    	increaseMax(); 
    	$container
    		.isotope('remove', filteredItems)
    		.isotope('layout');
    	filteredItems = filterItems();
    	var updateItems = newItems(); 
    	$container
    		.append( newItems() )
    		.isotope( 'appended',  updateItems);
    });
 
    $('.portfolio-filter li a').click(function(){
        $('.portfolio-filter li a.current').removeClass('current');
        $(this).addClass('current');
 
        selector = $(this).attr('data-filter');
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