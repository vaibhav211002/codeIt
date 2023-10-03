// Java program to find infix for a given postfix.
// Input : "ab*c+"
// Output : "((a*b)+c)"

import java.util.Stack;

class PostfixToInfixConverter {
    // Checks if a character is an operand (letter).
    static boolean isOperand(char character) {
        return (character >= 'a' && character <= 'z') ||
                (character >= 'A' && character <= 'Z');
    }

    // Convert a postfix expression to infix.
    static String convertPostfixToInfix(String postfixExp) {
        Stack<String> operandStack = new Stack<>();

        for (int i = 0; i < postfixExp.length(); i++) {
            char currentChar = postfixExp.charAt(i);

            if (isOperand(currentChar)) {
                operandStack.push(currentChar + "");
            } else {
                String operand2 = operandStack.peek();
                operandStack.pop();
                String operand1 = operandStack.peek();
                operandStack.pop();

                operandStack.push("(" + operand1 + currentChar + operand2 + ")");
            }
        }

        // At this point, there should be a single element in the stack which is the required infix expression.
        return operandStack.peek();
    }

    public static void main(String args[]) {
        String postfixExp = "ab*c+";
        System.out.println(convertPostfixToInfix(postfixExp));
    }
}