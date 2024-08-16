(function(){

/**
 * Init
**/
tabDisplay();

/**
 * Load
**/

/**
 * Resize
**/


/**
 * Functions
**/
function tabDisplay() { 
	$('.tab-display[data-tab="defaultTab"] .tab-text').each(function () {
		$(this).click(function () {
			$(this).parent().addClass("current").siblings("li").removeClass("current"); 
			$(this).closest('.tab-display').next('.tab-contents').find(".tab-content").removeClass('on');
			var currenteTab =$(this).attr("data-type");
			$("#" + currenteTab).addClass('on');
		});
	});
}

})();