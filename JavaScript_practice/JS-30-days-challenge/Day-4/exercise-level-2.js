/*1. Write a code which can give grades to students according to theirs scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F*/

let grades = prompt('Enter grade:')
if (grade >= 80) {
    console.log('A')
} 
else if (grade < 80 && grade >= 70)
{
    console.log('B')
}
else if (grade < 70 && grade >= 60)
{
    console.log('C')
}
else if (grade < 60 && grade >= 50)
{
    console.log('D')
}
else if (grade < 50 && grade >= 40)
{
    console.log('E')
}
else if (grade < 40 && grade >= 0)
{
    console.log('F')
}

/*2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer*/

let season = prompt('Enter a month to determine it\'s season')
if (season == 'September' || season == 'October' || season == 'November')
{
    console.log('The season is Autumn')
} else if (season == 'December' || season == 'January' || season == 'February')
{
    console.log('The season is Winter')
} else if (season == 'March' || season == 'April' || season == 'May')
{
    console.log('The season is Spring')
} else
{
    console.log('The season is Summer')
}


/*3. Check if a day is weekend day or a working day. Your script will take day as an input.
    What is the day  today? Saturday
    Saturday is a weekend.

    What is the day today? saturDaY
    Saturday is a weekend.

    What is the day today? Friday
    Friday is a working day.

    What is the day today? FrIDAy
    Friday is a working day.*/

let dAY = prompt('What is the day today?')
const inday = dAY.toLowerCase()
if (inday == 'monday')
{
    console.log('Monday is a working day')
} 
else if (inday == 'tuesday')
{
    console.log('Tuesday is a working day')
} 
else if (inday == 'wednesday')
{
    console.log('Wednesday is a working day')
} 
else if (inday == 'thursday')
{
    console.log('Thursday is a working day')
} 
else if (inday == 'friday')
{
    console.log('Friday is a working day')
} 
else if (inday == 'saturday')
{
    console.log('Saturday is a weekend')
} 
else
{
    console.log('Sunday is a weekend')
}