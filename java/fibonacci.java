import java.util.*;

public class fibonacci {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the length of Fibonacci series : ");
        int n = sc.nextInt();
        int a = 0;
        int b = 1;
        int sum = 0;
        while(n--!=0){
            System.out.print(a+" ");
            sum = a+b;
            a=b;
            b=sum;
        }
    }
}
