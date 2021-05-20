$(document).ready(
	function() {
		
		$("#error-validation").append($(".error-summary"));
		$(".form-custom-actions").prepend($("#page-copy"));		
		showHideEntryDates();
		
		$("#fco_safecpbookedorcompleted").change(
			function() {
				showHideEntryDates();
			}
		);
		
	}
);

function showHideEntryDates() {
	var selectedRadio = $("input[type=radio]:checked");
	var createNewForm = $("#new_address_form")
	
	var bookedDate = $("#fco_safecpbookeddate").parent().parent();
	var completedDate = $("#fco_safecpcompleteddate").parent().parent();
		
	if(selectedRadio.length == 0) { // Zip
		completedDate.hide();
		bookedDate.hide();
	} else if(selectedRadio.val() == "805500001") { // Booked
		completedDate.hide();
		bookedDate.show();
	} else { // Completed
		completedDate.show();
		bookedDate.hide();
	}
}