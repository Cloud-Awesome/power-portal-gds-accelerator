$(document).ready(function() {
  $("#fco_value").parent().hide();
  $("#fco_name").parent().parent().append("<div><hr/>" + $("#fco_value").val() + "</div>");
})