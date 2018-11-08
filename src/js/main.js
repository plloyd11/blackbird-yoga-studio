$("header").headroom({
    "offset": 205,
    "tolerance": 5,
    "classes": {
        "pinned": "slideInDown",
        "unpinned": "slideOutUp"
    }
});

// to destroy
$("header").headroom("destroy");

// Team hover
(function ($) {
    (function () {
        $('.team--individual-img').on('mouseenter', '.team-image', function () {
            var teamName = $(this).data('name');
            $(this).attr('src', '/img/team/' + teamName + '-fun.jpg');
        }).on('mouseleave', '.team-image', function () {
            var teamName = $(this).data('name');
            $(this).attr('src', '/img/team/' + teamName + '.jpg');
        });
    }());
}(jQuery));

// Mobile Menu
$('.mobile-menu-btn').on('click', function () {
    $('.global--main-nav-right').toggleClass('mobile-menu-open');
});

// register modal component
Vue.component('modal', {
    template: '#modal-template'
})

new Vue({
    el: '#nicole',
    data: {
        showModal: false
    }
})

new Vue({
    el: '#steve',
    data: {
        showModal: false
    }
})

new Vue({
    el: '#kaelyn',
    data: {
        showModal: false
    }
})

new Vue({
    el: '#ina',
    data: {
        showModal: false
    }
})

new Vue({
    el: '#lauren',
    data: {
        showModal: false
    }
})

new Vue({
    el: '#danielle',
    data: {
        showModal: false
    }
})

new Vue({
    el: '#jen',
    data: {
        showModal: false
    }
})

new Vue({
    el: '#kathleen',
    data: {
        showModal: false
    }
})

new Vue({
    el: '#ashley',
    data: {
        showModal: false
    }
})

new Vue({
    el: '#valerie',
    data: {
        showModal: false
    }
})

new Vue({
    el: '#dana',
    data: {
        showModal: false
    }
})