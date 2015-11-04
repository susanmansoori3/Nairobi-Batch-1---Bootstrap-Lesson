$(document).ready(function() {
	$("h1").mouseenter(function(){
						$(this).addClass('animated shake');
					})
					.mouseleave(function(){
						$(this).removeClass('animated shake');
					});
	// Some people represent the event parameter as 'e'
	// this is a naming shortcut 
	$('#contact-form').on('submit', function(e){
		// Place event handling logic here
		url = '/';
		data = $(this).serialize();

		$.post(url, data)
		 .done(function() {
				// if the data was submitted successfully: alert('You are logged in');
				alert('You are logged in');		 	
		 }).fail(function() {
				// if the data was submitted and there was an error: alert('Ooops. Something went wrong');
				alert('Ooops. Something went wrong'); 	
		 });


		// Prevents the default behaviour of the form
		e.preventDefault();
	});

});