#include<iostream>
#include <bits/stdc++.h>
#include<vector>
using namespace std;

bool cmp(vector<int>&a,vector<int>&b){
    return a[2]<b[2];
}


int findparent(vector<int> &parent,int node){
    if(parent[node]==node){
        return node;
    }

    return parent[node]=findparent(parent,parent[node]);
}

void unionSet(int u,int v,vector<int>&parent,vector<int> &rank){
    u=findparent(parent,u);
    v=findparent(parent,v);

    if(rank[u]<rank[v]){
        parent[u]=v;
    }

    else if(rank[v]<rank[u]){
        parent[v]=u;
    }

    else{   //rank equal-> making u parent
        parent[v]=u;
        rank[u]++;
    }

}

int minimumspanningtree(vector<vector<int>>&edges,int n){

    sort(edges.begin(),edges.end(),cmp);
    // cout<<"\n--------- DIsplaying sorted edges vector with weight----------";
    // for(int i=0;i<edges.size();i++){
    //     cout<<"\n"<<edges[i][2];
    // }

    vector<int> parent(n);
    vector<int> rank(n);
    for(int i=0;i<n;i++){
        parent[i]=i;
        rank[i]=0;
    }

    int minweight=0;

    for(int i=0;i<edges.size();i++){
        int u=findparent(parent,edges[i][0]);
        int v=findparent(parent,edges[i][1]);
        int w=edges[i][2];

        if(u!=v){
            minweight+=w;
            unionSet(u,v,parent,rank);
        }

    }

    return minweight;

}

int main(){
    int tn,te;
    cout<<"\nEnter total of nodes:";
    cin>>tn;
    cout<<"\nENter total no of edges:";
    cin>>te;
    

    vector<vector<int>> edges;

    cout<<"\n------------ ENter pair in form(u,v,wt)----------\n";
    int u,v,w;
    for(int i=0;i<te;i++){
        cin>>u>>v>>w;

        edges.push_back({u,v,w});

    }

    int wt=minimumspanningtree(edges,tn);
    cout<<"\nCOST: "<<wt;
    
    return 0;
}