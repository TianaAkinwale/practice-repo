/*#include <stdio.h>

int main(void)
{
    int num = 0;
    int grades;
    int i;
    int sum = 0;
    double dnum;
    double dsum;
    
    scanf("%d", &num);
    
    for (i = 0; i < num; i++)
    {
    scanf("%d", &grades);
    sum = sum + grades;
    }
    dsum = (double) sum;
    dnum = (double) num;
    printf("%.2lf", dsum/dnum);
    
    return (0);
}*/

/*#include <stdio.h>
int main(void){
    double array[3];
    double readValue = 0.0;
    int cellNumber = 0;
    int i = 0;
    for(i=0;i<3;i++){
        printf("Enter a decimal value:");
        scanf("%lf",&readValue);
        array[cellNumber] = readValue;
        printf("Cell number %d contains %.2lf\n", cellNumber, array[cellNumber]);
        cellNumber = cellNumber + 1;
    }
    return 0;
}*/
/*
#include <stdio.h>
#include "header.h"

int main(void)
{
  //multidimensional array [rows][columns];
  int array[3][3];
  int rows = sizeof(array)/sizeof(array[0]);
  int columns = sizeof(array[0])/sizeof(array[0][0]);

  printf("columns: %d\nrows: %d\n", columns, rows);

  array[0][0] = 1;
  array[0][1] = 2;
  array[0][2] = 3;
  array[1][0] = 4;
  array[1][1] = 5;
  array[1][2] = 6;
  array[2][0] = 7;
  array[2][1] = 8;
  array[2][2] = 9;

  for (int i = 0; i < rows; i++)
  {
    for (int j = 0; j < columns; j++)
    {
      printf("%d ", array[i][j]);
    }
    printf("\n");
  }
}
*/