$(function() {
	$( 'body' ).showlightbox();
	$( '#sc-lightbox' ).fadeIn();
	
	$( 'article p a' ).on( 'click', function() {
        var $link = $( this );
        var linkID = $link.attr( 'id' );
		console.log(linkID);
        $( 'body' ).showlightbox();
		$( '#' + linkID + '-lightbox' ).fadeIn();
	});

	$( '#site-overlay > h1' ).on( 'click', function() {
		$( 'body' ).closelightbox();
	});
});