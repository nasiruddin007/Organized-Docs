jQuery( document ).ready( function( jQuery ) {var supportsTouch = false;
if ('ontouchstart' in window) {supportsTouch = true;} else if(window.navigator.msPointerEnabled) {supportsTouch = true;}if ( supportsTouch ) {evt = window.navigator.msPointerEnabled ? 'MSPointerDown' : 'touchstart';} else {evt = 'click';}jQuery( '.menu-toggle' ).on( evt, function() {jQuery( '#organized-docs-menu' ).toggleClass( 'toggled-on' );});});