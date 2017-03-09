function showMenu() {

	$('.js-menu').on('click', function() {
		$('body').addClass('is-open-sidebar');
	});

	$(document).click(function(e) {
		var allDocumentExeptMenuAndSidebar = !$(e.target).closest('.js-sidebar').length && 
											 !$(e.target).closest('.js-menu').length;

		if(allDocumentExeptMenuAndSidebar) {
			$('body').removeClass('is-open-sidebar');
		}
	});
}

showMenu();