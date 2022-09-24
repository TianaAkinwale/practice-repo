/**
 * @file simpcalc.c
 * @author Tiana Akinwale (tianorway@gmail.com)
 * @brief A C program that does basic arithmetic operations.
 * @version 0.1
 * @date 2022-07-02
 * @copyright Copyright (c) 2022
 * 
 */

#include <stdio.h>

/**
 * @brief
 * main - Entry point.
 * Desc: This program allows user to do basic arithmetic
 * operations the number of times they wish.
 * Return: 0
 */

int main(void)
{
    double num1, num2;
    int operator;
    double Result;
    int i, times;

    printf("How many times do u want to do a calculation?");
    scanf("%d", &times);
    for (i = 0; i < times; i++)
    {
        printf("Select an operator: (1.(+) 2.(-) 3.(/) 4.(*)):");
        scanf("%d",&operator); /*Operator is inputted and stored*/
        printf("Input first number to be calculated:");
        scanf("%lf",&num1); /*First number is inputted and stored*/
        printf("Input second number to be calculated:");
        scanf("%lf",&num2); /*Second number is inputted and stored*/

        if (operator == 1)
        {
            Result = num1 + num2;
            printf("%.2lf\n", Result);
        }
        else if (operator == 2)
        {
            Result = num1 - num2;
            printf("%.2lf\n", Result);
        }
        else if (operator == 3)
        {
            Result = num1 / num2;
            printf("%.2lf\n", Result);
        }
        else if (operator == 4)
        {
            Result = num1 * num2;
            printf("%.2lf\n", Result);
        }
        
    /*switch (operator){
    case '1':
        Result = num1 + num2;
        printf("%.2lf", Result);
        break;
    case '2':
        Result = num1 - num2;
        printf("%.2lf", Result);
        break;
    case '3':
        Result = num1 / num2;
        printf("%.2lf", Result);
        break;
    case '4':
        Result = num1 * num2;
        printf("%.2lf", Result);
        break;
    default: 
        printf("Enter a valid operator: ");
        break;
    }*/
    }
    return (0);
}