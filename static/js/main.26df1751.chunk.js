(this.webpackJsonpstopwatch=this.webpackJsonpstopwatch||[]).push([[0],{10:function(e,t,a){},11:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(4),r=a.n(l),o=(a(10),a(2)),i=a(1),s=function(e){var t=e.title,a=e.click;return c.a.createElement("button",{className:"waves-effect waves-light btn",onClick:function(){return a()}},t)},u=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(!1),u=Object(i.a)(r,2),m=u[0],f=u[1],E=Object(n.useState)("0.00"),v=Object(i.a)(E,2),p=v[0],h=v[1],b=Object(n.useState)([]),d=Object(i.a)(b,2),w=d[0],j=d[1],O=Object(n.useState)(0),k=Object(i.a)(O,2),N=k[0],g=k[1],S=null;function _(e){var t=Math.floor(e/6e4%60),a=(e%6e4/1e3).toFixed(2);return"".concat(t<10?"0"+t:t,".").concat(a<10?"0"+a:a)}return Object(n.useEffect)((function(){if(m){var e=Date.now()-p;S=setInterval((function(){var t=Date.now()-e;h(t)}))}else m||clearInterval(S);return function(){return clearInterval(S)}}),[m]),c.a.createElement("div",{className:"clock"},c.a.createElement("div",{className:"time"},c.a.createElement("p",{className:"time__total"},_(p)),c.a.createElement("p",{className:"time__lap"},_(p-N))),c.a.createElement("div",{className:"row"},c.a.createElement(s,{title:m?"Pause":"Start",click:function(){f(!m)}}),c.a.createElement(s,{title:"Reset",click:function(){h("0.00"),g(0),j([]),f(!1),l([])}}),c.a.createElement(s,{title:"Split",click:function(){if(m){var e=_(p-N),t=Object(o.a)(w);t.unshift(e),j(t),g(p);var n=_(p),c=Object(o.a)(a);c.unshift(n),l(c)}}})),c.a.createElement("section",null,c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card__content"},a.map((function(e,t){return c.a.createElement("article",{className:"card__text",key:e},c.a.createElement("p",null,"Lap:",c.a.createElement("span",null," ",a.length-t<10?"0"+(a.length-t):a.length-t," ")),c.a.createElement("p",null,"Time:",c.a.createElement("span",null," ",w[t]," ")),c.a.createElement("p",null,"Total:",c.a.createElement("span",null," ",e," ")))}))))))};var m=function(){return c.a.createElement("div",{className:"container"},c.a.createElement("h1",null,"Stopwatch"),c.a.createElement(u,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},5:function(e,t,a){e.exports=a(11)}},[[5,1,2]]]);
//# sourceMappingURL=main.26df1751.chunk.js.map