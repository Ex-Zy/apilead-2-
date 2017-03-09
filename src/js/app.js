//=include lib/jquery.min.js
//=include lib/jkit.min.js
//=include lib/svgxuse.min.js
//=include ../../bower_components/fullpage.js/vendors/scrolloverflow.min.js
//=include ../../bower_components/fullpage.js/vendors/jquery.easings.min.js
//=include ../../bower_components/fullpage.js/dist/jquery.fullpage.min.js

$(function() {
	'use strict'
	
	//=include partial/menu.js
	//=include partial/fixedTopper.js
	//=include partial/popup.js
	//=include partial/parallax.js
	$('#fullpage').fullpage({
		//Custom selectors
		sectionSelector: '.section',
		slideSelector: '.slide',
		scrollOverflow: true,
		verticalCentered: true,
	});
})
