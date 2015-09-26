$(document).ready(function() {

    $(".navbar-collapse").height($("#main").height());

    $('.burger-menu').sidr({
   	    name: 'nav-menu',
  		side: 'right',
  		speed: 400,
  		forceclick: true,
  		onOpen: function() {
  				  $('.burger-menu').hide();
  				  $('.search-icon').hide();
  				},
  		onClose: function() {
  				  $('.burger-menu').show();
  				  if (!$('.search-field').is(':visible')) {
  				  	$('.search-icon').show();
  				  }
  				}
	});

	$('.close-menu').click(function(e) {
		e.preventDefault();
		$.sidr('close', 'nav-menu');
	});

	$('.search-btn').click(function(e) {
		$('.search-btn').hide();
		$('.search-field').show()
		$('#search-query').val('').focus();
	});

	$('.close-search').click(function(e) {
		$('.search-field').hide();
		$('.search-btn').show();
		$('#search-results').hide();
	});

	$('#search-query').lunrSearch({
      indexUrl: '/assets/index.json',
      results : '#search-results',
      entries : '.entries',
      template: '#search-results-template'
    });

});