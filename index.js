var glob = require( 'glob' )
  , path = require( 'path' );

glob.sync( './dist/**/*.js' ).forEach( function( file ) {
  require( path.resolve( file ) );
});
