$(document).ready(
	function() {
		
		$("#error-validation").append($(".error-summary"));
		$(".form-custom-actions").prepend($("#page-copy"));		
		showHideEntryDates();
		
		$("#fco_haveyoucompletedorbookedyoursafetraining").change(
			function() {
				showHideEntryDates();
			}
		);
		
	}
);

function showHideEntryDates() {
	var selectedRadio = $("input[type=radio]:checked");
	var createNewForm = $("#new_address_form")
	
	var completedDate = $("#fco_safetrainingbookeddate").parent().parent();
	var bookedDate = $("#fco_safetrainingcompleteddate").parent().parent();
		
	if(selectedRadio.length == 0) {
		completedDate.hide();
		bookedDate.hide();
	} else if(selectedRadio.val() == "805500000") {
		// Show
		completedDate.hide();
		bookedDate.show();
	} else {
		// Hide
		completedDate.show();
		bookedDate.hide();
	}
}