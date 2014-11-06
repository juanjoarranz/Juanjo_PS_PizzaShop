/**
 * Created by Juanjo on 04/11/2014.
 */

(function () {

    var http = require( 'http' );

    var express = require( 'express' );
    var app = express();

    app.use( express.static( __dirname + '/public' ) );

    var hb = require( 'express-handlebars' );
    app.engine( 'handlebars', hb() );
    app.set( 'view engine', 'handlebars' );

    app.get( '/', function ( req, res ) {
        res.render( 'home',
            {
                title  : 'Hello from WebStorm',
                message: 'Hi there!'
            }
        );
    } );

    //app.engine( 'html', require('jade') );
    //app.engine('html', require('jade').renderFile);
    //app.engine('html', require('express-handlebars')().renderFile);
    //app.set ( 'view engine', 'html');
    //app.get( '/', function ( req, res ) {
    //    res.render('test');
    //} );

    http.createServer( app ).listen( 3000 );

}());

