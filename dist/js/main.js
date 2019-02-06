<<<<<<< HEAD
document.getElementById('toggleMenu').onclick = function () { 
	document.getElementById('mainMenu').classList.toggle('open'); 
	this.classList.toggle('open'); 
} 

document.getElementById('seacrh').onclick = function () { 
	document.getElementById('seacrhBlock').classList.toggle('open'); 
} 

window.onload = function() {
	 //setTimeout(function(){
=======
window.onload = function() {
	// setTimeout(function(){
>>>>>>> 8c6975cf4a5cc878fea55ce1dc06eff8df29285b
		var preloader = document.getElementById('preloader');
		if(!preloader.classList.contains('out')) {
			preloader.classList.add('out');
		}
<<<<<<< HEAD
	 //}, 1000);
};	



=======
	// }, 1000);
};	

>>>>>>> 8c6975cf4a5cc878fea55ce1dc06eff8df29285b
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