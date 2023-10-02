#include<stdio.h>
 
void main()
{
    int n1, n2, gcd, rem, numerator, denominator;
 
    printf("Enter two numbers\n");
    scanf("%d %d", &n1, &n2);
    if (n1 > n2)
    {
        numerator = n1;
        denominator = n2;
    }
    else
    {
        numerator = n2;
        denominator = n1;
    }
    rem = numerator % denominator;
    while (rem != 0)
    {
        numerator   = denominator;
        denominator = rem;
        rem   = numerator % denominator;
    }
    gcd = denominator;
    printf("GCD of %d and %d = %d\n", n1, n2, gcd);
}