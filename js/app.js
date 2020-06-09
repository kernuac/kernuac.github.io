import { Router } from './app/Router.js';
import { MenuBar } from './app/MenuBar.js';
import { Blog } from './app/Blog.js';

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
