$(document).ready(function() {

    function closeSidebarMenu() {
        $.sidr('close', 'nav-menu');
    }

    $('.burger-menu').sidr({
   	    name: 'nav-menu',
    		side: 'right',
    		speed: 400,
    		forceclick: true,
    		onOpen: function() {
  				  $('.burger-menu').hide();
				},
    		onClose: function() {
  				  $('.burger-menu').show();
				}
  	});

    // Sidebar should have the height of the main page content
    $(".navbar-collapse").height($("#main").height());

  	$('.close-menu').click(function(e) {
    		closeSidebarMenu();
  	});

});