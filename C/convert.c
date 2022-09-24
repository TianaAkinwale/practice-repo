#include <stdio.h>

//converts user input from km to miles in 6dp

int main(void)
{
    double Ukm;
    double Umil;
    scanf("%lf", &Ukm);
    Umil = (0.621371 * Ukm);
    printf("%.6lf", Umil);
    
    return (0);
}