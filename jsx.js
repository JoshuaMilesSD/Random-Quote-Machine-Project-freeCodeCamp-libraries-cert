import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom";
const QuoteBox = (props
<div id="quote-box">
  <p id="text">{quote.text}</p>
  <h2 id="author">{quote.author}</h2>
  <div class="actions">
    <button id="new-quote" class="button"
      onClick={handleNewQuote}>
      New Quote</button>
    <a href="twitter.com/intent/tweet"
      id="tweet-quote" target="_blank">Tweet</a>
  </div>
  </div>
};
const App = ()=>(<div class="main"><QuoteBox /></div>)
ReactDOM.render(<App />, document.querySelector("#app"))
