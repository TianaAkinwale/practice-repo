/**
 * @file multi.c
 * @author Tiana Akinwalee (tianorway@gmail.com)
 * @brief write a program that takes several lines of input from a user.
 * The first line of the input indicates the number of robots to be deployed.
 * Each subsequent line shows the height, the weight, the power of the engines and
 * a resistance rating (1,2, or 3) of each of of these robots.
 * Your program should use this information to calculate the total power of these robots.
 * The power of all robots is the sum of the power of each robot,
 * where the power of an individual robot is calculated via:
 * (enginePower + resistance) * (weight - height)
 * Example: Input:
 * 2
 * 50 60 2 1
 * 43 62 5 2
 * Output: 163
 * Here the output in this example is the calculation: (2 + 1) * (60-50) + (5 + 2) * (62-43)
 * You must use a loop to read each of the lines!
 * main - entry point
 * Return: 0
 * @version 0.1
 * @date 2022-06-19
 * 
 * @copyright Copyright (c) 2022
 * 
 */

#include <stdio.h>

int main(void)
{
    int many = 0;
    int pow = 0;
    int hei = 0;
    int wei = 0;
    int res = 0;
    int sum = 0;
    int i;
    
    scanf("%d",&many);
    for (i = 0; i < many; i++)
    {
        scanf("%d %d %d %d",&hei, &wei, &pow, &res);
        sum = sum + ((pow + res) * (wei - hei));
    }
    printf("%d",sum);
    return (0);
}