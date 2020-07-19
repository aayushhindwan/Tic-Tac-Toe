#include<iostream>
using namespace std;
typedef long long int ll;
void func(int l,int h,bool sure)
{char ch;
    ll mid=(l+h)/2;
    cout<<mid<<endl;
    cin>>ch;
    if(ch=='E')
    return;
    if(l>=h)
    return;
    if(sure)
    {
        if(ch=='L')
         func(l,mid-1,false);
         if(ch=='G')
         func(mid+1,h,false);
    }
    else
    {
          if(ch=='L')
         {func(l,mid-1,false);
          func(mid+1,h,true);
         }
         if(ch=='G')
         {
         func(mid+1,h,false); 
         func(l,mid-1,true);
         }

    }
}
int main()
{
ll N;
cin>>N;
func(1,N,false);


return 0;
}