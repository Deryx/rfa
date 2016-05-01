$(function() {
	$( 'body' ).showlightbox();
	$( '#an-lightbox' ).fadeIn();

	$( 'body' ).on( 'click', function() {
		$( 'body' ).closelightbox();
	});
});