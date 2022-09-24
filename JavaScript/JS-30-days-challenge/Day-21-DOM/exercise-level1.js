/*1. Create an index.html file and put four p elements as above: 
Get the first paragraph by using **_document.querySelector(tagname)_** and tag name*/
let firstParagraph = document.querySelector('p');

/*2. Get each of the the paragraph using **_document.querySelector('#id')_** and by their id*/
/*3. Get all the p as nodeList using **_document.querySelectorAll(tagname)_** and by their tag name*/
/*4. Loop through the nodeList and get the text content of each paragraph*/

let allParagraph = document.querySelectorAll('p');
allParagraph[0].setAttribute('id', 'first');
allParagraph[1].setAttribute('id', 'sec');
allParagraph[2].setAttribute('id', 'third');
allParagraph[3].setAttribute('id', 'fourth');

allParagraph.forEach(paragraph => {
    console.log(paragraph);
});
/*5. Set a text content to paragraph the fourth paragraph,**_Fourth Paragraph_** */
allParagraph[3].textContent('Most people get confused between textContent and\
 innerHTML. textContent is meant to add text to an HTML element, however\
  innerHTML can add a text or HTML element or elements as a child. textContent\
  was used in this case');

/*6. Set id and class attribute for all the paragraphs using different 
attribute setting methods */
//done in previous question.