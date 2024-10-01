const quotes = [
    {
        quote:'The best way to predict the future is to create it',
        author:'Peter Drucker'
    },
    {
        quote:'Do what you can,with what you have,where you are',
        author:'Theodore Roosevelt'
    },
    {
        quote:'Susccess is not how high you have climbed, but how you make a positive difference to the world',
        author:'Roy T. Bennett'
    },
    {
        quote:'Your time is limited, so dont waste it living someones else s life.',
        author:'Steve Jobs'
    },
    {
        quote:'The only limit to our realization of tommorow is out doubt of today ',
        author:'Franklin D, Roosevelt'
    }
]

function createQuote(){
    let randomQuote = Math.floor(Math.random() * quotes.length)
    let quoteIndex = quotes[randomQuote]

    document.getElementById('quote').textContent = `${quoteIndex.quote}`
    document.getElementById('author').textContent = `${quoteIndex.author}`
}