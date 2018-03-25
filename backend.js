
// Setup variable
var searchTerm = '';
var startYear = 0;
var endYear = 0;
var authKey = 'b9f91d369ff59547cd47b931d8cbc56b:0:74623931';
var numberRecord;
var queryUrlBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key="+authKey;
//Count article number

var articleCounter =0;

//Function 
function runSearch(number, queryUrl) {
    $('#articleSection').empty();
    $.ajax({url: queryUrlBase, method:'GET'})
    .then(function (NYTData) {
        for (var i = 0; i < number; i++) {
            //console.log(NYTData.response.docs[i].headline.main);
            //Dumping data to HTML
            var article = $('<div>');
            article.addClass('well');
            article.attr('id','articleWell-'+i);
            $('#articleSection').append(article);

            $('#articleWell-'+i).append(`<h3>${NYTData.response.docs[i].headline.main}</h3>`);
            $('#articleWell-'+i).append(`<p>${NYTData.response.docs[i].section_name}</p>`)
            $('#articleWell-'+i ).append(`<p>${NYTData.response.docs[i].byline.original}</p>`);
            $('#articleWell-'+i).append(`<p>${NYTData.response.docs[i].pub_date}</p>`);
            $('#articleWell-'+i ).append(`<a href="${NYTData.response.docs[i].web_url}">${NYTData.response.docs[i].web_url}</a>`);
        }
    })
}

//Main process 
$("#searchBtn").on("click", function(){
    // alert("test");
    //Get the search Term
    var searchTerm = $('#search').val().trim();
    // console.log(searchTerm);
    //Get the new URL
    var newURL = queryUrlBase + '&q=' + searchTerm;
    //Get the number of record
    numberRecord = $('#numRecords').val();
    console.log(numberRecord);
    //Get the start & end Year
    startYear = $('#startYear').val().trim();
    endYear = $('#endYear').val().trim();
    if (parseInt(startYear)) {
        startYear = startYear + '0101';
        newURL = newURL + '&begin_date' + startYear;
    }
    if (parseInt(endYear)) {
        endYear = endYear + '0101';
        newURL = newURL + '&end_date' + endYear;
    }
    console.log(newURL);
    // 
    runSearch(numberRecord,newURL);
});

