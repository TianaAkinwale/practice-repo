#include<stdio.h>

int main()
{
    int month;

    printf("1-January");
    printf("2-February");
    printf("3-March");
    printf("4-April");
    printf("5-May");
    printf("6-June");
    printf("7-July");
    printf("8-August");
    printf("9-September");
    printf("10-October");
    printf("11-November");
    printf("12-December");
    printf("Enter the month: ");
    scanf("%s", &month);
    getchar();
    
    switch(month)
    {
        case 3:
        case 4:
        case 5:
        printf("The month's season is Spring");
        break;
        case 6:
        case 7:
        case 8: 
        printf("The month's season is Summer");
        break;
        case 9:
        case 10:
        case 11: 
        printf("The month's season is Autumn");
        break;
        case 12:
        case 1:
        case 2: 
        printf("The month's season is Winter");
        break;
        default: printf("Enter value between 1-12");
    }
    return 0;
}