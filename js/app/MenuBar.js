/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var MenuBar = (function () {
    var api = {};
    
    api.init = function ()
    {
        api.nav = document.querySelector('body > nav');
        setEvents();
    };
    
    var setEvents = function ()
    {
        if( ! api.nav ) {
            return false;
        }
        
        api.nav.addEventListener('click', onClickEvent );
    };
    
    var onClickEvent = function (ev) 
    {
        var element = ev.target;
        if( element.classList.contains( 'tg-menu-button' ) ) {
            document.querySelector('body > nav > ul').classList.add('active');
        } else {
            document.querySelector('body > nav > ul').classList.remove('active');
        }
    };
    return api;
})();