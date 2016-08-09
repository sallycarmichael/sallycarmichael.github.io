//MODAL//
// when the user clicks on the .trigger button
$('.trigger').on('click', function () {
	// add the .show-modal class to the .modal
	$('.modal').toggleClass('show-modal');
});



//HAMBURGER NAV/

// When the user clicks on the hamburger-icon
$('.hamburger-icon').on('click', function (e) {

	// Prevent the default action for anchors (page reload)
  e.preventDefault();

  // Use jQuery to toggle the active class on the hamburger-icon that was clicked
  $(this).toggleClass('active');
});


//REPLACE INPUTS//



// select the form, when user submits form 
$('input[type="submit"]').on('click', function (e) {
	// prevent the default 	
	e.preventDefault();

	// get val from noun1 and store in variable n1
		var n1 = $('#noun1').val();


	// find the element with class noun1 and use html method to update to the n1 variable
		$('.noun1').html(n1);


	// add reveal class to quote1
		$('#quote1').removeClass('hide');

	// add hide class to .form
		$('.form').addClass('hide');

	// change background color by adding .bluebg class
		$('body').addClass('bluebg');



});