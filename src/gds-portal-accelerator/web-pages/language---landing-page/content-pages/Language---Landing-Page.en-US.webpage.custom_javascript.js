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
				$("#speaker-slot-form").attr("href", $(".notes a:contains('Language')").attr("href"));
				$(".notes").hide();
			}
		)
	}
);