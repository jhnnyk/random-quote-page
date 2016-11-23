var usedQuotes = [];

// get random number to use as an index for the quotes array
// return quote at this index
function getRandomQuote() {
  
  // check to see if we've already show all the quotes
  // if so, clear the usedQuotes array and start again
  if (usedQuotes.length === quotes.length) {
    usedQuotes = [];
  }

  // as long as we haven't already shown all the quotes
  // loop through the array to find one we haven't shown yet
  while (usedQuotes.length < quotes.length) {
    var i = Math.floor(Math.random() * quotes.length);

    if (usedQuotes.indexOf(i) === -1) {
      usedQuotes.push(i);
      console.log(quotes[i].quote);
      return quotes[i];
    }
  }

}

// generate HTML for div#quote-box on index.html
function printQuote() {
  var quote = getRandomQuote();
  var html = '<p class="quote">' + quote.quote + '</p>';
  html += '<p class="source">' + quote.source;

  if (quote.citation !== undefined) {
    html += '<span class="citation">' + quote.citation + '</span>';
  }
  if (quote.year !== undefined) {
    html += '<span class="year">' + quote.year + '</span>';
  }

  html += '</p>';

  document.getElementById('quote-box').innerHTML = html;
  document.body.style.backgroundColor = getRandomColor();
}

// generate random color
function getRandomColor() {
  var red   = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue  = Math.floor(Math.random() * 256);
  return 'rgb(' + red + ',' + green + ',' + blue + ')';
}

// load a quote right off the bat
window.onload = printQuote();

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
