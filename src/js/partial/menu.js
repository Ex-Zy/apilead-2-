function showMenu() {
	var menu = $('.js-menu');
	var sidebar = $('.js-sidebar');

	menu.add(sidebar).on('click', function() {
		$(this).add(sidebar).toggleClass('is-active');
	});
}

showMenu();