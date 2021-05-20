$("document").ready( 
	function() {
		(function ($) {
			$.each(['show', 'hide'], function (i, ev) {
				var el = $.fn[ev];
				$.fn[ev] = function () {
					this.trigger(ev);
					return el.apply(this, arguments);
				};
			});
		})(jQuery);
		
		$(".notes").on("show",
			function() {
				// Hide the icky CRM-generated document element and extract the doc download anchor
				$("#cover-sheet").attr("href", $(".notes a:contains('Passport Cover')").attr("href"));
				$("#check-list").attr("href", $(".notes a:contains('Checklist')").attr("href")); 
				$("#payment-mandate").attr("href", $(".notes a:contains('Payment Mandate')").attr("href"));
				$("#diplomatic-passport").attr("href", $(".notes a:contains('Template Diplomatic')").attr("href"));
				$("#uk-passport").attr("href", $(".notes a:contains('Template UK')").attr("href"));
				$("#blank-application").attr("href", $(".notes a:contains('Passport Template  Blank')").attr("href"));
				
				$("#diplomatic-application").attr("href", $(".notes a:contains('Passport Template Diplomatic')").attr("href"));
				$("#official-application").attr("href", $(".notes a:contains('Passport Template Official')").attr("href"));
							
				$(".notes").hide();
			}
		)
	}
);