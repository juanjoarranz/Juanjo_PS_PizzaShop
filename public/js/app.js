// app.js

(function () {
    "use strict";

    var x = 2;

    var PizzaApp = angular.module( "PizzaApp", ["ngRoute"] );

    PizzaApp.config( function ( $routeProvider ) {
        $routeProvider.when( '/', {
            templateUrl : 'templates/order.tmpl.html',
            controller  : 'OrderController',
            controllerAs: 'order'
        } );

        $routeProvider.when( '/status', {
            templateUrl : 'templates/status.tmpl.html',
            controller  : 'StatusController',
            controllerAs: 'status'
        } );

        $routeProvider.otherwise( {redirectTo: '/'} );

    } );

    PizzaApp.controller( "OrderController", [function () {
        var order = this;
        order.orderCount = 0;
        order.description = 'Amazing';

        order.addOrder = function () {
            order.orderCount++;
        };
    }] );

    PizzaApp.controller( 'StatusController', [function () {
        var status = this;

        status.steps = [
            {
                num : 1,
                name: 'Make Pie'
            },
            {
                num : 2,
                name: 'Bake Pie'
            },
            {
                num : 3,
                name: 'Box Pie'
            },
            {
                num : 4,
                name: 'Queue Pie'
            },
            {
                num : 5,
                name: 'Deliver Pie'
            }
        ];

        status.currentStep = 2;

    }] );

    /**
     * @ngdoc directive
     * @name jaPizzaBar
     * @description Show a pizza bar
     */
    PizzaApp.directive( 'jaPizzaBar', function () {
        return {
            link    : function ( scope, element, attrs ) {
                element.text( 'This is the status bar' );
            },
            restrict: "E"
        };
    } );

}());