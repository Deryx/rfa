(function ( $ ) {
	
	$.fn.remainingMortgageBalance = function( arate, term, payment, loan ) {
		var mrate = arate / 12;
		var mterm = term * 12;
		
		var numerator = loan * ( Math.pow( 1 + mrate, mrate ) - Math.pow( 1 + mrate, payment ) );
		
		var denominator = Math.pow( 1 + mrate, mterm ) - 1;
		
		return numerator / denominator;
	};
 
}( jQuery ));