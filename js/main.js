$(document).ready(function() {
	$("h1").mouseenter(function(){
						$(this).addClass('animated shake');
					})
					.mouseleave(function(){
						$(this).removeClass('animated shake');
					});

});