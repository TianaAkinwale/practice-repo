#include <stdio.h>

int main(void)
{
    char input;
    
    scanf("%c",&input);
    printf("++++%c++++\n",input);
    printf("+++%c%c%c+++\n",input, input, input);
    printf("++%c%c%c%c%c++\n",input, input, input, input, input);
    printf("+%c%c%c%c%c%c%c+\n",input, input, input, input, input, input, input);
    printf("%c%c%c%c%c%c%c%c%c\n",input, input, input, input, input, input, input, input, input);
    
    return (0);
}