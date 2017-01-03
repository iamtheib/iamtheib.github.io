$(document).ready(function() {

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function() {
        $('a.page-scroll').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    });

    // lQuery for page contact form validation - requires jQuery Validate plugin
    $('#contactForm').validate({
		rules: {
			_replyto: "required email",
			message: "required"
		},
		messages: {
			_replyto: {
				required: "<span class=\"text-danger\">this field is required</span>",
				email: "<span class=\"text-danger\">this email is not valid</span>"
			},
			message: "<span class=\"text-danger\">this field is required</span>"
		}
	});

});
