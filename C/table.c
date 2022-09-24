#include <stdio.h>
#include "header.h"

int main(void)
{
    int multiplier = 0;
    int twelve, i;

    printf("enter a number between 0 and 12: ");
    scanf("%d", &twelve);
    if (twelve > 0 || twelve <= 12)
    {
        printf("continue\n");
    }
    else
    {
        printf("enter a number between 0 and 12");
    }    
    for (multiplier = 0; multiplier <= 12; multiplier++)
    {
        int result = multiply(multiplier, twelve);
        printf("%d x %d = %d\n", multiplier, twelve, result);
    }
    return (0);
}

int multiply(int y, int z)
{
    return (y *= z);
}