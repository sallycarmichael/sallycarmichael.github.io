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