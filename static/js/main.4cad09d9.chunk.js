(this.webpackJsonpmaze=this.webpackJsonpmaze||[]).push([[0],{28:function(e,t,a){},29:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var r=a(0),s=a.n(r),n=a(6),c=a.n(n),u=(a(28),a(29),a(5)),l=a(2),i=a(7),o=a(13),b="MAZE_VALUE",d={startSquare:null,steps:[],currentSquare:null,startIcon:"Z",resultIcon:"\ud83d\udca3",resultText:"",gamePoints:0},j=function(e,t){return{type:b,payload:{field:e,value:t}}},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(o.a)(Object(o.a)({},e),{},Object(i.a)({},t.payload.field,t.payload.value));default:return e}},O=a(16),m=Object(l.c)({MazeReducer:h}),f=Object(l.e)(m,Object(l.a)(O.a));window.store=f;var p,x=f,v=a(17),g=a(18),S=a(22),q=a(20),M=a(3),N=a(23),k=a(1),z=function(e){var t=e.value,a=e.handleRegionClick,r=(e.MazeValue,e.startSquare),s=e.startIcon,n=e.userClick,c=e.resultIcon,u=e.currentSquare,l=e.disabledSquare;Object(N.a)(e,["value","handleRegionClick","MazeValue","startSquare","startIcon","userClick","resultIcon","currentSquare","disabledSquare"]);return t===r?Object(k.jsx)("button",{className:"square",disabled:l,onClick:function(){return a(t)},children:s},t):t===u?Object(k.jsx)("button",{className:"square",disabled:l,onClick:function(){return a(t)},children:n?"\ud83d\udca5":c},t):Object(k.jsx)("button",{className:"square",disabled:l,onClick:function(){return a(t)},children:"\ud83d\udca3"},t)},w=function(e,t){var a=e.handlechange,r=e.MazeValue,s=e.userClick,n=e.setuserClick,c=e.disabledSquare,u=e.setdisabledSquare,l=e.setstartGameText,i=function(e){return Object(k.jsx)(z,{currentSquare:r.currentSquare,value:e,handleRegionClick:o,startSquare:r.startSquare,startIcon:r.startIcon,resultIcon:r.resultIcon,userClick:s,disabledSquare:c})},o=function(e){u(!0),r.currentSquare===e?(e===r.startSquare&&a("startIcon","\ud83e\udd16"),a("resultIcon","\ud83e\udd16"),n(!1),a("resultText","\u041f\u043e\u0437\u0434\u0440\u0430\u0432\u043b\u044f\u044e \u0441 \u043f\u043e\u0431\u0435\u0434\u043e\u0439"),l("\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c"),a("gamePoints",r.gamePoints+1)):null===r.currentSquare?a("resultText","\u0412\u044b \u043d\u0435 \u043d\u0430\u0447\u0430\u043b\u0438 \u0438\u0433\u0440\u0443 :)"):(e===r.startSquare&&a("startIcon","\ud83d\udca5"),a("resultIcon","\ud83d\udca5"),n(!0),a("resultText","\u041a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e \u0432\u044b \u043f\u0440\u043e\u0438\u0433\u0440\u044b\u043b\u0438, \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u0431\u043b\u043e\u043a \u043d\u0430 ".concat(r.currentSquare+1," \u044f\u0447\u0435\u0439\u043a\u0435")),l("\u041d\u0430\u0447\u0430\u0442\u044c \u0441\u043d\u0430\u0447\u0430\u043b\u0430"),a("gamePoints",0)),setTimeout((function(){a("currentSquare",null)}),1e4)};return Object(k.jsxs)("div",{children:[Object(k.jsxs)("div",{className:"board-row",children:[i(0),i(1),i(2)]}),Object(k.jsxs)("div",{className:"board-row",children:[i(3),i(4),i(5)]}),Object(k.jsxs)("div",{className:"board-row",children:[i(6),i(7),i(8)]})]})},C=a(21),I=a(14),V=a.n(I),T=a(19),y=[[2,3],[0,2,3],[0,3],[1,2,3],[0,1,2,3],[0,1,3],[1,2],[0,1,2],[0,1]],R=function(e){var t=e.MazeValue,a=e.handlechange,s=function(e){return Math.floor(Math.random()*y[e].length)},n=function(){var e=Object(T.a)(V.a.mark((function e(t){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=t,e.next=0===e.t0?3:1===e.t0?5:2===e.t0?7:3===e.t0?9:11;break;case 3:return p-=1,e.abrupt("break",12);case 5:return p-=3,e.abrupt("break",12);case 7:return p+=1,e.abrupt("break",12);case 9:return p+=3,e.abrupt("break",12);case 11:return e.abrupt("break",12);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){if("number"===typeof t.startSquare){a("steps",[]);var e=s(t.startSquare),r=y[t.startSquare][e];p=t.startSquare,a("steps",[r]),n(r)}}),[t.startSquare]),Object(r.useEffect)((function(){t.steps.length<10&&t.steps.length>0&&setTimeout((function(){var e=s(p),r=y[p][e];a("steps",[].concat(Object(C.a)(t.steps),[r])),n(r),a("currentSquare",p)}),1e3)}),[t.steps]);var c=function(e){switch(e){case 0:return Object(k.jsx)("span",{className:"arrow",children:" \u2190 "});case 1:return Object(k.jsx)("span",{className:"arrow",children:" \u2191 "});case 2:return Object(k.jsx)("span",{className:"arrow",children:" \u2192 "});case 3:return Object(k.jsx)("span",{className:"arrow",children:" \u2193 "})}};return Object(k.jsxs)("div",{children:[Object(k.jsx)("div",{className:"board-row",children:t.steps.map((function(e,t){if(t<5)return Object(k.jsx)("div",{className:"square-arrow",children:c(e)},t)}))}),Object(k.jsx)("div",{className:"board-row",children:t.steps.map((function(e,t){if(t>=5)return Object(k.jsx)("div",{className:"square-arrow",children:c(e)},t)}))})]})},P=function(e,t){var a=e.getMazeValue,s=e.MazeValue,n=Object(r.useState)(!1),c=Object(M.a)(n,2),u=c[0],l=c[1],i=Object(r.useState)("\u041d\u0430\u0447\u0430\u0442\u044c \u0438\u0433\u0440\u0443"),o=Object(M.a)(i,2),b=o[0],d=o[1],j=function(e,t){a(e,t)},h=Object(r.useState)([0,1,2,3,4,5,6,7,8]),O=Object(M.a)(h,2),m=O[0],f=(O[1],Object(r.useState)(!1)),p=Object(M.a)(f,2),x=p[0],v=p[1],g=Object(r.useState)(!1),S=Object(M.a)(g,2),q=S[0],N=S[1];return Object(k.jsxs)("div",{className:"game-container",children:[Object(k.jsx)("h1",{children:"\u041f\u0440\u0438\u0432\u0435\u0442, \u0434\u0440\u0443\u0433! "}),Object(k.jsx)("h3",{className:"game-text",children:" \u041f\u043e\u043c\u043e\u0433\u0438 \u043c\u043d\u0435 \u043d\u0430\u0439\u0442\u0438 \u043c\u043e\u0435\u0433\u043e \u0440\u043e\u0431\u043e\u0442\u0430! \u0422\u043e\u043b\u044c\u043a\u043e \u043e\u0441\u0442\u043e\u0440\u043e\u0436\u043d\u043e, \u0435\u0441\u043b\u0438 \u0442\u044b \u043e\u0448\u0438\u0431\u0451\u0448\u044c\u0441\u044f, \u0431\u043e\u043c\u0431\u0430 \u043c\u043e\u0436\u0435\u0442 \u0432\u0437\u043e\u0440\u0432\u0430\u0442\u044c\u0441\u044f."}),Object(k.jsx)("span",{className:"game-rules",children:"\u041f\u0440\u0430\u0432\u0438\u043b\u0430 \u0438\u0433\u0440\u044b: \u0418\u043d\u043e\u043f\u043b\u0430\u043d\u0435\u0442\u044f\u043d\u0438\u043d - \u043d\u0430\u0447\u0430\u043b\u044c\u043d\u0430\u044f \u0442\u043e\u0447\u043a\u0430. \u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043e\u0442 \u043d\u0435\u0433\u043e \u043f\u0440\u043e\u043b\u043e\u0436\u0438\u0442\u044c \u043f\u0443\u0442\u044c \u0432 \u0443\u043c\u0435 \u043f\u043e \u0441\u0442\u0440\u0435\u043b\u043a\u0430\u043c \u0438 \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u043c\u0435\u0441\u0442\u043e, \u043a\u0443\u0434\u0430 \u043e\u043d \u043f\u0440\u0438\u0437\u0435\u043c\u043b\u0438\u0442\u0441\u044f. \u0415\u0441\u043b\u0438 \u0431\u043e\u043c\u0431\u0430 \u0432\u0437\u043e\u0440\u0432\u0430\u043b\u0430\u0441\u044c, \u0442\u044b \u0442\u0435\u0440\u044f\u0435\u0448\u044c \u0432\u0441\u0435 \u043e\u0447\u043a\u0438, \u0430 \u0435\u0441\u043b\u0438 \u043d\u0435\u0442, \u0442\u043e \u043f\u0440\u0438\u0431\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f 1 \u043e\u0447\u043a\u043e."}),Object(k.jsxs)("h1",{children:["\u0412\u0430\u0448\u0438 \u043e\u0447\u043a\u0438 ",s.gamePoints]}),Object(k.jsx)("div",{className:"game-start-btn-container",children:Object(k.jsxs)("button",{className:"game-start-btn",disabled:q,onClick:function(){return function(){l(!1),N(!0),v(!0),setTimeout((function(){N(!1),v(!1)}),11e3),j("steps",[]);var e=Math.floor(Math.random()*Math.floor(9));j("startSquare",e),j("resultIcon","\ud83d\udca3"),j("startIcon","\ud83d\udc7e"),j("resultText","\u041d\u0430\u0439\u0434\u0438\u0442\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u0443\u044e \u044f\u0447\u0435\u0439\u043a\u0443")}()},children:[" ",b]})}),Object(k.jsx)("div",{className:"game-container-text",children:Object(k.jsxs)("span",{className:"game-text",children:[" ",s.resultText]})}),Object(k.jsxs)("div",{className:"game",children:[Object(k.jsx)("div",{className:"game-board",children:Object(k.jsx)(w,{squares:m,MazeValue:s,handlechange:j,userClick:u,setuserClick:l,disabledSquare:x,setdisabledSquare:v,setstartGameText:d})}),Object(k.jsx)("div",{className:"game-board-steps",children:Object(k.jsx)(R,{MazeValue:s,handlechange:j})})]})]})},E=Object(r.memo)(P),F=function(e){Object(S.a)(a,e);var t=Object(q.a)(a);function a(){return Object(v.a)(this,a),t.apply(this,arguments)}return Object(g.a)(a,[{key:"render",value:function(){return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(E,{MazeValue:this.props.MazeValue,getMazeValue:this.props.getMazeValue,MazeReducer:this.props.MazeReducer})})}}]),a}(s.a.Component),A=Object(l.d)(Object(u.b)((function(e){return{MazeValue:e.MazeReducer}}),{getMazeValue:j,MazeReducer:h}))(F);var L=Object(l.d)(Object(u.b)((function(e){return{params:e}}),{getMazeValue:j}))((function(){return Object(k.jsx)("div",{className:"App",children:Object(k.jsx)(A,{})})})),B=function(e){return Object(k.jsx)(u.a,{store:x,children:Object(k.jsx)(L,{})})},G=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,39)).then((function(t){var a=t.getCLS,r=t.getFID,s=t.getFCP,n=t.getLCP,c=t.getTTFB;a(e),r(e),s(e),n(e),c(e)}))};c.a.render(Object(k.jsx)(s.a.StrictMode,{children:Object(k.jsx)(B,{})}),document.getElementById("root")),G()}},[[38,1,2]]]);
//# sourceMappingURL=main.4cad09d9.chunk.js.map