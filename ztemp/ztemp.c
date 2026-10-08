#include <stdio.h>

int main()
{
    printf("hello world!\n");

    int argint;
    int frstArg = scanf("%d", &argint);
    
    if (argint >= 10){
        printf("condition is met\n");
    }
    else{
        printf("condition is NOT met\n");
    }
    
    return 0;
}