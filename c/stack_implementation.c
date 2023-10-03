
//The program you provided implements a basic stack data structure in C. It allows the user to perform the following operations on the stack:
//Push: The push function allows the user to input an integer value and pushes it onto the stack.
//Pop: The pop function removes and prints the top element from the stack.
//Display: The display function prints the elements of the stack from top to bottom, separated by "->".
//Peek: The peek function prints the value of the top element of the stack without removing it.


#include <stdio.h>
#define MAX 5

int stack[MAX];
int top = -1;

void push() {
    int x;
    if (top == MAX - 1) {
        printf("Overflow\n");
    } else {
        printf("Enter Data: ");
        scanf("%d", &x);
        top++;
        stack[top] = x;
    }
}

void pop() {
    if (top == -1) {
        printf("Stack is Empty\n");
    } else {
        printf("Popped Element: %d\n", stack[top]);
        top--;
    }
}

void display() {
    if (top == -1) {
        printf("Stack is Empty\n");
    } else {
        printf("The Stack is: ");
        for (int i = top; i >= 0; i--) {
            printf("%d", stack[i]);
            if (i != 0) {
                printf(" -> ");
            }
        }
        printf("\n");
    }
}

void peek() {
    if (top == -1) {
        printf("Stack is Empty\n");
    } else {
        printf("Top Element: %d\n", stack[top]);
    }
}

int main() {

    push();
    push();
    push();
    display();
    pop();
    display();
    peek();

    return 0;
}
