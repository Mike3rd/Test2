// Custom JS goes here ------------

jQuery(document).ready(function($) {

	// wrap blog article elements on archive pages
	$('.et_pb_post').contents().filter(function() {
	    return this.nodeType == 3 && $.trim(this.nodeValue).length;
		})
		.wrap('<p class="post-content">');

	$('.blog .et_pb_post, .archive .et_pb_post, .search .et_pb_post').each(function () {
		$('>:not(a)', this).wrapAll('<div class="wrapped"></div>');
	});

});