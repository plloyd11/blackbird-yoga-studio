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

$(document).ready(function() {
    $(".animsition").animsition({
        inClass: 'fade-in',
        outClass: 'fade-out',
        inDuration: 1500,
        outDuration: 800,
        linkElement: '.animsition-link',
        // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
        loading: true,
        loadingParentElement: 'body', //animsition wrapper element
        loadingClass: 'animsition-loading',
        loadingInner: '', // e.g '<img src="loading.svg" />'
        timeout: false,
        timeoutCountdown: 5000,
        onLoadEvent: true,
        browser: ['animation-duration', '-webkit-animation-duration'],
        // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
        // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
        overlay: false,
        overlayClass: 'animsition-overlay-slide',
        overlayParentElement: 'body',
        transition: function(url) {
            window.location.href = url;
        }
    });
});

(function($) {
  (function() {
      $('.team--individual-img').on('mouseenter', '.team-image', function() {
          var teamName = $(this).data('name');
          $(this).attr('src', '/img/team/' + teamName + '-fun.jpg');
      }).on('mouseleave', '.team-image', function() {
          var teamName = $(this).data('name');
          $(this).attr('src', '/img/team/' + teamName + '.jpg');
      });
  }());
}(jQuery));
