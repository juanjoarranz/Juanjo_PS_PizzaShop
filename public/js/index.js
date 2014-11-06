// index.js
(function () {

    "use strict";

    /**
     * Submits an order
     * @param parameters
     */
    function submitOrder( parameters ) {
        var validate = parameters.validate;
        var size = parameters.size;
        var crust = parameters.crust;
        var toppings = parameters.toppings;
        alert( "not implemented" );
    }

    $( "#orderForm" ).on( "submit", function () {
        //addOrder({})

        //addOrder()

        return false;
    } );

})();