$(document).ready(
	function() {
		
		$("#error-validation").append($(".error-summary"));
		showHideEntryDates();
		
		$("#fco_saferefresherbookedorcompleted").change(
			function() {
				showHideEntryDates();
			}
		);
		
	}
);

function showHideEntryDates() {
	var selectedRadio = $("input[type=radio]:checked");
	
	var completedDate = $("#fco_saferefreshercompleteddate").parent().parent();
	var bookedDate = $("#fco_saferefresherbookeddate").parent().parent();
	
	if(selectedRadio.length == 0) {
		completedDate.hide();
		bookedDate.hide();
	} else if(selectedRadio.val() == "805500001") {
		completedDate.hide();
		bookedDate.show();
	} else {
		completedDate.show();
		bookedDate.hide();
	}
}