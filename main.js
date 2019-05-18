const quotes = [

    {
        quote: "Don't cry because it's over, smile because it happened.",
        author: " Dr. Seuss"
    },
    {

        quote: "Success is not final; failure is not fatal: It is the courage to continue that counts.",
        author: " Winston S. Churchill"
    },
    {

        quote: "Successful people do what unsuccessful people are not willing to do. Don't wish it were easier; wish youwere better.",
        author: " Jim Rohn"
    },
    {

        quote: "People who succeed have momentum. The more they succeed, the more they want to succeed, and the morethey find a way to succeed. Similarly, when someone is failing, the tendency is to get on a downward spiralthat can even become a self-fulfilling prophecy.",
        author: "Tony Robbins"
    },
    {

        quote: "The real test is not whether you avoid this failure, because you won't. It's whether you let it harden or shame you into inaction, or whether you learn from it; whether you choose to persevere.",
        author: "Barack Obama"
    }

];

function getARandomQuote() {
    const randomNumber = getRandomNumber();
    const quoteObject = quotes[randomNumber];
    setElement(quoteObject);
}

function getRandomNumber() {
    return Math.floor(Math.random() * quotes.length);
}

function setElement(quoteObject) {

    document.getElementById("quote").innerHTML = quoteObject.quote;
    document.getElementById("author").innerHTML = quoteObject.author;


}

