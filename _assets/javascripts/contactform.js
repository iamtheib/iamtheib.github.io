$(document).ready(function() {

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