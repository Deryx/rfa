$(function() {
	$( 'body' ).showlightbox();
	$( '#sc-lightbox' ).fadeIn();

	$( 'header > nav > ul > li > a[href^="#"]' ).on('click', function(e) {
		e.preventDefault();

		var target = this.hash;
		$target = $(target);

		$( 'html, body' ).stop().animate({
			'scrollTop': $target.offset().top
		}, 900, 'swing', function() {
			window.location.hash = target;
		});
	});

	$( 'article p a' ).on( 'click', function() {
        var $link = $( this );
        var linkID = $link.attr( 'id' );
		console.log(linkID);
        $( 'body' ).showlightbox();
		$( '#' + linkID + '-lightbox' ).fadeIn();
	});

	$( '#site-overlay' ).on( 'click', function() {
		$( 'body' ).closelightbox();
	});
});