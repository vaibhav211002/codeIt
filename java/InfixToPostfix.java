import java.util.ArrayDeque;
import java.util.Deque;

class InfixToPostfixConverter {
    static int getPrecedence(char operator) {
        switch (operator) {
            case '+':
            case '-':
                return 1;
            case '*':
            case '/':
                return 2;
            case '^':
                return 3;
        }
        return -1;
    }

    static String convertInfixToPostfix(String infixExpression) {
        String postfixResult = "";
        Deque<Character> operatorStack = new ArrayDeque<>();

        for (int i = 0; i < infixExpression.length(); ++i) {
            char currentChar = infixExpression.charAt(i);
            if (Character.isLetterOrDigit(currentChar))
                postfixResult += currentChar;
            else if (currentChar == '(')
                operatorStack.push(currentChar);
            else if (currentChar == ')') {
                while (!operatorStack.isEmpty() && operatorStack.peek() != '(') {
                    postfixResult += operatorStack.peek();
                    operatorStack.pop();
                }
                operatorStack.pop(); // Discard '('
            } else {
                while (!operatorStack.isEmpty() && getPrecedence(currentChar) <= getPrecedence(operatorStack.peek())) {
                    postfixResult += operatorStack.peek();
                    operatorStack.pop();
                }
                operatorStack.push(currentChar);
            }
        }

        while (!operatorStack.isEmpty()) {
            if (operatorStack.peek() == '(')
                return "Invalid Expression";
            postfixResult += operatorStack.peek();
            operatorStack.pop();
        }

        return postfixResult;
    }

    public static void main(String[] args) {
        String infixExp = "a+b*(c^d-e)^(f+g*h)-i";
        System.out.println(convertInfixToPostfix(infixExp));
    }
}
