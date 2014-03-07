
window.Modernizr.load({

	test : Modernizr.inputtypes.color,

	nope : "javascripts/jquery.simple-color.js",

	callback : function(url, result) {

		if (!result) {

			applyColorPicker();

		}

	}
});

