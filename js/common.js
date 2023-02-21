$(document).ready(function() {
  $('body').append('<div id="nav" class="mb-3"></div>');

  ['nav'].forEach(element => {
    $.get(element + '.html').done(function(data) {
      $('#' + element).html(data);
    })
  });
});
