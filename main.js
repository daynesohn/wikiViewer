function findMatches() {

  $('.matches').empty();

  var search = $('.search'),
      searchTerm = search.val();

  $.ajax({
    url: 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=' + searchTerm + '&callback=?',
    dataType: 'json',
    success: function(results) {
      var articles = results[1],
          desc = results[2],
          url = results[3];

      a = 0;
      while (a < articles.length) {
        $('.matches').append('<a href="' + url[a] + '" class="urls" target="_blank"><li><span class="article col-md-6">' + articles[a] + '</span><span class="description col-md-6">' + desc[a] + '</span></li></a>');
        a++;
      }
    }
  })
}

var enter = $('.search');
enter.keyup( function(e) {
  if(e.keyCode == 13) {
    findMatches();
  }
})
