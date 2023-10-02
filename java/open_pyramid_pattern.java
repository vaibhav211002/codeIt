// open pyramid of size 5:
//     *
//    * *
//   *   *
//  *     *
// * * * * *

import java.util.Scanner;

class HelloWorld{
    public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int n=sc.nextInt();
		int space=n-1;
		int mid_space=1;
		for(int i=1;i<n;i++){
			for(int j=0;j<space;j++) System.out.print(" "); //spaces before *
			if(i==1) System.out.print("*");                 //first layer
			else{                          			        //middle layers
				System.out.print("*");
				for(int j=0;j<mid_space;j++) System.out.print(" ");
				System.out.print("*");
				mid_space+=2;
			}
			space--;
			System.out.print("\n");
		}
		for(int i=0;i<n;i++) System.out.print("* ");	//last layer
	}
}