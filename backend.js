var searchTerm;
var beginDate;
var endDate;

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '' + $.param({
    'api-key': "b9f91d369ff59547cd47b931d8cbc56b:0:74623931",
    "q": searchTerm, 
    "begin_date":beginDate,
    "end_date" : endDate 
});
$.ajax({
    url: url,
    method: 'GET',
}).ajax.call(searchTerm, beginDate, endDate);
console.log(searchTerm);
console.log(beginDate);
console.log(endDate);