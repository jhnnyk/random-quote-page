// get random number to use as an index for the quotes array
function getRandomQuote() {
  var i = Math.floor(Math.random() * quotes.length);
  return quotes[i];
}

// generate HTML for div#quote-box on index.html
function printQuote() {
  console.log(getRandomQuote());
}

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
