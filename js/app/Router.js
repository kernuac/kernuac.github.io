/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var Router = (function () {
    var api = {
        page : 
            ( window.location.hash !== '' ) 
            ? window.location.hash.substr( 3 ) 
            : '',
        url: 
            window.location.href
    };
    
    var elementIsActive = function ( element ) {
        return ( element.classList.contains( 'active' ) );
    }

    var disableElement = function ( element ) {
        if( ! elementIsActive ( element ) ) {
            return false;
        }

        element.classList.remove( 'active' );
    };

    var enableElement = function ( element ) {
        if( elementIsActive( element ) ) {
            return false;
        }

        element.classList.add( 'active' );
    };

    api.dispatch = function () {
        var content = ( api.page !== '' )
            ? api.page 
            : 'Home';

        [].slice.call( document.querySelectorAll( 'section.page' ) )
            .map( disableElement );

        page = document.querySelector( '#' + content );

        if( ! page ) {
            enableElement( document.querySelector( '#error' ) );
            return false;
        }

        enableElement( page );
    };

    var onHashChange = function (ev) {
        api.page = window.location.hash.substr(3)
            ? window.location.hash.substr(3)
            :'';

        api.url = window.location.href;
        api.dispatch();
        ev.preventDefault();
    };
    
    api.init = function () {
        api.dispatch();
        window.addEventListener( 'hashchange', onHashChange  );
    };
    
    return api;
})();
