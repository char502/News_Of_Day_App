$(document).ready(function () {
    var url = 'https://hn.algolia.com/api/v1/search?query=javascript';
    $.getJSON(url, function (data) {

        var currentQuote = '';
        var quotes = data.hits;

        $('.read').on('click', function () {
            currentQuote = quotes[Math.floor(Math.random() * quotes.length)]

            $('.quoteBody').html(currentQuote.title);
            $('.quoteAuthor').html(currentQuote.author);
            // console.log(currentQuote);
        });

        // console.log(quotes[0].title);

        console.log(data);

        // 23455w
    })
});