/*1. Write a program which tells the number of days in a month.
  Enter a month: January
  January has 31 days.

  Enter a month: JANUARY
  January has 31 day

  Enter a month: February
  February has 28 days.

  Enter a month: FEbruary
  February has 28 days.*/

  let mon = prompt('Enter a month: ')
  let mon2 = mon.toLowerCase()
  if (mon2 == 'january')
  {
    console.log('January has 31 days.')
  } 
  else if (mon2 == 'february')
  {
    console.log('February has 28 days.')
  }
  else if (mon2 == 'march')
  {
    console.log('March has 31 days.')
  }
  else if (mon2 == 'april')
  {
    console.log('April has 30 days.')
  }
  else if (mon2 == 'may')
  {
    console.log('May has 31 days.')
  }
  else if (mon2 == 'june')
  {
    console.log('June has 30 days.')
  }
  else if (mon2 == 'july')
  {
    console.log('July has 31 days.')
  }
  else if (mon2 == 'august')
  {
    console.log('August has 31 days.')
  }
  else if (mon2 == 'september')
  {
    console.log('September has 30 days.')
  }
  else if (mon2 == 'october')
  {
    console.log('October has 31 days.')
  }
  else if (mon2 == 'november')
  {
    console.log('November has 30 days.')
  }
  else if (mon2 == 'december')
  {
    console.log('December has 31 days.')
  }

/*2. Write a program which tells the number of days in a month, now consider leap year.*/
let mot = prompt('Enter a month: ')
let mot2 = mot.toLowerCase()
if (mot2 == 'january')
{
  console.log('January has 31 days.')
} 
else if (mot2 == 'february')
{
  console.log('February has 29 days.')
}
else if (mot2 == 'march')
{
  console.log('March has 31 days.')
}
else if (mot2 == 'april')
{
  console.log('April has 30 days.')
}
else if (mot2 == 'may')
{
  console.log('May has 31 days.')
}
else if (mot2 == 'june')
{
  console.log('June has 30 days.')
}
else if (mot2 == 'july')
{
  console.log('July has 31 days.')
}
else if (mot2 == 'august')
{
  console.log('August has 31 days.')
}
else if (mot2 == 'september')
{
  console.log('September has 30 days.')
}
else if (mot2 == 'october')
{
  console.log('October has 31 days.')
}
else if (mot2 == 'november')
{
  console.log('November has 30 days.')
}
else if (mot2 == 'december')
{
  console.log('December has 31 days.')
}