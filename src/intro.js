import React,{Component} from 'react';

import './App.css';

class Box extends Component
{

render()
{
	return(
		<div style={{ backgroundColor:'yellow',height:"30px" , width:"30px",borderStyle:"solid",borderWidth:"2px",display:'inline-block',padding:'2px',verticalAlign:"top"}} onClick={()=>this.props.click()}>{this.props.value}</div>
		);
}

}


class Board extends Component
{
	
	state={
		A:Array(9).fill(null),
    t:1,
	};
boxx(i)
{
	return(
  
  
	<Box
	 click={()=>this.myfunc(i)} 
	 value={this.state.A[i]}
	 />
	 );
}

	myfunc(i)
	{
		const A=this.state.A.slice();

    if(A[i]==null&&CalculateWinner(A)==null)
    {
		if(this.state.t==0)
      {A[i]='X';
   this.setState({t:1});
  }
  else
  {A[i]="0";
  var m=0,n=0;
  var B=[[null,null,null],[null,null,null],[null,null,null]];
    for(m=0;m<3;m++)
    {
      for(n=0;n<3;n++)
      {
        B[m][n]=A[n+m*3];
      }
    }
  var ans=NextOptimal(B,1);
  var x=ans[1][0];
  var y=ans[1][1];
   A[y+x*3]="X"; 
   

this.setState({t:1});

  }
     this.setState({A:A});
   }
  }
	
	render()

{
return(
<div>
<label>Winner is{CalculateWinner(this.state.A)}</label>
<br/>
<br/>
<div>
{this.boxx(0)}
{this.boxx(1)}
{this.boxx(2)}
</div>
<div>
{this.boxx(3)}
{this.boxx(4)}
{this.boxx(5)}
</div>
<div>
{this.boxx(6)}
{this.boxx(7)}
{this.boxx(8)}
</div>
</div>


);


}
}
function CalculateWinner(A)
{
const lines=[[0,1,2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for(var i=0;i<lines.length;i++)
  {
    const [a,b,c]=lines[i];
    if(A[a]==A[b]&&A[b]==A[c]&& A[a]!=null)
      return A[a];
  }
  return null;

}

function check(A)
{
  
if(A[0][0]=='0'&&A[2][2]=='0'&&A[1][1]=='0')
return 0;
if(A[0][1]=='0'&&A[2][1]=='0'&&A[1][1]=='0')
return 0;
if(A[0][2]=='0'&&A[2][2]=='0'&&A[1][2]=='0')
return 0;
if(A[0][0]=='0'&&A[2][0]=='0'&&A[1][0]=='0')
return 0;
if(A[0][0]=='0'&&A[0][2]=='0'&&A[0][1]=='0')
return 0;
if(A[1][0]=='0'&&A[1][2]=='0'&&A[1][1]=='0')
return 0;
if(A[2][0]=='0'&&A[2][2]=='0'&&A[2][1]=='0')
return 0;
if(A[0][2]=='0'&&A[1][1]=='0'&&A[2][0]=='0')
return 0;
if(A[0][0]=='X'&&A[2][2]=='X'&&A[1][1]=='X')
return 1;
if(A[0][1]=='X'&&A[2][1]=='X'&&A[1][1]=='X')
return 1;
if(A[0][2]=='X'&&A[2][2]=='X'&&A[1][2]=='X')
return 1;
if(A[0][0]=='X'&&A[2][0]=='X'&&A[1][0]=='X')
return 1;
if(A[0][0]=='X'&&A[0][2]=='X'&&A[0][1]=='X')
return 1;
if(A[1][0]=='X'&&A[1][2]=='X'&&A[1][1]=='X')
return 1;
if(A[2][0]=='X'&&A[2][2]=='X'&&A[2][1]=='X')
return 1;
if(A[0][2]=='X'&&A[1][1]=='X'&&A[2][0]=='X')
return 1;


return -1;

}

function NextOptimal(A,x)
{ 
var ans=-1;
var xx=5;
var pp,qq;var i=-1,j=-1;
var temp
   var nn=check(A);
   if(nn!=-1)
   {

       return [nn,[i,j]];
       }


           if(x==1)
           {
               var flag=0,flag1=0;
           for(i=0;i<3;i++)
           {
               for(j=0;j<3;j++)
               {

                   if(A[i][j]==null)
                   {
                   A[i][j]='X';
                     
                   var tt=NextOptimal(A,0);
                   temp=tt[0];
                   if(temp==1)
                   {
                    A[i][j]=null;
                    return [x,[i,j]];
                   }
                    if(temp==0)
                      {ans=0;
                      
                            if(flag1==0&&xx!=-1)
                        {
                            pp=i;
                            qq=j;    
                      
                        flag1=1;
                        } 
                      }
                    if(temp==-1)
                    {
                        if(flag==0)
                        {
                            pp=i;
                            qq=j;    
                        xx=-1;
                        flag=1;
                        }
                        }
                    A[i][j]=null;
                
                     

                   }

               }
           }
           }
           else
           {

            for(i=0;i<3;i++)
           {
               for(j=0;j<3;j++)
               {

                   if(A[i][j]==null)
                   {
                       A[i][j]='0';



                  tt=NextOptimal(A,1);
                  temp=tt[0];
                   if(temp==0)
                   {
                        A[i][j]=null;
                        
                       return [0,[i,j]];
                   }
                    if(temp==1)
                        ans=1;
                    if(temp==-1)
                        xx=-1;
                       A[i][j]=null;


                


                   }

               }
           }




           }
        if(xx==-1)
        return [-1,[pp,qq]];
return[ans,[pp,qq]];
}

export default Board;
