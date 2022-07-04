// Get Quotes from API

const qtContainer = document.getElementById('quoteContainer');

const qtText = document.getElementById('quote');

const authorText = document.getElementById('author');

const twitterBtn = document.getElementById('twitter');

const newQuoteBtn = document.getElementById('newQut');

const loader = document.getElementById('loader');

let apiQuotes = [];

// show loading
function showLoadingSpinner() {
    loader.hidden = false;
    qtContainer.hidden = true;
}

// hide loading
function removeLoadingSpinner() {
    qtContainer.hidden = false;
    loader.hidden = true;
}

function newQuote() {
    showLoadingSpinner();
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    // check if author field is blank and replace it with unknown.
    if (!quote.author) {
        authorText.textContent = 'Unknown';
    } else {
        authorText.textContent = quote.author;
    }

    // if (quote.text.length > 120) {
    //     quoteText.classList.add('long-quote');
    // } else {
    //     quoteText.classList.remove('long-quote');
    // }
    // authorText.textContent = quote.author;
    qtText.textContent = quote.text;
    removeLoadingSpinner();
}

async function getQuotes() {
    showLoadingSpinner();
    const apiUrl = 'https://type.fit/api/quotes';

    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        console.log(error);
    };
};

// tweet quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${qtText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

// event lisner
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// onLoad
getQuotes();
// loading();

// A "try" and "catch" allow us to complete to attempt a fetch request, but if it doesn't
// work we can catch the error information and do something with it.



// complete above task loacally

// function newQuote() {
//     const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
//     console.log(quote);
// }

// newQuote();