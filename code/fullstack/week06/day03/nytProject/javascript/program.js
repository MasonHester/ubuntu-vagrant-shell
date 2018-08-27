const key = "3375857beade43f6b8846d44371bd42c";
let url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
let queryString = '';
let startYear = 0;
let endYear = 0;
let numberOfArticles = 10;

const clearForm = () => {
  $(".search-term").val('');
  $(".record-count").val('');
  $(".start-year").val('');
  $(".end-year").val('');
  queryString = '';
  startYear = 0;
  endYear = 0;
  numberOfArticles = 10;
  url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + key + "$q=" + queryString +;
}

const appendTitle = (article) => {
  let headline = '';
  if (article.document_type === 'article'){
    if (article.headline.print_headline !== ''){
      headline = article.headline.print_headline;
    } else {
      headline = article.headline.main;
    }
  } else {
    headline = article.headline.main;
  }
  $("#results").append();
}

$(".clear").on("click", (e) => {
  e.preventDefault();
  clearForm();
})

$(".submit").on("click", (e) => {
  e.preventDefault();
  // $(".article-list").empty();
  console.log($(".search-term").val());
  // $(".record-count").val('');
  // $(".start-year").val('');
  // $(".end-year").val('');
  queryString = $(".search-term").val();

  // if start-year field is empty
  !$(".start-year").val()
    // yes? set startYear to 1900
    ? startYear = 1900
    // no? set startYear to a formatted version of the value of start-year
    : startYear = $(".start-year").val()
    
  // if end-year field is empty
  !$(".end-year").val()
    // yes? set endYear to a formatted version of the current year
    ? endYear = 2018
    // no? set endYear to a formatted version of the value of end-year
    : endYear = $(".end-year").val()

  url += '?' + $.param({
    'api-key': key,
    'q': queryString,
    // 'begin_date': startYear,
    // 'end_date': endYear
  });

  $.ajax({
    method: 'GET',
    url: url
  }).done((results) => {
    numberOfArticles = $(".record-count").val();
    for (let i = 0; i < numberOfArticles; i++) {
      appendTitle(results.response.docs[i]);
    }
  })
  queryString = '';
  startYear = 0;
  endYear = 0;
});