$(document).ready(function() {

    function closeSidebarMenu() {
        $.sidr('close', 'nav-menu');
    }

    function hideSearchField() {
        $('.search-container').hide();
        $('.search-btn').show();
        $('#search-results').hide();
        $('#search-field').unbind('keyup');
    }

    function showSearchField() {
        $('.search-btn').hide();
        $('.search-container').show();
        $('#search-field').val('').focus();
        $('#search-field').bind('keyup', function(event) {
            // key code 27 is for ESC
            if (event.keyCode === 27) {
                hideSearchField();
            }
        });
    }

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
            // only show the search icon if the search field is hidden
  				  if (!$('.search-container').is(':visible')) {
    				  	$('.search-icon').show();
  				  }
				}
  	});

    $('#search-field').lunrSearch({
        indexUrl: '/assets/index.json',
        results : '#search-results',
        entries : '.entries',
        template: '#search-results-template'
    });

    // Sidebar should have the height of the main page content
    $(".navbar-collapse").height($("#main").height());

  	$('.close-menu').click(function(e) {
    		closeSidebarMenu();
  	});

  	$('.search-btn').click(function(e) {
        closeSidebarMenu();
        showSearchField();
  	});

  	$('.close-search').click(function(e) {
    		hideSearchField();
  	});

});