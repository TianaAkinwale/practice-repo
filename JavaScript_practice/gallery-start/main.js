const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imgArr = [
                'myfeet.jpeg',
                 'oouhut.jpeg', 
                 'pic1.jpg', 
                 'pic2.jpg', 
                 'pic3.jpg', 
                 'pic4.jpg', 
                 'pic5.jpg', 
                 'zombomeme11052022145100'
                ]

/* Declaring the alternative text for each image file */
const imgAlt = {

}
/* Looping through images */
for (const image of imgArr){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', xxx);
    newImage.setAttribute('alt', xxx);
    thumbBar.appendChild(newImage);
}

/* Wiring up the Darken/Lighten button */
