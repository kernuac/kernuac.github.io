/*(function () {
    document.getElementById('Home').classList.add('active');
    document.querySelector("body > nav > ul").addEventListener('click', function (e) {
        var elements = [].slice.call(document.querySelectorAll('body > main > section'));
        elements.map(function (element) { element.classList.remove('active')});
        var target = e.target.getAttribute('href').substr(3);
        if(target === '') {
            target = 'Home';
        }
        var element = document.querySelector('body > main > section#'+target);
        element.classList.add('active');
        
    });
})();
*/

var App = (function (Router) {
    var api = {};
    api.init = function () {
        Router.init();
        menuBarInit();
    };
    var menuBarInit = function () {
        document.querySelector('body > nav').addEventListener('click',
        function (ev) {
            var target = ev.target;
            switch(true) {
                case target.classList.contains('tg-menu-button'):
                    document.querySelector('body > nav > ul').classList.add('active');
                    break;
                case target.nodeType === 'A':
                    break;
                default:
                    document.querySelector('body > nav > ul').classList.remove('active');
                   
           } 
        });
    };
    
    return api;
})(Router);

document.addEventListener('DOMContentLoaded', App.init);
