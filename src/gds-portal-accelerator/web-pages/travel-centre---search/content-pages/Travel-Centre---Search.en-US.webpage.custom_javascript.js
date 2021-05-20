jQuery(document).ready(function() {
    
    $("table").addClass("table-hover");
    
    $("a.btn.btn-default.btn-xs").each(function(attr) {
      var tableRow = $(this).parent().parent();
      
      tableRow.addClass("clickable-row");
      tableRow.data("href", $(this).attr("href"));
      
      $(this).parent().hide();
    });
    
    $(".clickable-row").click(function() {
      window.location = $(this).data("href");
    });
    
});