
#include <stdio.h>

int main() 
{
    int i ,j,temp;
    int arr[5]={1,4,3,5,2};
    for(i=1;i<5;i++)
    {
        temp=arr[i];
        for(j=i-1;j>=0;j--)
        {
            if(arr[j]>temp)
            {
                arr[j+1]=arr[j];
            }
            else
            {
                break;
            }
        }
        arr[j+1]=temp;
    }
    for(i=0;i<5;i++)
    {
        printf("%d ",arr[i]);
    }
}
