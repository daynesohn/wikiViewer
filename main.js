var results = [],
    searchInput = document.querySelector('.search'),
    search = document.querySelector('.search'),
    $html = $('.matches'),
    articles,
    desc,
    url;

function findMatches() {

  $('.matches').empty();

  var searchTerm = search.value;

  $.ajax({
    url: 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=' + searchTerm + '&callback=?',
    dataType: 'json',
    success: function(results) {
      var articles = results[1],
          desc = results[2],
          url = results[3];

      a = 0;
      while (a < articles.length) {
        $('.matches').append('<li>' + articles[a] + ' - ' + desc[a] + ' - ' + '<a href="' + url[a] + '" target="_blank">Link</a>' + '</li>');
        a++;
      }
    }
  })
}

var enter = document.getElementById("wiki");
enter.onkeyup = function(e){
    if(e.keyCode == 13){
       findMatches();
    }
}

//$('input').on('keyup', findMatches);
