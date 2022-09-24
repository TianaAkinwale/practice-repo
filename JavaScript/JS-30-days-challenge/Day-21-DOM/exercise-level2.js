/*1. Change stye of each paragraph using JavaScript
(eg. color, background, border, font-size, font-family)
const titles = document.querySelectorAll('h1')
titles.forEach((title, i) => {
  title.style.fontSize = '24px' // all titles will have 24px font size
  if (i % 2 === 0) {
    title.style.color = 'green'
  } else {
    title.style.color = 'red'
  }
})*/
/*1. Select all paragraphs and loop through each elements and give the 
first and third paragraph a color of green, and the second 
and the fourth paragraph a red color*/
let allParagraph = document.querySelectorAll('p');
allParagraph.forEach((paragraph, i) => {
    if (i % 2 === 0) {
        paragraph.style.color = 'green';
    }
    else {
        paragraph.style.color = 'red';
    }
});