// open pyramid of size 5:
//     *
//    * *
//   *   *
//  *     *
// * * * * *


#include <stdio.h>

int main() {
	int n;
	scanf("%d", &n);
	int space=n-1,mid_space=1;
	for(int i=1;i<n;i++){
	    for(int j=0;j<space;j++) printf(" "); //spaces before *
	    if(i==1) printf("*");                 //first layer
	    else{                               //middle layers
	        printf("*");
	        for(int j=0;j<mid_space;j++) printf(" ");
	        printf("*");
	        mid_space+=2;
	    }
	    space--;
	    printf("\n");
	}
	for(int i=0;i<n;i++) printf("* ");	//last layer
	return 0;
}