/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var MenuBar = ( function () 
{
    
    var api = {};
    var nav = {};

    api.init = function () {
        nav = document.querySelector( '.navbar-main' ) || false;
        setEvents();
    };
    
    var setEvents = function () {
        if( ! nav ) {
            return false;
        }
        
        nav.addEventListener('click', onClickEvent );
    };
    
    var onClickEvent = function ( ev ) {
        var element = ev.target;
        
        if( element.classList.contains( 'toggle-button' ) ) {
            var subMenu = document.querySelector( '#'+element.dataset.toggle )
            toggle( subMenu );
        } 
    };

    var toggle = function ( element ) {
        if( element.classList.contains('active') ) {
            element.classList.remove('active');
        } else {
            element.classList.add('active');
        }
    }
    return api;

})();

export  { MenuBar }