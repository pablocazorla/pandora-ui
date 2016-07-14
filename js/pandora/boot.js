Pandora = (function($) {
	"use strict";
	var Pan = {},
		initFunctions = [];

	Pan.onInit = function(callback) {
		initFunctions.push(callback);
	};

	Pan.init = function(context) {
		var ctx = (context) ? context + ' ' : '',
			length = initFunctions.length;
		for (var i = 0; i < length; i++) {
			initFunctions[i]($, ctx);
		}
	};

	return Pan;
})(jQuery);