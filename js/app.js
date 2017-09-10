var App = (function (Router, MenuBar, Blog) {
    var api = {};

    api.init = function () 
    {
        Router.init();
        MenuBar.init();
        Blog.init();
    };
    
    return api;
})(Router, MenuBar, Blog);

document.addEventListener('DOMContentLoaded', App.init);
