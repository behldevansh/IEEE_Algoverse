#include<iostream>
#include<vector>
using namespace std;

void print(int idx, vector<int>v, vector<int>&ds ,int n)
{
    if(idx==n)
    {
        for(auto it :ds) cout<<it<<" ";
        cout<<endl;
        return;
    }
    

    ds.push_back(v[idx]);
    print(idx+1, v, ds, n);
    ds.pop_back();
    print(idx+1, v, ds, n);
}
int main()
{
    vector<int>v = {1, 2, 6};
    vector<int>ds;

    print(0,v,ds,3);
    return 0;
}