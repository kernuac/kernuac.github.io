/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var Router = (function () {
    var api = {
        page : (window.location.hash !== '') ? window.location.hash.substr(3) : '',
        url: window.location.href
    };
    
    api.dispatch = function () {
        var content = (api.page !== '')? api.page : 'Home';
        [].slice.call(document.querySelectorAll('section.page'))
                .map(function (el) { el.classList.remove('active'); });
        document.querySelector('#' + content).classList.add('active');
    };
    
    var onHashChange = function (ev) {
        api.page = window.location.hash.substr(3)?window.location.hash.substr(3):'';
        api.url = window.location.href;
        api.dispatch();
        ev.preventDefault();
    };
    
    api.init = function () {
        console.log('initializing...');
        console.log(api.page);
        api.dispatch();
        window.addEventListener('hashchange', onHashChange);
    };
    
    return api;
})();