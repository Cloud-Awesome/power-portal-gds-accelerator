$(document).ready (
	function() {
		displayInlineContent();
		$("#telephone1").attr("type", "tel");
		$("#mobilephone").attr("type", "tel");
	}
); 

function displayInlineContent() {
	var contentText = $("#prism-warning-text");
	
	$(".form-custom-actions").prev().append(contentText);
	contentText.show();
}
