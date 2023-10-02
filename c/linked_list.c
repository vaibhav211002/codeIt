#include <stdio.h> 

#include <stdlib.h>

typedef struct node{
    int val;
    struct node * next;
}Node;




Node * createNewNode(Node* head, Node *tail,int val)
{
    Node *p=(Node*)malloc(sizeof(Node));
    p->val=val;
    p->next=NULL;
    if(head==NULL && tail==NULL)
    {
        tail=p;
    }else{
        tail->next=p;
        tail=p;
    }
    return tail;
}


void displayList(Node * head)
{
    while(head!=NULL)
    {
        printf("%d ",head->val);
        head=head->next;
    }
    printf("\n");
}

void calculateSum(Node *head){

    int sum=0;

    while(head!=NULL)
    {
        sum=sum+head->val;
        head=head->next;
    }

    printf("Sum of all the node is %d:\n ",sum);

}


void oddEven(Node *head)
{
    int odd=0,even=0;

    while(head!=NULL)
    {
        if(head->val%2==0)
        {
            even++;
        }else{
            odd++;
        }
        head=head->next;
    }

    printf("There are %d odd numbers and %d even numbers in the list \n",odd,even);
}



int main()
{
     Node *head=NULL, *tail=NULL;
     
     int flag=1;
     int choice;
     int num;
     while(1){
       
       printf("Enter 1 for creating a new node in linked list\n");
       printf("Enter 2 for displaying Linked List\n");
       printf("Enter 3 to find sum of all the nodes\n");
       printf("Enter 4 to calculate sum of all the nodes\n");
       
       scanf("%d",&choice);
       
       switch (choice)
       {
        case 1:
        
        
        printf("Enter node value : ");
        scanf("%d",&num);

        tail=createNewNode(head,tail,num);
        if(head==NULL)
        {
            head=tail;
        }
        break;


    // for displaying 
        case 2:
        displayList(head);
        break;


    //calculate sum of all the nodes
        case 3:
         calculateSum(head);
         break;

     //frequency of odd and even number in list
     case 4:
     oddEven(head);
     break;
     
       }

       
       printf("Do you want to continue: \n");
       scanf("%d",&flag);
       
       if(flag==0)
       {
           break;
       }
       
     }

return 0;
}
