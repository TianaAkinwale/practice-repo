const quotes = [
    {
        quote: '"If we want users to like our software,\
         we should design it to behave like a likeable person."',
        author: 'Alan Cooper'
    },
    {
        quote: '"The best way to predict the future is to invent it."',
        author: 'Alan Kay'
    },
    {
        quote: '"A language that doesn\'t affect the way you think about programming\
         is not worth knowing."',
        author: 'Alan Perlis'
    },
    {
        quote: '"We can be proud of our abilities, but we must own up to our\
         shortcomings, our ignorances and our mistakes."',
        author: 'Andy Hunt'
    },
    {
        quote: '"If you don\'t hear any complaints from users, they are not\
         using the product - or your support email is broken."',
        author: 'Atli Björgvin Oddsson'
    },
    {
        quote: '"Success is a lousy teacher. It seduces smart people into\
         thinking they can\'t lose."',
        author: 'Bill Gates'
    },
    {
        quote: '"Don\'t decide on the tool you\'re gonna use before you\
         understand the project and the customer\'s needs."',
        author: 'Brian P. Hogan'
    },
    {
        quote: '"Technical problems can be remediated. A dishonest\
         corporate culture is much harder to fix."',
        author: 'Bruce Schneir'
    },
    {
        quote: '"Everything should be made as simple as possible.\
         But to do that you have to master complexity."',
        author: 'Butler Lampson'
    },
    {
        quote: '"Testers don\'t like to break things; they like to\
         dispel the illusion that things work."',
        author: 'Cem Kaner - James Bach - Bret Pettichord'
    },
    {
        quote: '"We don\'t judge each other on the mistakes we make.\
         We judge each other on how we deal with those inevitable mistakes."',
        author: 'Chad Fowler'
    },
    {
        quote: '"You don\'t win a race by trying not to lose."',
        author: 'Chad Fowler'
    }
]

let button = document.getElementById('button')
let quote = document.getElementById('quote');
let author = document.getElementById('author');

button.addEventListener('click', () => {
    const random = Number.parseInt(Math.random() * quotes.length + 1); 
    quote.innerHTML = quotes[random].quote;
    author.innerHTML = quotes[random].author;
});
