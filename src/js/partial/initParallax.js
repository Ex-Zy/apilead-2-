function showParallax(moveForce, rotateForce) {
	$('.perfomance').mousemove(function(e) {
		var docX = $(document).width();
		var docY = $(document).height(); 
		
		var moveX = (e.pageX - docX/2) / (docX/2) * -moveForce;
		var moveY = (e.pageY - docY/2) / (docY/2) * -moveForce;
		
		var rotateY = (e.pageX / docX * rotateForce*2) - rotateForce;
		var rotateX = -((e.pageY / docY * rotateForce*2) - rotateForce);
	    
		$('.js-parallax-bg').css({
			'left': moveX+'px',
			'top': moveY+'px',
			'transform': 'rotateX('+rotateX+'deg) rotateY('+rotateY+'deg)'
		});

		$('.js-parallax-company').css({
			'right': (moveX * 3)+'px',
			'bottom': (moveY * 3)+'px',
		});

	});
}
showParallax(5, 2);