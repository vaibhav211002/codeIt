using System;

class Program
{
    static int Multiply(int num1, int num2)
    {
        // Base case: if either number is 0 
        if (num1 == 0 || num2 == 0)
        {
            return 0;
        }
        // Base case: if num1 is 1
        else if (num1 == 1)
        {
            return num2;
        }
        // Base case: if num2 is 1
        else if (num2 == 1)
        {
            return num1;
        }
        else
        {
            // Recursive case: Subtract 1 from num1 and add num2 to the result
            return num2 + Multiply(num1 - 1, num2);
        }
    }

    static void Main()
    {
        Console.WriteLine("Enter two numbers to find their product:");
        
        Console.Write("Enter the first number: ");
        int num1 = int.Parse(Console.ReadLine());

        Console.Write("Enter the second number: ");
        int num2 = int.Parse(Console.ReadLine());

        int product = Multiply(num1, num2);
        Console.WriteLine($"The product of {num1} and {num2} is: {product}");
    }
}
