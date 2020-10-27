// api
var endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';



function getQuote() {
  // grab the information of the api
  fetch(endpoint)
   // after we fetch the api we want a function to run
    .then(function (response) {
      // turn that response into a javascript object notation
      return response.json();
    })
      // we chain another response with a function that have we can access it
    .then(function (data) {
      displayQuote(data.message);
    })
      // to see if there are any errors
    .catch(function () {
      console.log("An error occurred");
    });
}


// use a function that can display the quote
function displayQuote(quote) {
  var quoteText = document.querySelector('.quote-text');
  quoteText.textContent = quote;

}

// target button class new-quote
var newQuoteButton = document.querySelector('.new-quote');
newQuoteButton.addEventListener('click', getQuote);

getQuote();
