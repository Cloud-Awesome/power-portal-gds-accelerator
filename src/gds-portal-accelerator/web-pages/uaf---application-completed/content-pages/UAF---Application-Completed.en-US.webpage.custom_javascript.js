<script type="text/javascript">
		$(document).ready(
			function() {
				$("input#InsertButton").hide();
				$("input#InsertButton").insertAfter("input#UpdateButton");
				$("input#InsertButton").removeClass("btn-primary");
				$("input#InsertButton").addClass("button submit-btn");
			}
		)

    $("#fco_contactaddress").change(
			function() {
				var selectedRadio = $("input[type=radio]:checked");
				
				$("#fco_contactaddressid").attr("value",selectedRadio.attr("id"));
				$("#fco_contactaddressid_entityname").attr("value","fco_contactaddress");
				$("#fco_contactaddressid_name").attr("value",selectedRadio.attr("data-address"));
				
			}
  );
  
  $("#collectionAddress").change(
    function() {
      var selectedRadio = $("input[type=radio]:checked");
			var lookupAttribute = $("#fco_uafcollectionaddress");
			
			lookupAttribute.val(selectedRadio.id);
			
			var createNewForm = $("#new_address_form")
				
			if(selectedRadio.val() == "0") {
				// Show
				createNewForm.show();
				
				$("input#InsertButton").show();
				$("input#UpdateButton").hide();
			} else {
				// Hide
				createNewForm.hide();
				
				$("input#InsertButton").hide();
				$("input#UpdateButton").show();
			}
    }
  );
</script>