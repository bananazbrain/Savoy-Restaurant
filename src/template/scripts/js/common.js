$(document).ready(function(){
	let cls = {
		toggle  : '--toggle',
		selected: '--selected',
		checked : '--checked'
	}
	var ham   = $('#ham'),
			nav   = $('#nav'),
			inner = $('html, body');

	ham.on('click', function(event) {
		ham.toggleClass(cls.toggle);
		nav.toggleClass(cls.toggle);
		inner.toggleClass('--no-scroll');
	});
	$('.menu__wrap').masonry({
		itemSelector: '.menu__item'
	});
})