
//The problem is to perform a Morris Traversal on a binary tree and print the elements of the tree in a specific order.


#include <bits/stdc++.h>
//if not using this include use the iostream and include the other DS structure
 using namespace std;
 class node{
     public: 
 
     node *left;
     node *right;
     int data;
 
     node(int d)
     {
         this->data=d;
         this->left=NULL;
         this->right=NULL;
     }
 
 };
 
 node* buildtree(node *root)
 {
     cout<<"enter the data ";
     int data;
     cin>>data;
 
     root= new node(data);
 
     if(data==-1)
     {
         return NULL;
     }
     cout<<"enter data for insertion in left of "<<data<<endl;
     root->left = buildtree(root -> left);
     cout<<"enter data for insertion of right of "<<data<<endl;
     root->right = buildtree(root -> right);
 
 
     return root;
 
 }
 
 void levelordertraversal(node* &root)
 {
    queue<node*>q;
    q.push(root);
    q.push(NULL);
 
 
    while(!q.empty())
    {
     node* temp=q.front();
     
     q.pop();
 
     
     if(temp==NULL)
     {
         //purana level complete ho chuka hai 
         cout<<endl;
         if(!q.empty())
         {
             //queue still has some child nodes
 
             q.push(NULL);
 
         }
     }
     else{
         cout<< temp->data<<" ";
         if(temp->left)
         {
             q.push(temp->left);
         }
 
         if(temp->right)
         {
             q.push(temp->right);
         }
     }
 
    }
 }
 
 node* morristraversal(node* &root)
 {
    node* curr =root;

    //check the root curr is not null

    while(curr!=NULL){

        //CHECK IF LEFT EXIST
        if(curr->left!=NULL){
            node* pred =curr->left;
            //KEEP GOING TO THE RIGHT OF THE NODE
            while (pred->right!=NULL)
            {
                pred=pred->right;
            }
            pred->right=curr->right;
            curr->right=curr->left;
            // curr->left=NULL;
        }
        curr=curr->right;
    }
    

    return root;

 }





 void print(node* root)
 {
    node* temp=root;
    cout<<temp->data<<" ";
    while (temp!=NULL)
    {
        if(temp->left!=NULL){
            temp=temp->left;
            cout<<temp->data<<" ";
            
        }

        if(temp->right!=NULL){
            temp=temp->right;
            cout<<temp->data<<" ";
            
        }

    }
    
 }


 
 
 
 
 int main()
 {
    node* root=NULL;
    node* ans=NULL;
    root=buildtree(root);
    levelordertraversal(root);

    cout<<endl;
    root= morristraversal(root);
    //cout<<root->data<<endl;

    // 1 2 4 -1 -1 5 -1 -1 3 6 -1 -1 7 -1 -1 

    
    print(root);


 }
