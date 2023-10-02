#include <stdio.h>

int findGCD(int n1, int n2);

int main() {
    int n1, n2, gcd;

    printf("Enter two numbers\n");
    scanf("%d %d", &n1, &n2);

    gcd = findGCD(n1, n2);

    printf("GCD of %d and %d = %d\n", n1, n2, gcd);

    return 0;
}

int findGCD(int n1, int n2) {
    if (n2 != 0) {
        return findGCD(n2, n1 % n2);
    } else {
        return n1;
    }
}
