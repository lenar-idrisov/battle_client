(this.webpackJsonptenzor=this.webpackJsonptenzor||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/avatar4.36da44c2.png"},function(e,t,a){e.exports=a.p+"static/media/avatar8.4f53004c.png"},function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAOVBMVEUAAAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD////u2mBXAAAAEXRSTlMAAAc8VCiI8v3fV+tZWFrwh8guxVgAAAABYktHRBJ7vGwAAAAAB3RJTUUH4wodDikCFBGHogAAAUFJREFUWMPt2MsSgyAMBVDFJ775/58tndbWqCDcpB0XZNVNzsShZEiyLMVNI3+HWHaeq6KsQNGmVWWhKKjqptUdJNqkTrdNrQhYNMaYfgBEmzL0NrkpCFi2BhNXz7QlASttIPHjGV3RQ+l6RPx6fbc75XwExI037tIg0eNBotcDxAsvWrz0IsUAL0oM8iLEQC9YDPYCxQgvSIzyAsRI71KM9i5EwPOKkOcRQc8pwp5DZHinIss7EZneQWR7R5Hr7UW+R8RpEvC2BzHP2NPCXaNEfbRGifpW8fW5ZpbwnuC0gpNQgZKfTDyZQxb922zu2zBAL1K3R37iV3l7f6E3rs/jiod+xRRP+h9LPO2nDNHRn2HR2e/TPJPmGdRL80yaZ3Dvr/PMDxZB4qsq8WWa+LpPLdyF5EIXkuIrU+mlbopbxQN8p0JzZJ8cpQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOS0xMC0yOVQxNDo0MTowMiswMDowMC0AOiUAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTktMTAtMjlUMTQ6NDE6MDIrMDA6MDBcXYKZAAAAAElFTkSuQmCC"},,,function(e,t,a){e.exports=a.p+"static/media/avatar1.688a6031.png"},function(e,t,a){e.exports=a.p+"static/media/avatar2.2abd794b.png"},function(e,t,a){e.exports=a.p+"static/media/avatar3.c596eaba.png"},function(e,t,a){e.exports=a.p+"static/media/avatar5.26a02cf8.png"},function(e,t,a){e.exports=a.p+"static/media/avatar6.139b6f0f.png"},function(e,t,a){e.exports=a.p+"static/media/avatar7.c3e59e0f.png"},function(e,t,a){e.exports=a.p+"static/media/game_over.820810c5.gif"},function(e,t,a){e.exports=a.p+"static/media/3.ea23ec05.wav"},function(e,t,a){e.exports=a.p+"static/media/2.79ca65d3.wav"},function(e,t,a){e.exports=a.p+"static/media/1.214a932b.wav"},function(e,t,a){e.exports=a(29)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);for(var n=a(0),r=a.n(n),s=a(12),i=a.n(s),l=a(5),o=a(6),c=a(1),m=a(7),u=a(3),p=a(2),d=a(4),h=(a(28),[{num:1,size:4},{num:2,size:3},{num:3,size:3},{num:4,size:2},{num:5,size:2},{num:6,size:2},{num:7,size:1},{num:8,size:1},{num:9,size:1},{num:10,size:1}]),g=a(10),v=a.n(g),f=["\u0410","\u0411","\u0412","\u0413","\u0414","\u0415","\u0416","\u0417","\u0418","\u041a"],y=[1,2,3,4,5,6,7,8,9,10],A=Array.from({length:10},(function(e,t){return{x:-1,y:t}})),E=Array.from({length:10},(function(e,t){return{x:t,y:-1}})),x=[],_=0;_<10;_++)for(var b=0;b<10;b++)x.push({x:_,y:b});function S(e){var t=e.ships.map((function(e,t){var a=30*e.x,n=30*e.y,s="down"==e.dir?30*e.size:30,i="right"==e.dir?30*e.size:30;return r.a.createElement("div",{className:"ship",style:{left:a,top:n,height:s,width:i}})})),a=e.player.help_points,n=e.player.fail_points,s=e.player.last_point,i=[],o=e.player.wonded_ships;for(var c in o)i.push.apply(i,Object(l.a)(o[c]));var m=[];return e.player.killed_ships.forEach((function(e,t){m.push.apply(m,Object(l.a)(e))})),r.a.createElement("div",{className:"matrix"},r.a.createElement("div",{className:"axisX"},A.map((function(e,t){return r.a.createElement("div",{className:"cellX",style:{left:30*e.x,top:30*e.y}},f[t])}))),r.a.createElement("div",{className:"axisY"},E.map((function(e,t){return r.a.createElement("div",{className:"cellY",style:{left:30*e.x,top:30*e.y}},y[t])}))),r.a.createElement("div",{className:"grid"},x.map((function(t,a){return r.a.createElement("div",{className:"cell",style:{left:30*t.x,top:30*t.y},"data-x":t.x,"data-y":t.y,onClick:e.click_handler})}))),r.a.createElement("div",{className:"ships"},t.map((function(e,t){return e}))),r.a.createElement("div",{className:"help"},a.map((function(e,t){return r.a.createElement("div",{className:"help_point point",style:{left:30*e.x,top:30*e.y}})}))),r.a.createElement("div",{className:"fail"},n.map((function(e,t){return r.a.createElement("div",{className:"fail_point point",style:{left:30*e.x,top:30*e.y}},r.a.createElement("div",{className:"fail_icon"}))}))),r.a.createElement("div",{className:"wonded"},i.map((function(e,t){return r.a.createElement("div",{className:"wonded_point point",style:{left:30*e.x,top:30*e.y}},r.a.createElement("img",{src:v.a,alt:"",className:"wonded_icon"}))}))),r.a.createElement("div",{className:"killed"},m.map((function(e,t){return r.a.createElement("div",{className:"killed_point point",style:{left:30*e.x,top:30*e.y}},r.a.createElement("img",{src:v.a,alt:"",className:"killed_icon"}))}))),r.a.createElement("div",{className:"last"},"{}"!=JSON.stringify(s)?r.a.createElement("div",{className:"last_point point",style:{left:30*s.x,top:30*s.y}}):null))}function N(e){return r.a.createElement("div",{className:"set-names"},r.a.createElement("h1",null,"\u041c\u043e\u0440\u0441\u043a\u043e\u0439 \u0431\u043e\u0439"),r.a.createElement("div",{className:"set-names-body"},r.a.createElement("div",{className:"input-container"},r.a.createElement("label",null,"\u0412\u0412\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0435 \u0438\u043c\u044f"),r.a.createElement("input",{type:"text",player:"human",onChange:e.setName})),r.a.createElement("div",{className:"input-container"},r.a.createElement("label",null,"\u0412\u0412\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u043f\u0440\u043e\u0442\u0438\u0432\u043d\u0438\u043a\u0430"),r.a.createElement("input",{type:"text",player:"computer",onChange:e.setName}))),r.a.createElement("button",{onClick:e.next},"\u0414\u0430\u043b\u0435\u0435"))}function w(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function O(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?w(a,!0).forEach((function(t){Object(o.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):w(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var D={red:"#ff0040",green:"#209451",blue:"#00f"},k=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).changeMode=function(e){var t=e.target.value;a.setState({mode:t}),"random"==t&&a.setState({current:{},dragged_list:[],temp_list:[]}),a.props.regenerateShips(t)},a.playStart=function(){var e=a.state,t=e.mode,n=e.temp_list;"manually"==t&&a.props.setShipsManually(n),a.props.next()},a.transformShip=function(e,t){e.preventDefault();var n=a.state,r=n.dragged_list,s=n.temp_list,i=a.getIndexOfShip(t.num);a.oldShipDragged=r.splice(i,1)[0],a.oldShipTemp=s.splice(i,1)[0];var l=O({},t,{dir:"right"==t.dir?"down":"right"});a.props.isOverlapShips(l,s)?(r.push(a.oldShipDragged),s.push(a.oldShipTemp),a.oldShipDragged=a.oldShipTemp={}):(a.oldShipDragged=a.oldShipTemp={},r.push(l),s.push(l),console.log("newShip",l,r)),a.setState({dragged_list:r,temp_list:s})},a.moveStart=function(e,t){if(1==e.nativeEvent.which){var n=e.target,r=a.state,s=r.dragged_list,i=r.temp_list,l=a.getIndexOfShip(t.num);5e3!==l&&(a.oldShipDragged=s.splice(l,1)[0],a.oldShipTemp=i.splice(l,1)[0]),a.shiftX=e.clientX-n.getBoundingClientRect().left,a.shiftY=e.clientY-n.getBoundingClientRect().top;var o=O({},t,{x:e.pageX-a.shiftX,y:e.pageY-a.shiftY,color:D.blue,dir:t.dir||"right"});a.setState({current:o,dragged_list:s,temp_list:i}),document.addEventListener("mousemove",a.move)}},a.move=function(e){var t=a.state.current,n=a.check(e,t)?D.green:D.red,r=O({},t,{x:e.pageX-a.shiftX,y:e.pageY-a.shiftY,color:n});a.setState({current:r})},a.moveEnd=function(e,t){document.removeEventListener("mousemove",a.move);var n=a.state,r=n.dragged_list,s=n.temp_list;a.check(e,t)?(a.oldShipDragged=a.oldShipTemp={},s.push(a.newShip),r.push(a.newShip)):"{}"!=JSON.stringify(a.oldShipTemp)&&(r.push(a.oldShipDragged),s.push(a.oldShipTemp),a.oldShipDragged=a.oldShipTemp={}),a.setState({current:{},dragged_list:r,temp_list:s})},a.check=function(e,t){var n=a.state,r=(n.current,n.dragged_list,n.temp_list),s=e.target;s.hidden=!0;var i=e.pageX-a.shiftX,l=e.pageY-a.shiftY,o=document.elementFromPoint(i,l);if(s.hidden=!1,o&&"cell"==o.className){var c=O({},t,{x:Number(o.getAttribute("data-x")),y:Number(o.getAttribute("data-y")),color:D.blue});return a.newShip=c,!("right"==c.dir&&c.x+c.size-1>9)&&(!("down"==c.dir&&c.y+c.size-1>9)&&!a.props.isOverlapShips(c,r))}return!1},a.getIndexOfShip=function(e){var t=5e3;return a.state.dragged_list.some((function(a,n){return a.num==e&&(t=n,!0)})),t},a.render=function(){var e=a.state,t=e.mode,n=e.current,s=e.dragged_list;return r.a.createElement("div",{className:"set-ships"},r.a.createElement("h1",null,"\u0420\u0430\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u043a\u043e\u0440\u0430\u0431\u043b\u0435\u0439"),r.a.createElement("div",{className:"set-ships-body"},r.a.createElement("div",{className:"left-part"},r.a.createElement("div",{className:"some-container"},r.a.createElement("div",{className:"input-container"},r.a.createElement("label",{htmlFor:"radio1"},"\u0440\u0430\u0441\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u043e"),r.a.createElement("input",{type:"radio",id:"radio1",value:"random",checked:"random"==t,onChange:a.changeMode})),r.a.createElement("div",{className:"input-container"},r.a.createElement("label",{htmlFor:"radio2"},"\u0440\u0430\u0441\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0441\u0430\u043c\u043e\u043c\u0443"),r.a.createElement("input",{type:"radio",id:"radio2",value:"manually",checked:"manually"==t,onChange:a.changeMode}))),r.a.createElement(S,{ships:a.props.ships,player:a.props.player,click_handler:null}),r.a.createElement("div",{class:"ships-dragged"},s.map((function(e){return"right"==e.dir?r.a.createElement("div",{num:e.num,className:"ship-draggable",style:{width:30*e.size,height:30,left:30*e.x,top:30*e.y,borderColor:e.color},onMouseDown:function(t){return a.moveStart(t,e)},onContextMenu:function(t){return a.transformShip(t,e)}}):r.a.createElement("div",{num:e.num,className:"ship-draggable",style:{width:30,height:30*e.size,left:30*e.x,top:30*e.y,borderColor:e.color},onMouseDown:function(t){return a.moveStart(t,e)},onContextMenu:function(t){return a.transformShip(t,e)}})}))),r.a.createElement("div",{class:"ship-current"},"{}"!=JSON.stringify(n)?"right"==n.dir?r.a.createElement("div",{className:"ship-draggable",style:{width:30*n.size,height:30,left:n.x,top:n.y,borderColor:n.color},onMouseUp:function(e){return a.moveEnd(e,n)}}):r.a.createElement("div",{className:"ship-draggable",style:{width:30,height:30*n.size,left:n.x,top:n.y,borderColor:n.color},onMouseUp:function(e){return a.moveEnd(e,n)}}):null)),"manually"==t?r.a.createElement("div",{className:"right-part"},r.a.createElement("p",{className:"ship-hint"},"\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u0438 \u0442\u0430\u0449\u0438\u0442\u0435 \u043c\u044b\u0448\u043a\u043e\u0439 \u043a\u043e\u0440\u0430\u0431\u043b\u0438 \u0432 \u0438\u0433\u0440\u043e\u0432\u043e\u0435 \u043f\u043e\u043b\u0435 \u0434\u043e \u043f\u043e\u044f\u0432\u043b\u0435\u043d\u0438\u044f \u0437\u0435\u043b\u0435\u043d\u043e\u0439 \u0440\u0430\u043c\u043a\u0438."),r.a.createElement("p",{className:"ship-hint"},"\u0414\u043b\u044f \u043f\u043e\u0432\u043e\u0440\u043e\u0442\u0430 \u043a\u043e\u0440\u0430\u0431\u043b\u044f \u2014 \u043f\u043e\u0441\u043b\u0435 \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u044f \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043f\u0440\u0430\u0432\u0443\u044e \u043a\u043d\u043e\u043f\u043a\u0443 \u043c\u044b\u0448\u0438."),r.a.createElement("div",{class:"ships-psevdo-draggable"},h.map((function(e){return e.num==n.num||5e3!=a.getIndexOfShip(e.num)?r.a.createElement("div",{className:"ship-backface",style:{width:30*e.size}}):r.a.createElement("div",{num:e.num,className:"ship-psevdo",style:{width:30*e.size,height:30},onMouseDown:function(t){return a.moveStart(t,e)}})})))):null),10==s.length||a.props.ships.length?r.a.createElement("button",{onClick:a.playStart},"\u0418\u0433\u0440\u0430\u0442\u044c"):r.a.createElement("button",{className:"disable",onClick:null},"\u0418\u0433\u0440\u0430\u0442\u044c"))},a.state={mode:"random",current:{},dragged_list:[],temp_list:[]},a.shiftX=null,a.shiftY=null,a.oldShipDragged={},a.oldShipTemp={},a.newShip={},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=document.querySelector(".ships-dragged");document.querySelector(".matrix").append(e)}}]),t}(r.a.Component),j=a(13),P=a.n(j),C=a(14),B=a.n(C),M=a(15),z=a.n(M),T=a(8),I=a.n(T),R=a(16),F=a.n(R),W=a(17),X=a.n(W),Q=a(18),U=a.n(Q),Y=a(9),J=a.n(Y),V=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).set=function(e){var t=Number(e.target.getAttribute("num")),n=e.target.getAttribute("player"),r=e.target.src;"human"==n?(a.setState({selected_human:t}),a.props.setAvatar(r,n)):(a.setState({selected_computer:t}),a.props.setAvatar(r,n))},a.render=function(){var e=a.state,t=e.selected_human,n=e.selected_computer;return r.a.createElement("div",{className:"set-avatar"},r.a.createElement("h1",null,"\u041c\u043e\u0440\u0441\u043a\u043e\u0439 \u0431\u043e\u0439"),r.a.createElement("div",{className:"set-avatar-body"},r.a.createElement("div",{className:"my-avatar"},r.a.createElement("label",null,"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0430\u0432\u0430\u0442\u0430\u0440\u043a\u0443 \u0434\u043b\u044f \u0441\u0435\u0431\u044f"),r.a.createElement("div",{className:"avatar-container"},a.img_human.map((function(e,n){return r.a.createElement("img",{src:e,num:n+1,player:"human",className:t==n+1?"avatar-selected":"",onClick:a.set})})))),r.a.createElement("div",{className:"enemy-avatar"},r.a.createElement("label",null,"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0430\u0432\u0430\u0442\u0430\u0440\u043a\u0443 \u0434\u043b\u044f \u043d\u0430\u043f\u0430\u0440\u043d\u0438\u043a\u0430"),r.a.createElement("div",{className:"avatar-container"},a.img_computer.map((function(e,t){return r.a.createElement("img",{src:e,num:t+1,player:"computer",className:n==t+1?"avatar-selected":"",onClick:a.set})}))))),r.a.createElement("button",{onClick:a.props.next},"\u0414\u0430\u043b\u0435\u0435"))},a.state={selected_human:4,selected_computer:4},a.img_human=[P.a,B.a,z.a,I.a],a.img_computer=[F.a,X.a,U.a,J.a],a}return Object(d.a)(t,e),t}(r.a.Component),G=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).next=function(){var e=a.state,t=e.active,n=e.page_count;t++,a.setState({active:t}),t>n&&a.props.initGame()},a.render=function(){var e=a.state.active;return r.a.createElement("div",{className:"settings"},1==e?r.a.createElement(N,{next:a.next,setName:a.props.setName}):null,2==e?r.a.createElement(V,{next:a.next,setAvatar:a.props.setAvatar}):null,3==e?r.a.createElement(k,Object.assign({next:a.next},a.props)):null)},a.state={active:2,page_count:3},a}return Object(d.a)(t,e),t}(r.a.Component),Z=a(19),K=a.n(Z),H=a(20),L=a.n(H),q=a(21),$=a.n(q),ee=a(22),te=a.n(ee);function ae(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function ne(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ae(a,!0).forEach((function(t){Object(o.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ae(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var re={computer:"\u041c\u043e\u0439 \u0445\u043e\u0434, \u043f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435...",human:"\u0416\u0434\u0443 \u0432\u0430\u0448\u0435\u0433\u043e \u0445\u043e\u0434\u0430...",end:"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u043e\u0441\u0442\u0430\u0432\u0448\u0438\u0435\u0441\u044f \u043a\u043e\u0440\u0430\u0431\u043b\u0438"},se=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).updateState=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"human";"human"==t?a.setState({human:ne({},a.state.human,{},e)}):a.setState({computer:ne({},a.state.computer,{},e)})},a.changeSound=function(){a.state.game_sound?(a.setState({game_sound:!1}),a.soundFailed.volume=0,a.soundWonded.volume=0,a.soundKilled.volume=0):(a.setState({game_sound:!0}),a.soundFailed.volume=1,a.soundWonded.volume=1,a.soundKilled.volume=1)},a.randAB=function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e},a.setName=function(e){var t=e.target.getAttribute("player"),n=e.target.value;a.updateState({name:n},t)},a.setAvatar=function(e,t){console.log(e,t),a.updateState({avatar:e},t)},a.regenerateShips=function(e){"random"==e?a.generateShips():a.updateState({ships:[]},"human")},a.setShipsManually=function(e){a.updateState({ships:e},"human")},a.initGame=function(){a.generateShips("computer"),a.randAB(0,1)?a.setState({game_start:!0,game_active:"human",game_message:re.human}):(a.setState({game_start:!0,game_active:"computer",game_message:re.computer}),setTimeout((function(e){return a.computerPlaying()}),2e3))},a.generateShips=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"human",n=[];h.forEach((function(t){do{e=a.getCoodinatesForShip(t)}while(a.isOverlapShips(e,n));n.push(e)})),a.updateState({ships:n},t)},a.getCoodinatesForShip=function(e){var t,n,r=a.randAB(0,1),s=e.size;return r?(t=a.randAB(0,9),n=a.randAB(0,10-s)):(t=a.randAB(0,10-s),n=a.randAB(0,9)),ne({},e,{x:t,y:n,dir:r?"down":"right"})},a.isOverlapShips=function(e,t){if(!t.length)return!1;var n=e.x,r=e.y,s=e.size,i=e.dir;return t.some((function(e){return!!a.isPointInBorders(n,r,e)||(!("down"!=i||!a.isPointInBorders(n,r+s-1,e))||!("right"!=i||!a.isPointInBorders(n+s-1,r,e)))}))},a.isPointInBorders=function(e,t,a){var n=a.x,r=a.y,s=a.size,i=a.dir;return e>=n-1&&e<=("down"==i?n+1:n+s)&&t>=r-1&&t<=("down"==i?r+s:r+1)},a.humanPlaying=function(e){if("human"==a.state.game_active){var t=Number(e.target.getAttribute("data-x")),n=Number(e.target.getAttribute("data-y"));a.playing("human",t,n)}else a.setState()},a.computerPlaying=function(){var e,t,n=a.state.computer,r=n.trash,s=n.last_success;do{if(s.length)if(1==s.length){e=s[0].x,t=s[0].y;var i=a.randAB(1,4);1==i&&t--,2==i&&t++,3==i&&e--,4==i&&e++}else if(s.length>1)if(s[0].x==s[1].x){e=s[0].x;var l=a.randAB(0,s.length-1),o=a.randAB(0,1);o=o?1:-1,t=s[l].y+o}else{t=s[0].y;var c=a.randAB(0,s.length-1),m=a.randAB(0,1);m=m?1:-1,e=s[c].x+m}else console.log("\u041d\u0415\u041f\u0420\u0415\u0414\u0412\u0418\u0414\u0415\u041d\u041d\u0410\u042f \u0421\u0418\u0422\u0423\u0410\u0426\u0418\u042f!!!!!",s);else e=a.randAB(0,9),t=a.randAB(0,9)}while(!a.checkPoint(e,t));console.log("\u043e\u0447\u0435\u0440\u0435\u0434\u043d\u0430\u044f \u0442\u043e\u0447\u043a\u0430, \u043f\u0440\u043e\u0448\u0435\u0434\u0448\u0430\u044f \u043e\u0442\u0431\u043e\u0440",e,t),r.push({x:e,y:t}),a.updateState({trash:r},"computer"),a.playing("computer",e,t)},a.checkPoint=function(e,t){var n=a.state.computer,r=n.trash,s=n.help_points;return r.push.apply(r,Object(l.a)(s)),a.updateState({trash:r},"computer"),console.log("\u043f\u0440\u043e\u0432\u0435\u0440\u044f\u043b\u0430\u0441\u044c \u0442\u043e\u0447\u043a\u0430",e,t),!(e<0||e>9||t<0||t>9)&&!r.some((function(a){return e==a.x&&t==a.y}))},a.playing=function(e,t,n){var r="human"==e?"computer":"human",s=a.state[r].ships,i=a.state[e],o=i.fail_points,c=i.help_points,m=i.killed_ships,u=i.score,p=i.wonded_ships,d=i.last_success,h={x:t,y:n};s.some((function(s){if(a.isPointInShips(t,n,s)){p["key"+s.num]?p["key"+s.num].push({x:t,y:n}):p["key"+s.num]=[{x:t,y:n}];var i=p["key"+s.num];return i.length==s.size?(u++,m.push(i),i.forEach((function(e){var t,n=a.getHelpPoints(s);(t=c).push.apply(t,Object(l.a)(n)),c=c.filter((function(e){return e.x>=0&&e.x<=9&&e.y>=0&&e.y<=9}))})),delete p["key"+s],a.soundKilled.play(),a.updateState({wonded_ships:p,killed_ships:m,help_points:c,last_point:h,score:u},e),10==u?(a.setState({game_active:"none",game_message:re.end}),setTimeout((function(t){return a.setState({game_winner:e})}),5e3)):"human"==r&&(a.updateState({last_success:[]},e),setTimeout((function(e){return a.computerPlaying()}),2e3))):(c.push({x:t-1,y:n-1},{x:t+1,y:n+1},{x:t-1,y:n+1},{x:t+1,y:n-1}),c=c.filter((function(e){return e.x>=0&&e.x<=9&&e.y>=0&&e.y<=9})),a.soundWonded.play(),a.updateState({wonded_ships:p,help_points:c,last_point:h},e),"human"==r&&(d.push(h),a.updateState({last_success:d},e),setTimeout((function(e){return a.computerPlaying()}),2e3))),!0}return!1}))||(a.soundFailed.play(),o.push({x:t,y:n}),a.updateState({fail_points:o,last_point:h},e),a.setState({game_message:re[r],game_active:r}),"computer"==r&&setTimeout((function(e){return a.computerPlaying()}),2e3))},a.isPointInShips=function(e,t,a){var n,r,s,i,l=a.x,o=a.y,c=a.size;return"down"==a.dir?(n=l,r=l,s=o,i=o+c-1):(n=l,r=l+c-1,s=o,i=o),e>=n&&e<=r&&t>=s&&t<=i},a.getHelpPoints=function(e){var t=e.x,a=e.y,n=e.dir,r=e.size,s=[],i=[];if("right"==n)for(var l=0;l<r;l++)s.push({x:t,y:a}),t++;else for(var o=0;o<r;o++)s.push({x:t,y:a}),a++;s.forEach((function(e){var t=e.x,a=e.y;i.push({x:t-1,y:a-1},{x:t+1,y:a+1},{x:t,y:a-1},{x:t,y:a+1},{x:t-1,y:a},{x:t+1,y:a},{x:t-1,y:a+1},{x:t+1,y:a-1})}));var c=new Set(i.map((function(e){return JSON.stringify(e)})));return Array.from(c).map((function(e){return JSON.parse(e)}))},a.state={human:{name:"\u0412\u044b",avatar:I.a,ships:[],fail_points:[],help_points:[],wonded_ships:{},killed_ships:[],last_point:{},score:0},computer:{name:"\u041d\u0430\u043f\u0430\u0440\u043d\u0438\u043a",avatar:J.a,ships:[],fail_points:[],help_points:[],wonded_ships:{},killed_ships:[],last_point:{},score:0,trash:[],last_success:[]},game_start:!1,game_active:"",game_message:"",game_winner:"",game_sound:!0},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.soundFailed=new Audio(L.a),this.soundWonded=new Audio($.a),this.soundKilled=new Audio(te.a),this.generateShips()}},{key:"render",value:function(){var e=this.state,t=this.state.human,a=this.state.computer;return r.a.createElement("div",null,e.game_start?null:r.a.createElement("div",{className:"modal modal-setting"},r.a.createElement(G,Object.assign({},this,{ships:e.human.ships,player:t}))),e.game_winner?r.a.createElement("div",{className:"modal"},r.a.createElement("div",{className:"game_winner"},r.a.createElement("div",null,r.a.createElement("img",{src:K.a})),"human"==e.game_winner?"\u0412\u044b \u043f\u043e\u0431\u0435\u0434\u0438\u043b\u0438! \u0423\u0440\u0430! :)":"\u0412\u044b \u043f\u0440\u043e\u0438\u0433\u0440\u0430\u043b\u0438 :(")):null,r.a.createElement("div",{className:"game-container"},r.a.createElement("header",{className:"header"},r.a.createElement("div",null,"\u041c\u043e\u0440\u0441\u043a\u043e\u0439 \u0431\u043e\u0439"),r.a.createElement("div",{className:"sound-bar",onClick:this.changeSound},"\u0437\u0432\u0443\u043a: "+(e.game_sound?"\u0435\u0441\u0442\u044c":"\u043d\u0435\u0442")),r.a.createElement("div",{class:"score-bar"},"\u0441\u0447\u0435\u0442: "+e.computer.score+" : "+e.human.score),r.a.createElement("input",{type:"text",className:"message-bar",value:e.game_message,readOnly:!0})),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"left-content"},"human"==e.game_active?r.a.createElement("div",{className:"left-mask"}):null,r.a.createElement("div",{className:"avatar"},r.a.createElement("a",{href:"https://pngtree.com/so/avatar",target:"_blank"},r.a.createElement("img",{src:t.avatar})),r.a.createElement("div",{className:"avatar-text"},t.name+" (\u0432\u0430\u0448\u0435 \u043f\u043e\u043b\u0435)")),r.a.createElement(S,{ships:e.human.ships,player:a,click_handler:null})),r.a.createElement("div",{className:"right-content"},"computer"==e.game_active?r.a.createElement("div",{className:"right-mask"}):null,r.a.createElement("div",{className:"avatar"},r.a.createElement("a",{href:"https://pngtree.com/so/avatar",target:"_blank"},r.a.createElement("img",{src:a.avatar})),r.a.createElement("div",{className:"avatar-text"},a.name+" (\u043f\u043e\u043b\u0435 \u043d\u0430\u043f\u0430\u0440\u043d\u0438\u043a\u0430)"," ")),r.a.createElement(S,{ships:"none"==e.game_active?a.ships:[],player:t,click_handler:this.humanPlaying})))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(se,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[23,1,2]]]);
//# sourceMappingURL=main.619c1e89.chunk.js.map