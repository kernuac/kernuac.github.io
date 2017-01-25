(function () {
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
