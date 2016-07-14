Pandora.onInit(function($, ctx) {
	"use strict";

	// RADIO, CHECKBOX
	var type = ['radio','checkbox'];
	for(var t = 0;t<2;t++){
		var ty = type[t];
		$(ctx + 'input[type=' + ty + '].styled').each(function() {
			var $this = $(this).removeClass('styled');
			$this.wrap('<span class="input-'+ty+'"/>');
		});
	}
	
});