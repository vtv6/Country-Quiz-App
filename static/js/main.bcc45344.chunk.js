(this["webpackJsonpcountry-quiz-app"]=this["webpackJsonpcountry-quiz-app"]||[]).push([[0],{19:function(e,t,n){e.exports=n.p+"static/media/1.eae25da4.svg"},20:function(e,t,n){e.exports=n.p+"static/media/win.82d9605a.svg"},25:function(e,t,n){e.exports=n(44)},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(10),u=n.n(c),l=n(3),s=(n(35),n(19)),i=n.n(s),o=n(20),m=n.n(o);n(36);function f(e){return"END"===e.currentState?r.a.createElement("img",{src:m.a,alt:"",className:"end-img"}):r.a.createElement("img",{src:i.a,alt:"",className:"play-img"})}var d=n(23),E=n(2),p=Object(E.c)({name:"result",initialState:0,reducers:{getPoint:function(e){return e+1},resetResult:function(){return 0}}}),b=p.actions,N=p.reducer,S=b.getPoint,h=b.resetResult,g=Object(E.c)({name:"answerState",initialState:"NONE",reducers:{trueAnswer:function(){return"TRUE"},noAnswer:function(){return"NONE"},falseAnswer:function(){return"FALSE"}}}),v=g.actions,w=g.reducer,A=v.trueAnswer,O=v.noAnswer,j=v.falseAnswer,y=(n(37),n(57)),R=n(58),T={getPoint:S,trueAnswer:A,falseAnswer:j},z=Object(l.b)((function(e){return{correctAns:e.quiz.correctAnswer,answerState:e.answerState}}),T)((function(e){var t=e.ans,n=e.children,c=e.correctAns,u=e.getPoint,l=e.answerState,s=e.trueAnswer,i=e.falseAnswer,o=Object(a.useState)(!1),m=Object(d.a)(o,2),f=m[0],E=m[1];Object(a.useEffect)((function(){"NONE"===l&&E(!1)}),[l]);return r.a.createElement("button",{className:"choice"+("NONE"!==l&&c===n?" true":"")+(f?" tick":""),onClick:function(){c===n?(u(),setTimeout(s,1e3)):setTimeout(i,1e3),E(!0)},disabled:"NONE"!==l},r.a.createElement("span",null,t),r.a.createElement("span",null,n),"NONE"===l?null:c===n?r.a.createElement(y.a,null):f?r.a.createElement(R.a,{style:{transform:"rotate(45deg)"}}):void 0)})),q=(n(38),Object(l.b)((function(e){return{quiz:e.quiz}}),{})((function(e){var t=e.quiz,n=["A","B","C","D"];return"CAPITAL"===t.type?r.a.createElement("div",{className:"game"},r.a.createElement("h3",{className:"question"},t.capital," is the capital of"),t.choices.map((function(e,t){return r.a.createElement(z,{key:t,ans:n[t]},e)}))):r.a.createElement("div",{className:"game"},r.a.createElement("img",{src:t.flagURL,alt:"",className:"flag"}),r.a.createElement("h3",{className:"question"},"Which country does this flag belong to?"),t.choices.map((function(e,t){return r.a.createElement(z,{key:t,ans:n[t]},e)})))}))),C=(n(39),Object(l.b)((function(e){return{quiz:e.quiz,currentState:e.currentState,result:e.result}}),{})((function(e){var t=e.currentState,n=(e.quiz,e.result);return"START"===t?null:"PLAY"===t?r.a.createElement(q,null):"END"===t?r.a.createElement("div",{className:"result"},r.a.createElement("h3",{className:"title"},"Results"),r.a.createElement("p",{className:"content"},"You got",r.a.createElement("span",null," ",n," "),"correct answers")):void 0}))),k=Object(E.c)({name:"currentState",initialState:"START",reducers:{play:function(){return"PLAY"},end:function(){return"END"}}}),D=k.actions,L=k.reducer,P=D.play,x=D.end,U=n(22),I=n(12),F=function(e,t){return Math.floor(Math.random()*(t-e)+e)},Q=function(e,t){var n=Object(I.a)({},t,!0),a=[{},{},{}].map((function(){for(var t=F(0,e.length);n[e[t]];)t=F(0,e.length);return n[e[t].name]=!0,e[t].name}));return[].concat(Object(U.a)(a),[t]).sort((function(){return Math.random()-.5}))},Y=Object(E.c)({name:"quiz",initialState:{},reducers:{getNewQuiz:function(e,t){var n=F(0,t.payload.length),a={correctAnswer:t.payload[n].name,choices:Q(t.payload,t.payload[n].name)};return 0===F(0,2)?(a.type="CAPITAL",a.capital=t.payload[n].capital):(a.type="FLAG",a.flagURL=t.payload[n].flag),a}}}),G=Y.actions,M=Y.reducer,B=G.getNewQuiz,J=(n(40),{play:P,end:x,getNewQuiz:B,noAnswer:O,resetResult:h}),V=Object(l.b)((function(e){return{data:e.data,currentState:e.currentState,answerState:e.answerState}}),J)((function(e){var t=e.data,n=e.currentState,a=e.answerState,c=e.play,u=e.end,l=e.getNewQuiz,s=e.noAnswer,i=e.resetResult;return"START"===n?r.a.createElement("div",{className:"nav-btn"}," ",r.a.createElement("button",{className:"start-btn",onClick:function(){c(),l(t)}},"START")):"END"===n?r.a.createElement("div",{className:"nav-btn"},r.a.createElement("button",{className:"again-btn",onClick:function(){c(),i(),s(),l(t)}},"AGAIN")):"NONE"===a?null:r.a.createElement("div",{className:"nav-btn"},r.a.createElement("button",{className:"next-btn",onClick:function(){"TRUE"===a?(l(t),s()):u()}},"NEXT"))})),W=Object(l.b)((function(e){return{currentState:e.currentState}}),{})((function(e){var t=e.currentState;return r.a.createElement("div",{className:"game-view"},r.a.createElement("h2",null,"COUNTRY QUIZ"),r.a.createElement(f,{currentState:t}),r.a.createElement(C,null),r.a.createElement(V,null))}));n(41);function X(){return r.a.createElement("footer",null,r.a.createElement("p",null,r.a.createElement("a",{href:"https://github.com/Shoji5"},"Tu\u1ea5n V\u0169")," @"," ",r.a.createElement("a",{href:"https://devchallenges.io/"},"DevChallenges.io")))}var Z=n(16),H=n.n(Z),K=n(21),$=Object(E.c)({name:"loadStatus",initialState:"LOADING",reducers:{loadSuccessful:function(){return"SUCCESS"},loadFailed:function(){return"ERROR"}}}),_=$.actions,ee=$.reducer,te=_.loadSuccessful,ne=_.loadFailed,ae=Object(E.b)("data/loadData",function(){var e=Object(K.a)(H.a.mark((function e(t,n){var a,r;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.dispatch,e.next=3,fetch("https://restcountries.eu/rest/v2/all").then((function(e){return a(te()),e.json()})).catch((function(){return a(ne())}));case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),re=Object(E.c)({name:"data",initialState:[],extraReducers:Object(I.a)({},ae.fulfilled,(function(e,t){return t.payload}))}).reducer,ce={loadData:ae},ue=Object(l.b)(null,ce)((function(e){var t=e.loadData;return Object(a.useEffect)((function(){t()})),r.a.createElement(r.a.Fragment,null,r.a.createElement(W,null),r.a.createElement(X,null))})),le=Object(E.a)({reducer:{currentState:L,result:N,data:re,loadStatus:ee,quiz:M,answerState:w}});n(43);u.a.render(r.a.createElement(l.a,{store:le},r.a.createElement(ue,null)),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.bcc45344.chunk.js.map