(window.webpackJsonptictac=window.webpackJsonptictac||[]).push([[0],{11:function(t,e,n){t.exports=n(17)},16:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var l=n(0),r=n.n(l),a=n(8),i=n.n(a);n(16),n(9),n(7);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=n(10),u=n(1),c=n(2),s=n(4),f=n(3),h=n(5),v=function(t){function e(){return Object(u.a)(this,e),Object(s.a)(this,Object(f.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this;return r.a.createElement("div",{style:{backgroundColor:"yellow",height:"30px",width:"30px",borderStyle:"solid",borderWidth:"2px",display:"inline-block",padding:"2px",verticalAlign:"top"},onClick:function(){return t.props.click()}},this.props.value)}}]),e}(l.Component);function b(t){for(var e=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<e.length;n++){var l=Object(o.a)(e[n],3),r=l[0],a=l[1],i=l[2];if(t[r]==t[a]&&t[a]==t[i]&&null!=t[r])return t[r]}return null}var d=function(t){function e(){var t,n;Object(u.a)(this,e);for(var l=arguments.length,r=new Array(l),a=0;a<l;a++)r[a]=arguments[a];return(n=Object(s.a)(this,(t=Object(f.a)(e)).call.apply(t,[this].concat(r)))).state={A:Array(9).fill(null),t:1},n}return Object(h.a)(e,t),Object(c.a)(e,[{key:"boxx",value:function(t){var e=this;return r.a.createElement(v,{click:function(){return e.myfunc(t)},value:this.state.A[t]})}},{key:"myfunc",value:function(t){var e=this,n=this.state.A.slice();if(null==n[t]&&null==b(n)&&1==this.state.t){this.setState({t:0}),n[t]="0",this.setState({A:n}),console.log("Hello");var l=0,r=0,a=[[null,null,null],[null,null,null],[null,null,null]];for(l=0;l<3;l++)for(r=0;r<3;r++)a[l][r]=n[r+3*l];var i=function t(e,n){var l=-1;var r=5;var a,i;var o=-1,u=-1;var c;var s=function(t){return"0"==t[0][0]&&"0"==t[2][2]&&"0"==t[1][1]?0:"0"==t[0][1]&&"0"==t[2][1]&&"0"==t[1][1]?0:"0"==t[0][2]&&"0"==t[2][2]&&"0"==t[1][2]?0:"0"==t[0][0]&&"0"==t[2][0]&&"0"==t[1][0]?0:"0"==t[0][0]&&"0"==t[0][2]&&"0"==t[0][1]?0:"0"==t[1][0]&&"0"==t[1][2]&&"0"==t[1][1]?0:"0"==t[2][0]&&"0"==t[2][2]&&"0"==t[2][1]?0:"0"==t[0][2]&&"0"==t[1][1]&&"0"==t[2][0]?0:"X"==t[0][0]&&"X"==t[2][2]&&"X"==t[1][1]?1:"X"==t[0][1]&&"X"==t[2][1]&&"X"==t[1][1]?1:"X"==t[0][2]&&"X"==t[2][2]&&"X"==t[1][2]?1:"X"==t[0][0]&&"X"==t[2][0]&&"X"==t[1][0]?1:"X"==t[0][0]&&"X"==t[0][2]&&"X"==t[0][1]?1:"X"==t[1][0]&&"X"==t[1][2]&&"X"==t[1][1]?1:"X"==t[2][0]&&"X"==t[2][2]&&"X"==t[2][1]?1:"X"==t[0][2]&&"X"==t[1][1]&&"X"==t[2][0]?1:-1}(e);if(-1!=s)return[s,[o,u]];if(1==n){var f=0,h=0;for(o=0;o<3;o++)for(u=0;u<3;u++)if(null==e[o][u]){e[o][u]="X";var v=t(e,0);if(1==(c=v[0]))return e[o][u]=null,[n,[o,u]];0==c&&(l=0,0==h&&-1!=r&&(a=o,i=u,h=1)),-1==c&&0==f&&(a=o,i=u,r=-1,f=1),e[o][u]=null}}else for(o=0;o<3;o++)for(u=0;u<3;u++)if(null==e[o][u]){if(e[o][u]="0",v=t(e,1),0==(c=v[0]))return e[o][u]=null,[0,[o,u]];1==c&&(l=1),-1==c&&(r=-1),e[o][u]=null}if(-1==r)return[-1,[a,i]];return[l,[a,i]]}(a,1),o=i[1][0],u=i[1][1];console.log("Hello"),setTimeout(function(){n[u+3*o]="X",e.setState({A:n}),e.setState({t:1})},1e3)}}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"TIC TAC TOE"),r.a.createElement("label",null,"Winner is  :",b(this.state.A)),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",null,this.boxx(0),this.boxx(1),this.boxx(2)),r.a.createElement("div",null,this.boxx(3),this.boxx(4),this.boxx(5)),r.a.createElement("div",null,this.boxx(6),this.boxx(7),this.boxx(8)))}}]),e}(l.Component);i.a.render(r.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},7:function(t,e,n){},9:function(t,e,n){t.exports=n.p+"static/media/logo.5d5d9eef.svg"}},[[11,1,2]]]);
//# sourceMappingURL=main.e70a53e4.chunk.js.map