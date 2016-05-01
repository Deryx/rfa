$(function() {
	$( 'body' ).showlightbox();
	$( '#an-lightbox' ).show();

	$( 'body' ).on( 'click', function() {
		$( '#site-overlay' ).closelightbox();
	});
});