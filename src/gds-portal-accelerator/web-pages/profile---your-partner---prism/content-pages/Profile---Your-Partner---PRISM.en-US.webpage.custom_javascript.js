$(document).ready
(
	function() {
		displayWarningText();
	}
); 

function displayWarningText() {	
	var registeredOnPrism = $("input[type=radio]:checked");
	var warningText = $("#prism-warning-text")
	
	if(registeredOnPrism.val() == "0") {
		// Show
		$(".entity-form").append(warningText);
		warningText.show();
	} else {
		// Hide
		warningText.hide();
	}
	
	$("#fco_willyourpartnerberegisteredonprsim").change(function() {
		displayWarningText()
	});	
	
}