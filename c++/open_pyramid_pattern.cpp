// open pyramid of size 5:
//     *
//    * *
//   *   *
//  *     *
// * * * * *


#include <bits/stdc++.h>
using namespace std;
#define int long long

main() {
	int n;
	cin>>n;
	int space=n-1,mid_space=1;
	for(int i=1;i<n;i++){
	    for(int j=0;j<space;j++) cout<<" "; //spaces before *
	    if(i==1) cout<<"*";                 //first layer
	    else{                               //middle layers
	        cout<<"*";
	        for(int j=0;j<mid_space;j++) cout<<" ";
	        cout<<"*";
	        mid_space+=2;
	    }
	    space--;
	    cout<<endl;
	}
	for(int i=0;i<n;i++) cout<<"* ";	//last layer
	return 0;
}