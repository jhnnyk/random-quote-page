// get random number to use as an index for the quotes array
// return quote at this index
function getRandomQuote() {
  var i = Math.floor(Math.random() * quotes.length);
  return quotes[i];
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

function getRandomColor() {
  var red   = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue  = Math.floor(Math.random() * 256);
  return 'rgb(' + red + ',' + green + ',' + blue + ')';
}

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
