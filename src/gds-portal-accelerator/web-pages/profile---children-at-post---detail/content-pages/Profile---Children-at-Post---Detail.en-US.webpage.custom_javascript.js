$(document).ready (
	function() {
		displayInlineContent();
		if ($("#fco_lastname").val() == "Complete Details") {
		  $("#fco_lastname").val("");
		}
	}
); 

function displayInlineContent() {
	var contentText = $("#child-age-calculation");
	
	$(".form-custom-actions").prev().append(contentText);
	contentText.show();
}
