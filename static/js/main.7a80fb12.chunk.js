(this.webpackJsonptabs=this.webpackJsonptabs||[]).push([[0],{12:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(5),r=c.n(a),i=(c(12),c(4)),j=c.n(i),l=c(6),b=c(2),o=c(7),d=c(0);var u=function(){var e=Object(s.useState)(!0),t=Object(b.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)([]),r=Object(b.a)(a,2),i=r[0],u=r[1],h=Object(s.useState)(0),O=Object(b.a)(h,2),x=O[0],m=O[1],p=function(){var e=Object(l.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(!0),e.prev=1,e.next=4,fetch("https://course-api.com/react-tabs-project");case 4:return t=e.sent,e.next=7,t.json();case 7:c=e.sent,u(c),n(!1),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),n(!1),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}();if(Object(s.useEffect)((function(){console.log("useEffect runs"),p()}),[]),c)return Object(d.jsx)("main",{children:Object(d.jsx)("section",{children:Object(d.jsx)("h2",{children:"Loading..."})})});var f=i[x],v=(f.id,f.order,f.title),N=f.dates,k=f.duties,y=f.company;return Object(d.jsx)("main",{children:Object(d.jsxs)("section",{children:[Object(d.jsxs)("div",{className:"title",children:[Object(d.jsx)("h2",{children:"Experience"}),Object(d.jsx)("div",{className:"underline"})]}),Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("div",{className:"tabsContainer",children:i.map((function(e,t){return Object(d.jsx)("button",{className:"tabsNameButton",children:Object(d.jsx)("h3",{className:"tabsName",onClick:function(){m(t)},children:e.company})})}))}),Object(d.jsxs)("div",{className:"resume",children:[Object(d.jsx)("h3",{children:v}),Object(d.jsx)("h4",{className:"name",children:y}),Object(d.jsx)("h4",{className:"date",children:N}),Object(d.jsx)("div",{className:"dutiesContainer",children:k.map((function(e,t){return Object(d.jsxs)("div",{className:"dutiesWrapper",children:[Object(d.jsx)(o.a,{size:48,style:{fill:"#2caeba"}}),Object(d.jsx)("p",{className:"duties",children:e})]},t)}))})]})]}),Object(d.jsx)("div",{className:"btnWrapper",children:Object(d.jsx)("button",{className:"infoBtn",children:"More Info"})})]})})};r.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(u,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.7a80fb12.chunk.js.map