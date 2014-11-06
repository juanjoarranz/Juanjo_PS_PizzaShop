/**
 * Created by Juanjo on 06/11/2014.
 */

(function () {

    var gulp = require( 'gulp' );
    var jshint = require( 'gulp-jshint' );
    var uglify = require( 'gulp-uglify' );
    var concat = require( 'gulp-concat' );

    gulp.task( 'default', function () {
        //console.log( 'hello Gulp' );
        return gulp.src( './public/js/**/*.js' )
            .pipe( jshint() )
            .pipe( jshint.reporter( 'default' ) );

    } );

    var target = {
        js_watch_src : [
            './public/js/index.js',
            './public/js/app.js',
            './public/js/animal.js'
        ],
        //js_uglify_src: [
        //    './public/js/index.js',
        //    './public/js/app.js',
        //    './public/js/animal.js'
        //],
        js_concat_src: [
            './public/js/index.js',
            //'./public/js/app.js',
            './public/js/animal.js'
        ],
        js_dest      : [
            './dist',
            './dist2'
        ]
    };

    //gulp.task( 'scripts', function () {
    //    console.log( 'something changed' );
    //    return gulp.src( './public/js/*.js' )
    //        .pipe( concat( 'all-min.js' ) )
    //        .pipe( uglify() )
    //        //.pipe( gulp.dest( 'C:/dest1' ) )
    //        .pipe( gulp.dest( './dist' ) );
    //} );
    //
    //gulp.task( 'watch', function () {
    //    gulp.watch( './public/js/*.js',  ['scripts'] );
    //} );

    gulp.task( 'scripts', function () {
        console.log( 'something changed' );

        var targetStream = gulp.src( target.js_concat_src )
            .pipe( uglify() )
            .pipe( concat( 'all-min.js' ) );

        target.js_dest.forEach( function ( dest ) {
            targetStream.pipe( gulp.dest( dest ) );
        } );

        //return
        //    //.pipe( gulp.dest( 'C:/dest1' ) )
        //    .pipe( gulp.dest( target.js_dest ) );
    } );

    gulp.task( 'watch', function () {
        gulp.watch( target.js_watch_src, ['scripts'] );
    } );

}());
