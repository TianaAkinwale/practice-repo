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