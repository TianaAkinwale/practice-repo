/*1. Write a function which cleans text. Clean the following text. After
 cleaning, count three most frequent words in the string.
  
  ```js
    sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
    console.log(cleanText(sentence))
   ```
   ```sh
    I am a teacher and I love teaching There is nothing as more rewarding as 
    educating and empowering people I found teaching more interesting than
     any other jobs Does this motivate you to be a teacher
    ```
  ```js
    console.log(mostFrequentWords(cleanedText))
    [{word:'I', count:3}, {word:'teaching', count:2}, {word:'teacher', count:2}]
  ```*/
  function cleanText(text) {
  const pattern = /[%&@#$]/g;
  text = sentence.replace(pattern, '');
  return text;
  }
  const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;.\
There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple.\
 I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate\
 yo@u to be a tea@cher!?'
console.log(cleanText(sentence))
//First, separate the words from the string using Regular Expression.
//Declare an object as a Map which will help you to find the occurrences of each word. (You can use Map Data Structure!)
//Find the most repeated word from that object

