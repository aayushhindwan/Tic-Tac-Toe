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
    t:0,
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
this.setState({t:0});

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
export default Board;
