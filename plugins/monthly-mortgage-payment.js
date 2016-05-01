(function ( $ ) {
 
    $.fn.monthlyMortgagePayment = function( loan, term, arate ) {
		var mrate = arate / 12;
		var mterm = term * 12;
		
        var numerator = loan * ( mrate * Math.pow( (1 + mrate), mterm ) );
		
		var denominator = Math.pow( 1 + mrate, mterm ) - 1;
		
		return numerator / denominator;
    };
 
}( jQuery ));