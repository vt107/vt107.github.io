let debug = window.location.href.includes('test=1');

$(document).ready(function() {
    // Append widgets
    $('head').append('<link rel="stylesheet" href="/css/styles.css">');
    $('body').prepend('<div id="nav" class="mb-3"></div>');

    ['nav'].forEach(element => {
        $.get(element + '.html').done(function(data) {
            $('#' + element).html(data);

            if (element === 'nav') {
                // Find active menu
                let currentUrl = window.location.pathname;

                $('.navbar-nav a').each(function() {
                    if (currentUrl === $(this).attr('href')) $(this).parent().addClass('active');

                    $(this).attr('href', $(this).attr('href') + '?test=1')
                });
            }
        })
    });
});


