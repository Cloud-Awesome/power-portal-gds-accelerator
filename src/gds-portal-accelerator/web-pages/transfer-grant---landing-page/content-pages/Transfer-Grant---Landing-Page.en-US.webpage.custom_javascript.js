$(document).ready (
	function() {
		$(".entity-form").append($("#ineligible-copy"));
		showWarningMessage();
	}
); 

function showWarningMessage() {	
	var alreadyReceivedGrant = $("input[type=radio]:checked");
	var warningText = $("#ineligible-copy");
	
	if(alreadyReceivedGrant.val() == "1") {
		warningText.show();
	} else {
		warningText.hide();
	}
	
	$("#fco_hashadtransfergrant12monthsbeforeposting").change(function() {
		showWarningMessage();
	});
}